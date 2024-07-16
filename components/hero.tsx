"use client";
import React, { useState } from "react";
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
const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center">
      <div className="container py-24 px-4 mx-auto max-w-screen-xl  lg:py-24">
        <div className="bg-center bg-no-repeat bg-white bg-blend-multiply">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 ">
              <div className="mb-4">
                <h1 className="text-4xl font-bold">Welcome to</h1>
                <span className="text-blue-500 text-5xl md:text-7xl font-bold">
                  Tulsi Industries
                </span>
              </div>
              <p className="text-gray-600 mb-6">
                At Tulsi Industries, we specialize in the meticulous
                craftsmanship of high-quality architectural solutions. Our
                distinguished offerings include the precision manufacturing of
                Aluminium Windows, Aluminium Doors, and Toughened Glass
                Partitions. Committed to delivering excellence in every detail,
                we stand as a beacon of quality and innovation in the industry.
              </p>
              <div className="flex flex-row gap-4 md:flex-row md:space-x-6 mb-6">
                <div className="mb-4 md:mb-0">
                  <h2 className="text-3xl font-bold">124K+</h2>
                  <p className="text-gray-600">Lorem ipsum</p>
                </div>
                <div className="mb-4 md:mb-0">
                  <h2 className="text-3xl font-bold">126</h2>
                  <p className="text-gray-600">Lorem ipsum</p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold">78K</h2>
                  <p className="text-gray-600">Lorem ipsum</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <a
                  href="tel:9156807121"
                  className="inline-flex justify-center items-center py-3 px-2 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 mb-4 sm:mb-0"
                >
                  Call Now
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
                {/* <a
                  href="#"
                  className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg border border-black hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
                >
                  Enquire Now
                </a> */}
                <div className="">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size={"md"}
                        variant={"outline"}
                        className=" inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg border border-black hover:bg-gray-100 "
                      >
                        Enquire Now
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Enquiry Form</DialogTitle>
                        <DialogDescription>
                          Please fill out the form below to make an enquiry.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                            Name
                          </Label>
                          <Input
                            id="name"
                            placeholder="Your Name"
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="mobile" className="text-right">
                            Mobile No
                          </Label>
                          <Input
                            id="mobile"
                            placeholder="Your Mobile Number"
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="email" className="text-right">
                            Email
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Your Email Address"
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="message" className="text-right">
                            Message
                          </Label>
                          <textarea
                            id="message"
                            placeholder="Your Message"
                            className="col-span-3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            rows={4}
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Submit Enquiry</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src="./windows.jpeg" alt="Plants" className="w-full" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:space-x-6 mb-6 mt-5">
          <div className="bg-gray-100 p-6 rounded-lg w-full md:w-1/3 mr-4">
            <div className="flex items-center mb-4">
              <img src="plant1.png" alt="Plant" className="w-10 h-10 mr-4" />
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis in libero felis.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg w-full md:w-1/3 mr-4">
            <div className="flex items-center mb-4">
              <img src="{windows}" alt="Plant" className="w-10 h-10 mr-4" />
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus in libero felis.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg w-full md:w-1/3">
            <div className="flex items-center mb-4">
              <img src="{windows}" alt="Plant" className="w-10 h-10 mr-4" />
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus in libero felis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
