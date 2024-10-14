import React, { useState } from "react";
import {
  MenuIcon,
  XIcon,
  HomeIcon,
  UserIcon,
  InformationCircleIcon,
  PhoneIcon,
  CogIcon,
} from "@heroicons/react/solid";
import data from "../../constant/constant";
import { useNavigate } from "react-router-dom";

export default function SidebarNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const iconMap = [
    <HomeIcon className="h-6 w-6 text-gray-500" />,
    <UserIcon className="h-6 w-6 text-gray-500" />,
    <CogIcon className="h-6 w-6 text-gray-500" />,
    <PhoneIcon className="h-6 w-6 text-gray-500" />,
    <InformationCircleIcon className="h-6 w-6 text-gray-500" />,
  ];

  return (
    <div className="flex">
      <button onClick={toggleSidebar} className="p-4">
        <MenuIcon className="h-10 w-10 text-white" />
      </button>

      <nav
        className={`fixed left-0 top-0 w-64 h-full bg-white shadow-lg transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-10`}
      >
        <div className="flex items-center justify-between p-9 bg-gray-800 text-white">
          <span className="font-bold">Menu</span>
          <button onClick={toggleSidebar}>
            <XIcon className="h-6 w-6 text-white" />
          </button>
        </div>

        <div className="flex flex-col space-y-2 p-4">
          {data.sideBar.map((item, i) => (
            <div
              key={i}
              onClick={() => navigate(item.path)}
              className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded"
            >
              {iconMap[i]}
              <span className="ml-2 text-gray-800">{item.name}</span>{" "}
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}
