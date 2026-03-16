import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from "../../public/Logo.png";
import WhatsappSticky from './WhatsappSticky';
import { FaLocationDot, FaEnvelope, FaPhone } from "react-icons/fa6";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
const Footer = () => {
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
                    <div>
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                            Address
                        </h4>

                        <div className="space-y-3 text-gray-600">

                            {/* Location 1 */}
                            <div className="flex items-start gap-2">
                                <span className="mt-1 text-blue-600" >
                                    <FaLocationDot />
                                </span>

                                <span>Tamil Nadu, India</span>
                            </div>

                            {/* Location 2 */}
                            <div className="flex items-start gap-2">
                                <span className="mt-1 text-blue-600">
                                    <FaLocationDot />
                                </span>

                                <span>New Delhi, India</span>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-2">
                                <span className="mt-1 text-blue-600">
                                    <FaEnvelope />
                                </span>

                                <a
                                    href="mailto:graduvateabroad@gmail.com"
                                    className="hover:text-blue-600 transition"
                                >
                                    graduvateabroad@gmail.com
                                </a>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-2">
                                <span className="mt-1 text-blue-600">
                                    <FaPhone />
                                </span>

                                <a
                                    href="tel:+918608608668"
                                    className="hover:text-blue-600 transition"
                                >
                                    +91 8608608668
                                </a>
                            </div>

                        </div>
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