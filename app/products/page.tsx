import React from "react";
import Image from "next/image";

const AluminumProductPage = () => {
  return (
    <div className="mt-32 text-gray-800 bg-white dark:bg-gray-900 dark:text-gray-100">
      <div className="py-8">
        <div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
          <div className="flex flex-col -mx-4 md:flex-row">
            {/* Image and Actions */}
            <div className="px-4 md:flex-1">
              <div className="relative h-[460px] rounded-lg bg-gray-200 mb-4 overflow-hidden shadow-lg">
                <Image
                  src="/allu.jpg"
                  alt="Aluminum Product"
                  width={500}
                  height={300}
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="px-2 w-1/2">
                  <button className="px-4 py-2 w-full font-semibold text-white bg-blue-600 rounded-full transition duration-300 hover:bg-blue-700">
                    Request a Quote
                  </button>
                </div>
                <div className="px-2 w-1/2">
                  <button className="px-4 py-2 w-full font-semibold text-gray-800 bg-gray-300 rounded-full transition duration-300 hover:bg-gray-400">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="px-4 md:flex-1">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Aluminum Product Name
              </h2>
              <p className="mb-6 text-base text-gray-700">
                Our premium aluminum products offer exceptional strength and
                durability. Designed for both residential and commercial
                applications, they combine modern aesthetics with functionality.
              </p>
              <div className="flex mb-6">
                <div className="mr-6">
                  <span className="font-semibold text-gray-800">Price:</span>
                  <span className="text-lg text-gray-600">$99.99</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">
                    Availability:
                  </span>
                  <span className="text-lg text-gray-600">In Stock</span>
                </div>
              </div>
              <div className="mb-6">
                <span className="font-semibold text-gray-800">
                  Select Finish:
                </span>
                <div className="flex items-center mt-2">
                  <button
                    className="mr-2 w-6 h-6 bg-gray-400 rounded-full border border-gray-300"
                    aria-label="Brushed Aluminum"
                  ></button>
                  <button
                    className="mr-2 w-6 h-6 rounded-full border border-gray-300 bg-silver-500"
                    aria-label="Silver"
                  ></button>
                  <button
                    className="mr-2 w-6 h-6 bg-gray-900 rounded-full border border-gray-300"
                    aria-label="Matte Black"
                  ></button>
                  <button
                    className="mr-2 w-6 h-6 rounded-full border border-gray-300 bg-gold-500"
                    aria-label="Gold"
                  ></button>
                </div>

                <div>
                  <span className="font-semibold text-gray-800">
                    Product Description:
                  </span>
                  <p className="mt-2 text-base text-gray-700">
                    Our aluminum product is crafted to meet the highest
                    standards of quality and performance. It is ideal for
                    various applications, offering a sleek and modern look. With
                    a range of finishes and sizes, it can be tailored to suit
                    your specific needs. Whether for architectural, industrial,
                    or decorative purposes, this product delivers reliability
                    and aesthetic appeal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AluminumProductPage;
