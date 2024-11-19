import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";






const Footer = () => {
    return (
        <div id="works" className=" mx-auto m-auto h-[200px]  mt-16 sm:h-[200px]">
            <div className=" bg-[#FAB327] h-full flex flex-col gap-8 items-center p-10 sm:p-7">

                <div className=" flex items-center justify-center gap-8 sm:gap-5">
                    <a


                        href="https://www.linkedin.com/in/bhaneshvar-kshirsagar-301663291/" target='_blank'
                        className=" font-medium text-white   flex items-center justify-center flex-col"
                    >
                        <IoLogoLinkedin className=" text-[#24A1DE] text-3xl hover:scale-125 cursor-pointer" />
                        <p>Linkedin</p>
                    </a>

                    <a

                        href="https://wa.me/qr/J6QFXBTOM6C5I1" target='_blank'
                        className=" font-medium text-white  flex items-center justify-center flex-col"
                    >
                        <RiWhatsappFill className=" text-[#25D366] text-3xl hover:scale-125 cursor-pointer" />
                        <p className=" text-[#25D366] text-3xl hover:scale-125 cursor-pointer" />
                        <p>WhatsApp</p>
                    </a>


                    <a href="https://www.instagram.com/ugr__abhishek/" target='_blank'
                        className=" font-medium text-white  flex items-center justify-center flex-col "
                    >
                        <FaInstagram className=" text-[#E1306C] text-3xl hover:scale-125 cursor-pointer " />
                        <p>Instagram</p>
                    </a>
                </div>
                <div className="sm:text-[12px] text-white">
                    | Copyright &copy; <span>2024 Web Addicted </span>~ Bhaneshvar Kshirsagar
                    <a href="#"></a> |
                </div>
            </div>


        </div>
    );
};

export default Footer;
