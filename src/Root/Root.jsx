import React from "react";
import { BiHome } from "react-icons/bi";
import { FaCalendar } from "react-icons/fa";
import { IoCallOutline, IoSettingsOutline } from "react-icons/io5";
import { RiHome4Fill } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="flex ">
      <header className="min-h-screen bg-[#111B3C] w-[240px] p-3">
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
          <Link to={"/settings"} className="text-lg py-3 px-2 text-[#FFFFFF]">
            <span className="flex gap-3 items-center">
              <IoSettingsOutline className="text-xl" />
              Settings
            </span>
          </Link>
        </ul>
      </header>
      <Outlet className="w-10/12"></Outlet>
    </div>
  );
};

export default Root;
