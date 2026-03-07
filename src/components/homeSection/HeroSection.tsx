"use client";
import React from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Image from "next/image";
import HeroImage from "../../../public/heroimage.webp"
const HeroSection = () => {
  // Animation for the text and search bar
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  // Image cards variants
  const cardVariants = (delay: string) => ({
    initial: { opacity: 0, scale: 0.8, y: 20 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { delay, duration: 0.8, ease: "backOut" } 
    },
  });

  return (
    <section className="relative w-full min-h-[80vh] flex items-center bg-[#F9FAFB] overflow-hidden py-16 lg:py-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="flex flex-col space-y-6"
        >
          <h1 className="text-4xl  text-gray-900 font-extrabold text-tracking-tight">
            Study abroad. Simplified.
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-lg leading-relaxed">
            From courses to countries, find what you need in a moment
          </p>

          {/* Search Bar with Gradient Border */}
          <div className="relative group max-w-lg mt-4">
            <div className="absolute -inset-0.5 rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 "></div>
            <div className="relative flex items-center bg-white rounded-full px-6 py-4 shadow-sm border border-gray-100">
              <Search className="text-gray-400 mr-3" size={20} />
              <input
                type="text"
                placeholder="Search for courses, universities..."
                className="w-full outline-none text-gray-700 bg-transparent placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Google Rating */}
          <div className="flex items-center space-x-2 pt-4">
            <span className="text-gray-700 font-semibold ">Rated 4.7</span>
            <div className="flex items-center">
              <span className="text-blue-500 font-bold text-lg">G</span>
              <span className="text-red-500 font-bold text-lg">o</span>
              <span className="text-yellow-500 font-bold text-lg">o</span>
              <span className="text-blue-500 font-bold text-lg">g</span>
              <span className="text-green-500 font-bold text-lg">l</span>
              <span className="text-red-500 font-bold text-lg">e</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Layered Images */}
        <div >
          {/* Main Center Image */}

          <Image src={HeroImage}
          
          loading="eager"
          alt="hero-image"
          />
          
        </div>

      </div>
    </section>
  );
};

export default HeroSection;