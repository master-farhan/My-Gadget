import { useSelector } from "react-redux";
import { format } from "date-fns";
// Not Work Yet 
const Order = () => {
  const user = useSelector((state) => state.userReducer.users);
  const orders = user?.orders || [];

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-6">My Orders</h2>

      {orders.length === 0 ? (
        <p className="text-gray-500">You haven’t placed any orders yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="border border-gray-300 rounded-xl p-5 bg-white shadow-sm"
            >
              {/* Order Header */}
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Order ID: {order.id}</h3>
                  <p className="text-sm text-gray-500">
                    {format(new Date(order.date), "MMMM d, yyyy")}
                  </p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-sm text-gray-500">Total:</p>
                  <p className="text-lg font-semibold text-green-600">
                    ${order.total.toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Order Items */}
              <ul className="divide-y divide-gray-200">
                {order.items.map((item, idx) => (
                  <li key={idx} className="py-3 flex items-center gap-4">
                    <img
                      src={item.product.image}
                      alt={item.product.title}
                      className="w-16 h-16 object-cover rounded border"
                    />
                    <div className="flex-1">
                      <p className="font-medium">{item.product.title}</p>
                      <p className="text-sm text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-700">
                        ${item.product.price.toFixed(2)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Order;
