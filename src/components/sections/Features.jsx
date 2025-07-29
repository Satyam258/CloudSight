import React from "react";
import { motion } from "framer-motion";
import Card from "../ui/Card";
import Icon from "../ui/Icon";

const features = [
  {
    title: "Realtime Analytics",
    description: "Get instant insights with live data dashboards.",
    icon: "analytics",
  },
  {
    title: "Customizable Widgets",
    description: "Drag, drop, and configure exactly what you need.",
    icon: "⚙️", // Fallback to emoji or add an SVG to Icon.jsx
  },
  {
    title: "Seamless Collaboration",
    description: "Work together with your team effortlessly.",
    icon: "collab",
  },
];

export default function Features() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map(({ title, description, icon }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <Card>
              <div className="mb-4 flex justify-center">
                <Icon name={icon} size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
