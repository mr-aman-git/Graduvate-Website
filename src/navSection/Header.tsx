"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "../../public/Logo.png"
import Image from "next/image";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Disable scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  // Sidebar Variants
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    opened: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    },
  };

  // Link Variants (Slide up effect)
  const linkVariants = {
  closed: { opacity: 0, y: 20 },
  opened: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.4 }
  }),
};

  return (
    <header className="sticky top-0 z-100 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="relative z-110">
            <Image src={Logo}
            height={70}
            width={170}
            alt="Logo"
            loading="eager"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-900 hover:text-blue-600 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-linear-to-r from-blue-900 to-indigo-600 cursor-pointer text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md active:scale-95">
              Login
            </button>
          </nav>

          {/* Mobile Menu Button - Z-index high rakha hai taaki menu ke upar dikhe */}
          <div className="md:hidden relative z-110">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-gray-700 bg-gray-50 rounded-lg focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="opened"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 h-screen w-full bg-white z-105 flex flex-col items-center justify-center md:hidden"
          >
            {/* Background pattern for modern feel */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-size-[20px_20px]"></div>

            <nav className="flex flex-col items-center space-y-8 relative z-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  custom={i}
                  variants={linkVariants}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.button 
                custom={navLinks.length}
                variants={linkVariants}
                className="mt-4 bg-blue-600 text-white w-48 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-blue-200"
              >
                Login
              </motion.button>
            </nav>

            {/* Bottom contact info in mobile menu */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 text-center text-gray-400 text-sm"
            >
              <p>support@brand.com</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;