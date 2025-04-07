import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import CompositeSkillLabImage from "../../assets/composite.webp";

const CompositeSkillLab = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 md:p-12">
      <Navbar />
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center mt-16">
        <div>
          <img
            src={CompositeSkillLabImage}
            alt="Composite Skill Lab"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="text-right">
          <h1 className="text-5xl font-bold text-orange-500">Composite Skill Lab</h1>
        </div>
      </div>
      
      {/* Second Section with Content Below */}
      <div className="max-w-6xl mx-auto mt-12">
        <p className="text-lg mb-4 text-gray-300">
          A Composite Skill Lab is a state-of-the-art learning environment designed to equip students with multidisciplinary skills in Robotics, AI, IoT, 3D Printing, Cybersecurity, Coding, and beyond.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">Why Do Schools Need a Composite Skill Lab?</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>Bridges the gap between theory and practical application.</li>
          <li>Prepares students for future careers in technology, research, and innovation.</li>
          <li>Boosts problem-solving & critical thinking through real-world projects.</li>
          <li>Enhances employability skills in the era of Industry 4.0.</li>
          <li>Encourages interdisciplinary learning for a holistic education experience.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">Our Services Include:</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li><strong>Lab Setup & Infrastructure</strong> – Fully equipped with AI, IoT, Robotics, 3D Printing, and more.</li>
          <li><strong>Customized Curriculum</strong> – Aligned with NEP 2020 and STEM education.</li>
          <li><strong>Teacher Training</strong> – Empowering educators with cutting-edge teaching methodologies.</li>
          <li><strong>Student Workshops & Hackathons</strong> – Hands-on learning experiences.</li>
          <li><strong>Industry Collaborations</strong> – Connecting students with real-world projects & internships.</li>
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

export default CompositeSkillLab;