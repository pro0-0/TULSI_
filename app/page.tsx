"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "../components/hero";
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
    <div className="justify-center items-center w-full">
      <Hero />
      <SwipeCarousel />
      <Aboutus />
      <Products />
      <Testimonial />
      <HoverDevCards />
      <Footer />
    </div>
  );
}
