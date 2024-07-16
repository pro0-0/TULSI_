import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "../components/hero";
import { InfiniteMovingCards } from "@/components/infinite-moving-cards";
import { SwipeCarousel } from "@/components/SwipeCarousel";
import Aboutus from "@/components/Aboutus";
export default function Home() {
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
    </div>
  );
}
