import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white sticky top-0">
      <Link to="/" className="text-2xl font-bold text-primary">
        Apple from the Hills 🍎
      </Link>

      <div className="space-x-6 font-medium">
        <Link to="/" className="hover:text-primary">Home</Link>
        <Link to="/products" className="hover:text-primary">Products</Link>
        <Link to="/about" className="hover:text-primary">About</Link>
        <Link to="/cart" className="hover:text-primary">Cart</Link>
        <Link to="/contact" className="hover:text-primary">Contact</Link>
      </div>
    </nav>
  );
}
