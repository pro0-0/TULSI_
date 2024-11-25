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
import { motion } from "framer-motion";

const HoverDevCards = () => {
  return (
    <div className="relative py-16 bg-gray-900">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br to-transparent rounded-full blur-3xl from-blue-600/30" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl to-transparent rounded-full blur-3xl from-blue-600/30" />
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Address",
              subtitle:
                "Plot No.E30/1, Millennium Park Road, Chikalthana Industrial Area, Aurangabad-Maharashtra - 431006 (Opposite Woodard RND)",
              href: "https://maps.app.goo.gl/3Av4r6aQV8uWivbAA",
              Icon: FiMap,
            },
            {
              title: "Email",
              subtitle: "tulsialluminumandglass@gmail.com",
              href: "mailto:tulsialluminumandglass@gmail.com",
              Icon: FiMail,
            },
            {
              title: "Call Us",
              subtitle: "+91 9156807121",
              href: "#",
              Icon: FiPhoneCall,
            },
            {
              title: "Our Timings",
              subtitle: "Mon - Sun : 09:00 AM - 08:30 PM",
              href: "#",
              Icon: FiClock,
            },
          ].map((card, index) => (
            <Card key={index} {...card} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href, index }) => {
  const phoneNumbers = subtitle.split(",");

  return (
    <motion.a
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      target="_blank"
      href={href}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
      <div className="overflow-hidden relative p-px h-full bg-gradient-to-b rounded-2xl from-blue-500/20 to-blue-600/20">
        <div className="relative p-6 h-full rounded-2xl backdrop-blur-sm bg-gray-800/90">
          <div className="absolute inset-0 bg-gradient-to-br via-transparent opacity-0 transition-all duration-500 ease-out from-blue-600/10 to-indigo-600/10 group-hover:opacity-100" />

          <div className="relative z-10 mb-6">
            <div className="flex justify-center items-center w-12 h-12 rounded-xl transition-transform duration-300 bg-blue-500/10 group-hover:scale-110">
              <Icon className="text-2xl text-blue-400 transition-colors duration-300 group-hover:text-blue-300" />
            </div>
          </div>

          <div className="relative z-10 space-y-3">
            <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-300">
              {title}
            </h3>
            <div className="text-sm text-gray-300 transition-colors duration-300 group-hover:text-gray-200">
              {phoneNumbers.map((text, index) => (
                <p key={index} className="leading-relaxed">
                  {text.trim()}
                </p>
              ))}
            </div>
          </div>

          <div className="absolute right-6 bottom-6 opacity-0 transition-all duration-300 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0">
            <svg
              className="w-6 h-6 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default HoverDevCards;
