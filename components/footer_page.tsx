import React from "react";
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
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMessageSquare, FiUser } from "react-icons/fi";

function footer_page() {
  return (
    <div className="relative bg-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-600/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-blue-600/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                How can we help <span className="text-blue-400">you?</span>
              </h2>
              <p className="mt-4 text-gray-400 text-lg">
                Get in touch with us for any queries or assistance. We're here
                to help!
              </p>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <button className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
                  <FiMessageSquare className="mr-2" />
                  Contact Us
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white border border-gray-800">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-white">
                    Enquiry Form
                  </DialogTitle>
                  <DialogDescription className="text-gray-400">
                    Please fill out the form below to make an enquiry.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-6 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-300">
                      <FiUser className="inline mr-2" />
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your Name"
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mobile" className="text-gray-300">
                      <FiPhone className="inline mr-2" />
                      Mobile No
                    </Label>
                    <Input
                      id="mobile"
                      placeholder="Your Mobile Number"
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">
                      <FiMail className="inline mr-2" />
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your Email Address"
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">
                      <FiMessageSquare className="inline mr-2" />
                      Message
                    </Label>
                    <textarea
                      id="message"
                      placeholder="Your Message"
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={4}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <button
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
                    type="submit"
                  >
                    Submit Enquiry
                  </button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          {/* Right Section - Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20"></div>
            <div className="relative rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d938.0055054286125!2d75.37335069919737!3d19.881292000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba38de70af545%3A0x4416b400ed356156!2sTULSI%20INDUSTRIES%20AND%20SERVICES!5e0!3m2!1sen!2sin!4v1713257711363!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Tulsi Industries. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default footer_page;
