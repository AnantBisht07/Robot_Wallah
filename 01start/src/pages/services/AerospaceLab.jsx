import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const AerospaceLab = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 md:p-12">
      <Navbar />
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center mt-16">
        <div>
          <img
            src="https://i.pinimg.com/736x/7a/95/c5/7a95c569ac143d5ce7b34733b02ff953.jpg"
            alt="Aerospace Lab"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="text-right">
          <h1 className="text-6xl font-bold text-orange-500">Aerospace Lab</h1>
        </div>
      </div>
      
      {/* Second Section with Content Below */}
      <div className="max-w-6xl mx-auto mt-12">
        <p className="text-lg mb-4 text-gray-300">
          An Aerospace Lab is a cutting-edge learning space designed to introduce students to the principles of aerodynamics, flight mechanics, propulsion, space technology, and satellite communication. It provides hands-on experience with drone technology, model rocketry, computational simulations, and wind tunnel experiments, preparing students for careers in aviation, aerospace engineering, and space science.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">Why Do Schools & Colleges Need an Aerospace Lab?</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>Hands-On Learning – Students build drones, rockets, and satellites instead of just reading about them.</li>
          <li>Encourages Innovation – Sparks scientific curiosity and fosters interest in aerospace careers.</li>
          <li>Bridges Theory & Application – Connects physics, math, engineering, and AI with real-world aerospace applications.</li>
          <li>Supports STEM & Future Careers – Prepares students for opportunities in aviation, space technology, and defense sectors.</li>
          <li>Promotes Research & Development – Facilitates aerodynamic experiments, AI-driven simulations, and spacecraft design.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">Components of a Modern Aerospace Lab</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li> Aerodynamics Section – Wind tunnels, airflow simulators, and lift-drag experiments.</li>
          <li> Drone & UAV Development – Hands-on training in building, programming, and flying drones.</li>
          <li> Rocketry & Propulsion – Model rockets, launch simulations, and thrust experiments.</li>
          <li> Flight Mechanics & Aircraft Design – Understanding lift, thrust, drag, and stability principles.</li>
          <li> Satellite & Space Technology – Mini satellite (CubeSat) design, telemetry, and data analysis.</li>
          <li> AI & Aerospace Simulations – AI-powered modeling for flight paths, planetary exploration, and weather prediction.</li>
        </ul>
        
        <div className="mt-8">
          <Link
            to='/contact'
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AerospaceLab;
