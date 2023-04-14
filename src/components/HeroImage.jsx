import { useState } from "react";
import Calendar from "react-calendar";
import heroImage from "../assets/HeroImage.png";

import "react-calendar/dist/Calendar.css";

const HeroImage = () => {
  const [date, setDate] = useState(new Date());
  const [showCalender, setShowCalender] = useState(false);

  return (
    <div className="w-full bg-black h-full">
      <div>
        <img src={heroImage} alt="heroImage" className="w-full h-[75vh]" />
      </div>
      <div className="w-full px-[20vw] py-5 h-[10vh]">
        <div className="bg-[#47489D] rounded-xl flex justify-around items-center px-5 py-10">
          <div className="flex flex-col gap-5">
            <label htmlFor="event" className="text-[#E89595]">
              Search Event
            </label>
            <input
              type="text"
              className="bg-[#47489D] border-b border-white outline-none text-white pl-[2px]"
            />
          </div>
          <div className="flex flex-col gap-5">
            <label htmlFor="event" className="text-[#E89595]">
              Place
            </label>
            <input
              type="text"
              className="bg-[#47489D] border-b border-white outline-none text-white pl-[2px]"
            />
          </div>
          <div className="flex flex-col gap-5">
            <label htmlFor="event" className="text-[#E89595]">
              Date
            </label>
            <input
              type="text"
              className="bg-[#47489D] border-b border-white outline-none text-white pl-[2px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
