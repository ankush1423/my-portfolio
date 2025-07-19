import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  function handleDownload(){
     const link = document.createElement('a')
     link.href = '/ANKUSH_SIRSWAL_RESUME - Copy.pdf'
     link.download = 'ANKUSH_SIRSWAL_RESUME.pdf'
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);
  }
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-20 py-5 px-6 bg-[#F9FAFB] dark:bg-[#111827] transition-colors duration-500 "
    >
      {/* Left: Text Content */}
      <div className="text-center md:text-left space-y-2">
        <p className="text-lg text-[#111827] dark:text-[#F9FAFB]">
          Hello, I am <span className="font-semibold">Ankush Sirswal</span>
        </p>
        <h2
          className="text-4xl md:text-5xl font-bold text-[#3B82F6] dark:text-[#3B82F6] animate-bounce"
        >
          MERN DEVELOPER...
        </h2>

        <p className="text-md text-[#6B7280] dark:text-[#F3F4F6]">
          Kurukshetra, Haryana
        </p>
          <button
         className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#93C5FD] dark:bg-[#3B82F6] dark:hover:bg-[#2563EB] dark:focus:ring-[#60A5FA] transition-colors duration-200"
         onClick={handleDownload}
        >
        Download Resume
        </button>
      </div>

      {/* Right: Image */}
      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-[#3B82F6] dark:border-[#10B981]">
        <img
          src="ankushkiphoto.jpg"
          alt="Ankush Sirswal"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Home;
