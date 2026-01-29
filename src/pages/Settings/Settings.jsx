import React from "react";
import DHeader from "../../compnents/DHeader";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className=" bg-gradient-to-br from-[#0a1438] via-[#0d1b4c] to-[#050b24] h-screen">
      <DHeader text={"Settings"}></DHeader>
      <div className="mt-4 pl-10">
        <div className="flex gap-x-6">
          <Link to={"/Profile"}>Profile</Link>
          <h3>Password Settings</h3>
        </div>
        <p className="text-sm mt-6 mb-4">Profile Images</p>
        <div className="flex items-center gap-4">
          <img
            src="/src/assets/Avatar.png"
            alt="Profile"
            className="w-24 h-24 rounded-full border border-[#2B7FFF]"
          />

          <Link to={"/Profile"} className="text-xs px-4 py-1.5 mt-8 rounded-full border border-[#2B7FFF] bg-[#152252] hover:bg-[#1C2A52] transition">
            Edit Profile
          </Link>
        </div>
        {/* Info Fields */}
        {/* Info Fields */}
        <div className="flex flex-col gap-y-4 mt-8">
          {/* Full Name */}
          <div className="text-xl flex border-b border-[#192D71] pb-2 w-[600px]">
            <p>Full Name:</p>
            <p className="pl-18">Jane D.</p>
          </div>

          {/* Email */}
          <div className="text-xl flex  border-b border-[#192D71] pb-2 w-[600px]">
            <p>Email:</p>
            <p className="pl-29">jane@gmail.com</p>
          </div>

          {/* Store Name */}
          <div className="text-xl flex border-b border-[#192D71] pb-2 w-[600px]">
            <p>Store Name:</p>
            <p className="pl-14">Ubreakfix Store</p>
          </div>

          {/* Store Address */}
          <div className="text-xl flex  border-b border-[#192D71] pb-2 w-[600px]">
            <p>Store Address:</p>
            <p className="pl-10"> 123 Main Street, New York, NY 10001</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
