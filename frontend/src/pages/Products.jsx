import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function Products() {
  const { addToCart } = useCart();

  const apples = products.filter(p => p.category === "Apple");
  const others = products.filter(p => p.category !== "Apple");

  return (
    <div className="bg-[#f9fafb]">

      {/* PARALLAX HEADER */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/images/home/apple.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-5xl font-bold mb-4">Our Fresh Fruits 🍎</h1>
          <p className="text-lg text-gray-200">
            Naturally grown in Himachal, delivered with care.
          </p>
        </motion.div>
      </section>

      {/* APPLES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8">Apples from the Hills 🍏</h2>

        <div className="grid md:grid-cols-4 gap-8">
          {apples.map(product => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <ProductCard product={product} onAdd={addToCart} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* OTHER FRUITS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold mb-8">Seasonal & Exotic Fruits 🍑</h2>

        <div className="grid md:grid-cols-4 gap-8">
          {others.map(product => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <ProductCard product={product} onAdd={addToCart} />
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
