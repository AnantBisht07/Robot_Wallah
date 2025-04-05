import { Link } from "react-router-dom";
import { FaRobot } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center px-6">
      {/* Icon with animation */}
      <div className="animate-bounce text-orange-500">
        <FaRobot className="text-7xl md:text-9xl" />
      </div>

      {/* Error message */}
      <h1 className="text-4xl md:text-6xl font-bold mt-6">Oops! Page Not Found</h1>
      <p className="text-lg md:text-xl text-gray-400 mt-3">
        The page you're looking for doesn't exist. It might have been moved or deleted.
      </p>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-orange-500 hover:bg-blue-600 transition-all duration-300 rounded-lg text-lg font-semibold shadow-md"
      >
        Go Back Home
      </Link>

      {/* Decorative error code */}
      <p className="mt-8 text-7xl md:text-9xl font-extrabold text-gray-700 tracking-widest">
        404
      </p>
    </div>
  );
};

export default ErrorPage;
