import React from 'react';
import Progress from '../ProgressBar/Progress';
import SkillBox from '../SkillBox/SkillBox';

let progressData = [
    { name: "Java", img: 'https://static-00.iconduck.com/assets.00/java-icon-378x512-w60vlu77.png', wid: 85 },
    { name: "HTML/CSS", img: 'https://w7.pngwing.com/pngs/257/577/png-transparent-web-development-html-css-design-and-build-web-sites-cascading-style-sheets-world-wide-web-web-design-text-rectangle.png', wid: 90 },
    { name: "Javascript", img: 'https://img.icons8.com/color/48/null/javascript--v1.png', wid: 82 },
    { name: "ReactJs", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s', wid: 78 },
    { name: "TailwindCss", img: 'https://w7.pngwing.com/pngs/771/978/png-transparent-tailwind-css-css-framework-customizable-low-level-tailwind-logo-3d-icon-thumbnail.png', wid: 65 },
];

let SkillBoxData = [
    { name: "Node Js", img: "https://www.pulumi.com/logos/tech/logo-nodejs.png" },
    { name: "Express Js", img: "https://img.icons8.com/color/512/express-js.png" },
    { name: "Mongo DB", img: "https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" },
    { name: "Ejs", img: "https://www.igeho.ch/media/preview/2725907817fe8a615972070a94e8ab7adecf05b327489dbe39685a4466d97f63/Logo%20EJS%20Blau.png" },
    { name: "Data Structure", img: "https://www.progclasses.com/img/datastructure.png" },
];

const Skills = () => {
    return (
        <div className="container px-4 mt-16 max-w-[1400px]">
            <div className="relative mb-5">
                <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">My Skills</h3>
                <span className="h-[1.2px] left-28 absolute w-[100%] bg-gray-300 block"></span>
            </div>

            <div className='flex flex-col md:flex-row gap-8'>
                <div className="flex-1 w-full">
                    <p className="text-gray-700 font-medium absolute">Here are my skills.</p>
                </div>
                <div className="flex-1 w-full mt-10">

                    {/* Left Progress Section */}
                    <div className="flex flex-col lg:flex-row gap-10 w-full mr-[400px]  lg:mt-16" data-aos="zoom-in-right">
                        <div className="flex flex-col gap-6 ">
                            {progressData.map((val, index) => (
                                <Progress key={index} name={val.name} img={val.img} wid={val.wid} />
                            ))}
                        </div>

                        {/* Skill Boxes */}
                        <div className="flex flex-wrap gap-5 justify-center lg:ml-16 mt-8 lg:mt-0">
                            {SkillBoxData.map((val, index) => (
                                <SkillBox key={index} name={val.name} img={val.img} />
                            ))}
                        </div>
                    </div>

                    {/* Icons Section */}
                    <div
                        className="container m-auto flex items-center justify-center flex-wrap mt-16 gap-8 md:gap-5"
                        data-aos="zoom-out"
                    >
                        <img
                            className="w-[50px] h-[50px] hover:scale-105 cursor-pointer"
                            src="https://static-00.iconduck.com/assets.00/java-icon-378x512-w60vlu77.png"
                        />

                        <img
                            className="w-[50px] h-[50px] object-cover hover:scale-105 cursor-pointer"
                            src="https://banner2.cleanpng.com/20180820/rik/f40ee6322bba6ef1100a5adb0fe196d6.webp"
                        />

                        <img
                            className="w-[50px] h-[50px] hover:scale-105 cursor-pointer"
                            src="https://img.icons8.com/ios/50/null/react-native--v1.png"
                        />
                        <img
                            className="w-[50px] h-[50px] object-cover hover:scale-105 cursor-pointer"
                            src="https://www.igeho.ch/media/preview/2725907817fe8a615972070a94e8ab7adecf05b327489dbe39685a4466d97f63/Logo%20EJS%20Blau.png"
                        />
                        <img
                            className="w-[50px] h-[50px] hover:scale-105 cursor-pointer"
                            src="https://img.icons8.com/ios-filled/50/null/git.png"
                        />
                        <img
                            className="w-[50px] h-[50px] hover:scale-105 cursor-pointer"
                            src="https://media.licdn.com/dms/image/v2/C560BAQFmuLSyL1nlPA/company-logo_200_200/company-logo_200_200/0/1678231359043/github_logo?e=2147483647&v=beta&t=2RO1zjla4T-YiOqKS50e4sc9n8RAgnUqGqu0mcZp5fU"
                        />
                        <img
                            className="w-[50px] h-[50px] hover:scale-105 cursor-pointer"
                            src="https://img.favpng.com/11/17/14/data-structure-logo-brand-png-favpng-SiHV4dTHEtkiit6Uf0F405XNv.jpg"
                        />
                        <img
                            className="w-[50px] h-[50px] hover:scale-105 cursor-pointer"
                            src="https://img.icons8.com/color/48/null/c-plus-plus-logo.png"
                        />
                        <img
                            className="w-[50px] h-[50px] hover:scale-105 cursor-pointer"
                            src="https://img.icons8.com/color/48/null/javascript--v1.png"
                        />
                        <img
                            className="w-[50px] h-[50px] hover:scale-105 cursor-pointer"
                            src="https://img.icons8.com/color/512/express-js.png"
                        />
                        <img
                            className="w-[50px] h-[50px] hover:scale-105 cursor-pointer"
                            src="https://img.icons8.com/color/48/null/nodejs.png"
                        />
                        <img
                            className="w-[50px] h-[50px] hover:scale-105 cursor-pointer"
                            src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/null/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
