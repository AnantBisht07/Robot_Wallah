import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <Navbar />

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-12 mt-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-600 text-center">
          Privacy Policy
        </h1>

        <p className="mb-4 text-sm sm:text-base">
          This Privacy Policy (“Policy”) forms an electronic contract within the
          provisions of the Information Technology Act, 2000 (“IT Act”) and the
          rules made thereunder. By using our website{" "}
          <a href="https://www.robotwallah.com" className="text-blue-500">
            www.robotwallah.com
          </a>
          , you agree to the terms outlined herein. If you do not agree, please
          refrain from using our website.
        </p>

        {/* Section 1 - Collection of Information */}
        <h2 className="text-lg sm:text-xl font-semibold mt-6">
          1. Collection of Information
        </h2>
        <h3 className="text-md sm:text-lg font-medium mt-4">
          1.1 Personal Information
        </h3>
        <ul className="list-disc pl-6 text-sm sm:text-base">
          <li>Name</li>
          <li>Phone number (mobile and/or residence)</li>
          <li>Email ID (primary/alternative)</li>
          <li>Address (official/residential/other)</li>
          <li>Gender and Date of Birth</li>
          <li>Social media information if linked</li>
          <li>IP address</li>
          <li>Other required information under the IT Act</li>
        </ul>

        {/* Other Sections */}
        <h3 className="text-md sm:text-lg font-medium mt-4">
          1.2 Non-Personal Information
        </h3>
        <ul className="list-disc pl-6 text-sm sm:text-base">
          <li>Internet service provider details</li>
          <li>Browser type and device information</li>
          <li>User location</li>
          <li>Website usage details and activity logs</li>
          <li>User-generated content (projects, competitions, etc.)</li>
        </ul>

        {/* Additional Sections */}
        <h2 className="text-lg sm:text-xl font-semibold mt-6">
          2. Representation and Warranties
        </h2>
        <p className="text-sm sm:text-base mt-2">
          By using this website, you represent and warrant that:
        </p>
        <ul className="list-disc pl-6 text-sm sm:text-base">
          <li>The information you provide is accurate and up to date.</li>
          <li>You are authorized to share any third-party information.</li>
          <li>The collection and use of information do not violate laws.</li>
        </ul>

        <h2 className="text-lg sm:text-xl font-semibold mt-6">
          3. Purpose and Use of Information
        </h2>
        <ul className="list-disc pl-6 text-sm sm:text-base">
          <li>Providing and improving educational services</li>
          <li>Responding to user inquiries</li>
          <li>Enhancing security and preventing fraud</li>
          <li>Sharing promotional content with user consent</li>
        </ul>

        {/* Grievance Section */}
       <h2 className="text-xl font-semibold mt-6">8. Grievance Redressal</h2>
<div className="text-gray-800">
  <div className="mt-4 p-4 bg-gray-100 rounded-lg">
    <p className="flex items-center gap-2 mb-2">
      <Mail className="w-5 h-5 text-blue-500" />
      <a href="mailto:info@robotwallah.com" className="text-blue-500">
        info@robotwallah.com
      </a>
    </p>
    <p className="flex items-center gap-2 mb-2">
      <Phone className="w-5 h-5 text-blue-500" /> 
      +91 9984471666 / +91 8920779978
    </p>
    <p className="flex items-start gap-2 mb-2">
      <MapPin className="w-5 h-5 text-blue-500" /> 
      <span>Head Office: 103/31, 3F, Sector – 3, Vaishali, Ghaziabad, U.P. – 201010</span>
    </p>
    <p className="flex items-start gap-2">
      <MapPin className="w-5 h-5 text-blue-500" /> 
      <span>Branch Office: 1st Floor, NH 28, Dighara Rampur Shah, Near ITI College, Muzaffarpur -842002</span>
    </p>
  </div>
</div>
</div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
