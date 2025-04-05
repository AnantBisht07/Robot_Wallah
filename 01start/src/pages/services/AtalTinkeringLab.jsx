import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const AtalTinkeringLab = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 md:p-12">
      <Navbar />
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center mt-16">
        <div>
          <img
            src="/atal.jpg"
            alt="Atal Tinkering Lab"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="text-right">
          <h1 className="text-6xl font-bold text-orange-500">Atal Tinkering Lab</h1>
        </div>
      </div>
      
      {/* Second Section with Content Below */}
      <div className="max-w-6xl mx-auto mt-12">
        <p className="text-lg mb-4 text-gray-300">
          An Atal Tinkering Lab (ATL) is a space where students can explore, create, and innovate using cutting-edge technology like robotics, AI, 3D printing, and IoT. Launched under the Atal Innovation Mission (AIM) by NITI Aayog, ATL aims to foster a culture of curiosity and problem-solving among young minds.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">How Can Schools Apply for an ATL Lab?</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>Open to schools (government or private) with Grades 6-12.</li>
          <li>The school must have at least 150 students enrolled.</li>
          <li>Space of at least 1,500 sq. ft. dedicated for the lab.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">Application Process:</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li> Online Application: Schools apply through the official AIM portal: <a href="https://aim.gov.in" className="text-orange-400 hover:underline">https://aim.gov.in</a></li>
          <li> Proposal Submission: Submit details on how the lab will be used.</li>
          <li> Evaluation & Selection: Schools are shortlisted based on merit.</li>
          <li> Funding Approval: Selected schools receive ₹20 lakh grant for setting up the lab.</li>
        </ul>
        
        <p className="mt-4 text-gray-300"><strong> Tip:</strong> Schools with a strong vision for innovation and STEM education stand a better chance of selection!</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">How Robot Wallah Supports ATL Labs</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>Complete ATL Setup – Robotics kits, AI tools, 3D printers, and IoT devices.</li>
          <li>Curriculum Integration – Hands-on STEM learning aligned with NEP 2020.</li>
          <li>Teacher Training – Equipping educators to teach robotics and AI.</li>
          <li>Workshops & Hackathons – Fun and interactive sessions for students.</li>
          <li>Project-Based Learning – Encouraging real-world applications and innovation.</li>
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

export default AtalTinkeringLab;