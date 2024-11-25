import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiAward, FiUsers, FiCheckCircle, FiTarget } from "react-icons/fi";
import Image from "next/image";

const Aboutus: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: FiTarget,
      title: "Our Mission",
      description:
        "To deliver exceptional quality aluminum and glass solutions that exceed client expectations.",
    },
    {
      icon: FiAward,
      title: "Quality Assurance",
      description:
        "Every product undergoes rigorous quality checks to ensure durability and excellence.",
    },
    {
      icon: FiUsers,
      title: "Expert Team",
      description:
        "Our skilled professionals bring years of industry expertise to every project.",
    },
  ];

  return (
    <div
      className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center py-20 px-4 md:px-6"
      id="aboutus"
    >
      <div className="relative flex items-center justify-center w-full">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-600/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-blue-600/30 to-transparent rounded-full blur-3xl" />
        </div>

        <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
          <div className="mx-auto px-4 md:px-6 py-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-base font-semibold text-blue-400 tracking-wide uppercase">
                About Us
              </h2>
              <p className="mt-2 text-4xl font-bold text-white lg:text-5xl">
                TULSI INDUSTRIES
              </p>
              <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                Leading Provider of Aluminum and Glass Solutions in Aurangabad,
                Maharashtra
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:space-x-8">
              {/* Image Section - Simplified */}
              <motion.div
                className="mb-8 w-full lg:mb-0 lg:w-1/2"
                initial={{ opacity: 0, x: -100 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
                }
                transition={{ duration: 0.7 }}
              >
                <Image
                  src="/buliding.png"
                  alt="Building"
                  width={500}
                  height={300}
                />
              </motion.div>

              {/* Content Section */}
              <motion.div
                className="w-full lg:w-1/2 space-y-8"
                initial={{ opacity: 0, x: 100 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
                }
                transition={{ duration: 0.7 }}
              >
                <div className="prose prose-lg">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Welcome to Tulsi Industries, a distinguished retailer
                    specializing in top-quality aluminum and glass products. As
                    a premier manufacturer and supplier in the industry, we take
                    pride in offering an extensive range of Glass and Aluminum
                    Interior products.
                  </p>
                  <p className="mt-4 text-gray-300 leading-relaxed text-lg">
                    Our commitment to excellence is reflected in the superior
                    quality and exceptional features of our offerings. We strive
                    to provide innovative solutions that meet the diverse needs
                    of our clients.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className="relative group p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl" />
                      <feature.icon className="w-8 h-8 text-blue-400 mb-4" />
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
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
