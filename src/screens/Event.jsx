import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import category from "../assets/category.png";
import calender from "../assets/calender.png";
import pin from "../assets/pin.png";
import moment from "moment";
import { GiMicrophone } from "react-icons/gi";
import axios from "axios";

const Event = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/event/getEventbyid/${id}`)
      .then((response) => {
        setEvent(response.data);
      });
  }, []);

  const date = moment(event?.Date).format("MMMM Do YYYY");
  let rzKey = "";

  const handlePayment = async (amount) => {
    axios.get("http://localhost:8000/api/getkey").then((response) => {
      rzKey = response?.data?.key;
    });

    const {
      data: { order },
    } = await axios.post("http://localhost:8000/api/booking/checkout", {
      amount,
    });

    const options = {
      key: rzKey,
      amount: Number(amount) * 100,
      currency: "INR",
      name: event?.EventName,
      image: event?.Banner,
      order_id: order?.id.toString(),
      callback_url: "http://localhost:8000/api/booking/paymentVerification",
      prefill: {
        name: user?.name,
        email: user?.email,
        contact: user?.phoneNo,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <div className="h-full w-full flex bg-black">
      <div className="w-full h-full p-4">
        <img src={event?.Banner} alt="" className="h-full" />
      </div>
      <div className="flex flex-col w-full justify-center ml-20">
        <p className="text-white text-[4rem]">{event?.EventName}</p>
        <div className="mt-10">
          <div className="flex mt-5 items-center">
            <img src={category} alt="" className="h-6 w-10" />
            <p className="text-white ml-3 text-[2rem]">{event?.Category}</p>
          </div>
          <div className="flex mt-5 items-center">
            <img src={calender} alt="" className="h-6 w-10" />
            <p className="text-white ml-3 text-[2rem]">{date}</p>
          </div>
          <div className="flex mt-5 items-center">
            <img src={pin} alt="" className="h-6 w-10" />
            <p className="text-white ml-3 text-[2rem]">{event?.Venue}</p>
          </div>
        </div>
        <div className="mt-10">
          <button
            className="bg-white p-2 rounded-md cursor-pointer font-semibold"
            onClick={() => handlePayment(Number(event?.fee))}
          >
            Pay {event?.fee}
          </button>
        </div>
        <div className="bg-white h-1 w-[20%] mt-10"></div>
        <div className="bg-black text-white mt-5">
          <p className="text-[2rem]">Event Guide</p>
          <div className="mt-4 flex ">
            <div>
              <GiMicrophone className="h-5" />
            </div>
            <div className="ml-4">
              <p className="text-gray-400">Live Performances</p>
              <p>Enjoy a unique experience</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-gray-400">For ages - 18+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
