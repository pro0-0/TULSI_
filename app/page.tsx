"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "../components/hero";
import { InfiniteMovingCards } from "@/components/infinite-moving-cards";
import { SwipeCarousel } from "@/components/SwipeCarousel";
import Aboutus from "@/components/Aboutus";
import Products from "@/components/Products";
import HoverDevCards from "@/components/howercard";
import Footer from "@/components/footer_page";
import Testimonial from "@/components/testimonial";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className="w-full items-center justify-center">
      <Hero />
      {/* <InfiniteMovingCards
        items={[
          { imgSrc: "/buliding.png", companyName: "Company 1" },
          { imgSrc: "/logo.png", companyName: "Company 2" },
          { imgSrc: "/windows.jpeg", companyName: "Company 3" },
        ]}
        direction="left"
        speed="fast"
        pauseOnHover={true}
        className="additional-css-class"
      /> */}
      <SwipeCarousel />
      <Aboutus />
      <Products />
      <Testimonial />
      <HoverDevCards />
      <Footer />
    </div>
  );
}
