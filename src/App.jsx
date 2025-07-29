import React from "react";
import Navbar from "./components/sections/Navbar";  // Import Navbar here
import Hero from "./components/sections/Hero";
import StatsBar from "./components/sections/StatsBar";
import Features from "./components/sections/Features";
import HowItWorks from "./components/sections/HowItWorks";
import Testimonials from "./components/sections/Testimonials";
import Footer from "./components/sections/Footer";
import IntegrationsBar from "./components/sections/IntegrationsBar";

export default function App() {
  return (
    <div
      className="min-h-screen text-gray-50"
      style={{
        background: "linear-gradient(180deg, #232323 0%, #171616 100%)"
      }}
    >
      <Navbar />
      <Hero />
      <IntegrationsBar />
      <StatsBar />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
}
