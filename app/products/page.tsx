import React from "react";

const AluminumProductPage = () => {
  return (
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 mt-32">
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            {/* Image and Actions */}
            <div className="md:flex-1 px-4">
              <div className="relative h-[460px] rounded-lg bg-gray-200 mb-4 overflow-hidden shadow-lg">
                <img
                  className="w-full h-full object-cover"
                  src="allu.jpg"
                  alt="Aluminum Product"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
                    Request a Quote
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-300 text-gray-800 py-2 px-4 rounded-full font-semibold hover:bg-gray-400 transition duration-300">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="md:flex-1 px-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Aluminum Product Name
              </h2>
              <p className="text-gray-700 text-base mb-6">
                Our premium aluminum products offer exceptional strength and
                durability. Designed for both residential and commercial
                applications, they combine modern aesthetics with functionality.
              </p>
              <div className="flex mb-6">
                <div className="mr-6">
                  <span className="font-semibold text-gray-800">Price:</span>
                  <span className="text-gray-600 text-lg">$99.99</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">
                    Availability:
                  </span>
                  <span className="text-gray-600 text-lg">In Stock</span>
                </div>
              </div>
              <div className="mb-6">
                <span className="font-semibold text-gray-800">
                  Select Finish:
                </span>
                <div className="flex items-center mt-2">
                  <button
                    className="w-6 h-6 rounded-full bg-gray-400 mr-2 border border-gray-300"
                    aria-label="Brushed Aluminum"
                  ></button>
                  <button
                    className="w-6 h-6 rounded-full bg-silver-500 mr-2 border border-gray-300"
                    aria-label="Silver"
                  ></button>
                  <button
                    className="w-6 h-6 rounded-full bg-gray-900 mr-2 border border-gray-300"
                    aria-label="Matte Black"
                  ></button>
                  <button
                    className="w-6 h-6 rounded-full bg-gold-500 mr-2 border border-gray-300"
                    aria-label="Gold"
                  ></button>
                </div>

                <div>
                  <span className="font-semibold text-gray-800">
                    Product Description:
                  </span>
                  <p className="text-gray-700 text-base mt-2">
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
