import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const openPDF = () => {
    window.open('/cp.pdf', '_blank');
  }
  return (
    <div className="relative h-[695px] w-full flex flex-col items-center justify-center text-white px-4">
      {/* Video Background */}
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="vdo.mp4"
          type="video/mp4"
        ></video>
      </div>

      {/* Content Section */}
      <div className="relative z-10 text-center">
        {/* Responsive Heading */}
        <h1 className="text-[5rem] md:text-[8rem] lg:text-[16rem] font-bold glow-effect leading-none -mb-0 md:-mb-6">
          AIR EDU
        </h1>

        {/* Responsive Subheading */}
        <div className="h-12 flex items-center justify-center">
          <p className="text-md md:text-xl lg:text-2xl text-center max-w-[90%] md:max-w-[70%]">
            Galaxies of Learning Powered by AI & Robotics
          </p>
        </div>

        {/* Button */}
        <div className="mt-6 md:mt-8">
          <Button
          onClick={openPDF}
           className="h-12 w-36 md:h-14 md:w-44 text-base md:text-lg bg-[#0A1424] border border-gray-200">
            Click Here
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
