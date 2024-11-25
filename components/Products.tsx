"use client";
import React from "react";
import Head from "next/head";
import Example from "./howertiltcard";
import { motion } from "framer-motion";

const Products = () => {
  return (
    <div className="relative py-20 min-h-screen bg-gray-900" id="products">
      <Head>
        <title>Our Products</title>
      </Head>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br to-transparent rounded-full blur-3xl from-blue-600/30" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl to-transparent rounded-full blur-3xl from-blue-600/30" />
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="text-base font-semibold tracking-wide text-blue-400 uppercase">
            Our Products
          </h2>
          <p className="mt-2 text-4xl font-bold text-white lg:text-5xl">
            Premium Solutions for Your Space
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Explore our wide range of high-quality products designed to
            transform your spaces with elegance and functionality.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <Example title="Aluminum" img="/allu.jpg" />
          <Example title="Aluminum Partition" img="/Aluminum Partition.jpeg" />
          <Example title="Wallpaper" img="/wallpaper.jpg" />
          <Example title="Curtains" img="/blinds.jpg" />
          <Example title="Wooden Blinds" img="/woodenblind.jpeg" />
          <Example title="False Ceiling" img="/Flaseceling.jpeg" />
          <Example title="Glass Doors" img="/glassdoor.jpeg" />

          {/* More Products Card */}
          <motion.div
            className="relative h-full group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="flex relative justify-center items-center p-6 h-full rounded-2xl border backdrop-blur-sm bg-gray-800/90 border-gray-700/50">
              <div className="text-center">
                <h3 className="mb-3 text-2xl font-bold text-white">
                  And Much More
                </h3>
                <p className="text-gray-400">
                  Discover our complete range of premium products tailored to
                  your needs
                </p>
                <button className="px-6 py-3 mt-6 font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                  Contact Us
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
