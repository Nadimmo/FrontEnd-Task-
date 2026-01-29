import React from "react";

const Button = ({text}) => {
  return (
    <div>
      <button className="back  px-4 py-2 rounded-lg hover:ring-2 shadow shadow-[#E0E9F2] opacity-100">{text}</button>
    </div>
  );
};

export default Button;
