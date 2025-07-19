import React from 'react'
import { NavLink } from 'react-router-dom'
import useTheme from "../../context/themeContext.js"

function Header() {
    const {theme,lightTheme,darkTheme} = useTheme()
 
    function changeTheme()
    {
        if(theme === "dark")
        {  
            lightTheme()
        }else if(theme === "light")
        {
            darkTheme()
        }
    }
    const navItems = [
        {
            name: "Home",
            slug: "/"
        },
        {
            name: "About",
            slug: "/about"
        },
        {
            name: "Skills",
            slug: "/skills"
        },
        {
            name: "Projects",
            slug: "/projects"
        },
    ]
    return (
        <div className="flex justify-between items-center px-6 py-4 bg-[#F9FAFB] dark:bg-[#111827] shadow-md">
            {/* Logo Section */}
            <div>
                <h1 className="text-2xl font-bold text-[#3B82F6] dark:text-[#3B82F6] animate-pulse">
                    &lt;Ankush Sirsawl /&gt;
                </h1>
            </div>

            {/* Navigation Links */}
            <div>
                <ul className="flex space-x-6">
                    {navItems && navItems.map((item) => (
                        <NavLink
                            to={item.slug}
                            key={item.slug}
                            className={({ isActive }) =>
                                `transition-colors duration-200 cursor-pointer px-2 py-1 rounded-md 
                                ${isActive
                                    ? 'bg-[#3B82F6] text-white dark:text-white'
                                    : 'text-[#111827] dark:text-[#F9FAFB] hover:text-[#10B981] dark:hover:text-[#10B981]'
                                }`
                            }
                        >
                            <li>{item.name}</li>
                        </NavLink>
                    ))}
                    <li>
                        <button className='transition-colors duration-200 cursor-pointer px-2 py-1 rounded-md'
                        onClick={changeTheme}
                        >
                            {theme === "light" ?  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414M18.364 18.364l-1.414-1.414M6.05 6.05L4.636 7.464M12 8a4 4 0 100 8 4 4 0 000-8z" />
                            </svg>:<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                            </svg>
                            }
                        </button>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Header
