import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import kk from "../assets/kk.jpg";
import pradeep from "../assets/pradeep.jpg";
import bihar from "../assets/bihar.webp";
import bhatt from "../assets/bhatt.webp";
import manish from "../assets/manish.webp";
import tp from "../assets/tp.jpg";
import vikas from "../assets/vikas.webp";


const About = () => {
  const teamData = [
    { img: kk, name: "K.K PANDA", subname:"Chief Financial Officer (CFO)" },
    { img: pradeep, name: "PRADEEP KR. PANDIT", subname: "Chief Marketing Officer (CMO)" },
    { img: bihar, name: "SANJAY KUMAR", subname: "Bihar Branch Head"},
    { img: bhatt, name: "Snehasish Bhattacharji", subname: "(MENTOR)" },
    { img: manish, name: "MANISH KUMAR", subname: "(CTO)" },
    { img: tp, name: "T.P.MAURYA", subname: "(IT HEAD)" },

  ];

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      {/* Navbar */}
      <Navbar />

      {/* About Section */}
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-12 mt-14">
        {/* Left Side - CEO Image */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src={vikas}
            alt="Vikas Singh"
            className="w-80 h-80 md:w-[450px] md:h-[450px] rounded-full object-cover shadow-xl"
          />
        </div>

        {/* Right Side - About Us Text */}
        <div className="md:w-2/3 text-center md:text-left mt-8 md:mt-0 md:ml-12">
          <h2 className="text-4xl font-bold text-gray-200">About Us</h2>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Welcome to our company! Led by CEO{" "}
            <span className="font-semibold">Vikas Singh</span>, we specialize in
            designing, developing, and building autonomous robots for healthcare, 
            education, and manufacturing industries.
            <br />
            <br />
            Our team has worked on major projects, including AI-powered humanoid robots, 
            and we believe that robotics will play an essential role in both homes and industries.
            <br />
            <br />
            With expertise in Industry 4.0 and 5.0, we envision a future where AI-powered 
            robots transform our daily lives. Our commitment to innovation, adaptability, and 
            excellence drives us forward.
          </p>
        </div>
      </div>

      {/* Company Backing Section */}
      <div className="bg-gray-800 py-8">
        <h1 className="text-center text-3xl font-semibold text-orange-500">
          Backed By Bharat Genius Search Pvt. Ltd.
        </h1>
      </div>

      {/* Team Section */}
      <div className="container mx-auto py-12">
        <h1 className="text-center text-4xl font-semibold mb-12">Core Team</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-12">
          {teamData.map((member, idx) => (
            <div
              key={idx}
              className="w-full max-w-sm mx-auto border rounded-lg overflow-hidden shadow-md bg-gray-800 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="w-full h-80 bg-gray-700 overflow-hidden rounded-t-lg">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  src={member.img}
                  alt={member.name}
                />
              </div>
              <h2 className="text-center text-2xl mt-4 font-bold">
                {member.name}
              </h2>
              <h2 className="text-center text-sm mt-1 mb-4 text-gray-400 ">
                {member.subname}
              </h2>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
