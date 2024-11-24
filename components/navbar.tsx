"use client";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = [
        "highlights",
        "aboutus",
        "products",
        "testimonials",
        "faq",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const offset = 100;
    if (element) {
      const targetScroll = element.offsetTop - offset;
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-[1000] transition-all duration-300"
    >
      {/* Main Navigation Container */}
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background with enhanced visibility */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isScrolled
              ? "bg-gray-900/95 shadow-xl"
              : "bg-gradient-to-b from-gray-900/95 to-gray-900/80"
          } backdrop-blur-xl border-b border-gray-800/50`}
        />

        {/* Navigation Content */}
        <div className="relative flex items-center justify-between py-2">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 relative z-10"
          >
            <button
              onClick={scrollToTop}
              className="focus:outline-none transform hover:scale-105 transition-transform duration-200"
            >
              <img
                src="logo.png"
                alt="Tulsi Industries"
                className="h-24 w-auto object-contain"
                style={{
                  filter: "brightness(1.2) contrast(1.1)",
                  mixBlendMode: "lighten",
                }}
              />
            </button>
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { label: "Highlights", id: "highlights" },
              { label: "About Us", id: "aboutus" },
              { label: "Products", id: "products" },
              { label: "Testimonials", id: "testimonials" },
              { label: "FAQ", id: "faq" },
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg group ${
                  activeSection === item.id
                    ? "text-blue-400"
                    : "text-gray-100 hover:text-blue-400"
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="relative z-10">{item.label}</span>
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-blue-900/20 rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 bg-blue-900/20 transition-opacity duration-200" />
              </motion.button>
            ))}

            {/* Contact Button */}
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="ml-4 px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative z-10 p-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-0.5"
                    : "-translate-y-1"
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-0.5"
                    : "translate-y-1"
                }`}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 py-3 mt-2 space-y-1 bg-gray-900/95 backdrop-blur-xl rounded-xl border border-gray-800/50 shadow-lg">
                {[
                  { label: "Highlights", id: "highlights" },
                  { label: "About Us", id: "aboutus" },
                  { label: "Products", id: "products" },
                  { label: "Testimonials", id: "testimonials" },
                  { label: "FAQ", id: "faq" },
                  { label: "Contact Us", id: "contact" },
                ].map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                      activeSection === item.id
                        ? "bg-blue-900/30 text-blue-400"
                        : "text-gray-100 hover:bg-blue-900/20 hover:text-blue-400"
                    }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
