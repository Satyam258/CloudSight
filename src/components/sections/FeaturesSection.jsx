import React from "react";
import { motion } from "framer-motion";

// Demo feature data – change to real features!
const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="13" fill="#FFF9CB" />
        <path d="M14 8v8m0 0v4m0-4h6m-6 0h-6" stroke="#FFB300" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "End-to-end Observability",
    desc: "Correlate logs, metrics, and traces across every layer for instant root-cause analysis."
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="20" rx="5" fill="#FFF9CB" />
        <path d="M8 14l4 4 8-8" stroke="#FFB300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Automated Alerting",
    desc: "Get instant, smart notifications on latency, errors, and health—before issues impact users."
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <ellipse cx="14" cy="14" rx="13" ry="8" fill="#FFF9CB" />
        <path d="M7 16c0-4 14-4 14 0" stroke="#FFB300" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Cloud Native & Serverless",
    desc: "Effortlessly instrument AWS, Kubernetes, or any cloud app. No agents needed for many stacks."
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="8" y="6" width="12" height="16" rx="6" fill="#FFF9CB" />
        <path d="M14 13v5" stroke="#FFB300" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Easy, Fast Onboarding",
    desc: "Set up in minutes. Powerful UI, instant insights, and support for every modern language."
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.55, type: "spring" }
  })
};

export default function FeaturesSection() {
  return (
    <section className="flex flex-col items-center py-14" id="features">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto px-4"
      >
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-3">
          Powerful, Simple Features
        </h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
          Everything you need to see, debug, and accelerate your cloud-native apps at scale.
        </p>
        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="relative bg-gradient-to-br from-[#fff8e3] via-[#fff9cbef] to-[#f7e6a0] rounded-2xl px-6 py-8 shadow-lg flex flex-col items-center transition"
              variants={fadeUp}
              custom={i}
              /* HOVER EFFECT: Slight pop and yellow glow */
              whileHover={{
                scale: 1.06,
                boxShadow: "0 8px 32px 0 #ffe278cc"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 16 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h4 className="font-semibold text-lg text-yellow-800 text-center">{feature.title}</h4>
              <p className="text-gray-700 mt-2 text-sm text-center">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
