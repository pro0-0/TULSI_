// @ts-nocheck
"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FiMousePointer } from "react-icons/fi";

const Example = ({ title, img }) => {
  return (
    <div className="m-2">
      <TiltCard title={title} img={img} />
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ title, img }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

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
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      // className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
      className="relative h-[35vh] w-[45vw] md:h-80 md:w-80 lg:h-96 lg:w-72 rounded-xl bg-slate-100 "
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        {/* <FiMousePointer
          style={{
            transform: "translateZ(75px)",
          }}
          className="mx-auto text-4xl"
        /> */}
        <img
          src={img}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover rounded-xl"
        />
        <p
          style={{
            transform: "translateZ(50px)",
            position: "absolute",
            bottom: "0",
            left: "0",
            marginBottom: "10px",
            marginLeft: "10px",
          }}
          className="text-center text-2xl font-bold bg-slate-100 rounded-md p-1  bg-clip-padding backdrop-filter  backdrop-blur-sm bg-opacity-50"
        >
          {title}
        </p>
      </div>
    </motion.div>
  );
};

export default Example;
