import React from "react";
import logo from "../assets/bookit-logo.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  return (
    <div className="w-full flex justify-between bg-black">
      <div>
        <img src={logo} alt="bookit-logo" className="h-12 cursor-pointer" />
      </div>
      <div className="flex gap-20 py-2 pr-8">
        <Link to={"/add-event"}>
          {user.role === "Organizer" && (
            <p className="text-white text-2xl cursor-pointer">Add a Event</p>
          )}
        </Link>
        {user && (
          <Link to={"/login"}>
            <button
              className="border text-black bg-white rounded-full px-5 font-bold"
              onClick={onLogout}
            >
              Hi {user.name}
            </button>
          </Link>
        )}
        {!user && (
          <Link to={"/login"}>
            <button className="border text-black bg-white rounded-full px-5 font-bold">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
