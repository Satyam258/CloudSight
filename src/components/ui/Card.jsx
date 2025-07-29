import React from "react";

export default function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white rounded-xl shadow p-6 transition hover:shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}
