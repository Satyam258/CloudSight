import React from "react";

export default function Icon({ name, size = 24, className = "" }) {
  // Example: add a case for each icon you want to use
  switch (name) {
    case "analytics":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          fill="none"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="11" width="4" height="10" fill="#3B82F6" />
          <rect x="10" y="7" width="4" height="14" fill="#2563EB" />
          <rect x="17" y="3" width="4" height="18" fill="#1E40AF" />
        </svg>
      );
    case "collab":
      return (
        <svg
          className={className}
          width={size}
          height={size}
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle cx="8" cy="12" r="4" fill="#F59E42" />
          <circle cx="16" cy="12" r="4" fill="#6366F1" />
        </svg>
      );
    default:
      // fallback: use a placeholder or emoji prop
      return (
        <span
          style={{ fontSize: size, display: "inline-block" }}
          className={className}
        >
          ⚡
        </span>
      );
  }
}
