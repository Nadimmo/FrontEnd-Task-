import React from "react";
// import DHeader from "../../compnents/DHeader";

const Settings = () => {
  return (
    <div className=" bg-gradient-to-r from-[#101b43]  via-[#152353] to-[#131e43] w-ful p-4">
      {/* <DHeader  text={"Settings"}></DHeader> */}
      <div>
        <div className="flex gap-x-6">
          <h3>Profile</h3>
          <h3>Password Settings</h3>
        </div>
        <p className="text-sm mt-6 mb-2">Profile Images</p>
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
        {/* info */}
        {/* Info Fields */}
        <div className=" flex gap-x-20  mt-6">
          <div className="text-xl space-y-4">
            <p>Full Name</p>
            <p>Email</p>
            <p>Store Name</p>
            <p>Store Address</p>
          </div>
          <div className="text-xl space-y-4">
             <p>Jane D.</p>
            <p>jane@gmail.com</p>
            <p>Ubreakfix Store</p>
            <p>123 Main Street, New York, NY 10001</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Settings;
