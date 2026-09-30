import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Phone, MapPin } from "lucide-react";
// Make sure to install react-icons: npm install react-icons
import {
  FaWhatsapp,
  FaUserMd,
  FaHospital,
  FaBookOpen,
  FaPhoneAlt,
  FaCheckCircle,
  FaAward,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";

export const metadata = {
  title: "Study Abroad & PR Consultants in Chennai | Gradubvate",

  description:
    "Gradubvate is a study abroad and PR consultancy in Chennai offering overseas education counselling, university admissions, student visa guidance, PR pathways and immigration assistance.",

  keywords: [
    "Study Abroad Consultants in Chennai",
    "Study Abroad Consultancy in Chennai",
    "Overseas Education Consultants in Chennai",
    "PR Consultants in Chennai",
    "Immigration Consultants in Chennai",
    "Student Visa Consultants in Chennai",
    "Abroad Education Consultants in Chennai",
    "Overseas Education Consultancy Chennai",
    "PR Consultancy Chennai",
    "Study Visa Consultants in Chennai",
    "Gradubvate Chennai",
  ],

  alternates: {
    canonical: "https://www.gradubvate.com/address/chennai",
  },

  openGraph: {
    title: "Study Abroad & PR Consultants in Chennai | Gradubvate",
    description:
      "Get expert guidance for studying abroad, university admissions, student visas, PR pathways and immigration from Gradubvate's Chennai consultancy.",
    url: "https://www.gradubvate.com/address/chennai",
    siteName: "Gradubvate",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ChennaiLandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-red-100 selection:text-red-900">
      {/* 2. Hero Section - Gradubvate Chennai Branch */}
      <section className="relative bg-slate-50 pt-10 pb-10 md:pb-18 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          {/* Left Text Content */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm text-blue-900 font-semibold text-sm mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-700"></span>
              </span>
              Your Trusted Overseas Education & Immigration Partner
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] text-blue-900 mb-6 tracking-tight">
              Study Abroad & <br />
              <span className="text-red-700">PR Consultants</span> <br />
              in Chennai
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Turn your international dreams into reality with Gradubvate, your
              study abroad and PR consultancy in Chennai. Get personalized
              guidance for overseas education, university admissions, student
              visas, permanent residency pathways, and immigration applications.
              Our team helps you navigate every step of your global journey with
              confidence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="tel:+917871588345"
                className="w-full sm:w-auto bg-blue-900 hover:bg-blue-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <FaPhoneAlt />
                Book a Free Consultation
              </a>

              <a
                href="https://wa.me/917871588345"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-white border-2 border-green-500 text-green-600 hover:bg-green-50 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-md flex items-center justify-center gap-3"
              >
                <FaWhatsapp className="text-2xl" />
                WhatsApp Our Experts
              </a>
            </div>
          </div>

          {/* Right Side - Floating Premium Feature Card */}
          <div className="lg:w-2/5 w-full relative">
            <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(8,112,184,0.07)] border border-gray-100 relative z-20">
              <div className="absolute -top-5 -right-5 bg-red-700 text-white p-4 rounded-2xl shadow-lg rotate-12">
                <FaAward className="text-3xl" />
              </div>

              <h3 className="text-2xl font-extrabold text-blue-900 mb-8 pb-4 border-b border-gray-100">
                Why Choose Gradubvate Chennai?
              </h3>

              <ul className="space-y-8">
                <li className="flex items-start gap-5">
                  <div className="bg-blue-50 p-3 rounded-2xl text-blue-600 mt-1">
                    <FaCheckCircle className="text-xl" />
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-gray-900">
                      Expert Study Abroad Guidance
                    </h4>

                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                      Explore international universities, courses, scholarships,
                      and admission opportunities with personalized counseling
                      based on your academic goals and budget.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-5">
                  <div className="bg-blue-50 p-3 rounded-2xl text-blue-600 mt-1">
                    <FaCheckCircle className="text-xl" />
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-gray-900">
                      PR & Immigration Assistance
                    </h4>

                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                      Get professional guidance on permanent residency pathways,
                      eligibility assessment, documentation, and immigration
                      application processes for your preferred destination.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-5">
                  <div className="bg-blue-50 p-3 rounded-2xl text-blue-600 mt-1">
                    <FaHandshake className="text-xl" />
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-gray-900">
                      End-to-End Application Support
                    </h4>

                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                      From university shortlisting and application preparation
                      to visa documentation and pre-departure guidance, our
                      Chennai team supports you throughout the process.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Decorative Background Card */}
            <div className="absolute top-8 -right-8 w-full h-full bg-blue-900 rounded-[2.5rem] -z-10 opacity-5 hidden sm:block"></div>
          </div>
        </div>
      </section>

      {/* Map Section - Chennai Branch */}
      <section className="py-10 bg-slate-50 border-t border-gray-100">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
              Visit Our Study Abroad & PR Consultancy in Chennai
            </h2>

            <p className="text-gray-600 text-md md:text-lg leading-relaxed">
              Meet our experienced overseas education and immigration
              consultants at our Chennai office for personalized guidance on
              studying abroad, university admissions, student visas, PR
              pathways, and immigration opportunities.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 my-8">
            {/* Phone Number */}
            <div className="flex items-center gap-3 justify-center">
              <div className="bg-red-50 p-2.5 rounded-full text-red-700 shrink-0">
                <Phone className="w-5 h-5" />
              </div>

              <a
                href="tel:+917871588345"
                className="text-lg font-bold text-gray-800 hover:text-red-700 transition"
              >
                +91 78715 88345
              </a>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-10 bg-gray-200"></div>

            {/* Location */}
            <div className="flex items-start gap-3">
              <div className="bg-blue-50 p-2.5 rounded-full text-blue-900 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>

              <p className="text-md md:text-lg text-gray-600 max-w-sm leading-relaxed">
                4M, 4th Floor, Century Plaza, 560–562, Anna Salai, Teynampet,
                Chennai – 600017
              </p>
            </div>
          </div>

          {/* Map Container */}
          <div className="w-full h-100 sm:h-125 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-4 border-white relative z-10 bg-gray-200">
            <iframe
              title="Gradubvate Study Abroad & PR Consultancy Chennai Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4175.3329389112605!2d80.24510097533313!3d13.044875313267054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267003406f145%3A0xf871312c282ad898!2sStudy%20MBBS%20Overseas%20Education!5e1!3m2!1sen!2sin!4v1780115300207!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
