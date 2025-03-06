import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, totalQuantity, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="p-6 max-w-6xl mx-auto h-screen">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[75vh]">
          <p className="text-gray-500 text-3xl">Your cart is empty.</p>
          <Link to="/products">
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="border border-gray-300 px-4 py-2 text-left">Product</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Quantity</th>
                <th className="border border-gray-300 px-4 py-2 text-right">Total</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border border-gray-300">
                  <td className="border border-gray-300 px-4 py-2">{item.title}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.quantity}</td>
                  <td className="border border-gray-300 px-4 py-2 text-right">PKR {(item.price * item.quantity).toFixed(2)}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Cart Summary & Checkout Button */}
      {cartItems.length > 0 && (
        <div className="mt-6 text-right">
          <p className="text-lg font-semibold">Total Items: {totalQuantity}</p>
          <p className="text-lg font-semibold">Total Price: PKR {totalPrice.toFixed(2)}</p>

          <div className="flex justify-end gap-4 mt-4">
            <button
              className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800 transition"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>

            <Link to="/checkout">
              <button className="bg-[#0c3241] text-white px-6 py-2 rounded hover:bg-green-700 transition">
                Continue to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
