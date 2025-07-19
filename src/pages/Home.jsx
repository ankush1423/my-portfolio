import React from 'react';

function Home() {
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
