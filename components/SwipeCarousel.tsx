"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const imgs = ["./images1.jpg", "./images2.jpg", "./images3.jpg"];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 3;
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
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY); // Change image every 3 seconds

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

  return (
    <div>
      <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center py-5 pb-0">
        <div className="w-full bg-white border-t border-b rounded-md border-gray-200 px-5 py-16 md:py-24 text-gray-800">
          <div
            className="relative overflow-hidden bg-white py-8 "
            id="highlights"
          >
            <div className="absolute top-0 left-5 z-10 right-0 text-4xl sm:text-7xl">
              <p className="bg-gray-100 w-[68vw] sm:w-[67vh] text-center rounded-lg bg-clip-padding backdrop-filter border border-gray-100 backdrop-blur-sm bg-opacity-40 p-3 sm:p-5">
                HIGHLIGHTS
              </p>
            </div>{" "}
            {/* Further reduced the height */}
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
              className="flex cursor-grab items-center active:cursor-grabbing"
            >
              <Images imgIndex={imgIndex} />
            </motion.div>
            <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
          </div>
        </div>
      </div>
      {/* <GradientEdges /> */}
    </div>
  );
};

type ImagesProps = {
  imgIndex: number;
};

const Images = ({ imgIndex }: ImagesProps) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-screen shrink-0 rounded-xl bg-neutral-800 object-cover  h-[400px] sm:h-[200px] lg:h-[600px]"
          />
        );
      })}
    </>
  );
};

type DotsProps = {
  imgIndex: number;
  setImgIndex: React.Dispatch<React.SetStateAction<number>>;
};

const Dots = ({ imgIndex, setImgIndex }: DotsProps) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === imgIndex ? "bg-neutral-900" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </>
  );
};
