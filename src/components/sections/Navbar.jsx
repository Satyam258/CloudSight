import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between bg-[#171616] py-3 px-8 shadow-sm font-sans z-50">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <div className="bg-orange-500 p-2 rounded-md flex items-center justify-center">
          {/* Replace with your SVG or icon */}
          <span className="text-white font-bold text-xl">☁️</span>
        </div>
        <span className="text-white font-semibold text-lg">KloudMate</span>
      </div>
      {/* Nav Links */}
      <ul className="hidden md:flex space-x-6 text-gray-200 text-sm">
        <li className="hover:text-orange-500 transition">About Us</li>
        <li className="group relative cursor-pointer">
          <span className="hover:text-orange-500 transition">Product</span>
          {/* Dropdown example */}
          <div className="absolute left-0 mt-2 bg-[#242323] rounded shadow-lg hidden group-hover:block min-w-[140px]">
            <a href="#" className="block px-4 py-2 text-white hover:bg-orange-500">Overview</a>
            <a href="#" className="block px-4 py-2 text-white hover:bg-orange-500">Integrations</a>
          </div>
        </li>
        <li className="hover:text-orange-500 transition">Features</li>
        <li className="hover:text-orange-500 transition">Pricing</li>
        <li className="group relative cursor-pointer">
          <span className="hover:text-orange-500 transition">Resources</span>
          {/* Dropdown example */}
          <div className="absolute left-0 mt-2 bg-[#242323] rounded shadow-lg hidden group-hover:block min-w-[140px]">
            <a href="#" className="block px-4 py-2 text-white hover:bg-orange-500">Docs</a>
            <a href="#" className="block px-4 py-2 text-white hover:bg-orange-500">Blog</a>
          </div>
        </li>
        <li className="hover:text-orange-500 transition">Contact</li>
      </ul>
      {/* Action Buttons */}
      <div className="flex items-center space-x-3">
        <button className="border border-gray-400 rounded-full py-1.5 px-5 text-white bg-transparent hover:border-orange-400 hover:text-orange-400 transition text-sm">
          Playground
        </button>
        <button className="bg-orange-500 rounded-full py-1.5 px-5 text-white font-semibold hover:bg-orange-600 shadow text-sm">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
