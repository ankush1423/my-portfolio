import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="bg-[#F3F4F6] dark:bg-[#111827] px-6 py-8">
      {/* Footer Text */}
      <div className="text-[#111827] dark:text-[#F9FAFB] text-center mb-6">
        <p>
           Passionate about clean code and creative solutions , Driven by curiosity - Focused on impact.
        </p>
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-6">
        {/* LinkedIn */}
        <Link to="https://www.linkedin.com/in/ankush-sirswal-8b36a22b1/" target="_blank" rel="noopener noreferrer">
          <li className="list-none text-[#111827] dark:text-[#F9FAFB] hover:text-[#3B82F6] dark:hover:text-[#3B82F6] transition-colors duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.7v2.16h.05c.52-1 1.78-2.16 3.66-2.16 3.91 0 4.63 2.58 4.63 5.93V24h-4v-8.29c0-1.98-.04-4.52-2.75-4.52-2.76 0-3.18 2.15-3.18 4.38V24h-4V8z" />
            </svg>
          </li>
        </Link>

        {/* Instagram */}
        <Link to="https://www.instagram.com/ankush_sirswaal/" target="_blank" rel="noopener noreferrer">
          <li className="list-none text-[#111827] dark:text-[#F9FAFB] hover:text-[#F59E0B] dark:hover:text-[#F59E0B] transition-colors duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M7.5 2C4.46 2 2 4.46 2 7.5v9C2 19.54 4.46 22 7.5 22h9c3.04 0 5.5-2.46 5.5-5.5v-9C22 4.46 19.54 2 16.5 2h-9zm0 2h9C18.43 4 20 5.57 20 7.5v9c0 1.93-1.57 3.5-3.5 3.5h-9C5.57 20 4 18.43 4 16.5v-9C4 5.57 5.57 4 7.5 4zm9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
            </svg>
          </li>
        </Link>

        {/* Twitter */}
        <Link to="https://x.com/" target="_blank" rel="noopener noreferrer">
          <li className="list-none text-[#111827] dark:text-[#F9FAFB] hover:text-[#10B981] dark:hover:text-[#10B981] transition-colors duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.25 4.25 0 0 0 1.88-2.35 8.47 8.47 0 0 1-2.7 1.03A4.23 4.23 0 0 0 11.16 8a12.01 12.01 0 0 1-8.72-4.42 4.25 4.25 0 0 0 1.31 5.67 4.17 4.17 0 0 1-1.91-.53v.05a4.26 4.26 0 0 0 3.4 4.18 4.3 4.3 0 0 1-1.9.07 4.25 4.25 0 0 0 3.97 2.95A8.49 8.49 0 0 1 2 19.54 12 12 0 0 0 8.29 21c7.55 0 11.68-6.25 11.68-11.68 0-.18-.01-.35-.02-.53A8.36 8.36 0 0 0 22.46 6z" />
            </svg>
          </li>
        </Link>

        {/* GitHub */}
        <Link to="https://github.com/ankush1423" target="_blank" rel="noopener noreferrer">
          <li className="list-none text-[#111827] dark:text-[#F9FAFB] hover:text-[#EF4444] dark:hover:text-[#EF4444] transition-colors duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.39 7.85 10.93.57.1.78-.25.78-.56v-2.03c-3.2.7-3.87-1.39-3.87-1.39-.52-1.32-1.26-1.67-1.26-1.67-1.03-.7.08-.68.08-.68 1.14.08 1.74 1.17 1.74 1.17 1.02 1.74 2.67 1.24 3.32.94.1-.74.4-1.24.73-1.52-2.55-.29-5.24-1.28-5.24-5.72 0-1.26.45-2.29 1.17-3.1-.12-.29-.51-1.47.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.24 2.76.12 3.05.73.81 1.17 1.84 1.17 3.1 0 4.45-2.7 5.43-5.27 5.71.41.36.77 1.1.77 2.23v3.3c0 .31.21.67.79.56A10.51 10.51 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
            </svg>
          </li>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
