import React from 'react';
import './project.css';

let projectData = [
    {
        name: "Resume Builder",
        about: "The resume builder should provide ATS-friendly templates that avoid complex formatting, graphics, tables, or columns that may not be read correctly by an ATS.",
        img: "https://www.codester.com/static/uploads/items/000/049/49986/icon.png",
        language: ["ReactJs", 'Chakra Ui'],
        github: "https://github.com/Bhaneshvar007/Resume-Builder",
        live: "https://github.com/Bhaneshvar007/Resume-Builder",
       
    },
    {
        name: "Swiggy Clone ",
        about: `A personal portfolio showcases your skills, projects, and experiences in a visually appealing way to potential employers or clients.`,
        img: "",
        language: ["ReactJs", 'Tailwind Css', "React Icon's"],
        github: "https://github.com/Bhaneshvar007/React-Js-St/tree/main/SwigyClone",
        live : 'https://react-js-st-bhaneshvar-kshirsagars-projects.vercel.app/'
    },
    {
        name: "BookMyShow Clone",
        about: "This feature allows users to book tickets for movies, events, concerts, and more directly from the app or website. ",
        img: "",
        language: ["ReactJs", 'Tailwind Css'],
        github: "https://github.com/Bhaneshvar007/React-Js-St/tree/main/Book_My_Show_01",
        live : 'https://react-js-st-zlvw.vercel.app/'
    },
];

const Projects = () => {
    return (
        <div className="container px-4 mt-16 max-w-[1400px]">
            {/* Header */}
            <div className="relative mb-5">
                <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">My Projects</h3>
                <span className="h-[1.2px] left-40 absolute w-[95%] bg-gray-300 block"></span>
            </div>

            <div className="flex flex-col md:flex-col gap-8">
                <div className="flex-1 w-full">
                    <p className="text-gray-700 font-medium">Here are my projects.</p>
                </div>

                {/* Projects Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto mt-10 ">
                    {projectData.map((val, id) => (
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="5000"
                            key={id}
                            className="projectCard rounded w-full border-2 border-yellow-500 lg:ml-8 bg-white shadow-md p-5 space-y-3 relative overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105"
                        >
                            <div className="w-16 h-16 bg-yellow-500 rounded-full absolute -right-4 -top-5 flex items-center justify-center text-white text-xl">
                                0{id + 1}
                            </div>
                            <div className="fill-yellow-500 w-12">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="m24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5c0-1.379,1.122-2.5,2.5-2.5h12.98c-.253.295-.54.631-.856,1H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22v-10.993l1-1.079Zm-12.749,3.094C19.058.891,19.093.855,19.11.838c1.118-1.115,2.936-1.113,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.185,8.828c-.116,1.826-1.623,3.281-3.478,3.281h-5.59l.097-.582c.043-.257,1.086-6.16,5.244-6.396Zm2.749,3.478c0-1.379-1.122-2.5-2.5-2.5-2.834,0-4.018,3.569-4.378,5h4.378c1.378,0,2.5-1.121,2.5-2.5Zm.814-1.073l2.066-2.229c-.332-1.186-1.371-2.057-2.606-2.172-.641.749-1.261,1.475-1.817,2.125,1.117.321,1.998,1.176,2.357,2.277Zm.208-5.276c1.162.313,2.125,1.134,2.617,2.229l4.803-5.18c.737-.741.737-1.925.012-2.653-.724-.725-1.908-.727-2.637,0-.069.08-2.435,2.846-4.795,5.606Z"
                                    ></path>
                                </svg>
                            </div>
                            <h1 className="font-bold text-xl">{val.name}</h1>
                            <p className="text-sm text-zinc-500 leading-6">{val.about}</p>
                            <div className="flex gap-2 flex-wrap">
                                {val.language.map((lang, ind) => (
                                    <div key={ind} className={`item${ind + 1} icon`}>
                                        {lang}
                                    </div>
                                ))}
                            </div>
                            {val.github && (
                                <div className='flex  gap-3'>
                                    <button className="bg-yellow-500 hover:bg-yellow-600 transition-transform duration-300 ease-in-out hover:scale-105 font-bold mt-5 px-4 py-2 rounded text-white">
                                        <a href={val.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                                    </button>
                                    <button className="bg-orange-600 hover:bg-orange-500 transition-transform duration-300 ease-in-out hover:scale-105 font-bold mt-5 px-5 py-2 rounded text-white">
                                        <a href={val.live} target="_blank" rel="noopener noreferrer">Live</a>
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Summary Section */}
                <div className="lg:flex hidden flex-col lg:flex-row gap-8 justify-center mt-16">
                    <div className="text-center">
                        <h1 className="text-xl font-bold text-gray-600">Total Projects</h1>
                        <p className="text-2xl font-bold text-gray-600">10+</p>
                    </div>
                    <div className="w-[2px] bg-yellow-500 hidden lg:block"></div>
                    <div className="text-center">
                        <h1 className="text-xl font-bold text-gray-600">Clone Projects</h1>
                        <p className="text-2xl font-bold text-gray-600">02</p>
                    </div>
                    <div className="w-[2px] bg-yellow-500 hidden lg:block"></div>
                    <div className="text-center">
                        <h1 className="text-xl font-bold text-gray-600">Social</h1>
                        <p className="text-2xl font-bold text-gray-600">3</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
