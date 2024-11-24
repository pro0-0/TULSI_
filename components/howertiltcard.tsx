"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";

const Example = ({ title, img }: { title: string; img: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <TiltCard title={title} img={img} />
    </motion.div>
  );
};

const ROTATION_RANGE = 25;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const TiltCard = ({ title, img }: { title: string; img: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Link href={`/products/${encodeURIComponent(title)}`}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          transform,
        }}
        whileHover={{ scale: 1.02 }}
        className="relative h-[400px] w-full rounded-2xl bg-gradient-to-b from-blue-500/20 to-blue-600/20 p-px group"
      >
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          className="relative h-full rounded-2xl bg-gray-800 overflow-hidden"
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60 z-10" />

          {/* Image */}
          <img
            src={img}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <div
              style={{
                transform: "translateZ(50px)",
              }}
              className="space-y-3"
            >
              <h3 className="text-2xl font-bold text-white">{title}</h3>
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 text-sm text-blue-300 bg-blue-900/30 rounded-full backdrop-blur-sm">
                  View Details
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Example;
