"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuChevronDown } from "react-icons/lu";
import { CoursesMenu, CountriesMenu } from "./MegaMenu";

import Logo from "../../public/Logo.png";

export default function Header() {
  const [courseOpen, setCourseOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);

  return (
    <>
      {/* Spacer to prevent content from going under the fixed header */}
      <div className="h-20" />

      <header className="fixed top-0 left-0 right-0 z-100 border-b bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

          {/* Logo */}
          <div className="shrink-0">
            <Link href="/">
              <Image
                src={Logo}
                width={170}
                height={60}
                alt="logo"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">

            {/* Courses Trigger */}
            <div
              className="relative py-7" // padding helps maintain hover area
              onMouseEnter={() => setCourseOpen(true)}
              onMouseLeave={() => setCourseOpen(false)}
            >
              <button className={`flex items-center gap-1 font-semibold transition-colors ${courseOpen ? 'text-blue-900' : 'text-gray-700 hover:text-blue-900'}`}>
                Courses
                <span className={`transition-transform duration-300 ${courseOpen ? 'rotate-180' : ''}`}>
                  <LuChevronDown />
                </span>
              </button>
              {courseOpen && <CoursesMenu />}
            </div>

            {/* Countries Trigger */}
            <div
              className="relative py-7"
              onMouseEnter={() => setCountryOpen(true)}
              onMouseLeave={() => setCountryOpen(false)}
            >
              <button className={`flex items-center gap-1 font-semibold transition-colors ${countryOpen ? 'text-blue-900' : 'text-gray-700 hover:text-blue-900'}`}>
                Countries
                <span className={`transition-transform duration-300 ${countryOpen ? 'rotate-180' : ''}`}><LuChevronDown /></span>

              </button>
              {countryOpen && <CountriesMenu />}
            </div>

            <Link href="#" className="font-semibold text-gray-700 hover:text-blue-900 transition-colors">
              About
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button className="text-gray-700 font-semibold hover:text-blue-900 transition-colors px-4 py-2 hidden md:block">
              Log in
            </button>
            <button className="bg-blue-900 hover:bg-red-600 text-white px-7 py-2.5 rounded-full font-bold shadow-lg shadow-purple-200 transition-all active:scale-95">
              Sign up
            </button>
          </div>

        </div>
      </header>
    </>
  );
}