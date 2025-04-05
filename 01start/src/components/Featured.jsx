import React from 'react'

const Featured = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 ml-4 mr-4">
    <img src="/news1.png" alt="news1" className="w-full max-w-xs rounded-lg shadow-md transition-transform transform hover:scale-105 rotate-2" />
    <img src="/news2.png" alt="news2" className="w-full max-w-xs rounded-lg shadow-md transition-transform transform hover:scale-105 -rotate-2" />
    <img src="/news3.png" alt="news3" className="w-full max-w-xs rounded-lg shadow-md transition-transform transform hover:scale-105 skew-y-1" />
    <img src="/news4.png" alt="news4" className="w-full max-w-xs rounded-lg shadow-md transition-transform transform hover:scale-105 -skew-y-1" />
    <img src="/news5.png" alt="news5" className="w-full max-w-xs rounded-lg shadow-md transition-transform transform hover:scale-105 rotate-1" />


    <img src="/dh.png" alt="dh.png" className="w-full max-w-xs rounded-lg shadow-md transition-transform transform hover:scale-105 -rotate-1 absolute right-[446px] -bottom-[1740px]" />


    <img src="/news6.png" alt="news6" className="w-full max-w-xs rounded-lg shadow-md transition-transform transform hover:scale-105 -rotate-1" />
    <img src="/news7.png" alt="news7" className="w-full max-w-xs rounded-lg shadow-md transition-transform transform hover:scale-105 skew-x-1" />
    <img src="/news8.png" alt="news8" className="w-full max-w-xs rounded-lg shadow-md transition-transform transform hover:scale-105 -rotate-2" />
  </div>
  
  )
}

export default Featured
