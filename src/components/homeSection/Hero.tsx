"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import image1 from '@/public/hero/hero.webp';
import image2 from '@/public/hero/hero2.webp';

const images = [image1, image2];

const Hero = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Changes image every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-180 w-full overflow-hidden bg-gray-900">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <Image
                        src={images[index]}
                        alt={`Slide ${index + 1}`}
                        fill
                        priority
                        className="object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Overlay Content */}
            {/* <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-5xl font-bold mb-6"
        >
          Discover More
        </motion.h1>
        
        <Link 
          href="/explore" 
          className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
        >
          Explore Now
        </Link>
      </div> */}

        </section>
    );
};

export default Hero;