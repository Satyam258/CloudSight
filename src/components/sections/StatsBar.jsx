import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "300+", label: "teams use CloudSight" },
  { value: "500TB+", label: "Logs processed every month" },
  { value: "20+", label: "countries around the world" },
  { value: ">60%", label: "reduced in Observability TCO" }
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, type: "spring" }
  })
};

export default function StatsBar() {
  return (
    <section className="flex justify-center py-12 md:py-16 w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-5xl rounded-3xl px-4 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl"
        style={{
          background: "linear-gradient(100deg, #fffbe4d9 45%, #ffeab785 95%)",
          boxShadow: "0 3px 32px 2px #fbe48635"
        }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.value}
            className="flex flex-col items-center flex-1 px-1"
            custom={i}
            variants={fadeIn}
          >
            <span className="text-3xl md:text-4xl font-extrabold text-yellow-700 drop-shadow-lg">
              {stat.value}
            </span>
            <span className="mt-2 md:mt-3 text-sm md:text-base text-gray-800 font-medium text-center max-w-xs">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
