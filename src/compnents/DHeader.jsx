import React from 'react'
import { FaRegBell } from "react-icons/fa";

const DHeader = ({text}) => {
  return (
    <div className="bg-[#111B3C] flex items-center justify-between  lg:p-4 ">
        <h1 className="text-xl font-semibold text-white ml-6">{text}</h1>

        <div className="flex items-center gap-4 px-3">
          <button className="text-white/80 hover:text-white">
            <FaRegBell />
          </button>
          <img
            src="https://i.ibb.co.com/sJt2gSwr/Avatar.png"
            alt="User"
            className="w-14 h-14 rounded-full border border-[#2B7FFF]"
          />
        </div>
      </div>
  )
}

export default DHeader