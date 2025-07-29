import React from "react";
import { motion } from "framer-motion";

const videoVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.93 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, type: "spring" } },
};

export default function VideoSection() {
  return (
    <section className="flex flex-col items-center py-12 md:py-16 w-full">
      <motion.div
        className="relative w-full max-w-2xl rounded-3xl px-4 md:px-10 py-10 flex flex-col items-center shadow-xl"
        style={{
          background: "linear-gradient(110deg, #fffbe4d6 5%, #ffeab799 100%)",
          boxShadow: "0 8px 48px 0 #ffb32633, 0 2px 24px 4px #ffd56444",
        }}
        variants={videoVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Video Player */}
        <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-lg max-w-xl">
          <video
            src="/assets/videos/demo.mp4"           // Place your video here
            poster="/videos/thumbnail.png"   // Optional: preview thumbnail image
            controls
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Title & Description */}
        <h2 className="mt-7 text-2xl md:text-3xl font-semibold text-gray-900 text-center">
          See It In Action
        </h2>
        <p className="mt-2 max-w-xl text-lg text-gray-800 text-center">
          Watch how <span className="font-bold text-yellow-700">CloudSight</span> empowers teams to collect, analyze, and visualize app telemetry from any cloud. Fast onboarding, actionable insights, beautiful dashboards.
        </p>

        {/* CTA Button */}
        <button
          className="mt-6 bg-orange-500 hover:bg-orange-600 transition text-white rounded-full px-7 py-2 font-bold shadow text-base"
        >
          Get Started Free
        </button>
      </motion.div>
    </section>
  );
}
