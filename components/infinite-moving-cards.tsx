// "use client";
// import React, { useEffect, useState, useCallback } from "react";
// import Image from "next/image";

// export const InfiniteMovingCards = ({
//   items,
//   direction = "left",
//   speed = "fast",
//   pauseOnHover = true,
//   className,
// }: {
//   items: {
//     imgSrc: string;
//     companyName: string;
//   }[];
//   direction?: "left" | "right";
//   speed?: "fast" | "normal" | "slow";
//   pauseOnHover?: boolean;
//   className?: string;
// }) => {
//   const containerRef = React.useRef<HTMLDivElement>(null);
//   const scrollerRef = React.useRef<HTMLUListElement>(null);
//   const [start, setStart] = useState(false);

//   const getDirection = useCallback(() => {
//     if (containerRef.current) {
//       containerRef.current.style.setProperty(
//         "--animation-direction",
//         direction === "left" ? "forwards" : "reverse"
//       );
//     }
//   }, [direction]);

//   const getSpeed = useCallback(() => {
//     if (containerRef.current) {
//       containerRef.current.style.setProperty(
//         "--animation-duration",
//         speed === "fast" ? "10s" : speed === "normal" ? "40s" : "80s"
//       );
//     }
//   }, [speed]);

//   const addAnimation = useCallback(() => {
//     if (containerRef.current && scrollerRef.current) {
//       const scrollerContent = Array.from(scrollerRef.current.children);

//       scrollerContent.forEach((item) => {
//         const duplicatedItem = item.cloneNode(true);
//         if (scrollerRef.current) {
//           scrollerRef.current.appendChild(duplicatedItem);
//         }
//       });

//       getDirection();
//       getSpeed();
//       setStart(true);
//     }
//   }, [getDirection, getSpeed]);

//   useEffect(() => {
//     addAnimation();
//   }, [addAnimation]);

//   return (
//     <div
//       ref={containerRef}
//       className={`scroller mb-24 relative z-20 max-w-7xl mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_90%,transparent)] ${className}`}
//     >
//       <div className="mb-4 text-3xl font-bold text-center">OUR CLIENTS</div>
//       <ul
//         ref={scrollerRef}
//         className={`flex justify-center items-center min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap ${
//           start ? "animate-scroll" : ""
//         } ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
//       >
//         {items.map((item, idx) => (
//           <li
//             className="w-[150px] max-w-full relative flex-shrink-0 p-2"
//             style={{
//               background:
//                 "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
//             }}
//             key={idx}
//           >
//             <div className="flex flex-col items-center">
//               <div className="overflow-hidden mb-2 w-16 h-16 rounded-full">
//                 <Image
//                   src={
//                     item.imgSrc.startsWith("/")
//                       ? item.imgSrc
//                       : `/${item.imgSrc}`
//                   }
//                   alt={item.companyName}
//                   width={64}
//                   height={64}
//                   className="object-cover w-full h-full"
//                 />
//               </div>
//               <span className="text-lg leading-[1.6] text-black font-normal text-center">
//                 {item.companyName}
//               </span>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
