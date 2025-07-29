import React from "react";
import { motion } from "framer-motion";

export default function Button({ children, onClick, className = "" }) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-6 py-3 shadow-md transition-colors focus:outline-none focus:ring focus:ring-blue-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
