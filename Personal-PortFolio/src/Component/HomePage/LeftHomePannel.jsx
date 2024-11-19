import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";


const LeftHomePannel = () => {
    return (
        <div className="w-full lg:w-3/4 flex flex-col gap-2 lg:gap-1">
            <h1 className="text-[24px] lg:text-[36px] font-bold text-[#555]">Hey, I am</h1>

            <ReactTypingEffect
                text={[
                    "Full Stack Developer",
                    "Software Developer",
                ]}
                speed={80}
                eraseSpeed={100}
                eraseDelay={200}
                typingDelay={300}
                className="text-[28px] lg:text-[46px] text-[#FAB327] font-bold"
            />

            <p className="w-full lg:w-[80%] text-gray-700 font-medium">
                Aspiring web developer with expertise in frontend technologies like HTML, CSS, JavaScript, and React. Currently in my final year, I am passionate about solving problems and building projects that showcase my abilities in both design and development.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-5">
                <a
                    href="https://www.linkedin.com/in/bhaneshvar-kshirsagar-301663291/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                >
                    <FaLinkedin className="text-[#24A1DE] text-[25px] lg:text-[35px]" title="LinkedIn" />
                </a>

                <a
                    href="https://github.com/Bhaneshvar007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                >
                    <FaGithubSquare className="text-[#333] text-[25px] lg:text-[35px]" title="GitHub" />
                </a>

                <a
                    href="https://leetcode.com/bhaneshvar07/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                >
                    <img
                        src="https://cdn.iconscout.com/icon/free/png-256/free-leetcode-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-4-pack-logos-icons-2944960.png"
                        className="w-[25px] lg:w-[35px] rounded"
                        alt="LeetCode"
                        title="LeetCode"
                    />
                </a>

                <a
                    href="https://wa.me/qr/J6QFXBTOM6C5I1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                >
                    <FaSquareWhatsapp className="text-[#25D366] text-[25px] lg:text-[35px]" title="WhatsApp" />
                </a>

                <a
                    href="https://www.instagram.com/ugr__abhishek/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                >
                    <FaInstagramSquare className="text-[#E1306C] text-[25px] lg:text-[35px]" title="Instagram" />
                </a>
            </div>

            {/* Explore Button */}
            <a href="#" className="liqudeBtn mt-6 lg:mt-10">
                <span>Explore</span>
                <div className="liquid"></div>
            </a>
        </div>
    )
}

export default LeftHomePannel;
