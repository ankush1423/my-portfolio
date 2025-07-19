import React from 'react'
import { Link } from 'react-router-dom'

function ProjectCard({
     heading="project",
     detail = "project detail",
     link = ""
}) {
    return (
        <div className="max-w-sm m-5 p-5 bg-[#FFFFFF] dark:bg-[#1F2937] border border-[#E5E7EB] dark:border-[#374151] rounded-2xl shadow-md transition-colors duration-300">
            <Link href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#111827] dark:text-white">
                    {heading}
                </h5>
            </Link>
            <p className="mb-4 text-base text-[#6B7280] dark:text-[#D1D5DB]">
                {detail}
            </p>
            <Link
                to={link}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#93C5FD] dark:bg-[#3B82F6] dark:hover:bg-[#2563EB] dark:focus:ring-[#60A5FA] transition-colors duration-200"
            >
                Read more
                <svg
                    className="w-4 h-4 ml-2 rtl:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 14 10"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </Link>
        </div>
    )
}

export default ProjectCard