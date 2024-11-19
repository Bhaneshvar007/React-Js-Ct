import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-[#F0F0F5] py-8">
            <div className="max-w-[1100px] mx-auto px-4">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
                    <h1 className="font-bold text-2xl lg:text-3xl text-center lg:text-left text-[#02060cbf]">
                        For better experience, download the Swiggy app now
                    </h1>
                    <div className="flex items-center gap-4">
                        <img
                            className="w-32 h-10 cursor-pointer"
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
                            alt="Play Store"
                        />
                        <img
                            className="w-32 h-10 cursor-pointer"
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
                            alt="App Store"
                        />
                    </div>
                </div>

                {/* Divider */}
                <hr className="my-8 border-gray-300" />

                {/* Footer Content */}
                <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
                    {/* Logo and Copyright */}
                    <div className="text-center lg:text-left">
                        <img
                            className="w-36 mx-auto lg:mx-0"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Swiggy_Logo_2024.webp/1143px-Swiggy_Logo_2024.webp.png"
                            alt="Swiggy Logo"
                        />
                        <p className="mt-2 text-gray-600">© 2024 Swiggy Limited</p>
                    </div>

                    {/* Footer Links */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex gap-8 lg:gap-16 text-center lg:text-left">
                        <div>
                            <h1 className="font-bold mb-2 text-lg">Company</h1>
                            <p className="text-gray-700 hover:text-[#ff5200] duration-300 cursor-pointer">About Us</p>
                            <p className="text-gray-700 hover:text-[#ff5200] duration-300 cursor-pointer">Swiggy Corporate</p>
                            <p className="text-gray-700 hover:text-[#ff5200] duration-300 cursor-pointer">Careers</p>
                            <p className="text-gray-700 hover:text-[#ff5200] duration-300 cursor-pointer">Team</p>
                            <p className="text-gray-700 hover:text-[#ff5200] duration-300 cursor-pointer">Swiggy One</p>
                        </div>

                        <div>
                            <h1 className="font-bold mb-2 text-lg">Contact Us</h1>
                            <p className="text-gray-700 hover:text-[#ff5200] duration-300 cursor-pointer">Help & Support</p>
                            <p className="text-gray-700 hover:text-[#ff5200] duration-300 cursor-pointer">Partner With Us</p>
                            <p className="text-gray-700 hover:text-[#ff5200] duration-300 cursor-pointer">Rate With Us</p>
                        </div>

                        <div>
                            <h1 className="font-bold mb-2 text-lg">Available in:</h1>
                            <p className="text-gray-700">Bangalore</p>
                            <p className="text-gray-700">Indore</p>
                            <p className="text-gray-700">Pune</p>
                            <p className="text-gray-700">Nagpur</p>
                            <p className="text-gray-700">Delhi</p>
                            <p className="text-gray-700">Mumbai</p>
                        </div>
                    </div>

                    {/* Social Media Links */}
                    <div className='flex items-center gap-14'>
                        <div>
                            <h1 className="font-bold mb-2 text-lg">Life at Swiggy</h1>
                            <p className="text-gray-700 hover:text-[#ff5200] duration-300 cursor-pointer">Swiggy News</p>
                            <p className="text-gray-700 hover:text-[#ff5200] duration-300 cursor-pointer">Explore with Swiggy</p>
                        </div>

                        <div className="mt-8 flex flex-col items-center">
                            <h1 className="font-bold mb-2 text-lg">Follow Us</h1>
                            <div className="flex justify-center flex-wrap lg:justify-start gap-4">
                                <FaLinkedin className="text-2xl text-gray-600 hover:text-[#ff5200] duration-300 cursor-pointer" />
                                <FaFacebook className="text-2xl text-gray-600 hover:text-[#ff5200] duration-300 cursor-pointer" />
                                <FaInstagram className="text-2xl text-gray-600 hover:text-[#ff5200] duration-300 cursor-pointer" />
                                <FaPinterest className="text-2xl text-gray-600 hover:text-[#ff5200] duration-300 cursor-pointer" />
                                <FaSquareXTwitter className="text-2xl text-gray-600 hover:text-[#ff5200] duration-300 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
