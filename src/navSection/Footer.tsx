import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from "../../public/Logo.png";
import WhatsappSticky from './WhatsappSticky';
import { FaLocationDot, FaEnvelope, FaPhone } from "react-icons/fa6";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import {
    FaYoutube,
    FaWhatsapp,
    FaPhoneAlt,
    FaMapMarkerAlt,
} from "react-icons/fa";
const Footer = () => {
    const locations = [
        "New Delhi, India",
        "Madurai, TN",
        "Coimbatore, TN",
        "Chennai, TN",
        "Trichy, TN",
        "Ramanathapuram, TN",
        "Dubai, UAE",
        "Moscow, Russia",
    ];

    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-1">
                        {/* <span className="text-2xl font-bold text-blue-600">LOGO</span> */}
                        <Link href="/">
                            <Image
                                src={Logo}
                                width={170}
                                height={60}
                                alt="logo"
                            />
                        </Link>
                        <p className="mt-4 text-gray-500 leading-relaxed">
                            Building the future of the web with modern components and seamless user experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-blue-900 transition-colors">About Us</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-900 transition-colors">Careers</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-900 transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Support</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-blue-900 transition-colors">Help Center</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-900 transition-colors">Documentation</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-900 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}



                    {/* ================= CONTACT ================= */}
                    <div>
                        <h4 className="text-gray-900 text-lg font-semibold mb-4 relative">
                            Contact Info

                        </h4>

                        <ul className="space-y-4 text-sm text-[#4A4A4A]">
                            {/* Locations */}
                            {locations.map((loc, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <FaMapMarkerAlt className="text-blue-900 mt-1 shrink-0" />
                                    <span>{loc}</span>
                                </li>
                            ))}

                            {/* Phone */}
                            <li>
                                <Link
                                    href="tel:+918608608668"
                                    className="flex items-start gap-3 hover:text-blue-900 transition"
                                >
                                    <FaPhoneAlt className="text-blue-900 mt-1 shrink-0" />
                                    <span>+91 8608608668</span>
                                </Link>
                            </li>

                            {/* Email */}
                            <li>
                                <Link
                                    href="mailto:graduvateabroad@gmail.com"
                                    className="flex items-start gap-3 hover:text-blue-900 transition"
                                >
                                    <FaEnvelope className="text-blue-900 mt-1 shrink-0" />
                                    <span>graduvateabroad@gmail.com</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                    <p>© {new Date().getFullYear()} Graduvate. All rights reserved.</p>

                    <div className="flex items-center space-x-6 mt-4 md:mt-0">

                        <a
                            href="https://www.instagram.com/graduvate_edutech/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-pink-600 transition"
                        >
                            <FaInstagram size={18} />
                            Instagram
                        </a>

                        <a
                            href="https://www.facebook.com/profile.php?id=61576091669969"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-blue-600 transition"
                        >
                            <FaFacebookF size={18} />
                            Facebook
                        </a>

                    </div>
                </div>
            </div>
            <WhatsappSticky />
        </footer>
    );
};

export default Footer;