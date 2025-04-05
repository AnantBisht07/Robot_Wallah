import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ApplyMentor = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    expertise: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      {/* CEO and Mentor Section */}
      <section className="mb-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-32 mx-4 md:mx-32 pt-28">
        <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center">
          <img
            src="/vikas.webp" // Replace with your CEO image path
            alt="Vikas Singh, CEO"
            className="w-full h-auto rounded-full shadow-xl object-cover"
          />
        </div>
        <div className="md:w-2/3 md:pl-8 text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-4">
            Welcome to <span className="text-orange-500">Robot </span>Wallah
          </h2>
          <p className="text-lg text-gray-300">
            Robot Wallah is a pioneering company focused on transforming the
            future of education through the integration of Robotics, Artificial
            Intelligence (AI), and Augmented/Virtual Reality (AR/VR) into the
            classroom. We are dedicated to equipping students with the skills
            and knowledge required to thrive in a technology-driven world. Our
            mission is to revolutionize how schools and colleges prepare their
            students for the challenges of tomorrow. We specialize in designing
            and setting up state-of-the-art Robotic Labs, AI Labs, and AR/VR
            Labs, creating immersive and hands-on learning environments that
            bridge the gap between theoretical learning and real-world
            applications.
          </p>
          <p className="mt-4 text-lg text-gray-300">
            Let’s innovate together and grow your expertise in robotics and AI!
          </p>
        </div>
      </section>

      {/* Mentor Application Form */}
      <div className="flex justify-center items-center min-h-screen p-4 gap-20">
        <h1 className="max-w-2xl text-gray-300 ">
          Hello, I’m Vikas Singh, founder and CEO of Robotwallah. I specialize
          in designing and developing autonomous robots for industries like
          healthcare, education, and manufacturing. I've worked on major
          projects such as AI-based humanoid robots. I believe that in the
          future, robots will play a crucial role in both homes and industries.
          With the rise of Industry 4.0 and 5.0, technologies like AI,
          autonomous systems, blockchain, and cybersecurity will transform how
          we live and work. My work has helped companies and research labs
          improve automation, efficiency, and reduce risks in unsafe conditions.
          With hands-on experience in robotics, AI, machine learning, and data
          science, I’m passionate about practical learning and staying aligned
          with industry trends. If you’re interested in robotics and AI, I’d
          love to guide you in growing your expertise. Thank you!chine learning
          and data science i focus on practical learning and industry trends and
          career guidance for student and professionals If you are passionate
          about robotics and artificial intelligence, I am love to help you
          navigate this field and grow your expertise. Thank you.
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 md:p-8 shadow-xl max-w-lg w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-gray-400 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-400 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-400 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="experience" className="block text-gray-400 mb-1">
              Experience (Years)
            </label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              placeholder="Enter your years of experience"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="expertise" className="block text-gray-400 mb-1">
              Expertise
            </label>
            <select
              name="expertise"
              value={formData.expertise}
              onChange={handleChange}
              required
              rows="1"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              placeholder="Enter your expertise areas (e.g., Iot, robotics)"
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="Robotics">Robotics</option>
              <option value="Iot">Iot</option>
              <option value="Full Stack Dev">Full Stack Dev</option>
            </select>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default ApplyMentor;
