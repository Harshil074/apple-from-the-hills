import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxSection({
  children,
  bgImage,
  height = "auto",
  overlay = true,
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ minHeight: height }}
    >
      {bgImage && (
        <motion.div
          style={{ y }}
          className="absolute inset-0"
        >
          <img
            src={bgImage}
            alt="background"
            className="w-full h-full object-cover"
          />
          {overlay && <div className="absolute inset-0 bg-black/40"></div>}
        </motion.div>
      )}

      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
