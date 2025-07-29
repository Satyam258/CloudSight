import React from "react";
import { motion } from "framer-motion";
import Card from "../ui/Card";

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Project Manager",
    quote: "Our team productivity skyrocketed with this dashboard!",
    avatar: "https://via.placeholder.com/64?text=AJ",
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Developer",
    quote: "The real-time analytics keep me perfectly informed.",
    avatar: "https://via.placeholder.com/64?text=BS",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-12 text-center">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {testimonials.map(({ id, name, role, quote, avatar }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="flex flex-col items-center text-center bg-gray-50">
              <img
                src={avatar}
                alt={`${name} avatar`}
                className="rounded-full w-16 h-16 mb-4"
              />
              <p className="italic mb-4">"{quote}"</p>
              <p className="font-semibold">{name}</p>
              <p className="text-sm text-gray-500">{role}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
