import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import hr from "../assets/hr.webp";
import deepak from "../assets/deepak.jpg";
import kanchan from "../assets/kanchan.jpg";
import babita from "../assets/babita.jpg";
import shaan from "../assets/shaan.jpg";
import manish from "../assets/manish.jpg";
import law from "../assets/law.webp";
import exc from "../assets/exc.webp";


const Ourteam = () => {
  const data = [
    { img: hr, name: "CHRO" },
    { img: deepak, name: "Sr. ROBOTIC ENGINEER" },
    { img: kanchan, name: "STEM ENGINEER" },
    { img: babita, name: "SENIOR COORDINATOR" },
    { img: shaan, name: "SENIOR COORDINATOR" },
    { img: manish, name: "SENIOR COORDINATOR" },
    { img: law, name: "TAXATION AND LEGALITY" },
    { img: exc, name: "EXECUTION COORDINATOR" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-6 sm:px-24">
      <Navbar />

      <div className="container mx-auto">
        <h1 className="text-center my-12 text-3xl sm:text-4xl font-semibold">Our Team</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-12">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="w-full max-w-xs mx-auto border rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <div className="w-full h-64 sm:h-80 bg-zinc-200 overflow-hidden rounded-t-lg">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  src={item.img}
                  alt={item.name}
                />
              </div>
              <h2 className="text-white text-center text-xl sm:text-xl mt-4 mb-2 font-bold">
                {item.name}
              </h2>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Ourteam;
