import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "LINE FOLLOW ROBOT",
    image: "https://i.pinimg.com/736x/d0/fd/68/d0fd686d9f97f4c8ee97e6f722f06ccc.jpg",
    originalPrice: "₹9,999",
    discountedPrice: "₹4,999",
  },
  {
    id: 2,
    name: "OBSTACLE AVOIDANCE ROBOT",
    image: "https://i.pinimg.com/474x/df/e5/b6/dfe5b6b9495f17b1c87ad3847991864b.jpg",
    originalPrice: "₹9,999",
    discountedPrice: "₹5,999",
  },
  {
    id: 3,
    name: "MINI HUMANOID ROBOT",
    image: "https://i.pinimg.com/474x/46/68/8f/46688f1ee5e39366b81cb53c978a287c.jpg",
    originalPrice: "₹9,999",
    discountedPrice: "₹4,999",
  },
];

const Products = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-900 text-white py-28 px-6">
        <Navbar />
      <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold min-h-[66px] ">{product.name}</h2>
            <p className="text-lg mt-2">
              <span className="line-through text-red-400 mr-2">{product.originalPrice}</span>
              <span className="text-green-400 font-bold">{product.discountedPrice}</span>
            </p>
            <div className="mt-4 flex justify-center gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white font-semibold">
                <Link to='/contact'>Enquiry Now</Link>
              </button>
             
            </div>
          </div>
        ))}
      </div>
    </div>
          <Footer />
          </>
  );
};

export default Products;
