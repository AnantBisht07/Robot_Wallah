import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useToast } from "../hooks/use-toast";

const StudentRegisteration = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    schoolName: "",
    schoolType: "",
    standard: "",
    district: "",
    state: "",
    refferalCode: ""
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
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
        "http://localhost:4000/api/v1/auth/registration",
        formData,
        { withCredentials: true }
      );
      setMessage(res.data.message);
      navigate("/");
      toast({
        title: "Success",
        description: "Details received successfully, we will reach out to you soon!",
      });

      setFormData({
        name: "",
        fatherName: "",
        schoolName: "",
        schoolType: "",
        standard: "",
        district: "",
        state: "",
        refferalCode: ""
      });
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "Registration failed. Please try again."
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
          <div className="flex justify-center items-center min-h-screen p-4 mt-20">
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 md:p-8 shadow-xl max-w-lg w-full"
            >
              <div className="mb-4">
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

              <div className="mb-6">
                <label htmlFor="text" className="block text-gray-400 mb-1">
                  Fathers name
                </label>
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  placeholder="Enter your fathers name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="text" className="block text-gray-400 mb-1">
                  School name
                </label>
                <input
                  type="text"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  placeholder="Enter your fathers name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="text" className="block text-gray-400 mb-1">
                  School Type
                </label>
                <select
                  type="text"
                  name="schoolType"
                  value={formData.schoolType}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  placeholder="Enter your school Type"
                >
                  <option value="" disabled>
                    Select your school type
                  </option>
                  <option value="government">Government</option>
                  <option value="private">Private</option>{" "}
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="text" className="block text-gray-400 mb-1">
                  Standard
                </label>
                <input
                  type="text"
                  name="standard"
                  value={formData.standard}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  placeholder="Enter your Standard"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="text" className="block text-gray-400 mb-1">
                  District
                </label>
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  placeholder="Enter your District"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="text" className="block text-gray-400 mb-1">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  placeholder="Enter your State"
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

export default StudentRegisteration;
