import React from 'react'
import news1 from '../assets/news1.png'
import news2 from '../assets/news2.png' 
import news3 from '../assets/news3.png'
import news4 from '../assets/news4.png'
import news5 from '../assets/news5.png'
import news6 from '../assets/news6.png'
import news7 from '../assets/news7.png'
import news8 from '../assets/news8.png'
import dh from '../assets/dh.png'

const Featured = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 ml-4 mr-4">
    <img src={news1}alt="news1" className="w-full max-w-xs rounded-lg shadow-md transition-transform transform hover:scale-105 rotate-2" />
    <img src={news2} alt="news2" className="w-full max-w-xs rounded-lg shadow-md transition-transform transform hover:scale-105 -rotate-2" />
    <img src={news3} alt="news3" className="w-full max-w-xs rounded-lg shadow-md transition-transform transform hover:scale-105 skew-y-1" />
    <img src={news4} alt="news4" className="w-full max-w-xs rounded-lg shadow-md transition-transform transform hover:scale-105 -skew-y-1" />
    <img src={news5} alt="news5" className="w-full max-w-xs rounded-lg shadow-md transition-transform transform hover:scale-105 rotate-1" />


    <img src={dh} alt="dh.png" className="w-full max-w-xs rounded-lg shadow-md transition-transform transform hover:scale-105 -rotate-1 absolute right-[446px] -bottom-[1740px]" />


    <img src={news6} alt="news6" className="w-full max-w-xs rounded-lg shadow-md transition-transform transform hover:scale-105 -rotate-1" />
    <img src={news7} alt="news7" className="w-full max-w-xs rounded-lg shadow-md transition-transform transform hover:scale-105 skew-x-1" />
    <img src={news8} alt="news8" className="w-full max-w-xs rounded-lg shadow-md transition-transform transform hover:scale-105 -rotate-2" />
  </div>
  
  )
}

export default Featured
