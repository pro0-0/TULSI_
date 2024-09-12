import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Aboutus = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center py-5 px-4 md:px-6"
      id="aboutus"
    >
      <div className="relative flex items-center justify-center h-auto md:h-[40rem] lg:h-[50rem] w-full ">
        {/* Radial gradient for the container to give a faded look */}
        {/* <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-gray-800 via-transparent to-gray-800"></div> */}
        <div ref={ref} className="relative z-10">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:space-x-6">
              <motion.div
                className="mb-8 w-full md:w-2/3 lg:mb-0 lg:w-1/2"
                initial={{ opacity: 0, x: 100 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
                }
                transition={{ duration: 0.7 }}
              >
                <img
                  className="w-full h-auto object-cover"
                  src="/buliding.png"
                  alt="Building"
                />
              </motion.div>
              <motion.div
                className="w-full md:w-2/3 lg:w-1/2"
                initial={{ opacity: 0, x: -100 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
                }
                transition={{ duration: 0.7 }}
              >
                <p className="text-sm font-semibold text-gray-300">
                  ABOUT US :
                </p>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
                  TULSI INDUSTRIES
                </h2>
                <p className="mt-4 text-gray-200">
                  Tulsi Industries - Leading Provider of Aluminum and Glass
                  Solutions in Aurangabad, Maharashtra. Welcome to Tulsi
                  Industries, a distinguished retailer specializing in
                  top-quality aluminum and glass products. As a premier
                  manufacturer and supplier in the industry, Tulsi Industries
                  takes pride in offering an extensive range of Glass and
                  Aluminum Interior products. Our commitment to excellence is
                  reflected in the superior quality and exceptional features of
                  our offerings.
                </p>
                <div className="mt-4">
                  <p className="font-semibold text-gray-300">
                    Trusted by over 100,000+ businesses and individuals
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
