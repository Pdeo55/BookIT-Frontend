import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllEvent } from "../features/events/eventSlice";
import axios from "axios";
import { Link } from "react-router-dom";

const Events = () => {
  const location = useLocation();
  const [events, setEvents] = useState([]);
  //   const dispatch = useDispatch();

  //   const { events } = useSelector((state) => state.events);

  //   dispatch(getAllEvent())
  console.log(events);

  const category = new URLSearchParams(location.search).get("category");

  useEffect(() => {
    axios.get("http://localhost:8000/api/event/getEvent").then((response) => {
      setEvents(response.data);
    });
  }, []);

  console.log(events);

  const result = events.filter((event) => category === event.Category);

  return (
    <div className="w-full bg-black">
      <div className="w-full text-center pt-8">
        <p className="text-white text-[2rem] uppercase">{category}</p>
      </div>
      <div className="mt-18 flex flex-col justify-center items-center">
        {result.map((event) => (
          <div
            className="flex mt-20 border border-gray-600 rounded-lg p-4 cursor-pointer w-[60%]"
            key={event._id}
          >
            <Link to={`/events/${event._id}`}>
              <img src={event.Banner} alt="" className="w-[400px] h-[200px] rounded-lg" />
            </Link>
            <div className="ml-10">
              <p className="text-white text-[2rem]">{event.EventName}</p>
              <p className="text-white mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate repellat tempora vero laudantium possimus nisi id!
                Inventore, porro quos ullam quam, enim, at nisi tempora harum
                asperiores nemo cupiditate repellendus.
              </p>
              <div className="text-white flex mt-10 gap-6">
                <div className="bg-gray-400 p-2 rounded-lg">
                  <p>#{event?.Category}</p>
                </div>
                <div className="bg-gray-400 p-2 rounded-lg">
                  <p>#{event?.Venue}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
