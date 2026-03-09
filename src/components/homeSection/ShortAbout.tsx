"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
// Image path adjust karein apne folder structure ke hisaab se
import aboutImg from '@/public/about/about.webp';

const ShortAbout = () => {
    return (
        <section className="py-16 px-4 md:px-20 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">

                {/* Right Side: Image with Fade-in */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2"
                >
                    <Image
                        src={aboutImg}
                        alt="Who We Are"
                        className="w-full h-120 object-contain"
                    />
                </motion.div>

                {/* Left Side: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2 space-y-6"
                >
                    <div className="relative inline-block">
                        <h2 className="md:text-4xl text-3xl font-bold text-[#1a2e7e]">Who We Are?</h2>
                        <div className="w-12 h-1 bg-red-600 mt-1"></div>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-lg">
                        Graduvate was established with the core objective of helping students achieve
                        their dreams of overseas education. Since our inception in 2011, we have
                        developed strong expertise in international admissions and have been guiding
                        Indian students to study abroad for the past 15 years.
                    </p>

                    <Link href="/about">
                        <button className="bg-[#1e3a8a] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-red-600 hover:shadow-lg transform hover:-translate-y-1">
                            Read More
                        </button>
                    </Link>
                </motion.div>

            </div>
        </section>
    );
};

export default ShortAbout;