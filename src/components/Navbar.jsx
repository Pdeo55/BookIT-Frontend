import React from "react";
import logo from "../assets/bookit-logo.png";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between bg-black">
      <div>
        <img src={logo} alt="bookit-logo" className="h-12 cursor-pointer"/>
      </div>
      <div className="flex gap-20 py-2">
        <p className="text-white text-2xl cursor-pointer">Schedule</p>
        <p className="text-white text-2xl cursor-pointer">Speakers</p>
        <p className="text-white text-2xl cursor-pointer">Ticket</p>
        <p className="text-white text-2xl cursor-pointer">Contact</p>
        <button className="border text-black bg-white rounded-full px-5">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
