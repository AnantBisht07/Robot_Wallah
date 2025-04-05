import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {


  return (
    <footer className="bg-gray-900 text-white py-4 px-6">
      <hr className="border-t border-gray-600 my-20" />
      {/* Footer Content Wrapper */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* Logo & About */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-orange-500">Robot Wallah</h1>
          <p className="mt-2 text-gray-300 text-sm">
            Empowering the future of robotics with cutting-edge technology and
            hands-on learning experiences.
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h2 className="text-lg font-semibold text-orange-500">
            Important Links
          </h2>
          <ul className="mt-2 space-y-2 text-gray-300">
            <li>
              <Link to='/team' className="hover:text-orange-500">
                Team
              </Link>

            </li>
            <li>
            <Link to='/about' className="hover:text-orange-500">
                About
              </Link>
            </li>
           
            <li>
              <a href="#" className="hover:text-orange-500">
                Events
              </a>
            </li>
            <li>
              <Link to='/contact' className="hover:text-orange-500">
                Contact
              </Link>
            </li>
            <li>
            <Link to='/privacy-policy' className="hover:text-orange-500">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h2 className="text-lg font-semibold text-orange-500">
            Our Services
          </h2>
          <ul className="mt-2 space-y-2 text-gray-300">
            <li>
              
              <Link to='/innovation-lab' className="hover:text-orange-500">
              Robot wallah innovation lab
              </Link>
            </li>
            <li>
            <Link to='/services/pm-shri-yojna' className="hover:text-orange-500">
            PM Shri school
              </Link>
            </li>
            <li>
              <Link to='/services/composite-skill-lab' className="hover:text-orange-500">
              Composite skill lab
              </Link>
            </li>
            <li>
              <Link to='/services/aerospace-lab' className="hover:text-orange-500">
              Aero space lab
              </Link>
            </li>
            <li>
              <Link to='/services/atal-tinkering-lab' className="hover:text-orange-500">
              Atal Tinkering lab
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-around">
        {/* Social Media Links */}
      <div className="mt-8 flex justify-center space-x-6">
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/robotwallah" className="text-gray-400 hover:text-orange-500 text-xl">
          <FaInstagram />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="http://www.youtube.com/@RobotWallah" className="text-gray-400 hover:text-orange-500 text-xl">
          <FaYoutube />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/robotwallah/" className="text-gray-400 hover:text-orange-500 text-xl">
          <FaFacebook />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="http://www.linkedin.com/in/robot-wallah" className="text-gray-400 hover:text-orange-500 text-xl">
          <FaLinkedin />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://x.com/robot_wallah?t=divNnc3y8k6T1Jyfrxrz2Q&s=08" className="text-gray-400 hover:text-orange-500 text-xl">
          <FaTwitter />
        </a>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Robot Wallah. All rights reserved.
      </div>
      </div>
    </footer>
  );
};

export default Footer;
