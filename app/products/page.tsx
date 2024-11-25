import React from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";

const ProductsPage = () => {
  return (
    <div className="mt-32 min-h-screen bg-white dark:bg-gray-900">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">
          Our Products
        </h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className="group"
            >
              <div className="overflow-hidden bg-white rounded-lg shadow-lg transition-transform duration-300 dark:bg-gray-800 group-hover:scale-105">
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                    {product.name}
                  </h2>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 dark:text-blue-400">
                      {product.price}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        product.availability === "In Stock"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {product.availability}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
