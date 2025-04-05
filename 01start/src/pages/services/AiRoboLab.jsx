import React from "react";
import Navbar from "../../components/Navbar";
import CarouselLoader from "../../components/CarouselLoader";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

const AiRoboLab = () => {
  const steps = [
    {
      title: "Communicate Your Needs with Us",
      description:
        " We will recommend the most suitable lab solution for your school or college, tailored to your specific requirements and budget.",
    },
    {
      title: "Request Your Tailored Lab Setup",
      description:
        " We will procure the necessary equipment and kits for your lab based on the specified batch size.",
    },
    {
      title: "Establish Your Lab & Receive Expert Training",
      description:
        " Upon delivery, our engineers will assist in setting up the lab and provide hands-on training on using the kits and equipment.",
    },
    {
      title: "Kickstart Your Robotics & AI Lab",
      description:
        " Begin fostering teamwork among students and inspire them to create innovative projects in Robotics & AI.",
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      {/* Content Wrapper */}
      <div className="container mx-auto px-6 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 my-12">
          <div className="text-center lg:text-left max-w-xl">
            <h1 className="text-white text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-orange-500">Accelerate</span> the Next{" "}
              <span className="text-orange-500">Wave</span> of AI, Robotics, and
              AR/VR Lab
            </h1>
            <h4 className="text-gray-400 max-w-xl">
              We have set up 25+ cutting-edge labs across PAN India, equipping
              students with the tools they need to meet the challenges of
              tomorrow.
            </h4>
          </div>
          <img
            className="rounded-full max-w-full h-auto object-cover"
            src="/arvr.png"
            alt="AI & Robotics"
          />
        </div>

        {/* Grid Section */}
        <h1 className="text-white text-center text-4xl lg:text-5xl mt-16">
          Our Labs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-center justify-center mt-12 text-left max-w-7xl mx-auto">
          {[
            {
              title: "RW INNOVATION LAB",
              image: "/innovationlab.webp",
              points: [
                "World-Class Infrastructure",
                "Cutting-Edge Technology Integration",
                "Cutting-Edge Equipment",
                "Next-Gen Robotics Tools",
              ],
            },
            {
              title: "ROBOTIC LAB",
              image: "/Lab.png.webp",
              points: [
                "Architecture & Interior design",
                "Robotic Kits & Components",
                "Instrumentation Tools",
                "Coding Software",
              ],
            },
            {
              title: "AR/VR & AI LAB",
              image: "/arlab.webp",
              points: [
                "Prototype for showcase",
                "AR/VR kits & Component",
                "AR/VR LMS with Curriculum",
                "Student & Teacher Training",
              ],
            },
          ].map((lab, index) => (
            <div
              key={index}
              className="p-1 border border-gray-300 rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="w-full h-56 bg-zinc-200 overflow-hidden rounded-t-lg">
                <img
                  className="w-full h-full object-cover"
                  src={lab.image}
                  alt={lab.title}
                />
              </div>
              <div className="w-full px-4 py-4">
                <h2 className="text-lg text-orange-500 font-bold mb-2">
                  {lab.title}
                </h2>
                <ul className="list-disc pl-5 text-white text-sm space-y-2">
                  {lab.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Section */}
        <div className="mt-12 flex justify-center">
          <CarouselLoader className="w-full max-w-3xl" />
        </div>

        {/* Setup Labs Section */}
        <div className="min-h-screen bg-black px-6 py-16 -mb-24">
          {/* Title Animation */}
          <motion.h1
            className="text-white text-center text-4xl lg:text-5xl mb-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            How to Setup Robotics & AI Labs
          </motion.h1>

          {/* Steps Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-white/30"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
              >
                <h2 className="text-white text-2xl font-semibold mb-2">
                  {step.title}
                </h2>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AiRoboLab;
