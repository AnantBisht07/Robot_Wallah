import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import rapidPng from "../../assets/rapid.png";

const RapidSkill = () => {
  const data = [
    {
      heading: "AI Tools",
      description:
        "Learn about AI-powered tools designed to enhance automation and productivity.",
      image:
        "https://i.pinimg.com/736x/e2/29/67/e229672c83df7d5ffafcf6ec258a8bd7.jpg",
    },
    {
      heading: "Prompt Engineering",
      description:
        "Master the art of writing effective prompts for AI models and chatbots.",
      image:
        "https://i.pinimg.com/736x/33/8c/43/338c43ab3d339828ddf206d1c0057e9e.jpg",
    },
    {
      heading: "Gen AI",
      description:
        "Explore the next generation of AI-driven content creation and automation.",
      image:
        "https://i.pinimg.com/736x/9c/14/7b/9c147b895fac432f8425075999ed3f33.jpg",
    },
    {
      heading: "Chat GPT",
      description:
        "Unlock the full potential of AI conversational models for various applications.",
      image:
        "https://i.pinimg.com/736x/df/21/71/df2171514b4e67335c6699204d3c665b.jpg",
    },
    {
      heading: "Physical AI",
      description:
        "Dive into the intersection of AI and robotics for real-world problem-solving.",
      image:
        "https://i.pinimg.com/736x/1c/f7/43/1cf743d8ae15c7b0f26889d8aacc436a.jpg",
    },
    {
      heading: "Agentic AI",
      description:
        "Learn how AI agents operate autonomously in various decision-making processes.",
      image:
        "https://i.pinimg.com/474x/c9/f8/78/c9f878d56f8264ee6dc61006cc06641e.jpg",
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
          Rapid skill <br />{" "}
          <span className="text-orange-600">Development </span> <br /> Program
        </h1>

        <div className="h-60 w-60 sm:h-80 sm:w-80 md:h-[450px] md:w-[450px]">
          <img className="w-full h-full object-cover rounded-lg" src={rapidPng} alt="Rapid Skill" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 sm:px-12 py-10 max-w-[90rem] mx-auto text-center">
        {[
          { text: "10+ Year Experience" },
          { text: "99% Accuracy Rate" },
          { text: "500+ Positive Reviews" },
          { text: "100+ Trusted Partners" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="p-6 border border-gray-700 rounded-lg shadow-lg bg-orange-500"
          >
            <p className="text-lg font-semibold text-gray-100">{item.text}</p>
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
            <div
              key={idx}
              className="bg-black text-white p-6 sm:p-8 rounded-2xl shadow-xl border border-orange-500"
            >
              <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4">
                <img
                  src={item.image}
                  alt={item.heading}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full"
                />
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-16 w-16 sm:h-20 sm:w-20"
                >
                  <source src="/comingsoon.mp4" type="video/mp4" />
                </video>
              </div>

              <h1 className="text-lg sm:text-xl font-bold my-3 text-orange-500">
                {item.heading}
              </h1>
              <p className="text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RapidSkill;
