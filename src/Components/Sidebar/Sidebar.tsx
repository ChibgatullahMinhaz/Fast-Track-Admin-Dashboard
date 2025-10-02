import React, { useState } from 'react';
import { Link } from 'react-router';
import { FaUsers, FaTruck, FaComments, FaHome, FaCar, FaRoute } from "react-icons/fa";

const Sidebar: React.FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(true);

    const menuItems = [
        { name: "Dashboard", icon: <FaHome />, link: "/" },
        { name: "Users Management", icon: <FaUsers />, link: "/admin/users" },
        { name: "Car Management", icon: <FaCar />, link: "/admin/cars" },
        { name: "Truck Management", icon: <FaTruck />, link: "/admin/track" },
        { name: "Drivers Management", icon: <FaTruck />, link: "/admin/drivers" },
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
                <div className="flex items-center gap-2">
                    {/* Logo / Admin Profile */}
                    <div className="flex items-center gap-3 mb-10">
                        {/* Admin Image */}
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300">
                            <img
                                src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
                                alt="Admin"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Admin Name (visible only if sidebar open) */}
                        {isOpen && (
                            <div className="flex flex-col">
                                <span className="font-semibold text-white">Md Hasan</span>
                                <span className="text-sm text-gray-300">Administrator</span>
                            </div>
                        )}
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


        </div>
    );
};

export default Sidebar;