import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { Loader2 } from "lucide-react";

const API_URL = "http://localhost:5000";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    number: "",
    password: "",
    email: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const [pageLoading, setPageLoading] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "https://robot-wallah-1.onrender.com/api/v1/auth/signup",
        formData,
        { withCredentials: true }
      );
      setMessage(res.data.message);
      navigate("/signin");
      setFormData({
        username: "",
        password: "",
        number: "",
        email: "",
      });
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Signup failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // loading when component render
  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {pageLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Loader2 className="w-12 h-12 text-white animate-spin" />
        </div>
      ) : (
        <>
          <Navbar />
          <div className="flex justify-center items-center min-h-screen p-4">
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 md:p-8 shadow-xl max-w-lg w-full"
            >
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-400 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="number" className="block text-gray-400 mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                  pattern="[0-9]*"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="mb-4">
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

              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-400 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  placeholder="Enter your password"
                />
              </div>

               

              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-1"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="text-md flex items-center gap-2 justify-center">
                      <svg
                        className="w-5 h-5 animate-spin text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        {" "}
                        <circle
                          className="opacity-65"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="white"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 018 8h-4l3 3 3-3h-4a8 8 0 01-8 8v-4l-3 3 3 3v-4a8 8 0 01-8-8h4l-3-3-3 3h4z"
                        ></path>
                      </svg>
                      Signing In...
                    </div>
                  ) : (
                    "Sign Up"
                  )}
                </button>
                <h4 className="text-xs mt-6 text-left">
                  Already have an account?{" "}
                  <span className="text-blue-700 text-sm cursor-pointer">
                    <Link to="/signin">Sign In</Link>
                  </span>
                </h4>
              </div>

              {message && (
                <p className="mt-4 text-center text-green-400">{message}</p>
              )}
            </form>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Register;
