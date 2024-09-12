"use client";
import React from "react";
import Head from "next/head";
import Example from "./howertiltcard";

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-10" id="products">
      <Head>
        <title>Our Products</title>
      </Head>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            Our Products
          </h1>
          <p className="text-gray-300 mt-2 text-sm sm:text-base md:text-lg">
            Explore our wide range of high-quality products designed to meet
            your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Example title="Aluminum" img="/allu.jpg" />
          <Example title="Aluminum Partition" img="/Aluminum Partition.jpeg" />
          <Example title="Wallpaper" img="/wallpaper.jpg" />
          <Example title="Curtains" img="/blinds.jpg" />
          <Example title="Wooden Blinds" img="/woodenblind.jpeg" />
          <Example title="False Ceiling" img="/Flaseceling.jpeg" />
          <Example title="Glass Doors" img="/glassdoor.jpeg" />
          <div className="flex items-center justify-center w-full h-full bg-gray-800 rounded-lg p-6 text-center">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-white">
                And Much More
              </h2>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">
                Discover additional products that cater to your every need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
