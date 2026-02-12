import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);

  // Parallax control
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.7]);

  return (
    <div ref={ref} className="bg-[#f9fafb] overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen flex items-center justify-center">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <img
            src="/images/home/hero.jpg"
            alt="Himachal Apples"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6 max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Fresh Fruits from the Hills of Himachal 🍎
          </h1>

          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Naturally grown apples & seasonal fruits  
            directly from Rampur Bushahr and Satluj Valley.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/products"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition"
            >
              Shop Fresh Fruits
            </Link>
            <Link
              to="/about"
              className="bg-white/90 hover:bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold transition"
            >
              Our Story 🌄
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6 text-center">
          {[
            "Direct from Farmers 🌱",
            "Naturally Grown 🍃",
            "Trusted by Families ❤️",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-xl font-semibold text-gray-800"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= APPLE STORY ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 px-6 items-center">
          <motion.img
            src="/images/home/apple.jpg"
            alt="Fresh Apples"
            className="rounded-2xl shadow-xl"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Apples Grown with Patience & Pride 🍏
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our apples grow slowly in the cool Himalayan climate,
              gaining natural sweetness, crunch, and nutrition —
              just the way nature intended.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= FRUIT BENEFITS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            Why Our Fruits Are Good for You 🌱
          </h2>

          <div className="grid md:grid-cols-4 gap-10 text-center">
            {[
              ["🍎", "Apples", "Rich in fiber, supports heart & digestion."],
              ["🥝", "Kiwi", "Vitamin C rich, boosts immunity & skin."],
              ["🍑", "Peach", "Hydrating and light on digestion."],
              ["🍒", "Plums & Cherries", "Antioxidants for joints & sugar balance."],
            ].map(([icon, title, desc], i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-[#f9fafb] p-6 rounded-2xl shadow hover:shadow-xl"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FARMER STORIES ================= */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Stories from Our Farmers 🌄
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              ["/images/home/farmer.jpg", "Ramesh Negi", "Apple Farmer • Rampur"],
              ["/images/home/sunita.jpg", "Sunita Devi", "Plum Grower • Satluj"],
              ["/images/home/story.jpg", "50+ Farmers", "Himachal Pradesh"],
            ].map(([img, name, role], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className="bg-white rounded-2xl shadow hover:shadow-xl overflow-hidden"
              >
                <img
                  src={img}
                  alt={name}
                  className="h-60 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{role}</p>
                  <p className="text-gray-600 text-sm">
                    “Every fruit carries our family’s hard work,
                    honesty and love for the land.”
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section
        className="relative py-32 text-center text-white"
        style={{
          backgroundImage: "url('/images/home/farm.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto px-6"
        >
          <h2 className="text-4xl font-bold mb-6">
            From Our Hills to Your Home 🍎
          </h2>
          <p className="text-lg mb-8 text-gray-200">
            No middlemen. No shortcuts.  
            Just honest fruits delivered fresh.
          </p>
          <Link
            to="/products"
            className="bg-green-600 hover:bg-green-700 px-10 py-4 rounded-lg font-semibold transition"
          >
            Explore Our Fruits
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
