import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    console.log("PLACE ORDER CLICKED");
    clearCart();
    navigate("/success");
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">
          Your cart is empty 🛒
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="bg-white shadow-md rounded-xl p-6 mb-6">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between mb-3">
            <span>{item.name} × {item.quantity}</span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}
      </div>

      <div className="text-xl font-bold mb-6">
        Total: ₹{totalPrice}
      </div>

      <button
        onClick={handlePlaceOrder}
        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
      >
        Place Order 🌱
      </button>
    </div>
  );
}
