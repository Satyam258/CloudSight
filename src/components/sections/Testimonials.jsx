import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "CTO, TechCorp",
    photo: "/assets/testimonials/alice.jpg", // replace with actual path or placeholder
    quote: "CloudSight transformed our monitoring. We detect issues 10X faster and saved tons on APM costs!",
  },
  {
    name: "Mark Spencer",
    role: "SRE Lead, DevWorks",
    photo: "/assets/testimonials/mark.jpg",
    quote: "The real-time insights into microservices helped us drastically reduce downtime.",
  },
  {
    name: "Sophia Lee",
    role: "Product Manager, AppVantage",
    photo: "/assets/testimonials/sophia.jpg",
    quote: "The easy onboarding and intuitive UI make observability accessible for our entire team.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, type: "spring" }
  })
};

export default function Testimonials() {
  return (
    <section className="flex flex-col items-center py-16 px-4 bg-gradient-to-r from-[#232323] via-[#1f1f1f] to-[#171616]" id="testimonials">
      <h2 className="text-3xl font-bold text-yellow-500 mb-6 text-center">
        What Our Customers Say
      </h2>
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="bg-[#171616] rounded-2xl p-6 shadow-lg flex flex-col items-center text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            whileHover={{ scale: 1.05, boxShadow: "0 5px 20px #ffd564cc" }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
          >
            <img
              src={t.photo}
              alt={t.name}
              className="w-20 h-20 rounded-full mb-4 object-cover shadow-md border border-yellow-500"
            />
            <p className="text-gray-300 italic mb-4">"{t.quote}"</p>
            <p className="text-yellow-400 font-semibold">{t.name}</p>
            <p className="text-gray-500 text-sm">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
