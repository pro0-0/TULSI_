// @ts-nocheck
import React from "react";
import {
  FiClock,
  FiCreditCard,
  FiMail,
  FiMap,
  FiPhoneCall,
  FiUser,
  FiUsers,
} from "react-icons/fi";

const HoverDevCards = () => {
  return (
    <div className="p-5 bg-black">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Address"
          subtitle="Plot No.E30/1, Millennium Park Road, Chikalthana Industrial Area, Aurangabad-Maharashtra - 431006 (Opposite Woodard RND) "
          href="https://maps.app.goo.gl/3Av4r6aQV8uWivbAA "
          Icon={FiMap}
        />
        <Card
          title="Email"
          subtitle="tulsialluminumandglass@gmail.com"
          href="mailto:tulsialluminumandglass@gmail.com"
          Icon={FiMail}
        />
        <Card
          title="Call Us "
          subtitle="+91 9156807121 , +91 800 111 1111"
          href="#"
          Icon={FiPhoneCall}
        />
        <Card
          title="Our Timings"
          subtitle="Mon - Sun : 09:00 AM - 08:30 PM "
          href="#"
          Icon={FiClock}
        />
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href }) => {
  // Split the subtitle (phone numbers) into an array
  const phoneNumbers = subtitle.split(",");

  return (
    <a
      target="_blank"
      href={href}
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      {/* Render phone numbers as separate elements */}
      <div className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {phoneNumbers.map((phoneNumber, index) => (
          <p key={index}>{phoneNumber.trim()}</p>
        ))}
      </div>
    </a>
  );
};

export default HoverDevCards;
