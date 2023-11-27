import React from "react";
import NavLink from "./NavLink";
import { Link } from "@inertiajs/react";

const NavBar = ({ logo = "Logo", navItems }) => {
    return (
        <nav className="bg-gray-50">
            <div className="container mx-auto">
                <div className="py-4 flex justify-between items-center ">
                    <div className="flex space-x-4 items-center">
                        <div className="w-20">
                            <span>{logo}</span>
                        </div>
                        <div className="flex gap-2 justify-center items-center">
                            {navItems.map((navItem, idx) => (
                                <NavLink key={idx}>{navItem}</NavLink>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Link
                            href={route("login")}
                            className="font-semibold text-sm border py-2 border-black px-4 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        >
                            Log in
                        </Link>
                        <Link
                            href={route("register")}
                            className="ms-4 font-semibold text-sm bg-black border py-2 border-black px-4 text-gray-100 hover:text-gray-200 dark:text-gray-400 dark:hover:text-white"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
