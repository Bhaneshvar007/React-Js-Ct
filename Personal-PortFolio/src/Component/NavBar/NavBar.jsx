import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Use Link from react-scroll

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white border-gray-200 dark:bg-[#FAB327] fixed w-[450px] lg:w-full z-10 top-0 lg:py-2">
            <div className="max-w-[1400px] flex flex-wrap items-center justify-between mx-auto py-4">
                <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white lg:text-2xl px-2 lg:p-0">
                    <div class='text ml-16 lg:ml-[5rem] '>
                        <h2 class="first lg:text-[50px] text-2xl">Portfolio</h2>
                        <h2 class="second lg:text-[50px] text-2xl">Portfolio</h2>
                    </div>
                </span>
                <button
                    onClick={toggleMenu}
                    className="inline-flex items-center p-2 ml-3 text-xs text-white rounded-lg md:hidden focus:outline-none"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen ? "true" : "false"}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-10 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 4h14a1 1 0 010 2H3a1 1 0 110-2zm0 4h14a1 1 0 010 2H3a1 1 0 110-2z" clipRule="evenodd" />
                    </svg>
                </button>
                <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-[#FAB327] rounded-lg bg-[gray-50] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-[#FAB327]">
                        <li>
                            <Link to="home" smooth={true} duration={500} className="cursor-pointer block text-xl py-2 px-3 text-white bg-[#36454F] rounded md:bg-transparent md:text-[#36454F] md:p-0 dark:text-white md:dark:text-[#36454F]">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={500} className="cursor-pointer block text-xl py-2 px-3 text-gray-900 rounded hover:bg-yellow-600 md:hover:bg-transparent md:border-0 md:hover:text-[#36454F] md:p-0 dark:text-white md:dark:hover:text-[#36454F]">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="skills" smooth={true} duration={500} className="cursor-pointer block text-xl py-2 px-3 text-gray-900 rounded hover:bg-yellow-600 md:hover:bg-transparent md:border-0 md:hover:text-[#36454F] md:p-0 dark:text-white md:dark:hover:text-[#36454F]">
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link to="project" smooth={true} duration={500} className="cursor-pointer block text-xl py-2 px-3 text-gray-900 rounded hover:bg-yellow-600 md:hover:bg-transparent md:border-0 md:hover:text-[#36454F] md:p-0 dark:text-white md:dark:hover:text-[#36454F]">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} duration={500} className="cursor-pointer block text-xl py-2 px-3 text-gray-900 rounded hover:bg-yellow-600 md:hover:bg-transparent md:border-0 md:hover:text-[#36454F] md:p-0 dark:text-white md:dark:hover:text-[#36454F]">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
