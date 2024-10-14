import React, { useState, useRef, useEffect } from "react";
import Auth from "../Auth/Auth";
import data from "./../constant/constant";
import IMAGES from "../assets/Images";
import SidebarNavigation from "../outlet/sideBar/SideBarNavigation";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isUserWantToLogin, setIsUserWantToLogin] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogin = () => {
    setIsUserWantToLogin(true);
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setDropdownOpen(false);
    localStorage.clear("userData");
  };
  const handleUserLogin = () => {
    setIsLoggedIn(true);
    setIsUserWantToLogin(false);
  };
  const storedUserData = localStorage.getItem("userData");
  let username = "";

  if (storedUserData) {
    const userData = JSON.parse(storedUserData);
    if (userData && userData.username) {
      username =
        userData.username.charAt(0).toUpperCase() + userData.username.slice(1);
    }
  }
  const authRef = useRef();

  const handleClickOutside = (event) => {
    if (authRef.current && !authRef.current.contains(event.target)) {
      setIsUserWantToLogin(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex bg-gray-800">
      <SidebarNavigation />

      <div className="flex-1">
        <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
          <div className="flex items-center">
            <img
              src={IMAGES.websiteLogo}
              alt="weblogo"
              className="w-16 h-auto bg-gray"
            />

            <h1 className="text-xl font-bold ml-2">{data.destion_invotion}</h1>
          </div>

          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center focus:outline-none"
            >
              <span>{isLoggedIn ? username : "Guest"}</span>
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  Si
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg z-10">
                <div className="py-2">
                  {isLoggedIn ? (
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                    >
                      Logout
                    </button>
                  ) : (
                    <button
                      onClick={handleLogin}
                      className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                    >
                      Login
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        {isUserWantToLogin && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
              className="absolute inset-0 bg-black opacity-50"
              onClick={() => setIsUserWantToLogin(false)}
            ></div>

            <div
              ref={authRef}
              className="bg-white p-6 rounded shadow-lg z-10 w-full max-w-lg"
            >
              <Auth userLogin={handleUserLogin} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
