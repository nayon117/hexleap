"use client"
import { useEffect, useState } from "react";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  const [theme, setTheme] = useState<"light" | "dark">(
    // Check if localStorage is available, if not, default to "light" theme
    typeof localStorage !== "undefined" && localStorage.getItem("theme") === "dark" ? "dark" : "light"
  );

  const handleToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    // Check if localStorage is available before using it
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  const navLinks = (
    <>
      <li className="font-medium text-base">Home</li>
      <li className="font-medium text-base">Events</li>
      <li className="font-medium text-base">Blogs</li>
      <li className="font-medium text-base">Contact</li>
    </>
  );

  return (
    <div className="navbar bg-first section-container">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="  border-none lg:hidden"
          >
            <IoMenuSharp className="text-2xl" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content mt-3 z-[1] p-2 shadow-md   rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <p className="text-xl font-semibold ml-3 ">Hexleap</p>
      </div>
      <div className="navbar-center hidden lg:flex lg:flex-row lg:items-center">
        {/* Adjusted the className to flex-row */}
        <ul className="flex gap-6 px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <label className="swap swap-rotate mr-2">
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={theme === "dark"}
          />
            {/* sun icon */}
          <svg
            className="swap-on fill-current w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off fill-current w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        <button className="btn btn-sm btn-neutral">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
