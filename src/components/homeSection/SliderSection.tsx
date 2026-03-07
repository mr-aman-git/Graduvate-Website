"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const SliderSection = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const slides = [
        {
            title: "Seamless application process",
            desc: "Apply directly to your dream university and get real-time updates.",
            img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974", // Demo app screenshot
        },
        {
            title: "Express offer letters",
            desc: "Secure an offer in principle from leading universities in just a few hours.",
            img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2070",
        },
        {
            title: "Personal Mentor",
            desc: "Get expert counseling on course selection and visa guidance.",
            img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071",
        },
    ];

    return (
        <section className="bg-linear-to-t from-[#EFEAFF] via-indigo-50 to-[#F9FAFB] pb-20 overflow-hidden">
            <div className=" mx-auto">
                {/* Top Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Apply with confidence
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Our app empowers you to make smart academic decisions
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Side: Mobile Mockups (Static Group) */}
                    <div className="lg:col-span-5 lg:ml-30 relative flex justify-center items-end h-112.5">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative w-80 md:w-full max-w-87.5"
                        >
                            {/* Main Phone */}
                            <div className="relative z-20 shadow-2xl rounded-[2.5rem] border-2 border-gray-900 overflow-hidden md:w-64 h-125 mx-auto bg-white">
                                <img
                                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974"
                                    alt="App"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Side Phone (Back) */}
                            <div className="absolute top-10 -left-10 z-10 shadow-xl rounded-4xl border-[6px] border-gray-800 overflow-hidden w-56 h-105 bg-white opacity-80">
                                <img
                                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070"
                                    alt="App UI"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* App Store Buttons Overlay */}
                            <div className="absolute -bottom-5 left-0 right-0 z-30 flex flex-col items-center space-y-2">
                                <p className="text-sm font-bold text-gray-800 bg-white/80 backdrop-blur px-4 py-1 rounded-full shadow-sm">
                                    An all-in-one app
                                </p>
                                <div className="flex space-x-2">
                                    <div className="bg-black text-white px-3 py-1 rounded flex items-center text-[10px] cursor-pointer">
                                        <span className="mr-1">App Store</span>
                                    </div>
                                    <div className="bg-black text-white px-3 py-1 rounded flex items-center text-[10px] cursor-pointer">
                                        <span>Google Play</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Swiper Slider */}
                    <div className="lg:col-span-7 relative">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerView={1.2}
                            breakpoints={{
                                640: { slidesPerView: 1.5 },
                                1024: { slidesPerView: 2.2 },
                            }}
                            onBeforeInit={(swiper: SwiperType) => {
                                (swiper.params.navigation as any).prevEl = prevRef.current;
                                (swiper.params.navigation as any).nextEl = nextRef.current;
                            }}
                            className="pb-20!"
                        >
                            {slides.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <div className="bg-white border border-gray-100 rounded-3xl p-8 h-112.5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                                {slide.title}
                                            </h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">
                                                {slide.desc}
                                            </p>
                                        </div>
                                        <div className="mt-6 rounded-2xl overflow-hidden h-56 bg-gray-50 border border-gray-100">
                                            <img
                                                src={slide.img}
                                                alt="feature"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom Navigation Arrows (Bottom Right for Desktop) */}
                        <div className="absolute bottom-4 right-0 flex space-x-4 z-40">
                            <button
                                ref={prevRef}
                                className="p-3 rounded-full border border-gray-200 hover:bg-gray-900 hover:text-white transition-all disabled:opacity-30"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                ref={nextRef}
                                className="p-3 rounded-full border border-gray-200 hover:bg-gray-900 hover:text-white transition-all disabled:opacity-30"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SliderSection;
