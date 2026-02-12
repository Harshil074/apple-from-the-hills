import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-[#f9fafb] overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative h-[80vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/images/home/farm.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Proper overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Story 🌄
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Rooted in Himachal. Grown with patience. Delivered with honesty.
          </p>
        </motion.div>
      </section>

      {/* ================= STORY SECTION ================= */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <motion.img
            src="/images/home/story.jpg"
            alt="Himachal Farmer"
            className="rounded-2xl shadow-xl"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Rooted in Himachal 🌱
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Apple from the Hills started with one simple belief —
              fruits should reach families the same way they grow on trees:
              naturally, honestly, and with care.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our farms are spread across Rampur Bushahr and the Satluj Valley,
              where generations of farmers grow apples, plums and peaches
              using traditional knowledge passed down over decades.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ================= VALUES SECTION ================= */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-14"
          >
            What We Stand For 🍎
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              ["🌱", "Support Farmers", "Fair prices and direct sourcing from local growers."],
              ["🍃", "Natural Growing", "No shortcuts. Seasonal and climate-respected farming."],
              ["❤️", "Trust Families", "Freshness, transparency and honest delivery."],
            ].map(([icon, title, desc], i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-[#f9fafb] p-8 rounded-2xl shadow hover:shadow-xl"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CLOSING CTA ================= */}
      <section
        className="relative py-32 text-center text-white"
        style={{
          backgroundImage: "url('/images/home/farmer.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto px-6"
        >
          <h2 className="text-4xl font-bold mb-6">
            Supporting Farmers. Serving Families. 🍎
          </h2>
          <p className="text-lg text-gray-200">
            Every order strengthens rural livelihoods and honest farming in Himachal.
          </p>
        </motion.div>
      </section>

    </div>
  );
}
