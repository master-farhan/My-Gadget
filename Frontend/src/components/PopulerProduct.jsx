import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axiosCofig";
import { FaCartPlus } from "react-icons/fa";

const PopulerProduct = () => {
  const [products, setProducts] = useState([]);

  // Fetch top/popular products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/products");
        const popular = res.data.slice(6, 10); // take first 4 as example
        setProducts(popular);
      } catch (error) {
        console.error("Error fetching popular products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-16 px-5 md:px-10 lg:px-[5%]">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
        Popular Products
      </h2>
      <p className="text-center text-gray-600 lg:max-w-[80vw] mx-auto mb-10">
        Discover trending picks loved by our customers—quality, style, and
        performance in every piece.
      </p>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 duration-300"
          >
            <Link to={`/product/details/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full object-cover"
              />
              <div className="px-4">
                <h3 className="text-lg font-semibold mb-1 text-gray-800">
                  {product.title.length > 40
                    ? product.title.slice(0, 40) + "..."
                    : product.title}
                </h3>
                <p className="text-[#78B04F] font-bold">
                  ${parseFloat(product.price).toFixed(2)}
                </p>
              </div>
            </Link>
            <Link
              to={`/product/details/${product.id}`}
              className="inline-block text-sm text-[#78B04F] hover:underline text-end w-full pb-4 pr-4"
            >
              View Details
            </Link>
            {/* <div className="px-4 pb-4">
              <button className="w-fit flex items-center justify-center gap-2 bg-[#78B04F] hover:bg-green-700 text-white py-2 px-5 rounded-md font-medium transition mx-auto">
                <FaCartPlus className="text-sm" />
                Add to Cart
              </button>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopulerProduct;
