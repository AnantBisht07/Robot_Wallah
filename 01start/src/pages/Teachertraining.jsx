import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const trainingData = [
  {
    title: "AI & Robotics in Education",
    description: "Learn how to integrate AI and Robotics into your teaching methods for an interactive classroom experience.",
  },
  {
    title: "Technology-Integrated Learning",
    description: "Discover innovative ways to use technology for enhancing student engagement and understanding.",
  },
  {
    title: "Hands-on Workshops",
    description: "Participate in practical sessions to build confidence in teaching AI and Robotics and many more.",
  },
  {
    title: "Expert Guidance",
    description: "Gain insights from industry experts and educators specializing in AI-driven education.",
  },
  {
    title: "Certification Program",
    description: "Earn a certification upon completing the program to showcase your expertise in AI-powered teaching.",
  },
];

const Teachertraining = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-900 py-10 px-5 md:px-20 mt-20">
        <Navbar />
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-400">Teacher Training Program</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Empowering educators with future-ready skills through AI, Robotics, and technology-integrated learning.
        </p>
      </div>
      
      <div className="flex justify-center">
        <img 
          src="https://i.pinimg.com/736x/cc/42/af/cc42aff82d9b52852ac89df06a197df2.jpg" 
          alt="Teacher Training" 
          className="rounded-lg shadow-lg w-full max-w-3xl h-[500px]"
        />
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {trainingData.map((item, index) => (
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
        onClick={() => navigate('/student-registeration')}
        className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg shadow-md hover:bg-orange-600">
          Enquire Now
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default Teachertraining;