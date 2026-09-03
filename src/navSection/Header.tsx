"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuChevronDown, LuChevronRight, LuMenu, LuX } from "react-icons/lu";

import SimpleDropdown from "./SimpleDropdown";
import { CoursesMenu, FlagDropdownMenu, CountryCardList } from "./MegaMenu";
import {
  aboutUsLinks,
  studyDestinations,
  prDestinations,
  visaDestinations,
} from "./navData";

import Logo from "../../public/Logo.png";

type MenuType = "courses" | "study" | "pr" | "visa" | "about" | null;

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<MenuType>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState<MenuType>(null);

  /* Lock body scroll during mobile menu */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileSubMenu(null);
  };

  return (
    <>
      <div className="h-20" />

      <header className="fixed top-0 left-0 right-0 z-100 border-b border-gray-100 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">

          {/* LOGO */}
          <Link href="/" onClick={closeMobile} className="shrink-0">
            <Image
              src={Logo}
              width={170}
              height={60}
              alt="Graduvate Logo"
              priority
              className="h-auto w-34 sm:w-38 md:w-42"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-7 lg:gap-8 lg:flex">
            {/* 1. COURSES (Mega Menu) */}
            <div
              className="relative py-7"
              onMouseEnter={() => setActiveMenu("courses")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 font-semibold transition-colors ${activeMenu === "courses" ? "text-blue-900" : "text-gray-700 hover:text-blue-900"
                  }`}
              >
                Courses
                <LuChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${activeMenu === "courses" ? "rotate-180" : ""}`}
                />
              </button>
              {activeMenu === "courses" && <CoursesMenu />}
            </div>

            {/* 2. STUDY GLOBAL (Flag Dropdown) */}
            <div
              className="relative py-7"
              onMouseEnter={() => setActiveMenu("study")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 font-semibold transition-colors ${activeMenu === "study" ? "text-blue-900" : "text-gray-700 hover:text-blue-900"
                  }`}
              >
                Study Global
                <LuChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${activeMenu === "study" ? "rotate-180" : ""}`}
                />
              </button>
              {activeMenu === "study" && (
                <FlagDropdownMenu title="Study Destinations" items={studyDestinations} />
              )}
            </div>

            {/* 3. PR GLOBAL (Flag Dropdown) */}
            <div
              className="relative py-7"
              onMouseEnter={() => setActiveMenu("pr")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 font-semibold transition-colors ${activeMenu === "pr" ? "text-blue-900" : "text-gray-700 hover:text-blue-900"
                  }`}
              >
                PR Global
                <LuChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${activeMenu === "pr" ? "rotate-180" : ""}`}
                />
              </button>
              {activeMenu === "pr" && (
                <FlagDropdownMenu title="Permanent Residency" items={prDestinations} />
              )}
            </div>

            {/* 4. VISA GLOBAL (Flag Dropdown) */}
            <div
              className="relative py-7"
              onMouseEnter={() => setActiveMenu("visa")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 font-semibold transition-colors ${activeMenu === "visa" ? "text-blue-900" : "text-gray-700 hover:text-blue-900"
                  }`}
              >
                Visa Global
                <LuChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${activeMenu === "visa" ? "rotate-180" : ""}`}
                />
              </button>
              {activeMenu === "visa" && (
                <FlagDropdownMenu title="Visa Categories" items={visaDestinations} />
              )}
            </div>

            {/* 5. ABOUT / WHO WE ARE (Simple Text Dropdown) */}
            <div
              className="relative py-7"
              onMouseEnter={() => setActiveMenu("about")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 font-semibold transition-colors ${activeMenu === "about" ? "text-blue-900" : "text-gray-700 hover:text-blue-900"
                  }`}
              >
                Who We Are
                <LuChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${activeMenu === "about" ? "rotate-180" : ""}`}
                />
              </button>
              {activeMenu === "about" && (
                <SimpleDropdown items={aboutUsLinks} onItemClick={() => setActiveMenu(null)} />
              )}
            </div>
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/"
              className="rounded-full bg-blue-900 px-6 py-2.5 font-bold text-white shadow-md shadow-blue-900/10 transition-all hover:bg-red-600 active:scale-95 text-sm"
            >
              Apply Now
            </Link>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Toggle Menu"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-800 shadow-sm active:scale-95 lg:hidden"
          >
            <LuMenu size={24} />
          </button>
        </div>
      </header>

      {/* MOBILE BACKDROP */}
      <div
        className={`fixed inset-0 z-110 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
        onClick={closeMobile}
      />

      {/* MOBILE DRAWER */}
      <aside
        className={`fixed right-0 top-0 z-120 flex h-dvh w-[min(88vw,380px)] flex-col bg-white shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex h-20 shrink-0 items-center justify-between border-b border-gray-100 px-5">
          <Link href="/" onClick={closeMobile}>
            <Image src={Logo} width={140} height={50} alt="Logo" className="h-auto w-32" />
          </Link>
          <button
            type="button"
            onClick={closeMobile}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 active:scale-95"
          >
            <LuX size={20} />
          </button>
        </div>

        <div className="relative flex-1 overflow-hidden">
          {/* Level 1: Main Menu */}
          <div
            className={`absolute inset-0 overflow-y-auto px-4 py-5 transition-transform duration-300 ${mobileSubMenu ? "-translate-x-full" : "translate-x-0"
              }`}
          >
            <p className="mb-3 px-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">Navigation</p>
            <div className="space-y-1">
              {(["courses", "study", "pr", "visa", "about"] as MenuType[]).map((key) => {
                const labels: Record<string, string> = {
                  courses: "Courses",
                  study: "Study Global",
                  pr: "PR Global",
                  visa: "Visa Global",
                  about: "Who We Are",
                };
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setMobileSubMenu(key)}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-3.5 text-left font-semibold text-gray-800 hover:bg-gray-50 active:bg-gray-100"
                  >
                    <span>{labels[key!]}</span>
                    <LuChevronRight size={18} className="text-gray-400" />
                  </button>
                );
              })}
            </div>

            <div className="mt-8 border-t border-gray-100 pt-6">
              <Link
                href="/assessment"
                onClick={closeMobile}
                className="flex w-full items-center justify-center rounded-xl bg-blue-900 py-3.5 font-bold text-white transition-all hover:bg-red-600 active:scale-[0.98]"
              >
                Apply Now
              </Link>
            </div>
          </div>

          {/* Level 2: Sub Menu Slider */}
          <div
            className={`absolute inset-0 overflow-y-auto bg-white transition-transform duration-300 ${mobileSubMenu ? "translate-x-0" : "translate-x-full"
              }`}
          >
            <div className="sticky top-0 z-10 flex items-center gap-3 border-b border-gray-100 bg-white px-4 py-4">
              <button
                type="button"
                onClick={() => setMobileSubMenu(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700"
              >
                <LuChevronRight size={18} className="rotate-180" />
              </button>
              <h2 className="text-base font-bold capitalize text-gray-900">
                {mobileSubMenu === "about" ? "Who We Are" : mobileSubMenu}
              </h2>
            </div>

            <div className="px-4 py-5">
              {mobileSubMenu === "courses" && <CoursesMenu onClose={closeMobile} />}
              {mobileSubMenu === "study" && <CountryCardList items={studyDestinations} onClose={closeMobile} />}
              {mobileSubMenu === "pr" && <CountryCardList items={prDestinations} onClose={closeMobile} />}
              {mobileSubMenu === "visa" && <CountryCardList items={visaDestinations} onClose={closeMobile} />}
              {mobileSubMenu === "about" && (
                <ul className="space-y-1">
                  {aboutUsLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        onClick={closeMobile}
                        className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-900"
                      >
                        {link.label}
                        <LuChevronRight size={16} className="text-gray-400" />
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}