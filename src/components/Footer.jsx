import React from "react";
import logo from "../assets/bookit-logo.png";
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'

const Footer = () => {
  return (
    <div className="w-full grid grid-cols-3 bg-[#282a44] text-white p-5">
      <div>
        <div className="flex">
          <img src={logo} alt="logo" />
          <p className="text-3xl mt-7 ml-2">BOOK-IT</p>
        </div>
        <div className="my-5 w-[55%]">
          <p>
            BOOK IT is a l self-service ticketing platform for live experiences
            that allows anyone to create, share, find and attend events that
            fuel their passions and enrich their lives.
          </p>
        </div>
        <div className="flex gap-3">
            <img src={facebook} alt="facebook" />
            <img src={linkedin} alt="linkedin" />
            <img src={twitter} alt="twitter" />
        </div>
      </div>

      <div className="mx-auto">
        <p className="text-2xl">Plan Events</p>
        <ul className="mt-16">
          <li>Create and Setup</li>
          <li>Sell Tickets</li>
          <li>Online RSVP</li>
          <li>Online events</li>
        </ul>
      </div>

      <div className="mx-auto">
        <p className="text-2xl">Eventick</p>
        <ul className="mt-16">
          <li>About us</li>
          <li>Press</li>
          <li>Contact us</li>
          <li>Help Center</li>
          <li>How it works?</li>
          <li>Privacy</li>
          <li>Terms</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
