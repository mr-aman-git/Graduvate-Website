"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const destinations = [
  { name: "United States", img: "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg" },
  { name: "United Kingdom", img: "https://t3.ftcdn.net/jpg/05/10/71/90/360_F_510719075_qeEoeE8pHYpHcgyy6wSdvx6Ozs843O6B.jpg" },
  { name: "Canada", img: "https://img.freepik.com/premium-photo/national-flag-canada-with-mountain-forest-jasper-national-park-summer-landscape-lac-beauver_363815-4351.jpg?semt=ais_hybrid&w=740&q=80" },
  { name: "Germany", img: "https://media.istockphoto.com/id/619638736/photo/historic-town-of-rothenburg-ob-der-tauber-franconia-bavaria-germany.jpg?s=612x612&w=0&k=20&c=IPnUDs04lzGWP7T4kqd3OlswxsIAEnTpsN_eSaPVE8I=" },
  { name: "Ireland", img: "https://media.istockphoto.com/id/1135186484/photo/colorful-buildings-old-boats-and-cathedral-cobh-harbor-county-cork-ireland.jpg?s=612x612&w=0&k=20&c=jDVe8SpRBkxvtYWCCaFkHxMC9EVQXHLAUdpe1feuJIc=" },
];

const DestinationCard = () => {
  return (
    <section className="md:py-16 pt-10 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-3">
            Explore popular study destinations
          </h1>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-xl mx-auto font-medium">
            Find a country to learn and excel in all aspects of life
          </p>
        </div>

        {/* Swiper Container */}
        <div className="relative group px-2">
          <Swiper
            modules={[Navigation]}
            spaceBetween={25}
            slidesPerView={1.3}
            navigation={{
              nextEl: '.next-btn',
              prevEl: '.prev-btn',
            }}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 4.2 },
            }}
            className="pb-14"
          >
            {destinations.map((item, idx) => (
              <SwiperSlide key={idx}>
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="flex flex-col group/card cursor-pointer"
                >
                  <div className="relative w-full aspect-4/3 rounded-4xl overflow-hidden shadow-lg border-2 border-transparent transition-all duration-300 group-hover/card:border-blue-900">
                    <Image 
                      src={item.img} 
                      alt={item.name} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                      unoptimized
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-blue-900/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="mt-5 font-bold text-[#1e293b] text-xl text-center group-hover/card:text-red-600 transition-colors">
                    {item.name}
                  </h3>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons (Brand Styled) */}
          <div className="flex justify-end items-center gap-4 mt-2 px-4">
            <button className="prev-btn w-12 h-12 rounded-full border-2 border-blue-900 flex items-center justify-center text-blue-900 hover:bg-blue-900 hover:text-white transition-all shadow-sm active:scale-95">
              <span className="text-xl font-bold">←</span>
            </button>
            <button className="next-btn w-12 h-12 rounded-full border-2 border-red-600 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all shadow-sm active:scale-95">
              <span className="text-xl font-bold">→</span>
            </button>
          </div>
        </div>

        {/* Show All Button (Brand Styled) */}
        <div className="flex justify-center mt-12">
          <Link href="/">
            <button className="group flex items-center gap-3 bg-blue-900 text-white px-10 py-3.5 rounded-full font-bold hover:bg-[#ee1d23] transition-all duration-300 shadow-xl hover:shadow-red-200">
              Show all 
              <span className="transition-transform group-hover:translate-x-2">→</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DestinationCard;