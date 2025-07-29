import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center pt-24 pb-16 bg-transparent">
      {/* Tagline */}
      <div className="mb-4">
        <span className="text-xs uppercase tracking-wide text-cyan-400 font-medium bg-[#252321] px-3 py-1 rounded-full border border-[#2a2a2a]">
          Leverage the power of eBPF • OpenTelemetry
        </span>
      </div>
      {/* Main Headline with Animated Typed Text */}
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2 leading-tight max-w-3xl">
        <span>Observability for Microservices.</span>
        <br />
        <span>
          <span className="text-white">On </span>
          <span className="text-orange-500">
            <Typewriter
              words={[
                "Cloud",
                "your own Infra",
                "Kubernetes",
                "AWS, GCP, Azure",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={90}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </span>
          <span className="text-white">, or on your own Infra.</span>
        </span>
      </h1>
      {/* Subheadline */}
      <div className="mt-4 mb-6 text-base text-gray-300 font-medium">
        Squash latencies, detect bottlenecks and debug errors — 
        <span className="text-orange-400 font-semibold">10X faster</span>.<br />
        Slash APM licensing costs by over{" "}
        <span className="text-orange-400 font-semibold">60%</span>
      </div>
      {/* CTA Buttons */}
      <div className="flex space-x-4 mt-2">
        <button className="bg-orange-500 hover:bg-orange-600 transition text-white rounded-full px-6 py-2 font-bold shadow text-sm">
          Get Started For Free
        </button>
        <button className="bg-[#23201b] border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white transition rounded-full px-6 py-2 font-semibold text-sm">
          Read the docs
        </button>
      </div>
    </section>
  );
}
