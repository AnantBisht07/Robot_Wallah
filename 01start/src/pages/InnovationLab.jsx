import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const InnovationLab = () => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-zinc-900 text-orange-500 min-h-screen">
      <Navbar />

      {/* Header */}
      <header className="bg-orange-500 text-white text-center py-16 px-4 mt-10 rounded-lg shadow-2xl">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
          Building the Future of Robotics & AI
        </h1>
        <p className="text-base md:text-xl">
          Innovate, Create, and Transform with Robot Wallah Innovation Lab
        </p>
      </header>

      {/* Amenities Section */}
      <section className="mt-16 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-white mb-8">
          Our Amenities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            "INFRASTRUCTURE",
            "ARCHITECTURE",
            "INTERIOR DESIGN",
            "3D PRINTER",
            "TFT/T.V/SMART",
            "DRONE",
            "ROBOTICS",
            "IOT HOME AUTOMATION",
            "AR/VR",
            "A.I",
            "INSTRUMENTATION",
            "WORK STATION",
            "SOLDERING SECTION",
            "PROTOTYPE PROJECT",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-2xl p-6 text-center text-lg font-medium border border-gray-200"
            >
              <p className="text-white font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InnovationLab;
