import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

export default function Cart() {
  const { cart, increaseQty, decreaseQty, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-green-50">
        <h2 className="text-3xl font-bold mb-4">Your Cart is Empty 🛒</h2>
        <p className="text-gray-600 mb-6">
          Fresh fruits from Himachal are waiting for you 🍎
        </p>
        <Link
          to="/products"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold mb-8 text-center">
          Your Cart 🛒
        </h1>

        {/* Cart Items */}
        <div className="space-y-6">
          {cart.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white shadow-md rounded-xl p-6 flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-500">₹{item.price} / kg</p>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>

                <span className="font-bold text-lg">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              <div className="font-bold text-lg">
                ₹{item.price * item.quantity}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-10 bg-white shadow-lg rounded-xl p-6 text-right"
        >
          <h2 className="text-2xl font-bold mb-4">
            Total: ₹{totalPrice}
          </h2>

          <Link
            to="/checkout"
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Proceed to Checkout 🌱
          </Link>
        </motion.div>

        {/* Recommended Products */}
        <div className="mt-16">
          <h3 className="text-xl font-bold mb-4">
            You may also like 🍑
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Kiwi", price: 220 },
              { name: "Peach", price: 160 },
              { name: "Cherry", price: 300 },
              { name: "Golden Apple", price: 200 },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-gray-600">₹{item.price} / kg</p>
                <Link
                  to="/products"
                  className="text-green-600 text-sm mt-2 inline-block"
                >
                  View Product →
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
