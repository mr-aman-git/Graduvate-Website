"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBuilding,
  FaGlobeAmericas,
} from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  // Regional Branches Data

  const regionalBranches = [
    {
      city: "Chennai",
      address:
        "4M 4th floor Century Plaza 560 to 562, Anna Salai, Teynampet, Chennai - 600017",
      phone: "+91 7871588345",
      link: "#",
    },

    {
      city: "Coimbatore",
      phone: "+91 99949 13847",
      address:
        "2, Bharathi Colony Rd, Peelamedu, Coimbatore, Tamil Nadu 641004",
      link: "#",
    },
    {
      city: "Ramanathapuram",
      phone: "+91 7639399013",
      link: "#",
      address:
        "511-7, Muthu Bakery Upstairs, Bus Stop, No. #1, opp. Bharathi Nagar, Ramanathapuram - 623503",
    },
    {
      city: "Trichy",
      phone: "+91 9384381372",
      address:
        "C-2, 2nd floor, second cross, Thillainagar west, Trichy -620018",
      link: "#",
    },
  ];

  // Foreign Offices Data
  const foreignOffices = [
    {
      city: "Dubai",
      phone: "+971 50 536 7885",
      address:
        "Office number 2349, 24th floor Prime Tower Business Bay Dubai UAE",
    },
    {
      city: "Moscow",
      phone: "+7 951 084-85-59",
      address: "Ulitsa Miklukho-Maklaya, 12, Moscow, Russia, 117198",
    },
  ];

  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= MAIN HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900">
            Get In <span className="text-red-700">Touch</span>
          </h1>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            Visit our offices across India and abroad or connect with our
            admission counselors directly.
          </p>
        </motion.div>

        {/* ================= 1. HEADQUARTERS (DELHI) ================= */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-8 bg-blue-900 rounded-full"></span>
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">
              Headquarters — <span className="text-red-700">New Delhi</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm items-stretch">
            {/* Details Div */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider w-fit mb-4">
                <FaBuilding /> Main Head Office
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Delhi Office
              </h3>

              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="shrink-0 mt-1 text-red-600 text-lg" />
                  <p className="text-base leading-relaxed">
                    1103 11th floor, Antriskh Bhawan Barakhamba Road, CP, New
                    Delhi
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="shrink-0 text-red-600 text-base" />
                  <a
                    href="tel:+919871514114"
                    className="text-base font-semibold hover:text-blue-900 transition-colors"
                  >
                    +91 98715 14114
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100 flex gap-4">
                <a
                  href="tel:+919871514114"
                  className="px-6 py-2.5 bg-blue-900 hover:bg-red-700 text-white font-semibold text-sm rounded-xl transition-all shadow-md active:scale-95"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Map Div */}
            <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto min-h-[260px] rounded-2xl overflow-hidden border border-gray-100 shadow-inner">
              <iframe
                title="Delhi Headquarter Map"
                src="https://maps.google.com/maps?q=Antriksh%20Bhawan%20Barakhamba%20Road%20Connaught%20Place%20New%20Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* ================= 2. CORPORATE OFFICE (CHENNAI) ================= */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-8 bg-red-700 rounded-full"></span>
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">
              Corporate Office — <span className="text-red-700">Madurai</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm items-stretch">
            {/* Details Div */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider w-fit mb-4">
                <FaBuilding /> Corporate Branch
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Madurai Office
              </h3>

              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="shrink-0 mt-1 text-red-600 text-lg" />
                  <p className="text-base leading-relaxed">
                    3rd Floor 62, Alagar Kovil main Rd, near tamukkam main road,
                    tallakulam, Madurai 625002
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="shrink-0 text-red-600 text-base" />
                  <a
                    href="tel:+91 9159 0 91595"
                    className="text-base font-semibold hover:text-blue-900 transition-colors"
                  >
                    +91 9159 0 91595
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100 flex gap-4">
                <a
                  href="tel:+917871588345"
                  className="px-6 py-2.5 bg-blue-900 hover:bg-red-700 text-white font-semibold text-sm rounded-xl transition-all shadow-md active:scale-95"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Map Div */}
            <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto min-h-65 rounded-2xl overflow-hidden border border-gray-100 shadow-inner">
              <iframe
                title="Chennai Corporate Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16886.61079891549!2d78.13029681704293!3d9.936048214562549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5c07f8d7b07%3A0x2eb9c8e519995bf!2s3rd%20Floor%2C%2062%2C%20Alagar%20Kovil%20Main%20Rd%2C%20Mellur%2C%20Tallakulam%2C%20Madurai%2C%20Tamil%20Nadu%20625002!5e1!3m2!1sen!2sin!4v1788792751466!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* ================= 3. REGIONAL BRANCHES ================= */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-0.5 flex-1 bg-gray-200"></div>
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 px-4 text-center">
              Our Regional <span className="text-red-700">Branches</span>
            </h3>
            <div className="h-0.5 flex-1 bg-gray-200"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regionalBranches.map((branch, index) => {
              const CardContent = (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all relative overflow-hidden h-full flex flex-col justify-between"
                >
                  <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-red-600 transition-all duration-300" />
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center group-hover:bg-blue-900 group-hover:text-white transition-colors">
                        <FaBuilding size={16} />
                      </div>
                      <h4 className="font-bold text-lg text-gray-900">
                        {branch.city}
                      </h4>
                    </div>

                    <div className="flex items-start gap-2.5 text-gray-600 mb-4">
                      <FaMapMarkerAlt
                        className="shrink-0 mt-1 text-red-600/70"
                        size={13}
                      />
                      <p className="text-xs sm:text-sm leading-relaxed">
                        {branch.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-800 pt-3 border-t border-gray-100 mt-2">
                    <FaPhoneAlt
                      className="shrink-0 text-red-600/70"
                      size={13}
                    />
                    <p className="text-xs sm:text-sm font-semibold">
                      {branch.phone}
                    </p>
                  </div>
                </motion.div>
              );

              return branch.link && branch.link !== "#" ? (
                <Link href={branch.link} key={index} className="block h-full">
                  {CardContent}
                </Link>
              ) : (
                <div key={index} className="block h-full">
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= 4. FOREIGN OFFICES ================= */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="h-0.5 flex-1 bg-gray-200"></div>
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 px-4 text-center">
              Our Foreign <span className="text-red-700">Offices</span>
            </h3>
            <div className="h-0.5 flex-1 bg-gray-200"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {foreignOffices.map((office, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="group bg-white p-7 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all relative overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-blue-900 transition-all duration-300" />
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 flex items-center justify-center group-hover:bg-red-700 group-hover:text-white transition-colors">
                      <FaGlobeAmericas size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-gray-900">
                        {office.city}
                      </h4>
                      <p className="text-xs text-gray-400">
                        International Presence
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-gray-600 mb-4">
                    <FaMapMarkerAlt
                      className="shrink-0 mt-1 text-red-600/80"
                      size={15}
                    />
                    <p className="text-sm leading-relaxed">{office.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-800 pt-4 border-t border-gray-100">
                  <FaPhoneAlt className="shrink-0 text-red-600/80" size={14} />
                  <a
                    href={`tel:${office.phone.replace(/\s+/g, "")}`}
                    className="text-sm font-bold hover:text-blue-900 transition-colors"
                  >
                    {office.phone}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
