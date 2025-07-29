import React from "react";
import { motion } from "framer-motion";
import Card from "../ui/Card";
import Icon from "../ui/Icon";

const steps = [
  {
    id: 1,
    title: "Connect Your Team",
    description: "Invite your team and assign roles effortlessly.",
    icon: "👥",
  },
  {
    id: 2,
    title: "Customize Dashboard",
    description: "Personalize widgets and data streams as you need.",
    icon: "⚙️",
  },
  {
    id: 3,
    title: "Track Progress",
    description: "Monitor goals and KPIs with ease.",
    icon: "✅",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-100 py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
      <div className="space-y-8 max-w-xl mx-auto">
        {steps.map(({ id, title, description, icon }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: id * 0.2 }}
          >
            <Card className="flex gap-6 items-start">
              <Icon name={icon} size={32} className="mt-1" />
              <div>
                <h3 className="font-semibold text-xl">{title}</h3>
                <p className="mt-1 text-gray-600">{description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
