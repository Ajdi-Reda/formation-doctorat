import React from "react";

const Hero = () => {
    return (
        <section className="flex flex-col justify-center items-center mt-24 text-center gap-6 px-3">
            <header className="max-w-xl">
                <h1 className="font-bold tracking-wide text-2xl md:text-4xl">
                    Empowering Doctorate Candidates to Achieve Excellence
                </h1>
            </header>
            <p className="text-sm tracking-wider font-semibold max-w-2xl">
                Welcome to our comprehensive platform for exploring doctorate
                programs, connecting with professors, and joining research
                groups.
            </p>
            <div className="space-x-2 md:space-x-4">
                <button className="ms-4 font-semibold text-sm bg-black border py-2 border-black px-4 text-gray-100 hover:text-gray-200 dark:text-gray-400 dark:hover:text-white">
                    Explore
                </button>
                <button className="font-semibold text-sm border py-2 border-black px-4 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    Sign Up
                </button>
            </div>
            {/* Improved Hero Image */}
            <div className="w-full md:w-[80%] h-64 md:h-96 overflow-hidden">
                <img
                    src="/storage/landingPage/hero-image.png"
                    alt="Hero Image"
                    className="object-cover w-full h-full"
                />
            </div>
        </section>
    );
};

export default Hero;
