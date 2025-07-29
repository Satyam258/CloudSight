import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaDiscord,
  FaEnvelope,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="w-full pt-12 pb-6 px-4 md:px-16 bg-[#171616] text-gray-300">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        {/* Brand & Contact */}
        <div>
          <div className="flex items-center mb-4 space-x-2">
            <div className="bg-orange-500 rounded p-2">
              {/* Logo or Icon */}
              <span className="text-white text-2xl font-bold">☁️</span>
            </div>
            <span className="text-white font-semibold text-xl tracking-tight">CloudSight</span>
          </div>
          <div className="text-sm mb-2">
            CloudSight Technologies Inc.<br/>
            Austin, TX, USA | Bengaluru, India
          </div>
          <a href="mailto:hello@cloudsight.com" className="text-sm text-yellow-400 hover:underline flex items-center gap-1 mb-4">
            <SiGmail className="inline-block" />
            hello@cloudsight.com
          </a>
          <div className="flex space-x-3 mt-3">
            <a href="#" className="hover:text-yellow-400 transition"><FaTwitter size={20}/></a>
            <a href="#" className="hover:text-yellow-400 transition"><FaLinkedin size={20}/></a>
            <a href="#" className="hover:text-yellow-400 transition"><FaGithub size={20}/></a>
            <a href="#" className="hover:text-yellow-400 transition"><FaDiscord size={20}/></a>
          </div>
        </div>
        {/* Product Links */}
        <div>
          <div className="font-semibold text-base mb-2 text-gray-200">Product</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400">Features</a></li>
            <li><a href="#" className="hover:text-yellow-400">Pricing</a></li>
            <li><a href="#" className="hover:text-yellow-400">Quick Start</a></li>
            <li><a href="#" className="hover:text-yellow-400">Docs</a></li>
          </ul>
        </div>
        {/* Features Links */}
        <div>
          <div className="font-semibold text-base mb-2 text-gray-200">Features</div>
          <ul className="space-y-2 text-sm">
            <li>APM</li>
            <li>API Monitoring</li>
            <li>Microservices Monitoring</li>
            <li>Anomaly Detection</li>
            <li>Log Filtering & Analysis</li>
            <li>Infrastructure Monitoring</li>
            <li>Serverless Monitoring</li>
            <li>Kubernetes Monitoring</li>
            <li>Containers Monitoring</li>
            <li>Incident Management</li>
            <li>Business Observability</li>
          </ul>
        </div>
        {/* Company & Legal */}
        <div>
          <div className="font-semibold text-base mb-2 text-gray-200">Company</div>
          <ul className="space-y-2 text-sm mb-6">
            <li><a href="#" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
            <li><a href="#" className="hover:text-yellow-400">Careers</a></li>
            <li><a href="#" className="hover:text-yellow-400">Blog</a></li>
            <li><a href="#" className="hover:text-yellow-400">Alternatives</a></li>
          </ul>
          <div className="font-semibold text-base mb-2 text-gray-200">Legal</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-400">Security</a></li>
            <li><a href="#" className="hover:text-yellow-400">Terms of Service</a></li>
            <li><a href="#" className="hover:text-yellow-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-400">Cookie Policy</a></li>
            <li><a href="#" className="hover:text-yellow-400">Fair Usage Policy</a></li>
          </ul>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between border-t border-[#232a2d]/60 pt-6 text-xs text-gray-400">
        <div>© {new Date().getFullYear()} CloudSight Technologies Inc. All rights reserved.</div>
        <div className="mt-2 md:mt-0 flex items-center gap-1">
          Made by team <span className="text-yellow-400 font-semibold">CloudSight</span>
          <span className="text-yellow-500 text-xl">♥</span>
        </div>
      </div>
    </footer>
  );
}
