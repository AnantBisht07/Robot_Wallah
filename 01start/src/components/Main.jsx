import React from "react";
import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";
import roboremovebg from "../assets/robo-removebg.png";
import codingremovebg from "../assets/coding-removebg.png";
import airemovebg from "../assets/ai-removebg.png";
import first from "../assets/first.png";

const Main = () => {
  return (
    <div className="bg-white py-8 mx-4 md:mx-12 mt-14">
      {/* 4 Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 h-auto md:h-56 w-full items-center justify-center text-center gap-x-6 gap-y-6 px-4">
        {[
          { number: "2,00,000+", text: "Learning Hours Redefined" },
          { number: "30,000+", text: "Future Innovators Trained" },
          { number: "300+", text: "Innovations Engineered" },
          { number: "4.9/5", text: "Parent Satisfaction Score" },
        ].map((item, index) => (
          <div key={index} className="p-6 border border-gray-700 rounded-lg shadow-lg bg-orange-500">
            <p className="text-lg font-semibold">
              {item.number} <br />
              <span className="text-gray-100">{item.text}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Main Section */}
      <div className="flex flex-col items-center justify-center text-center px-4 md:px-6 lg:px-20 mt-10 md:mt-16">
        <div className="flex flex-col lg:flex-row items-center justify-evenly w-full gap-10 md:gap-20">
          {/* Heading & Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-bold">
              <span className="text-orange-500">Inspiring</span> the tech leaders{" "}
              <br className="hidden md:block" />
              of the <span className="text-orange-500">coming generation</span>
            </h1>

            <p className="text-base md:text-lg mt-6 md:mt-10">
              Start your kid's journey by{" "}
              <span className="text-red-500 font-bold">
                <Typewriter
                  words={["Robot Wallah", "Today"]}
                  loop={Infinity}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>

            <Button className="mt-6 md:mt-8 h-12 w-auto">Book a trial class</Button>

            {/* Topics Section */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 md:gap-10 mt-10">
              {[
                { img: roboremovebg, label: "Robotics" },
                { img: codingremovebg, label: "Coding" },
                { img: airemovebg, label: "AI" },
              ].map((topic, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img src={topic.img} alt={topic.label} className="h-12 w-auto" />
                  <h3 className="mt-2 font-bold text-sm md:text-base">{topic.label}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Circular Image */}
          <div className="relative mt-10 lg:mt-24">
            <div className="h-[250px] w-[250px] md:h-[350px] md:w-[350px] lg:h-[450px] lg:w-[450px] bg-orange-500 rounded-full flex items-center justify-center">
              <img src={first} alt="Feature" className="w-full h-auto rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
