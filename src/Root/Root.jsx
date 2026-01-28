import React, { useState } from "react";
import { FaBars, FaCalendar } from "react-icons/fa";
import { IoCallOutline, IoSettingsOutline } from "react-icons/io5";
import { RiHome4Fill } from "react-icons/ri";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen ]">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-3 bg-[#F1BA88] text-white  hover:bg-gray-700 transition duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars size={24} />
      </button>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div
          className={`bg-[#111b3c]  p-5 w-64 space-y-4 transition-all duration-300 ${isOpen ? "block" : "hidden"} md:block`}
        >
          <ul className="space-y-2">
            <header className=" w-[240px] p-3">
              <div className="py-4">
                <div className="p-2 border w-fit mx-auto rounded-xl bg-linear-to-b from-[#00FF88] to-[#00D4FF]">
                  <img
                    src="/src/assets/Icon.png"
                    alt="Logo"
                    className="w-[32px] h-[32px] mx-auto "
                  />
                </div>
              </div>

              <ul className="flex flex-col mt-3">
                <Link to={"/"} className="text-lg py-3 px-2 text-[#FFFFFF]">
                  <span className="flex gap-3 items-center">
                    <RiHome4Fill className="text-xl" />
                    Dashboard Overview
                  </span>
                </Link>
                <Link to={"/"} className="text-lg py-3 px-2 text-[#FFFFFF]">
                  <span className="flex gap-3 items-center">
                    <IoCallOutline className="text-xl" /> Call Logs
                  </span>
                </Link>
                <Link to={"/"} className="text-lg py-3 px-2 text-[#FFFFFF]">
                  <span className="flex gap-3 items-center">
                    {" "}
                    <FaCalendar className="text-xl" />
                    Appointments
                  </span>
                </Link>
                <Link
                  to={"/settings"}
                  className="text-lg py-3 px-2 text-[#FFFFFF]"
                >
                  <span className="flex gap-3 items-center">
                    <IoSettingsOutline className="text-xl" />
                    Settings
                  </span>
                </Link>
              </ul>
            </header>
          </ul>
        </div>

        {/* Dashboard Content */}
        <div className="w-3/4 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
