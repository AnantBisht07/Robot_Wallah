import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Main from "./components/Main";
import SuccessStory from "./components/SuccessStory";
import Footer from "./components/Footer";
import { Loader2 } from "lucide-react";
import { Toaster } from "@/components/ui/toaster"
import Featured from "./components/Featured";



const App = () => {


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black w-full h-screen">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Loader2 className="w-12 h-12 text-white animate-spin" />
        </div>
      ) : (
        <>
        <Toaster />
          <Navbar />
          <Hero />
          <Main />
          <Featured />
          <SuccessStory />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
