import React from "react";

const Side = () => {
    return (
        <div className="fixed bottom-0 z-10 h-screen ltr:border-r rtl:border-l vertical-menu rtl:right-0 ltr:left-0 top-[70px] bg-slate-50 border-gray-50 print:hidden dark:bg-zinc-800 dark:border-neutral-700">
            <div data-simplebar className="h-full">
                {/* Sidemenu */}
                <div className="metismenu pb-10 pt-2.5" id="sidebar-menu">
                    {/* Left Menu Start */}
                    <ul id="side-menu">
                        <li
                            className="px-5 py-3 text-xs font-medium text-gray-500 cursor-default leading-[18px] group-data-[sidebar-size=sm]:hidden block"
                            data-key="t-menu"
                        >
                            Menu
                        </li>

                        <li>
                            <a
                                href="index.html"
                                className="block py-2.5 px-6 text-sm font-medium text-gray-950 transition-all duration-150 ease-linear hover:text-violet-500 dark:text-gray-300 dark:active:text-white dark:hover:text-white"
                            >
                                <i data-feather="home" fill="#545a6d33"></i>
                                <span data-key="t-dashboard"> Dashboard</span>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* Sidebar */}
            </div>
        </div>
    );
};

export default Side;
