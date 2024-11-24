"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 5);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "17e47571-9de9-47bd-9a31-ca3a7b6bc686",
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      setIsOpen(false);
    }
  }

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % 5);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + 5) % 5);
  };

  return (
    <section className="overflow-hidden relative pt-32 pb-20 bg-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br to-transparent rounded-full blur-3xl from-blue-600/30" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl to-transparent rounded-full blur-3xl from-blue-600/30" />
      </div>

      <div className="container relative px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          className="relative"
        >
          <div className="flex flex-col gap-12 justify-between items-center md:flex-row">
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h1 className="mb-2 text-base font-semibold tracking-wide text-blue-400 uppercase">
                  Welcome to
                </h1>
                <span className="block text-5xl font-bold text-white md:text-7xl">
                  Tulsi Industries
                </span>
                <p className="mt-6 text-lg leading-relaxed text-gray-300">
                  At Tulsi Industries, we specialize in the meticulous
                  craftsmanship of high-quality architectural solutions. Our
                  distinguished offerings include the precision manufacturing of
                  Aluminium Windows, Aluminium Doors, and Toughened Glass
                  Partitions.
                </p>
              </motion.div>

              <div className="grid grid-cols-3 gap-8 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="text-3xl font-bold text-white">124K+</h2>
                  <p className="text-blue-400">Projects</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h2 className="text-3xl font-bold text-white">126</h2>
                  <p className="text-blue-400">Clients</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h2 className="text-3xl font-bold text-white">78K</h2>
                  <p className="text-blue-400">Products</p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <Button
                  asChild
                  className="px-8 py-6 text-lg text-white bg-blue-500 hover:bg-blue-600"
                >
                  <a href="tel:9156807121" className="flex items-center">
                    Call Now
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </a>
                </Button>

                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="px-8 py-6 text-lg text-blue-400 border-blue-500 hover:bg-blue-500/10"
                    >
                      Enquire Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] bg-gray-900 border border-gray-800 shadow-xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-white">
                        Enquiry Form
                      </DialogTitle>
                      <DialogDescription className="text-gray-400">
                        Please fill out the form below to make an enquiry.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit}>
                      <div className="grid gap-6 py-4">
                        <div className="grid grid-cols-4 gap-4 items-center">
                          <Label
                            htmlFor="name"
                            className="text-right text-gray-300"
                          >
                            Name
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            className="col-span-3 text-white bg-gray-800 border-gray-700 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div className="grid grid-cols-4 gap-4 items-center">
                          <Label
                            htmlFor="mobile"
                            className="text-right text-gray-300"
                          >
                            Mobile No
                          </Label>
                          <Input
                            id="mobile"
                            name="mobile"
                            placeholder="Your Mobile Number"
                            className="col-span-3 text-white bg-gray-800 border-gray-700 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div className="grid grid-cols-4 gap-4 items-center">
                          <Label
                            htmlFor="email"
                            className="text-right text-gray-300"
                          >
                            Email
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Your Email Address"
                            className="col-span-3 text-white bg-gray-800 border-gray-700 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div className="grid grid-cols-4 gap-4 items-center">
                          <Label
                            htmlFor="message"
                            className="text-right text-gray-300"
                          >
                            Message
                          </Label>
                          <textarea
                            id="message"
                            name="message"
                            placeholder="Your Message"
                            className="col-span-3 p-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[100px] resize-y"
                            rows={4}
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button
                          type="submit"
                          className="px-4 py-2 w-full font-medium text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700"
                        >
                          Submit Enquiry
                        </Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </motion.div>
            </div>

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="overflow-hidden relative p-2 bg-gradient-to-b rounded-2xl from-blue-500/20 to-blue-600/20">
                <div className="relative aspect-[4/3]">
                  {/* Carousel Images */}
                  <AnimatePresence mode="wait">
                    {[
                      "/windows.jpeg",
                      "/woodenblind.jpeg",
                      "/images1.jpg",
                      "/images2.jpg",
                      "/images3.jpg",
                    ].map((image, index) => (
                      <motion.img
                        key={image}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover rounded-xl ${
                          currentImageIndex === index ? "block" : "hidden"
                        }`}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.7 }}
                      />
                    ))}
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  <div className="flex absolute inset-0 justify-between items-center p-6 opacity-0 transition-opacity hover:opacity-100">
                    <button
                      onClick={prevImage}
                      className="p-3 text-white rounded-full backdrop-blur-sm transition-colors transform bg-black/30 hover:bg-black/50 hover:scale-110"
                      aria-label="Previous image"
                    >
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="p-3 text-white rounded-full backdrop-blur-sm transition-colors transform bg-black/30 hover:bg-black/50 hover:scale-110"
                      aria-label="Next image"
                    >
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Dots Indicator */}
                  <div className="flex absolute bottom-6 left-1/2 space-x-3 -translate-x-1/2">
                    {[0, 1, 2, 3, 4].map((index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`transition-all ${
                          currentImageIndex === index
                            ? "w-8 h-3 bg-white rounded-full"
                            : "w-3 h-3 bg-white/50 hover:bg-white/80 rounded-full"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 mt-20 md:grid-cols-3">
          {[
            {
              title: "Aluminium Windows",
              description:
                "Our high-quality Aluminium Windows are designed to enhance both the aesthetics and functionality of your space. With precision manufacturing and a range of styles, they offer excellent durability and energy efficiency.",
            },
            {
              title: "Aluminium Doors",
              description:
                "Our Aluminium Doors combine strength and elegance, providing a secure and stylish entrance. Customizable to fit various designs, they are perfect for residential and commercial properties.",
            },
            {
              title: "Glass Partitions",
              description:
                "Our Toughened Glass Partitions offer modern and sleek solutions for dividing spaces while maximizing light. Ideal for offices and contemporary homes, they are both practical and stylish.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-px bg-gradient-to-b rounded-2xl from-blue-500/20 to-blue-600/20"
            >
              <div className="relative p-8 h-full bg-gray-800 rounded-2xl">
                <h2 className="mb-4 text-xl font-semibold text-white">
                  {card.title}
                </h2>
                <p className="text-gray-300">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
