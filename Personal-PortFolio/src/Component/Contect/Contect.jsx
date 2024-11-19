import React from 'react';

const Contact = () => {
    return (
        <div className="container px-4 mt-16 max-w-[1400px]">
            {/* Header */}
            <div className="relative mb-5">
                <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">My Projects</h3>
                <span className="h-[1.2px] left-40 absolute w-[95%] bg-gray-300 block"></span>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1 w-full">
                    <p className="text-gray-700 font-medium">Here are my projects.</p>
                </div>

                <section className="w-full md:w-2/3 bg-white  rounded-lg p-4 md:p-8" data-aos="zoom-out">
                    <div className="py-8 px-4 max-w-screen-md mx-auto">
                        <form action="#" className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500">Your email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5"
                                    placeholder="name@gmail.com"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-500">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                    placeholder="Let us know how we can help you"
                                    required
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-500">Your message</label>
                                <textarea
                                    id="message"
                                    rows="8"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                    placeholder="Leave a comment..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full sm:w-auto py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300"
                            >
                                Send message
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;
