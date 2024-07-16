"use client";
import React from "react";
import Head from "next/head";
import Example from "./howertiltcard";

const products = () => {
  return (
    <div className="mt-5" id="products">
      <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center py-5 pb-0">
        <div className="w-full bg-white border-t border-b rounded-md  border-gray-200  px-5 py-16 md:py-24 text-gray-800">
          <Head>
            <title>Our Products</title>
          </Head>
          <div className="flex justify-center items-center">
            <h1 className="text-4xl lg:text-7xl font-semibold">Our Products</h1>
          </div>
          <div className="grid grid-cols-2  md:grid-cols-2  lg:grid-cols-4 lg:gap-2 md:justify-center md:ml-5 mt-5">
            <Example title="Aluminum" img={"/images1.jpg"} />
            <Example title="Aluminum" img={"/images1.jpg"} />
            <Example title="Aluminum" img={"/images1.jpg"} />
            <Example title="Aluminum" img={"/images1.jpg"} />

            <Example title="Aluminum" img={"/images1.jpg"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default products;
