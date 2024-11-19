import React from 'react';

const About = () => {
    return (
        <div className="container px-4 max-w-[1400px] flex flex-col justify-center">
            {/* Header */}
            <div className="relative mb-5">
                <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
                    {/* Title here */}
                </h3>
                <span className="h-[1.2px] left-5 absolute w-[105%] bg-gray-300 block"></span>
            </div>

            <div className="flex flex-col items-center md:flex-col lg:flex-row justify-center" data-aos="zoom-in-left" data-aos-duration="4000" data-aos-delay="200">
                <div className="flex items-center flex-col">
                    <p className="text-gray-700 font-bold text-[40px] sm:text-[55px] text-center">
                        About <span className="text-[#FAB327]">Me!</span>
                    </p>
                    <div className="my-10 flex justify-center items-center lg:my-20"  >
                        <div className="relative flex items-center justify-center">
                            {/* Rotating Border */}
                            <div className="absolute rounded-full border-t-4 border-b-4 border-yellow-500 w-52 h-52 sm:w-72 sm:h-72 animate-spin-slow"></div>
                            {/* Profile Image */}
                            <img
                                className="h-40 w-40 sm:h-60 sm:w-60 rounded-full"
                                src="https://media.licdn.com/dms/image/v2/D4E03AQGxltbkMNHr2g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1694968332366?e=1736985600&v=beta&t=J9MufHNeafN752uEpKHqliBOUkWWD0bFamzrsSIAV1s"
                                alt="my image"
                            />
                        </div>
                    </div>

                    <h1 className="text-gray-700 font-bold text-[24px] sm:text-[30px] mt-[-20px] sm:mt-[-30px] text-center">
                        Web Developer
                    </h1>
                    <p className="w-[90%] sm:w-[70%] lg:w-[55%] text-center text-gray-500 font-semibold px-4 sm:px-0">
                        Aspiring web developer with expertise in frontend technologies like HTML, CSS, JavaScript, and React. Currently in my final year, I am passionate about solving problems and building projects that showcase my abilities in both design and development.
                    </p>

                    <button className="bg-yellow-500 hover:bg-[#eaa608f2] transition-transform duration-300 ease-in-out hover:scale-105 font-bold mt-8 px-6 py-2 rounded text-white">
                        Explore CV
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
