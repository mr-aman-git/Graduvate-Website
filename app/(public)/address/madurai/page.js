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

export default function MaduraiLandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-red-100 selection:text-red-900">
      <Head>
        <title>
          Study MBBS in Madurai | Top Medical Colleges & Admission Guidance
        </title>
        <meta
          name="description"
          content="Get expert guidance for MBBS admissions in Madurai. Discover top medical colleges, fee structures, and direct admission processes with StudyMBBS."
        />
      </Head>

      {/* 2. Hero Section (Ultra Modern Light Theme) */}
      <section className="relative bg-slate-50 pt-20 pb-32 overflow-hidden">
        {/* Modern Soft Blur Blobs for Background Depth */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-60"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-[128px] opacity-60"></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-[128px] opacity-60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          {/* Left Text Content */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm text-blue-900 font-semibold text-sm mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
              </span>
              Admissions Open 2026
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-black leading-[1.05] text-blue-950 mb-6 tracking-tight">
              Secure Your <br />
              <span className="text-red-600">Study Abroad</span> <br />
              Seat in Madurai.
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Expert counseling and direct admission guidance for top
              NMC-approved medical colleges. Zero hidden fees, 100% complete
              transparency.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="tel:+91 8608608668"
                className="w-full sm:w-auto bg-blue-950 hover:bg-blue-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <FaPhoneAlt /> Call For Free Consultation
              </a>
              <a
                href="https://wa.me/918608608668"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-white border-2 border-green-500 text-green-600 hover:bg-green-50 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-md flex items-center justify-center gap-3"
              >
                <FaWhatsapp className="text-2xl" /> WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right Side - Floating Premium Feature Card */}
          <div className="lg:w-2/5 w-full relative">
            <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(8,112,184,0.07)] border border-gray-100 relative z-20">
              <div className="absolute -top-5 -right-5 bg-red-600 text-white p-4 rounded-2xl shadow-lg rotate-12">
                <FaAward className="text-3xl" />
              </div>

              <h3 className="text-2xl font-extrabold text-blue-950 mb-8 pb-4 border-b border-gray-100">
                Why Trust Us?
              </h3>

              <ul className="space-y-8">
                <li className="flex items-start gap-5">
                  <div className="bg-blue-50 p-3 rounded-2xl text-blue-600 mt-1">
                    <FaCheckCircle className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">
                      NMC Approved Colleges
                    </h4>
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                      We only partner with 100% recognized and genuine medical
                      institutions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="bg-blue-50 p-3 rounded-2xl text-blue-600 mt-1">
                    <FaCheckCircle className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">
                      No Extra Charges{" "}
                    </h4>
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                      Clear upfront pricing. What we quote is exactly what you
                      pay.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="bg-blue-50 p-3 rounded-2xl text-blue-600 mt-1">
                    <FaHandshake className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">
                      End-to-End Support
                    </h4>
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                      From filling the application to settling into your new
                      hostel room.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            {/* Decorative background card to add depth */}
            <div className="absolute top-8 -right-8 w-full h-full bg-blue-900 rounded-[2.5rem] -z-10 opacity-5 hidden sm:block"></div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-slate-50 border-t border-gray-100">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-extrabold text-blue-950 mb-4">
              Visit Our Madurai Office
            </h2>
            <p className="text-gray-600 font-medium">
              Find us easily on Google Maps for face-to-face expert medical
              counseling.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 my-6">
            {/* Phone Number */}
            <div className="flex items-center gap-3 justify-center">
              <div className="bg-red-50 p-2.5 rounded-full text-red-600 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <a
                href="tel:+918608608668"
                className="text-lg font-bold text-gray-800 hover:text-red-600 transition"
              >
                +91 8608 6 08668
              </a>
            </div>

            {/* Divider (Sirf bade screen par dikhega) */}
            <div className="hidden sm:block w-px h-10 bg-gray-200"></div>

            {/* Location */}
            <div className="flex items-start gap-3">
              <div className="bg-blue-50 p-2.5 rounded-full text-blue-900 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <p className="text-sm font-medium text-gray-600 max-w-sm leading-relaxed">
                3rd Floor 62, Alagar Kovil main Rd, near tamukkam main road, tallakulam, Madurai 625002
              </p>
            </div>
          </div>

          {/* Map Container */}
          <div className="w-full h-120 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-4 border-white relative z-10 bg-gray-200">
            <iframe
              title="StudyMBBS Madurai Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4221.653650224289!2d78.13851687530202!3d9.935974574132615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5c7615b8ec3%3A0x7b28785d111220a6!2s4%2F2a%2C%20Dr%20Thangaraj%20Salai%2C%20Mellur%2C%20KK%20Nagar%2C%20Madurai%2C%20Tamil%20Nadu%20625020!5e1!3m2!1sen!2sin!4v1780035024484!5m2!1sen!2sin"
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
