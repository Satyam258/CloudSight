import React from "react";
import Navbar from "./components/sections/Navbar";  // Import Navbar here
import Hero from "./components/sections/Hero";
import StatsBar from "./components/sections/StatsBar";
import HowItWorks from "./components/sections/HowItWorks";
import Testimonials from "./components/sections/Testimonials";
import Footer from "./components/sections/Footer";
import IntegrationsBar from "./components/sections/IntegrationsBar";
import VideoSection from "./components/sections/VideoSection";
import FeaturesSection from "./components/sections/FeaturesSection";

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
      <VideoSection/>
      <StatsBar />
      <FeaturesSection/>
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
}
