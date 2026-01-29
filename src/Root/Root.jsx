import { LogOut } from "lucide-react";
import React, { useState } from "react";
import { FaBars, FaCalendar } from "react-icons/fa";
import { IoCallOutline, IoSettingsOutline } from "react-icons/io5";
import { RiHome4Fill } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";

const Root = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hoverEffect = "transition-all duration-300 border border-transparent hover:border-white/40 hover:bg-white/10 hover:backdrop-blur-md hover:rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:px-2";

  return (
    <div className="min-h-screen bg-[#0a0f1e]">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-3 bg-[#111b3c] text-white hover:bg-gray-700 transition duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars size={24} />
      </button>

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div
          className={`bg-[#111b3c] p-5 w-96 space-y-4 transition-all duration-300 ${isOpen ? "block" : "hidden"} md:block border-r border-white/5`}
        >
          <div className="py-4">
            <div className="p-2 border w-fit mx-auto rounded-xl bg-gradient-to-b from-[#00FF88] to-[#00D4FF] shadow-[0_0_15px_rgba(0,255,136,0.3)]">
              <img
                src="/src/assets/Icon.png"
                alt="Logo"
                className="w-[32px] h-[32px] mx-auto"
              />
            </div>
          </div>

          <nav className="flex flex-col space-y-2 mt-6">
            <Link to="/" className={`text-lg py-3 px-3 text-white flex items-center gap-3 ${hoverEffect}`}>
              <RiHome4Fill className="text-xl" />
              <span>Dashboard Overview</span>
            </Link>

            <Link to="/callLogs" className={`text-lg py-3 px-3 text-white flex items-center gap-3 ${hoverEffect}`}>
              <IoCallOutline className="text-xl" />
              <span>Call Logs</span>
            </Link>

            <Link to="/appointment" className={`text-lg py-3 px-3 text-white flex items-center gap-3 ${hoverEffect}`}>
              <FaCalendar className="text-xl" />
              <span>Appointments</span>
            </Link>

            <Link to="/settings" className={`text-lg py-3 px-3 text-white flex items-center gap-3 ${hoverEffect}`}>
              <IoSettingsOutline className="text-xl" />
              <span>Settings</span>
            </Link>
          </nav>

          {/* Log out button */}
          <div className={`mt-auto flex gap-2 items-center px-4 py-3 text-white cursor-pointer ${hoverEffect}`}>
            <LogOut size={20} />
            <span>LogOut</span>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="w-full bg-[#080c17]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Root;