"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const imgs = [
  {
    src: "./images1.jpg",
    title: "Modern Aluminum Solutions",
    description:
      "Premium quality aluminum products for your architectural needs",
  },
  {
    src: "./images2.jpg",
    title: "Elegant Glass Works",
    description: "Sophisticated glass installations for modern spaces",
  },
  {
    src: "./images3.jpg",
    title: "Professional Installations",
    description: "Expert installation services with attention to detail",
  },
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 5;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => (pv === imgs.length - 1 ? 0 : pv + 1));
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  const skipToImage = (index: number) => {
    setImgIndex(index);
  };

  return (
    <div className="relative min-h-screen bg-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-600/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-blue-600/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-base font-semibold text-blue-400 tracking-wide uppercase">
            Our Highlights
          </h2>
          <p className="mt-2 text-4xl font-bold text-white lg:text-5xl">
            Featured Projects
          </p>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Discover our exceptional work and commitment to quality
          </p>
        </motion.div>

        {/* Carousel Section */}
        <div className="relative overflow-hidden rounded-2xl">
          <motion.div
            drag="x"
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            style={{
              x: dragX,
            }}
            animate={{
              translateX: `-${imgIndex * 100}%`,
            }}
            transition={SPRING_OPTIONS}
            onDragEnd={onDragEnd}
            className="flex cursor-grab active:cursor-grabbing"
          >
            <AnimatePresence>
              {imgs.map((img, idx) => (
                <motion.div
                  key={idx}
                  className="relative min-w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-10" />

                    <motion.img
                      src={img.src}
                      alt={img.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{
                        scale: imgIndex === idx ? 1 : 0.9,
                      }}
                      transition={SPRING_OPTIONS}
                    />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-3xl"
                      >
                        <h3 className="text-3xl font-bold text-white mb-4">
                          {img.title}
                        </h3>
                        <p className="text-gray-300 text-lg">
                          {img.description}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Navigation Arrows */}
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={() => skipToImage(Math.max(0, imgIndex - 1))}
              className="p-2 rounded-full bg-gray-900/50 text-white backdrop-blur-sm transition-all hover:bg-gray-900/75"
              disabled={imgIndex === 0}
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() =>
                skipToImage(Math.min(imgs.length - 1, imgIndex + 1))
              }
              className="p-2 rounded-full bg-gray-900/50 text-white backdrop-blur-sm transition-all hover:bg-gray-900/75"
              disabled={imgIndex === imgs.length - 1}
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-8">
          {imgs.map((_, idx) => (
            <button
              key={idx}
              onClick={() => skipToImage(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === imgIndex
                  ? "bg-blue-500 w-8"
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
