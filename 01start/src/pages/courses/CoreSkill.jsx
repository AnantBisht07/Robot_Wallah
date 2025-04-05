import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

const CoreSkill = () => {
  const data = [
    {
      heading: "Artificial Intelligence",
      description:
        "Understand the core concepts of AI and its applications across industries.",
      image:
        "https://i.pinimg.com/474x/fc/d8/31/fcd8310354601ee5a6f161324cee0ada.jpg",
    },
    {
      heading: "Robotics",
      description:
        "Learn how robotics integrates with AI and engineering to solve real-world problems.",
      image:
        "https://i.pinimg.com/474x/a8/bb/32/a8bb3232f6ecfad473661f2cf822d6e7.jpg",
    },
    {
      heading: "Cyber Security",
      description:
        "Explore the importance of cybersecurity and best practices to protect digital assets.",
      image:
        "https://i.pinimg.com/474x/4d/a4/44/4da4441108a5238b1d18206cac2ebbe8.jpg",
    },
    {
      heading: "Data Science",
      description:
        "Dive into data analytics, machine learning, and big data technologies.",
      image:
        "https://i.pinimg.com/736x/4a/37/92/4a37927d51ed5e5f31387f5f245af808.jpg",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);


  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 my-10 gap-10 md:gap-16">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-snug text-white text-center md:text-left">
          Core skill <br />
          <span className="text-orange-600">Development </span> <br /> Program
        </h1>

        <div className="h-60 w-60 sm:h-80 sm:w-80 md:h-[450px] md:w-[450px]">
          <img className="w-full h-full object-cover rounded-full" src="https://i.pinimg.com/474x/60/6c/6e/606c6eb70f8a53816dffd6e06e00ff54.jpg" alt="Core Skill" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 sm:px-12 py-10 max-w-[90rem] mx-auto text-center">
        {["10+ Year Experience", "99% Accuracy Rate", "500+ Positive Reviews", "100+ Trusted Partners"].map((text, idx) => (
          <div key={idx} className="p-6 border border-gray-700 rounded-lg shadow-lg bg-orange-500">
            <p className="text-lg font-semibold text-gray-100">{text}</p>
          </div>
        ))}
      </div>

      {/* Explore Programs Section */}
      <div className="relative px-4 sm:px-6">
        <h1 className="text-center text-white text-3xl sm:text-4xl md:text-5xl pt-20 relative">
          Explore our Programs
          <motion.svg
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute left-1/2 -translate-x-1/2 bottom-[-20px] sm:bottom-[-35px] w-[200px] sm:w-[300px]"
            viewBox="0 0 180 30"
            fill="none"
            stroke="orange"
            strokeWidth="1"
            strokeLinecap="round"
          >
            <path d="M5 20c30-10 50 10 80 0s40-20 80-10" />
          </motion.svg>
        </h1>

        {/* Program Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-12 max-w-[80rem] mx-auto px-4 sm:px-8">
          {data.map((item, idx) => (
            <div key={idx} className="bg-black text-white p-6 sm:p-8 rounded-2xl shadow-xl border border-orange-500">
              <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4">
                <img src={item.image} alt={item.heading} className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full" />
                <video autoPlay muted loop playsInline className="h-16 w-16 sm:h-20 sm:w-20">
                  <source src="/comingsoon.mp4" type="video/mp4" />
                </video>
              </div>

              <h1 className="text-lg sm:text-xl font-bold my-3 text-orange-500">{item.heading}</h1>
              <p className="text-sm sm:text-base leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CoreSkill;
