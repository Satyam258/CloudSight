import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-6 text-center">
      <p>
        &copy; {new Date().getFullYear()} Productivity Dashboard. All rights
        reserved.
      </p>
      <div className="mt-4 space-x-4">
        <a href="#" className="hover:text-white transition">
          Home
        </a>
        <a href="#" className="hover:text-white transition">
          Features
        </a>
        <a href="#" className="hover:text-white transition">
          Contact
        </a>
        <a href="#" className="hover:text-white transition" aria-label="Twitter">
          Twitter
        </a>
      </div>
    </footer>
  );
}
