import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <section
      className="relative py-20 overflow-hidden bg-gray-900"
      id="testimonials"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-600/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-blue-600/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-base font-semibold text-blue-400 tracking-wide uppercase">
            Client Testimonials
          </h2>
          <p className="mt-2 text-4xl font-bold text-white lg:text-5xl">
            What Our Clients Say
          </p>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Discover why leading businesses trust Tulsi Industries for their
            architectural solutions
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative"
            >
              {/* Card */}
              <div className="relative h-full p-px bg-gradient-to-b from-blue-500/20 to-blue-600/20 rounded-2xl">
                <div className="relative h-full p-8 bg-gray-800 shadow-xl backdrop-blur rounded-2xl">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 -left-4">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-sm text-gray-400 ml-2">5.0</span>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {testimonial.text}
                    </p>

                    {/* Author */}
                    <div className="flex items-center">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500/30">
                        <Image
                          src={testimonial.imgSrc || "/default-avatar.png"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-white font-medium">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-blue-400">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    name: "Rajesh Patel",
    location: "Mumbai, Maharashtra",
    imgSrc: "",
    text: "Tulsi Industries provided exceptional quality aluminum windows for our office building. Their attention to detail and professional installation service exceeded our expectations.",
  },
  {
    name: "Priya Sharma",
    location: "Pune, Maharashtra",
    imgSrc: "",
    text: "The glass partitions installed by Tulsi Industries transformed our workspace. The quality is outstanding, and their team was highly professional throughout the project.",
  },
  {
    name: "Amit Desai",
    location: "Thane, Maharashtra",
    imgSrc: "",
    text: "We're extremely satisfied with the aluminum doors installed in our commercial complex. The craftsmanship and durability are exactly what we were looking for.",
  },
  {
    name: "Sneha Mehta",
    location: "Navi Mumbai",
    imgSrc: "",
    text: "The team at Tulsi Industries was incredibly helpful in choosing the right windows for our home. Their expertise and quality products have made a significant difference.",
  },
  {
    name: "Vikram Singh",
    location: "Mumbai Suburbs",
    imgSrc: "",
    text: "Outstanding service from start to finish. The sliding windows they installed are not only beautiful but also energy-efficient. Highly recommend their services.",
  },
  {
    name: "Anita Reddy",
    location: "Kalyan, Maharashtra",
    imgSrc: "",
    text: "The glass partition work done by Tulsi Industries was perfect for our office renovation. Professional team, excellent quality, and timely completion.",
  },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "100+", label: "Active Clients" },
];

export default Testimonial;
