import React from 'react';

function About() {
  return (
    <div className="px-6 py-10 flex items-center justify-center bg-[#F9FAFB] dark:bg-[#111827] text-[#111827] dark:text-[#F9FAFB] transition-colors duration-300">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left: Education */}
        <div className="md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold text-[#3B82F6] dark:text-[#3B82F6] mb-4">
            EDUCATION
          </h1>
          <h2 className="text-xl font-semibold text-[#10B981] dark:text-[#10B981]">
            Kurukshetra University, Kurukshetra
          </h2>
          <p className="text-[#111827] dark:text-[#F3F4F6] mt-2">
            Bachelor of Computer Application
          </p>
          <span className="block text-sm text-[#6B7280] dark:text-[#D1D5DB] mt-1">
            CGPA: 7.90 / 10.0 &nbsp; • &nbsp; August 2020 - June 2023
          </span>
        </div>

        {/* Right: Work Experience */}
        <div className="md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold text-[#3B82F6] dark:text-[#3B82F6] mb-4">
            WORK EXPERIENCE
          </h1>
          <h2 className="text-xl font-semibold text-[#10B981] dark:text-[#10B981]">
            Internship (Company: COLLEGM)
            <span className="block text-sm text-[#6B7280] dark:text-[#D1D5DB] mt-1">
              May 2025 - June 2025
            </span>
          </h2>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-[#111827] dark:text-[#F3F4F6]">
            <li>
              Developed full-stack web apps using MongoDB, Express.js, React.js, and Node.js.
            </li>
            <li>
              Built and integrated RESTful APIs for efficient CRUD operations.
            </li>
            <li>
              Collaborated in a team using Git and GitHub.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default About;
