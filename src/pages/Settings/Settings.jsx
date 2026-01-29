import React from "react";
import DHeader from "../../compnents/DHeader";

const Settings = () => {
  return (
    <div className=" bg-gradient-to-r from-[#101b43]  via-[#152353] to-[#131e43] h-screen">
      <DHeader text={"Settings"}></DHeader>
      <div className="mt-4 pl-4">
        <div className="flex gap-x-6">
          <h3>Profile</h3>
          <h3>Password Settings</h3>
        </div>
        <p className="text-sm mt-6 mb-4">Profile Images</p>
        <div className="flex items-center gap-4">
          <img
            src="/src/assets/Avatar.png"
            alt="Profile"
            className="w-24 h-24 rounded-full border border-[#2B7FFF]"
          />

          <button className="text-xs px-4 py-1.5 mt-8 rounded-full border border-[#2B7FFF] bg-[#152252] hover:bg-[#1C2A52] transition">
            Edit Profile
          </button>
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
