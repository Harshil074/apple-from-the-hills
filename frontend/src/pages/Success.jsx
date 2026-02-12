import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function OrderSuccess() {
  return (
    <div className="min-h-screen bg-[#f9fafb] flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white max-w-2xl w-full rounded-2xl shadow-xl p-10 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-6xl mb-6"
        >
          🎉
        </motion.div>

        <h1 className="text-4xl font-bold mb-4">
          Thank You for Your Order!
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          Fresh fruits from the hills of Himachal 🍎🌄  
          will be prepared and dispatched soon.
        </p>

        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8 text-left">
          <p className="font-semibold text-green-700 mb-2">
            What happens next?
          </p>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>✔ We’ll personally contact you</li>
            <li>✔ Fruits will be packed fresh</li>
            <li>✔ Safe & careful delivery</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/products"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold"
          >
            Order More Fruits 🍑
          </Link>

          <Link
            to="/"
            className="bg-gray-100 hover:bg-gray-200 px-8 py-4 rounded-lg font-semibold"
          >
            Back to Home 🏡
          </Link>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          Supporting local farmers • Honest delivery ❤️
        </p>
      </motion.div>

    </div>
  );
}
