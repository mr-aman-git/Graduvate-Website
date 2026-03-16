"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, GraduationCap, Globe, Headphones, Zap, Star } from 'lucide-react'; // Install lucide-react

const reasons = [
    {
        title: "15+ Years of Expertise",
        desc: "Guiding Indian students since 2011 with expert international admission strategies.",
        icon: <GraduationCap className="w-8 h-8" />,
        color: "bg-blue-50 text-blue-900"
    },
    {
        title: "Global University Network",
        desc: "Direct partnerships with top-tier universities across USA, UK, Canada, and Europe.",
        icon: <Globe className="w-8 h-8" />,
        color: "bg-red-50 text-[#ee1d23]"
    },
    {
        title: "End-to-End Support",
        desc: "From course selection and visa processing to pre-departure briefings.",
        icon: <Zap className="w-8 h-8" />,
        color: "bg-blue-50 text-blue-900"
    },
    {
        title: "Trusted & Verified",
        desc: "100% transparent process with a high success rate in visa approvals.",
        icon: <ShieldCheck className="w-8 h-8" />,
        color: "bg-red-50 text-[#ee1d23]"
    },
    {
        title: "Student-First Approach",
        desc: "Personalized counseling tailored to your career goals and budget.",
        icon: <Star className="w-8 h-8" />,
        color: "bg-blue-50 text-blue-900"
    },
    {
        title: "24/7 Assistance",
        desc: "Our dedicated team is always available to resolve your queries abroad.",
        icon: <Headphones className="w-8 h-8" />,
        color: "bg-red-50 text-[#ee1d23]"
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-20 px-4 bg-[#fcfdfe]">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[#ee1d23] font-bold tracking-widest uppercase text-sm"
                    >
                        Why Graduvate?
                    </motion.span>
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-extrabold text-blue-900 mt-3"
                    >
                        We make your study abroad <br className="hidden md:block" /> journey effortless
                    </motion.h2>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="p-8 bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 hover:border-blue-900/20 transition-all group"
                        >
                            <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-900 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Banner Like Edvoy */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mt-20 bg-blue-900 rounded-[2.5rem] p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200"
                >
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-4">Ready to start your journey?</h3>
                        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                            <span className="text-blue-100">Join thousands of students who have already achieved their dreams with Graduvate.</span>
                        </p>

                        <a href="tel:+918608608668">
                            <button className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold hover:bg-[#ee1d23] hover:text-white transition-all transform hover:scale-105 shadow-lg">
                                Get Free Counseling
                            </button>
                        </a>
                    </div>
                    {/* Decorative Circles */}
                    <div className="absolute -top-12.5 -right-12.5 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-12.5 -left-12.5 w-64 h-64 bg-red-500/20 rounded-full blur-3xl"></div>
                </motion.div>

            </div>
        </section>
    );
};

export default WhyChooseUs;