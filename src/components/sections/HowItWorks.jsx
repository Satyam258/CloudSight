import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    iconSrc: "/assets/howitworks/step1.png",
    title: "Connect",
    desc: "Connect your cloud or on-premises stack in minutes with agentless setup and ready integrations.",
  },
  {
    iconSrc: "/assets/howitworks/step2.png",
    title: "Observe",
    desc: "Monitor and collect unified logs, metrics, and traces from all your infrastructure and apps automatically.",
  },
  {
    iconSrc: "/assets/howitworks/step3.png",
    title: "Analyze & Act",
    desc: "Detect issues, explore root causes, and receive smart alerts—fix faster and improve reliability.",
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 32 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.55, type: "spring" }
  }),
};

export default function HowItWorks() {
  return (
    <section className="flex flex-col items-center py-16 w-full" id="how-it-works">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-5xl mx-auto px-4"
      >
        <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-4">
          How It Works
        </h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-10">
          Get up and running in three easy steps—achieve instant, actionable observability.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="relative flex-1 bg-gradient-to-br from-[#fff8e3] via-[#fff9cbef] to-[#f7e6a0]
                         rounded-2xl px-7 py-8 shadow-lg flex flex-col items-center text-center
                         hover:shadow-2xl transition"
              variants={fadeIn}
              custom={i}
              whileHover={{
                scale: 1.06,
                boxShadow: "0 8px 32px 0 #ffe278cc"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              {/* Icon Placeholder */}
              <div className="mb-4">
                <img
                  src={step.iconSrc}
                  alt={step.title + " icon"}
                  className="w-12 h-12 object-contain"
                  style={{ filter: "drop-shadow(0 2px 8px #ffefb7aa)" }}
                />
              </div>
              <h4 className="font-semibold text-lg text-yellow-800">{step.title}</h4>
              <p className="text-gray-700 mt-2 text-sm">{step.desc}</p>
              {i < steps.length - 1 && (
                <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-1 w-8 bg-yellow-200" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
