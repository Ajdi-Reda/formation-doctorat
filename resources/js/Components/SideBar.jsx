import React from 'react';
import {navItems} from "@/Components/NavItems.jsx";
import NavLink from "@/Components/NavLink.jsx";

const Sidebar = () => {
    return (
        <div className="bg-gray-800 h-screen w-1/5">
            <div className="p-4">
                <div className="border-b-2 py-4">
                <h1 className="text-white text-xl font-bold">Sidebar</h1>
                </div>
                <ul className="mt-12 text-lg space-y-4 text-white">
                    {navItems.map((item, idx) =>
                        <li key={idx}>
                        <NavLink href={route(item.route)} active={route().current(item.route)}
                                 className="border-none text-white text-lg"
                        >
                            <span className="mr-4">{item.icon}</span> {item.name}
                        </NavLink>
                        </li>
                            )}
                </ul>
            </div>
        </div>
    );
};
export default Sidebar;
