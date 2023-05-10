import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createEvent } from "../features/events/eventSlice";
import { toast } from "react-toastify";

const AddEvent = () => {
  const dispatch = useDispatch();

  const [eventName, setEventName] = useState("");
  const [venue, setVenue] = useState("");
  const [category, setCategory] = useState("");
  const [fee, setFee] = useState("");
  const [date, setDate] = useState("");
  const [banner, setBanner] = useState(null);

  const { user } = useSelector((state) => state.auth);

  const { isLoading, isError, isSuccess } = useSelector(
    (state) => state.events
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("EventName", eventName);
    formData.append("Venue", venue);
    formData.append("Category", category);
    formData.append("fee", fee);
    formData.append("Date", date);
    formData.append("OrganizationID", user._id);
    formData.append("Banner", banner);

    dispatch(createEvent(formData));

    // clearing the state
    setEventName("");
    setVenue("");
    setFee("");
    setDate("");
  };

  return (
    <div
      className={`w-[100vw] h-full flex items-center bg-[url('/src/assets/addevent.png')] bg-no-repeat bg-cover`}
    >
      <div className="w-[50%]"></div>
      <div className="w-[50%]">
        <form className="w-[50%]" onSubmit={handleSubmit}>
          <div className="mb-10 flex flex-col">
            <label htmlFor="eventName" className="text-[1.3rem] text-white">
              Name of the event
            </label>
            <input
              type="text"
              name="eventName"
              value={eventName}
              className="bg-[#FBDDDD] outline-none border-none p-1 rounded-sm w-[100%]"
              onChange={(e) => {
                setEventName(e.target.value);
              }}
            />
          </div>
          <div className="mb-10 flex flex-col">
            <label htmlFor="date" className="text-[1.3rem] text-white">
              Date
            </label>
            <input
              type="date"
              value={date}
              className="bg-[#FBDDDD] outline-none border-none p-1 rounded-sm w-[100%]"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <div className="mb-10 flex flex-col">
            <label htmlFor="venue" className="text-[1.3rem] text-white">
              Venue
            </label>
            <input
              type="text"
              name="venue"
              value={venue}
              className="bg-[#FBDDDD] outline-none border-none p-1 rounded-sm w-[100%]"
              onChange={(e) => {
                setVenue(e.target.value);
              }}
            />
          </div>
          <div className="mb-10 flex flex-col">
            <label htmlFor="category" className="text-[1.3rem] text-white">
              Category
            </label>
            <select
              name="category"
              value={category}
              id="category"
              className="bg-[#FBDDDD] outline-none border-none p-1 rounded-sm w-[100%]"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value="select">--select one-- </option>
              <option value="standup">Standup Comedy </option>
              <option value="talk-show">Talk Show</option>
              <option value="ted-talk">Ted Talk</option>
              <option value="concert">Live Concert</option>
              <option value="singing">Live Singing</option>
              <option value="live-poetry">Live poetry</option>
            </select>
          </div>
          <div className="mb-10 flex flex-col">
            <label htmlFor="category" className="text-[1.3rem] text-white">
              Registration fee if any?
            </label>
            <input
              type="text"
              name="fee"
              value={fee}
              className="bg-[#FBDDDD] outline-none border-none p-1 rounded-sm w-[100%]"
              onChange={(e) => {
                setFee(e.target.value);
              }}
            />
          </div>
          <div className="mb-10 flex flex-col">
            <label htmlFor="category" className="text-[1.3rem] text-white">
              Upload the Event banner
            </label>
            <input
              type="file"
              className="bg-[#FBDDDD] outline-none border-none p-1 rounded-sm w-[100%]"
              id="attachment"
              required
              name="attachment"
              onChange={(e) => setBanner(e.target.files[0])}
            />
          </div>
          <div className="w-[100%] flex items-center justify-center">
            <button type="submit" className="bg-[#FBDDDD] p-2 rounded-md font-semibold">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
