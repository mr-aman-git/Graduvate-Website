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

export default function CoimbatoreLandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-red-100 selection:text-red-900">
      <Head>
        <title>
          Study MBBS in Coimbatore | Top Medical Colleges & Admission Guidance
        </title>
        <meta
          name="description"
          content="Get expert guidance for MBBS admissions in Coimbatore. Discover top medical colleges, fee structures, and direct admission processes with StudyMBBS."
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
              <span className="text-red-600">MBBS Abroad</span> <br />
              Seat in Coimbatore.
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Expert counseling and direct admission guidance for top
              NMC-approved medical colleges. Zero hidden fees, 100% complete
              transparency.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="tel:+91 99949 13847"
                className="w-full sm:w-auto bg-blue-950 hover:bg-blue-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <FaPhoneAlt /> Call For Free Consultation
              </a>
              <a
                href="https://wa.me/+91 99949 13847"
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
              Visit Our Coimbatore Office
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
                href="tel:+91 99949 13847"
                className="text-lg font-bold text-gray-800 hover:text-red-600 transition"
              >
                +91 99949 13847
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
                2, Bharathi Colony Rd, Peelamedu, Coimbatore, Tamil Nadu 641004
              </p>
            </div>
          </div>

          {/* Map Container */}
          <div className="w-full h-120 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-4 border-white relative z-10 bg-gray-200">
            <iframe
              title="StudyMBBS Coimbatore Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4206.873081810245!2d76.99309727531154!3d11.022384554608248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858310bdc6039%3A0x23ffac9f0afd0711!2s2%2C%20Bharathi%20Colony%20Rd%2C%20Peelamedu%2C%20Coimbatore%2C%20Tamil%20Nadu%20641004!5e1!3m2!1sen!2sin!4v1780748092787!5m2!1sen!2sin"
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

      {/* 5. Footer */}
      {/* <footer id="contact" className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div>
            <Link href="/">
              <img
                src="/Logo.webp"
                alt="StudyMBBS Logo"
                className="h-14 w-auto object-contain mb-6 transition-all duration-500"
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-600 pr-4">
              Your trusted partner for medical admissions. We provide end-to-end
              guidance to help you secure a seat in top medical colleges across
              Madurai.
            </p>
          </div>

          
          <div>
            <h4 className="md:text-lg font-bold text-blue-950 mb-6 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link
                  href="/"
                  className="hover:text-red-600 transition font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-red-600 transition font-medium"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="hover:text-red-600 transition font-medium"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-red-600 transition font-medium"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          
          <div>
            <h4 className="md:text-lg font-bold text-blue-950 mb-6 uppercase tracking-wider text-sm">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-gray-600 font-medium">
              <li>
                <a
                  href="tel:+919786197813"
                  className="flex items-center gap-3 hover:text-red-600 transition"
                >
                  <span className="bg-blue-50 p-2 rounded-full text-blue-600">
                    <FaPhoneAlt />
                  </span>{" "}
                  +91 97861 97813
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919786197813"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-green-600 transition"
                >
                  <span className="bg-green-50 p-2 rounded-full text-green-600">
                    <FaWhatsapp className="text-lg" />
                  </span>{" "}
                  WhatsApp Support
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-red-50 p-2 rounded-full text-red-600 mt-1 text-xs">
                  🏢
                </span>
                <span className="leading-relaxed mt-1.5">
                  4/2A, Dr.Thagaraj Salai, Near Raja Muthiah Mandram, K.K.
                  Nager, Madurai - 625 020
                </span>
              </li>
            </ul>
          </div>
        </div>

        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-gray-200 text-center text-xs text-gray-500 font-medium">
          <p>
            &copy; {new Date().getFullYear()} StudyMBBS.education. All rights
            reserved.
          </p>
        </div>
      </footer> */}

      {/* <a
        href="https://wa.me/919786197813?text=Hi%20StudyMBBS,%20I%20want%20to%20know%20about%20MBBS%20admission%20in%20Madurai."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-[0_8px_30px_rgba(34,197,94,0.4)] hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center animate-bounce border-2 border-white"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </a> */}
    </div>
  );
}
