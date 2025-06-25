import { useSelector, useDispatch } from "react-redux";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { asyncDeleteProduct } from "../store/actions/productActions";
import { asyncUpdateUser } from "../store/actions/userActions";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.productReducer.products);
  const user = useSelector((state) => state.userReducer.users);
  const { id } = useParams();

  const product = products?.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="p-5 text-center">
        <p className="text-red-500 text-lg font-medium">❌ Product not found</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-gray-100 hover:bg-gray-300 transition px-4 py-2 rounded text-gray-700 font-medium"
        >
          ⬅ Back
        </button>
      </div>
    );
  }

  const AddToCarthandler = () => {
    if (!user || !Array.isArray(user.cart)) {
      toast.error("User cart not found");
      return;
    }

    const copyUser = {
      ...user,
      cart: user.cart.map((item) => ({
        product: { ...item.product },
        quantity: item.quantity,
      })),
    };

    if (!copyUser.id) {
      toast.error("User ID not found");
      return;
    }

    const index = copyUser.cart.findIndex((c) => c?.product?.id === product.id);

    if (index === -1) {
      copyUser.cart.push({ product, quantity: 1 });
      toast.success("✅ Product added to cart");
    } else {
      copyUser.cart[index].quantity += 1;
      toast.success("✅ Product quantity updated");
    }

    dispatch(asyncUpdateUser(copyUser.id, copyUser));
  };

  const Orderhandler = () => {
    console.log("Order placed");
  };

  const DeleteHandler = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      dispatch(asyncDeleteProduct(id));
      navigate(-1);
    }
  };

  return (
    <div className="p-5 md:px-10 lg:px-[5%] min-h-screen relative">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 cursor-pointer sticky top-25 left-0 inline-block text-sm border transition-all duration-300 hover:text-white py-1 px-2 rounded border-gray-400 hover:bg-gray-400"
      >
        ← Go back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5">
        {/* Image */}
        <div className="w-full flex justify-center">
          <img
            className="rounded-md w-full max-w-[400px] aspect-square object-cover"
            src={product.image}
            alt={product.title}
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{product.title}</h2>
            <p className="text-xl text-[#78B04F] font-semibold mt-2">
              ${parseFloat(product.price).toFixed(2)}
            </p>
            <p className="text-sm text-gray-600 mt-2 whitespace-pre-line">{product.description}</p>

            <ul className="list-disc pl-5 mt-4 text-sm text-gray-700 space-y-1">
              <li>Works as TRS to TRRS Converter</li>
              <li>7 Days Warranty</li>
              <li>Category: <span className="font-semibold">{product.catagory}</span></li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            {user?.isAdmin ? (
              <>
                <button
                  onClick={() => navigate(`update-product`)}
                  className="px-4 py-2 rounded border border-[#78B04F] text-[#78B04F] hover:bg-[#78B04F] hover:text-white transition font-medium"
                >
                  ✏️ Update
                </button>
                <button
                  onClick={DeleteHandler}
                  className="px-4 py-2 rounded border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition font-medium"
                >
                  🗑️ Delete
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={AddToCarthandler}
                  className="px-4 py-2 rounded border border-[#78B04F] text-[#78B04F] hover:bg-[#78B04F] hover:text-white transition font-medium"
                >
                  🛒 Add to Cart
                </button>
                <button
                  onClick={Orderhandler}
                  className="px-4 py-2 rounded border border-[#78B04F] text-[#78B04F] hover:bg-[#78B04F] hover:text-white transition font-medium flex items-center gap-2"
                >
                  Create Order <FaArrowRightLong className="-rotate-45" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default ProductDetails;
