import React from "react";
import { motion } from "framer-motion";

const stats = [
  { id: 1, label: "Teams Using", value: 300 },
  { id: 2, label: "Logs Processed / Month", value: 500 },
  { id: 3, label: "Uptime %", value: 99.99 },
];

export default function StatsBar() {
  return (
    <section className="bg-blue-600 text-white py-12 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {stats.map(({ id, label, value }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: id * 0.2 }}
          >
            <p className="text-4xl font-bold">
              {typeof value === "number" ? value.toLocaleString() : value}+
            </p>
            <p className="mt-2 text-lg">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
