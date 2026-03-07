import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-2xl font-bold text-blue-600">LOGO</span>
                        <p className="mt-4 text-gray-500 leading-relaxed">
                            Building the future of the web with modern components and seamless user experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Careers</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Support</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Help Center</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Documentation</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Address</h4>
                        <p className="text-gray-600">
                            123 Tech Avenue, Suite 500<br />
                            Silicon Valley, CA 94043<br />
                            <span className="block mt-2 font-medium text-gray-900">hello@yourbrand.com</span>
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                    <p>© {new Date().getFullYear()} YourBrand Inc. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <span className="hover:text-blue-600 cursor-pointer">Twitter</span>
                        <span className="hover:text-blue-600 cursor-pointer">LinkedIn</span>
                        <span className="hover:text-blue-600 cursor-pointer">GitHub</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;