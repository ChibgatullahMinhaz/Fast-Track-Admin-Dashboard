import React, { useState } from 'react';
import { FaUsers, FaTruck, FaComments, FaHome } from "react-icons/fa";
import { Link } from 'react-router';

const Sidebar: React.FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(true);

    const menuItems = [
        { name: "Dashboard", icon: <FaHome />, link: "/admin/dashboard" },
        { name: "Users", icon: <FaUsers />, link: "/admin/users" },
        { name: "Drivers", icon: <FaTruck />, link: "/admin/drivers" },
        { name: "Chats", icon: <FaComments />, link: "/admin/chats" },
    ];

    return (
        <div className="flex">
            {/* Sidebar */}
            <div
                className={`bg-gray-800 text-white h-screen p-5 pt-8 relative duration-300 ${isOpen ? "w-64" : "w-20"
                    }`}
            >
                {/* Toggle button */}
                <div
                    className="absolute -right-3 top-9 w-7 h-7 bg-white text-gray-800 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "<" : ">"}
                </div>

                {/* Logo */}
                <div className="flex items-center gap-2 mb-10">
                    <div className={`text-2xl font-bold duration-300 ${isOpen ? "block" : "hidden"}`}>
                        FastTruck Admin
                    </div>
                </div>

                {/* Menu */}
                <ul className="flex flex-col gap-4">
                    {menuItems.map((item, index) => (
                        <Link to={item.link}
                            key={index}
                            className="flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-700 rounded-md"
                        >
                            <span className="text-xl">{item.icon}</span>
                            <span className={`text-md font-medium duration-200 ${isOpen ? "block" : "hidden"}`}>
                                {item.name}
                            </span>
                        </Link>
                    ))}
                </ul>
            </div>

            {/* Main content */}
            <div className="flex-1 p-7">
                <h1 className="text-2xl font-bold">Admin Panel Content</h1>
            </div>
        </div>
    );
};

export default Sidebar;