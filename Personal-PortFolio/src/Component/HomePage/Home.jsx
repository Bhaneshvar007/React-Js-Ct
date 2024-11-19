import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import RightHomePannel from './RightHomePannel';
import LeftHomePannel from './LeftHomePannel';
const Home = () => {
  return (
    <div className="max-w-[1400px] mx-auto h-auto min-h-[80vh] flex flex-col lg:flex-row gap-10 justify-between mt-40 lg:mt-40 px-4 lg:px-0" data-aos="zoom-in" data-aos-duration="4000">

      {/* Left Section */}

      <LeftHomePannel />


      {/* Right Section */}
      <div className="lg:flex mt-[-100px] hidden" >
        <RightHomePannel />
      </div>
    </div>
  );
};

export default Home;
