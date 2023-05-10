import React from "react";
import event from "../assets/event.png";
import { Link } from "react-router-dom";
import AddEvent from "../screens/AddEvent";

const CreateEvent = () => {
  return (
    <div className="w-full bg-[#EEE1FF]">
      <div className="flex justify-evenly ">
        <div>
          <img src={event} alt="event" />
        </div>
        <div className="flex flex-col justify-evenly items-center">
          <p className="font-bold text-[2rem]">Make your own Event</p>
          <Link to={'/add-event'}>
            <button className="bg-[#F5167E] px-8 py-3 rounded-xl font-semibold">
              Create Event
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
