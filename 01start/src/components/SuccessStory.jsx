import React from "react";

const SuccessStory = () => {
  return (
    <div className="bg-black min-h-screen pb-16">
      <div className="pt-10">
        <h1 className="text-orange-500 text-3xl md:text-4xl text-center font-semibold">
          Story of Success
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full items-center justify-center text-center mt-16 px-4 sm:px-8 md:px-16 lg:px-28">
        {['story1.jpg', 'story2.jpg', 'story3.jpg'].map((img, index) => (
          <div key={index} className="p-1 border border-gray-300 rounded-lg shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
            <img src={img} alt="success story" className="w-full h-64 object-cover rounded-lg" />
          </div>
        ))}
      </div>

      {/* IIT Hyderabad Section */}
      <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10 mt-20 px-4 sm:px-8 md:px-16 lg:px-28">
        <img src="vision.png" alt="sideimg" className=" w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-lg" />
        <div className="max-w-2xl">
          <h1 className="text-lg md:text-xl font-semibold text-orange-500">
            Technology Partner - Elan & nVision (IIT Hyderabad)
          </h1>
          <p className="mt-4 text-gray-300 text-sm md:text-lg leading-relaxed">
            Elan & nVision is IIT Hyderabad's annual techno-cultural fest, known
            for its dynamic blend of innovation, technology, and creativity. Robot
            Wallah proudly organized an engaging robotics event at this prestigious
            platform, providing students with hands-on learning experiences and an
            opportunity to showcase their skills in a competitive environment.
          </p>
        </div>
      </div>

      {/* Workshop, Championship, AI & Robotics Lab */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mt-20 px-4 sm:px-8 md:px-16 lg:px-28 text-left">
        {[ 
          {
            img: "student.jpg", title: "WORKSHOP", details: [
              "Training by industry expert",
              "90% is practical & 10% theory",
              "Assembly of robotic components",
              "Hands-on learning meets innovation"
            ]
          },
          {
            img: "child.png.webp", title: "CHAMPIONSHIP", details: [
              "Selection from zonal center",
              "Grand final at IIT India",
              "Robo race, drone race, robo war, etc.",
              "Winner prize: 10 Lakh rupees"
            ]
          },
          {
            img: "Lab.png.webp", title: "AI & ROBOTICS LAB", details: [
              "Architecture design & setup",
              "Prototype for showcase",
              "Kits, components, and products",
              "Class-specific LMS & Curriculum"
            ]
          }
        ].map((item, index) => (
          <div key={index} className="p-1 border border-gray-300 rounded-lg shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
            <div className="w-full h-44 bg-zinc-200 overflow-hidden rounded-t-lg">
              <img className="w-full h-full object-cover" src={item.img} alt={item.title} />
            </div>
            <div className="w-full px-3 py-4">
              <h2 className="text-md text-orange-500 font-bold">{item.title}</h2>
              <ul className='text-white text-sm md:text-base mt-2 list-disc pl-5'>
                {item.details.map((detail, i) => (
                  <li key={i} className='font-normal'>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStory;