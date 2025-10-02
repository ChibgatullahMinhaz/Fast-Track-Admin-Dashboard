// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router';
// import { FaUsers, FaTruck, FaComments, FaHome, FaCar } from "react-icons/fa";

// const Sidebar: React.FunctionComponent = () => {
//     const [isOpen, setIsOpen] = useState(true);
//     const location = useLocation();

//     const menuItems = [
//         { name: "Dashboard", icon: <FaHome />, link: "/" },
//         { name: "Users Management", icon: <FaUsers />, link: "/admin/users" },
//         { name: "Car Management", icon: <FaCar />, link: "/admin/cars" },
//         { name: "Truck Management", icon: <FaTruck />, link: "/admin/track" },
//         { name: "Drivers Management", icon: <FaTruck />, link: "/admin/drivers" },
//         { name: "Chats", icon: <FaComments />, link: "/admin/chats" },
//     ];
//     return (
//         <div className="flex">
//             {/* Sidebar */}
//             <div
//                 className={` bg-[#1E2939] text-white h-screen p-5 pt-8 relative duration-300 ${isOpen ? "w-64" : "w-20"
//                     }`}
//             >
//                 {/* Toggle button */}
//                 <div
//                     className="absolute -right-3 top-9 w-7 h-7 bg-white text-gray-800 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
//                     onClick={() => setIsOpen(!isOpen)}
//                 >
//                     {isOpen ? "<" : ">"}
//                 </div>

//                 {/* Logo */}
//                 <div className="flex items-center gap-2">
//                     {/* Logo / Admin Profile */}
//                     <div className="flex items-center gap-3 mb-10">
//                         {/* Admin Image */}
//                         <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300">
//                             <img
//                                 src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
//                                 alt="Admin"
//                                 className="w-full h-full object-cover"
//                             />
//                         </div>

//                         {/* Admin Name (visible only if sidebar open) */}
//                         {isOpen && (
//                             <div className="flex flex-col">
//                                 <span className="font-semibold text-white">Md Hasan</span>
//                                 <span className="text-sm text-gray-300">Administrator</span>
//                             </div>
//                         )}
//                     </div>
//                 </div>


//                 {/* Menu */}
//                 <ul className="flex flex-col gap-4">
//                     {menuItems.map((item, index) => {
//                         const isActive = location.pathname === item.link; // check current route
//                         return (
//                             <Link
//                                 to={item.link}
//                                 key={index}
//                                 className={`flex items-center gap-3 p-2 cursor-pointer rounded-md hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""
//                                     }`}
//                             >
//                                 <span className="text-xl">{item.icon}</span>
//                                 <span
//                                     className={`text-md font-medium duration-200 ${isOpen ? "block" : "hidden"
//                                         }`}
//                                 >
//                                     {item.name}
//                                 </span>
//                             </Link>
//                         );
//                     })}
//                 </ul>
//             </div>


//         </div>
//     );
// };

// export default Sidebar;





import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { FaUsers, FaTruck, FaComments, FaHome, FaCar } from "react-icons/fa";
import { IoChevronDown, IoChevronForward } from "react-icons/io5";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openGroups, setOpenGroups] = useState<string[]>([]);
  const location = useLocation();

  const toggleGroup = (name: string) => {
    if (openGroups.includes(name)) {
      setOpenGroups(openGroups.filter((g) => g !== name));
    } else {
      setOpenGroups([...openGroups, name]);
    }
  };

  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, link: "/" },
    { name: "Users Management", icon: <FaUsers />, link: "/admin/users" },
    {
      name: "Car Management",
      icon: <FaCar />,
      children: [
        { name: "All Cars", link: "/admin/cars" },
        { name: "Add Car", link: "/admin/cars/add" },
      ],
    },
    {
      name: "Truck Management",
      icon: <FaTruck />,
      children: [
        { name: "All Trucks", link: "/admin/trucks" },
        { name: "Add Truck", link: "/admin/trucks/add" },
      ],
    },
    { name: "Drivers Management", icon: <FaTruck />, link: "/admin/drivers" },
    { name: "Chats", icon: <FaComments />, link: "/admin/chats" },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={` bg-[#1E2939] text-white h-screen p-5 pt-8 relative duration-300 ${isOpen ? "w-64" : "w-20"
          } overflow-y-auto overflow-x-hidden`}
      >
        {/* Toggle button */}
        <div
          className="absolute -right-3 top-9 w-7 h-7 bg-white text-gray-800 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "<" : ">"}
        </div>

        {/* Logo / Profile */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
                alt="Admin"
                className="w-full h-full object-cover"
              />
            </div>

            {isOpen && (
              <div className="flex flex-col">
                <span className="font-semibold text-white">Md Hasan</span>
                <span className="text-sm text-gray-300">Administrator</span>
              </div>
            )}
          </div>
        </div>

        {/* Menu */}
        <ul className="flex flex-col gap-2">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.link;

            if (item.children) {
              const isGroupOpen = openGroups.includes(item.name);
              return (
                <li key={index}>
                  <div
                    className={`flex items-center justify-between cursor-pointer p-2 rounded-md hover:bg-gray-700 ${isGroupOpen ? "bg-gray-700" : ""
                      }`}
                    onClick={() => toggleGroup(item.name)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{item.icon}</span>
                      {isOpen && (
                        <span className="text-md font-medium">{item.name}</span>
                      )}
                    </div>
                    {isOpen &&
                      (isGroupOpen ? (
                        <IoChevronDown size={16} />
                      ) : (
                        <IoChevronForward size={16} />
                      ))}
                  </div>
                  {isGroupOpen && (
                    <ul className="ml-8 mt-2 flex flex-col gap-2">
                      {item.children.map((child, i) => {
                        const childActive = location.pathname === child.link;
                        return (
                          <Link
                            to={child.link}
                            key={i}
                            className={`block p-2 rounded-md text-sm hover:bg-gray-600 ${childActive ? "bg-gray-600" : ""
                              }`}
                          >
                            {child.name}
                          </Link>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            }

            return (
              <Link
                to={item.link!}
                key={index}
                className={`flex items-center gap-3 p-2 cursor-pointer rounded-md hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""
                  }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span
                  className={`text-md font-medium duration-200 ${isOpen ? "block" : "hidden"
                    }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
