import { useSelector, useDispatch } from "react-redux";
import { asyncUpdateUser } from "../store/actions/userActions";
import { toast } from "react-toastify";
import { FaPlus, FaMinus } from "react-icons/fa";

const Cart = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const cart = users?.cart || [];

  const IncreaceQuantity = (index) => {
    const copyUser = {
      ...users,
      cart: users.cart.map((item) => ({ ...item })),
    };
    copyUser.cart[index].quantity += 1;
    dispatch(asyncUpdateUser(copyUser.id, copyUser));
  };

  const DecreaceQuantity = (index) => {
    const copyUser = {
      ...users,
      cart: users.cart.map((item) => ({ ...item })),
    };

    if (copyUser.cart[index].quantity > 1) {
      copyUser.cart[index].quantity -= 1;
    } else {
      copyUser.cart.splice(index, 1);
    }

    dispatch(asyncUpdateUser(copyUser.id, copyUser));
  };

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.quantity * parseFloat(item.product.price),
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center text-[#78B04F]">
          My Cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-center text-gray-500 text-lg py-20">
            🛒 Your cart is empty. Add some products!
          </div>
        ) : (
          <>
            <ul className="space-y-6">
              {cart.map((c, index) => (
                <li
                  key={c.product.id}
                  className="flex flex-col md:flex-row items-center justify-between gap-5 bg-white p-5 rounded-lg shadow"
                >
                  {/* Image + Title */}
                  <div className="flex items-center gap-5 w-full md:w-1/3">
                    <img
                      src={c.product.image}
                      alt={c.product.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <h2 className="text-lg font-medium text-gray-800">
                      {c.product.title.length > 40
                        ? c.product.title.slice(0, 40) + "..."
                        : c.product.title}
                    </h2>
                  </div>

                  {/* Price */}
                  <div className="text-md text-[#78B04F] font-semibold w-20 text-center">
                    ${parseFloat(c.product.price).toFixed(2)}
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => DecreaceQuantity(index)}
                      className="bg-gray-200 hover:bg-gray-300 p-2 rounded text-sm"
                    >
                      <FaMinus />
                    </button>
                    <span className="text-gray-800 font-semibold">
                      {c.quantity}
                    </span>
                    <button
                      onClick={() => IncreaceQuantity(index)}
                      className="bg-gray-200 hover:bg-gray-300 p-2 rounded text-sm"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {/* Total Summary */}
            <div className="mt-10 flex justify-end">
              <div className="bg-white shadow-lg p-5 rounded-lg w-full sm:w-1/2 md:w-1/3">
                <h3 className="text-lg font-bold mb-3 text-gray-800">
                  Order Summary
                </h3>
                <div className="flex justify-between text-gray-600 mb-2">
                  <span>Total Items:</span>
                  <span>{cart.reduce((sum, i) => sum + i.quantity, 0)}</span>
                </div>
                <div className="flex justify-between text-[#78B04F] font-bold text-lg">
                  <span>Total Amount:</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
