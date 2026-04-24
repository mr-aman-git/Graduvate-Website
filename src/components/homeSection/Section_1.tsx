import React from 'react';
import Image from 'next/image';
import { ArrowRight, Send } from "lucide-react";
const Section_1: React.FC = () => {
    return (
        <section className="bg-white text-gray-900 px-6 lg:px-20 md:py-20 pt-10">
            <div className="flex flex-wrap md:flex-nowrap  gap-10 items-center">

                <div className="flex flex-col items-start space-y-6 max-w-170">

                    <div className="bg-blue-100 text-red-600 px-4 py-2 rounded-full font-semibold text-sm inline-flex items-center space-x-2 shadow-sm">
                        <span className="w-2.5 h-2.5 bg-red-600 rounded-full"></span>
                        <span>Student helpline</span>
                    </div>

                    {/* 2. Main Refined Headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold  text-gray-900">
                        Study Abroad <span className="text-blue-900 relative inline-block">With Skill</span> Everyday Anytime, & Anywhere.
                    </h1>

                    {/* 3. Re-written Description (more professional) */}
                    <p className="text-lg text-gray-600 max-w-xl pt-4">
                        Gain crucial skills and build a global network while pursuing your higher education. Access premium counseling and resources, whenever and wherever you need them.
                    </p>

                    {/* 4. Action Area: Button and Social Proof */}
                    <div className="mt-10 flex gap-5 flex-wrap text-sm md:text-md">

                        {/* Primary Button */}
                        <button className="group cursor-pointer flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white py-4 px-7 rounded-full shadow-lg transition-all duration-300">
                            FIND YOUR DREAM UNIVERSITY
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                        </button>

                        {/* Secondary Button (Gradient Red Accent) */}
                        <button className="group cursor-pointer flex items-center gap-2 bg-linear-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white py-4 px-7 rounded-full shadow-lg transition-all duration-300">
                            Apply Now
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition" />
                        </button>

                    </div>


                </div>

                {/* ----- Right Side Image Placeholder ----- */}
                <div className="">

                    <Image
                        src="/hero/hero.webp"
                        alt="Who We Are"
                        height={600}
                        width={600}
                        className="w-full h-150 object-contain"
                    />

                </div>
            </div>
        </section>
    );
};

export default Section_1;