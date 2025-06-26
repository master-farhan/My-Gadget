import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncUpdateUser } from "../store/actions/userActions";
import axios from "../api/axiosCofig";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";

const Products = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.userReducer.users);

  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showSearchHints, setShowSearchHints] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);
  const [isEndReached, setIsEndReached] = useState(false);

  const inputRef = useRef();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/products");
        setAllProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm.trim());
      setShowSearchHints(searchTerm.trim().length > 0);
    }, 400);
    return () => clearTimeout(timeout);
  }, [searchTerm]);

  useEffect(() => {
    const filtered = allProducts.filter((product) => {
      const matchSearch = product.title
        .toLowerCase()
        .includes(debouncedSearchTerm.toLowerCase());
      const matchCategory = selectedCategory
        ? product.category === selectedCategory
        : true;
      return matchSearch && matchCategory;
    });

    setFilteredProducts(filtered.slice(0, visibleCount));
    setIsEndReached(filtered.length <= visibleCount);
  }, [debouncedSearchTerm, selectedCategory, allProducts, visibleCount]);

  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 500;
      if (nearBottom && !isEndReached) {
        setVisibleCount((prev) => prev + 8);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isEndReached]);

  const categories = [...new Set(allProducts.map((p) => p.category))];

  const searchHints = allProducts
    .filter((p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .slice(0, 5);

  const handleKeyDown = (e) => {
    if (e.key === "Tab" && searchHints[0]) {
      e.preventDefault();
      setSearchTerm(searchHints[0].title);
      setShowSearchHints(false);
    }
  };

  const AddToCartHandler = (product) => {
    if (!currentUser || !Array.isArray(currentUser.cart)) {
      toast.error("User cart not found or not logged in");
      return;
    }

    const copyUser = {
      ...currentUser,
      cart: currentUser.cart.map((item) => ({
        product: { ...item.product },
        quantity: item.quantity,
      })),
    };

    const index = copyUser.cart.findIndex((c) => c?.product?.id === product.id);

    if (index === -1) {
      copyUser.cart.push({ product, quantity: 1 });
      toast.success("New product added to cart");
    } else {
      copyUser.cart[index].quantity += 1;
      toast.success("Product quantity updated");
    }

    dispatch(asyncUpdateUser(copyUser.id, copyUser));
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisibleCount(8);
  };

  const ProductGrid = ({ products }) => {
    if (!products || products.length === 0) {
      return (
        <p className="text-center w-full py-10 text-gray-500">
          No products available.
        </p>
      );
    }

    return (
      <div className="p-5 md:px-10 lg:px-[5%] lg:pl-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="border-gray-100 border rounded-xl overflow-hidden flex flex-col hover:shadow-md transition-all duration-200"
          >
            <Link to={`/product/details/${product.id}`}>
              <img
                loading="lazy"
                className="h-50 w-full object-cover bg-center"
                src={product.image}
                alt={product.title}
              />
              <h2 className="pt-4 pb-2 px-2 font-medium md:px-4 text-base md:text-medium">
                {product.title.length > 40
                  ? product.title.slice(0, 40) + "..."
                  : product.title}
              </h2>
            </Link>

            <div className="flex flex-col px-2 pb-4 md:px-4 gap-3">
              <p className="text-[#78B04F] font-bold md:text-md">
                ${parseFloat(product.price).toFixed(2)}
              </p>
              {currentUser && !currentUser.isAdmin && (
                <button
                  className="flex items-center justify-center gap-2 py-1 px-3 border border-[#78B04F] text-[#78B04F] hover:bg-[#78B04F] hover:text-white transition-all rounded font-medium"
                  onClick={() => AddToCartHandler(product)}
                >
                  <FaCartPlus className="text-base" />
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="products min-h-screen">
      <div className="bg-gradient-to-t from-[#a8ff80] to-[#6ca543] h-[40vh] flex flex-col justify-center items-center gap-2 p-5 lg:p-[5%] text-center relative">
        <h2 className="font-medium text-2xl md:text-3xl text-white">
          Discover Amazing Products
        </h2>
        <p className="tracking-widest font-medium md:text-lg text-white">
          Shop the latest trends and find your perfect match
        </p>

        <div className="relative w-[300px] mt-5">
          <div className="flex items-center border-2 border-white bg-white rounded-md shadow-md">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search"
              className="flex-1 px-3 py-2 rounded-l-md outline-none text-gray-800"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setShowSearchHints(searchTerm.trim().length > 0)}
              onBlur={() => setTimeout(() => setShowSearchHints(false), 200)}
              onKeyDown={handleKeyDown}
            />
            <button className="px-3 text-[#78B04F] hover:text-green-600">
              <IoIosSearch className="text-2xl" />
            </button>
          </div>

          {showSearchHints && searchHints.length > 0 && (
            <div className="absolute z-50 w-full bg-white rounded-md shadow-md mt-1 text-left max-h-48 overflow-y-auto border border-gray-200">
              {searchHints.map((p) => (
                <div
                  key={p.id}
                  onMouseDown={() => setSearchTerm(p.title)}
                  className="px-4 py-2 hover:bg-green-100 text-sm cursor-pointer"
                >
                  {p.title}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="md:flex md:gap-10">
        <aside className="hidden lg:block md:px-10 lg:pl-[5%] py-5 max-h-[calc(100vh-80px)] sticky top-[80px]">
          <h2 className="mb-3 font-semibold">Product Categories</h2>
          <ul className="text-md cursor-pointer">
            <li
              className={`py-2 ${
                selectedCategory === "" ? "underline text-[#78B04F]" : ""
              }`}
              onClick={() => handleCategoryChange("")}
            >
              All Categories
            </li>
            {categories.map((cat) => (
              <li
                key={cat}
                className={`py-2 hover:underline hover:text-[#78B04F] ${
                  selectedCategory === cat ? "underline text-[#78B04F]" : ""
                }`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>

        <main className="flex-1">
          <ProductGrid products={filteredProducts} />
          {isEndReached && (
            <div className="text-center  py-10 text-[#78B04F] font-medium">
              <p className="-ml-[6vw] lg:-ml-[20vw]">
                🎉 You have reached the end of the product list.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Products;
