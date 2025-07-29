import React from "react";
import { motion } from "framer-motion";

const integrations = [
  { name: "AWS", src: "/logos/aws.svg" },
  { name: "Azure", src: "/logos/azure.svg" },
  { name: "GCP", src: "/logos/gcp.svg" },
  { name: "Kubernetes", src: "/logos/kubernetes.svg" },
  { name: "Docker", src: "/logos/docker.svg" },
  { name: "Prometheus", src: "/logos/prometheus.svg" },
];

const containerVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      type: "spring",
      bounce: 0.18,
      staggerChildren: 0.12,
    },
  },
};

const logoVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.91 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const IntegrationsBar = () => (
  <section className="flex flex-col items-center py-12 md:py-14 ">
    <motion.div
      className="flex flex-wrap gap-7 md:gap-12 justify-center items-center rounded-2xl bg-gradient-to-r from-[#f1a705] via-[#1b1a16] to-[#171616] shadow-lg px-8 py-7 border border-[#232a2d]/80"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {integrations.map((logo) => (
        <motion.div
          key={logo.name}
          variants={logoVariants}
          whileHover={{ scale: 1.13, boxShadow: "0 2px 18px 4px #ffb02288" }}
          className="relative rounded-xl flex items-center justify-center h-16 w-20 md:w-24 overflow-visible"
        >
          {/* Yellowish radial background blur/glow */}
          <span
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: "76px",
              height: "52px",
              borderRadius: "999px",
              background: "radial-gradient(circle, #ffd56488 0%, #ffb02011 80%, transparent 100%)",
              filter: "blur(7px)",
              zIndex: 0,
            }}
          />
          <span className="relative z-10 bg-[#171616] rounded-lg flex items-center justify-center h-14 w-16 shadow-md">
            <img
              src={logo.src}
              alt={logo.name}
              className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition duration-200"
              style={{ filter: "brightness(1.08)" }}
            />
          </span>
        </motion.div>
      ))}
    </motion.div>
    <div className="mt-7 text-sm tracking-wide text-gray-300 font-medium text-center">
      Natively supports all your modern cloud and container platforms
    </div>
  </section>
);

export default IntegrationsBar;
