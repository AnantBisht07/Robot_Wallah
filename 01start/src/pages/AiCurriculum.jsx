import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const curriculumData = [
  {
    title: "Introduction to AI & Robotics",
    description: "Learn the fundamentals of Artificial Intelligence and Robotics, including key concepts and real-world applications.",
  },
  {
    title: "Machine Learning Basics",
    description: "Understand the principles of Machine Learning and how AI models are trained to make intelligent decisions.",
  },
  {
    title: "Hands-on Robotics",
    description: "Get practical experience with robotics hardware and software, programming autonomous robots.",
  },
  {
    title: "AI in Automation",
    description: "Explore how AI is used in industrial automation, healthcare, and space exploration.",
  },
  {
    title: "Capstone Project",
    description: "Apply your skills to a real-world project, designing and building an AI-powered robotic system.",
  },
];

const AiCurriculum = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-900 py-10 px-5 md:px-20 mt-20">
        <Navbar />
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-400">AI & Robotics Curriculum</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Dive into the future of AI and Robotics with our structured curriculum, designed for students, educators, and tech enthusiasts.
        </p>
      </div>
      
      <div className="flex justify-center">
        <img 
          src="https://i.pinimg.com/736x/38/5e/d7/385ed712e43c1db062f3d62f0de0b2a8.jpg" 
          alt="AI & Robotics" 
          className="rounded-lg shadow-lg w-full max-w-3xl"
        />
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {curriculumData.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="w-full"
          >
            <Card className="p-6 bg-gray-200 shadow-lg rounded-2xl">
              <CardContent>
                <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center mt-10">
        <Button 
        onClick={() => navigate('/student-registeration')}className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg shadow-md hover:bg-orange-600">
          Enquire Now
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default AiCurriculum;
