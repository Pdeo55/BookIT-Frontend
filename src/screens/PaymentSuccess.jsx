import React from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import moment from "moment";


const PaymentSuccess = () => {


  const seachQuery = useSearchParams()[0];

  const referenceNum = seachQuery.get("reference");

  console.log(referenceNum)

  const {user} = useSelector((state) => state.auth)
  const { events } = useSelector((state) => state.events);
  console.log(events)
 
  const date = moment(event?.Date).format("MMMM Do YYYY");
  if(referenceNum){
    const userDetails = {
      id: user?._id,
      name: user?.name,
      email: user?.email
    }

    // const eventDetails = {
    //   eventName: events?.EventName,
    //   venue: events?.Venue,
    //   date: date
    // }

    axios.post("http://localhost:8000/api/booking/paymentVerification", {userDetails})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="bg-gray-100 h-screen">
      <div className="bg-white p-6  md:mx-auto">
        <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          ></path>
        </svg>
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Done!
          </h3>
          <p className="text-gray-600 my-2">
            Thank you for completing your secure online payment.
          </p>
          <p> Have a great day! {user?.name} </p>
          <div className="py-10 text-center">
            <p>Reference No.{referenceNum}</p>
          </div>
          <p> Booking Details </p>
          <div>
            <ul>
            <li><h5>Name: {user?.name}</h5></li>
            {/* <li><h5>Event: {events?.EventName}</h5></li>
            <li><h5>Venue: {events?.Venue}</h5></li> */}
            <li><h5>Date:{date}</h5></li>
            </ul>
          </div>
          <div className="py-10 text-center">
            <a
              href="/"
              className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
            >
              GO BACK
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
