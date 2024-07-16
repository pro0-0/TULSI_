import React from "react";
// import { Button } from "./ui/button";
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

function footer_page() {
  return (
    <div>
      <div className="w-full min-h-screen flex items-center justify-center bg-black">
        <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
          <div className="sm:flex-row flex flex-col">
            <div className="w-full text-7xl font-bold">
              <h1 className="w-full md:w-2/3">How can we help you</h1>
            </div>
            <div className="mt-8 flex flex-col md:flex-row md:justify-between">
              {/* <p className="w-full md:w-2/3 text-gray-400">
        To ensure that all Wikipedia content is verifiable, anyone may
        question an uncited claim. If your work has been tagged
    </p> */}
              <div className="w-full md:w-44 pt-6 md:pt-0 md:ml-4">
                <a className="bg-red-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center  md:inline-block">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="bg-red-500 justify-center text-center flex items-center">
                        Contact US
                      </button>
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
                        <button
                          className="bg-black m-3 p-3 rounded-md text-white hover:bg-gray-900 text-sm font-mono"
                          type="submit"
                        >
                          Submit Enquiry
                        </button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex mt-24 mb-12 flex-row justify-between">
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d938.0055054286125!2d75.37335069919737!3d19.881292000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba38de70af545%3A0x4416b400ed356156!2sTULSI%20INDUSTRIES%20AND%20SERVICES!5e0!3m2!1sen!2sin!4v1713257711363!5m2!1sen!2sin"
                  width="1080"
                  height="350"
                  style={{ border: "0" }}
                  // allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <hr className="border-gray-600" />
            {/* <p className="w-full text-center my-2 text-gray-600">
              Copyright © 2024 Besnik Creative
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer_page;
