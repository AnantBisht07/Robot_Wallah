import React from "react";
import { useNavigate } from "react-router-dom";

const ComingSoon = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center px-4">
        
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-orange-500">Robot Wallah</h1>
      <p className="text-lg md:text-xl text-gray-400 mb-6">
        Something exciting is on the way. Stay tuned!
      </p>
      <img
        src="https://media.giphy.com/media/QHE5gWI0QjqF2/giphy.gif"
        alt="Coming Soon GIF"
        className="w-60 md:w-80 mb-6 rounded-xl shadow-lg"
      />
      <p className="text-2xl md:text-4xl text-gray-500">
        COMING SOON! 
      </p>
      <button
          onClick={() => navigate(-1)}
          className="mt-6 px-6 py-3 bg-orange-600 rounded-full text-lg font-semibold hover:bg-orange-500 transition-all"
        >
          Go Back
        </button>
    </div>
  );
};

export default ComingSoon;
