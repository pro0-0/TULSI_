"use client";
import React from "react";
import Head from "next/head";
import Example from "./howertiltcard";
import { motion } from "framer-motion";

const Products = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 py-20" id="products">
      <Head>
        <title>Our Products</title>
      </Head>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-600/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-blue-600/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-base font-semibold text-blue-400 tracking-wide uppercase">
            Our Products
          </h2>
          <p className="mt-2 text-4xl font-bold text-white lg:text-5xl">
            Premium Solutions for Your Space
          </p>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our wide range of high-quality products designed to
            transform your spaces with elegance and functionality.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
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
            className="relative group h-full"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative h-full p-6 bg-gray-800/90 rounded-2xl backdrop-blur-sm border border-gray-700/50 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-3">
                  And Much More
                </h3>
                <p className="text-gray-400">
                  Discover our complete range of premium products tailored to
                  your needs
                </p>
                <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
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
