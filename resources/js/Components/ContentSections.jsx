import React from "react";

const ContentSections = () => {
    return (
        <div className="container mx-auto mt-24">
            {/* Content Section 1 */}
            <section className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:justify-between items-center">
                <article className="space-y-3 md:space-y-5 md:w-1/2">
                    <p className="text-xs">Discover</p>
                    <h2 className="text-2xl md:text-4xl font-bold tracking-wide max-w-lg">
                        Explore the world of doctorate formations
                    </h2>
                    <p>
                        Our comprehensive database offers a wide range of
                        doctorate programs, providing you with the information
                        you need to make an informed decision
                    </p>
                    <ul className="space-y-1">
                        <li>Find your perfect doctorat program</li>
                        <li>Discover leading educational establishments</li>
                        <li>Learn from renowned professors</li>
                    </ul>
                    <div>
                        <button className="font-semibold text-sm border py-2 border-black px-4 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            Explore
                        </button>
                        <button className="font-semibold text-sm px-4 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            Sign Up
                        </button>
                    </div>
                </article>
                <div className="w-full md:w-1/2">
                    <img
                        src="/storage/landingPage/sec1.jpg"
                        alt="Section 1 Image"
                        className="object-cover w-full h-full"
                    />
                </div>
            </section>

            {/* Content Section 2 */}
            <section className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:justify-between items-center mt-32 gap-3">
                <article className="space-y-3 md:space-y-5 md:w-1/2">
                    <h2 className="text-2xl md:text-4xl font-bold tracking-wide max-w-lg">
                        Discover the Esteemed Establishments and their
                        Educational Opportunities
                    </h2>
                    <p>
                        Explore a wide range of educational opportunities
                        offered by our esteemed establishments. From
                        cutting-edge research to innovative programs, we provide
                        a platform for academic excellence.
                    </p>
                    <div className="flex flex-col md:flex-row gap-3">
                        <div className="space-y-3">
                            <h3 className="text-lg font-bold">Education Hub</h3>
                            <p>
                                Unlock your potential with our world-class
                                educational institutions and their diverse
                                programs.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-lg font-bold">
                                Endless Possibilities
                            </h3>
                            <p>
                                Experience a wealth of opportunities for growth
                                and learning at our prestigious establishments.
                            </p>
                        </div>
                    </div>
                </article>
                <div className="w-full md:w-1/2">
                    <img
                        src="/storage/landingPage/sec2.jpg"
                        alt="Section 2 Image"
                        className="object-cover w-full h-full"
                    />
                </div>
            </section>
        </div>
    );
};

export default ContentSections;
