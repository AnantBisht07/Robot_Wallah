import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import Pmshriyojna from "../../assets/yojna.webp";

const PmShriYojna = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 md:p-12">
        <Navbar />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center mt-16 ">
        <div>
          <img
            src={Pmshriyojna}
            alt="PM SHRI Yojana"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="text-right">
          <h1 className="text-6xl font-bold text-orange-500">PM SHRI Yojana</h1>
        </div>
      </div>

      {/* Second Section with Content Below */}
      <div className="max-w-6xl mx-auto mt-12">
        <p className="text-lg mb-4 text-gray-300">
          The PM SHRI (Prime Minister School for Rising India) Yojana is a government initiative launched by Prime Minister Narendra Modi on September 5, 2022. This program aims to upgrade more than 14,500 existing schools and transform them into modern, high-quality learning institutions that align with the National Education Policy (NEP) 2020.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">Key Features of PM SHRI Schools:</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li> Smart Classrooms – Digital learning tools for interactive education.</li>
          <li> Modern Labs & Libraries – Encouraging innovation and research.</li>
          <li> AI & Robotics Integration – Bringing cutting-edge technology into education.</li>
          <li> Inclusive & Sustainable Environment – Equal learning opportunities for all students.</li>
          <li> Skill-Based Learning – Preparing students for the 21st-century job market.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">How to Apply for PM SHRI School Yojana</h2>
        <p className="mb-4">Step-by-Step Application Process:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li> Register Online – Schools must apply through the official PM SHRI portal. <a href="https://www.education.gov.in/pmshri" className="text-orange-500 hover:underline">Apply here</a>.</li>
          <li> Evaluation Process – Applications are reviewed based on infrastructure, teaching methods, and technology integration.</li>
          <li> Final Selection – Shortlisted schools receive funding, training, and assistance to develop into model institutions.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">How Robot Wallah Supports PM SHRI Schools:</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li> Setting Up Robotics Labs – We help schools establish state-of-the-art AI & robotics labs.</li>
          <li> Curriculum Development – Aligning robotics and AI courses with NEP 2020 guidelines.</li>
          <li> Teacher Training Programs – Empowering educators with AI, coding, and robotics knowledge.</li>
          <li> Hands-On Workshops for Students – Offering practical, skill-based learning experiences.</li>
          <li> Future-Ready Learning – Preparing students for careers in AI, automation, and tech-driven industries.</li>
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

export default PmShriYojna;
