"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LuChevronDown,
  LuChevronRight,
  LuMenu,
  LuX,
} from "react-icons/lu";

import {
  CoursesMenu,
  CountriesMenu,
  CountriesPRGlobal,
  CountriesVisaGlobal,
} from "./MegaMenu";

import Logo from "../../public/Logo.png";

type MobileMenu =
  | "courses"
  | "study"
  | "pr"
  | "visa"
  | null;

export default function Header() {
  const [courseOpen, setCourseOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const [prOpen, setPrOpen] = useState(false);
  const [visaOpen, setVisaOpen] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMenu, setMobileMenu] =
    useState<MobileMenu>(null);

  /* =====================================================
     BODY SCROLL LOCK
  ===================================================== */

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* =====================================================
     MOBILE MENU
  ===================================================== */

  const openMobileMenu = (menu: Exclude<MobileMenu, null>) => {
    setMobileMenu(menu);
  };

  const closeMobileMenu = () => {
    setMobileMenu(null);
  };

  const closeMobileDrawer = () => {
    setMobileOpen(false);
    setMobileMenu(null);
  };

  /* =====================================================
     DESKTOP MENU CLOSE HELPERS
  ===================================================== */

  const closeAllDesktopMenus = () => {
    setCourseOpen(false);
    setCountryOpen(false);
    setPrOpen(false);
    setVisaOpen(false);
  };

  return (
    <>
      {/* Spacer */}
      <div className="h-20" />

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="fixed top-0 left-0 right-0 z-[100] border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">

          {/* =================================================
              LOGO
          ================================================= */}

          <div className="shrink-0">
            <Link
              href="/"
              onClick={closeMobileDrawer}
              className="block"
            >
              <Image
                src={Logo}
                width={170}
                height={60}
                alt="Logo"
                priority
                className="h-auto w-[135px] sm:w-[150px] md:w-[170px]"
              />
            </Link>
          </div>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav className="hidden items-center gap-8 md:flex">

            {/* ================= COURSES ================= */}

            <div
              className="relative py-7"
              onMouseEnter={() => setCourseOpen(true)}
              onMouseLeave={() => setCourseOpen(false)}
            >
              <button
                type="button"
                aria-expanded={courseOpen}
                className={`flex items-center gap-1 font-semibold transition-colors ${courseOpen
                    ? "text-blue-900"
                    : "text-gray-700 hover:text-blue-900"
                  }`}
              >
                Courses

                <LuChevronDown
                  size={17}
                  className={`transition-transform duration-300 ${courseOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {courseOpen && <CoursesMenu />}
            </div>

            {/* ================= STUDY GLOBAL ================= */}

            <div
              className="relative py-7"
              onMouseEnter={() => setCountryOpen(true)}
              onMouseLeave={() => setCountryOpen(false)}
            >
              <button
                type="button"
                aria-expanded={countryOpen}
                className={`flex items-center gap-1 font-semibold transition-colors ${countryOpen
                    ? "text-blue-900"
                    : "text-gray-700 hover:text-blue-900"
                  }`}
              >
                Study Global

                <LuChevronDown
                  size={17}
                  className={`transition-transform duration-300 ${countryOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {countryOpen && <CountriesMenu />}
            </div>

            {/* ================= PR GLOBAL ================= */}

            <div
              className="relative py-7"
              onMouseEnter={() => setPrOpen(true)}
              onMouseLeave={() => setPrOpen(false)}
            >
              <button
                type="button"
                aria-expanded={prOpen}
                className={`flex items-center gap-1 font-semibold transition-colors ${prOpen
                    ? "text-blue-900"
                    : "text-gray-700 hover:text-blue-900"
                  }`}
              >
                PR Global

                <LuChevronDown
                  size={17}
                  className={`transition-transform duration-300 ${prOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {prOpen && <CountriesPRGlobal />}
            </div>

            {/* ================= VISA GLOBAL ================= */}

            <div
              className="relative py-7"
              onMouseEnter={() => setVisaOpen(true)}
              onMouseLeave={() => setVisaOpen(false)}
            >
              <button
                type="button"
                aria-expanded={visaOpen}
                className={`flex items-center gap-1 font-semibold transition-colors ${visaOpen
                    ? "text-blue-900"
                    : "text-gray-700 hover:text-blue-900"
                  }`}
              >
                Visa Global

                <LuChevronDown
                  size={17}
                  className={`transition-transform duration-300 ${visaOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {visaOpen && <CountriesVisaGlobal />}
            </div>

            {/* ================= ABOUT ================= */}

            <Link
              href="#"
              className="font-semibold text-gray-700 transition-colors hover:text-blue-900"
            >
              About
            </Link>
          </nav>

          {/* =================================================
              DESKTOP ACTION BUTTONS
          ================================================= */}

          <div className="hidden items-center gap-4 md:flex">
            <button
              type="button"
              className="px-4 py-2 font-semibold text-gray-700 transition-colors hover:text-blue-900"
            >
              Log in
            </button>

            <button
              type="button"
              className="rounded-full bg-blue-900 px-7 py-2.5 font-bold text-white shadow-lg shadow-purple-200 transition-all hover:bg-red-600 active:scale-95"
            >
              Sign up
            </button>
          </div>

          {/* =================================================
              MOBILE HAMBURGER
          ================================================= */}

          <button
            type="button"
            onClick={() => {
              closeAllDesktopMenus();
              setMobileOpen(true);
            }}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            className="
              flex h-11 w-11
              items-center justify-center
              rounded-xl
              border border-gray-200
              bg-white
              text-gray-800
              shadow-sm
              transition-all
              active:scale-95
              md:hidden
            "
          >
            <LuMenu size={25} />
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE OVERLAY
      ===================================================== */}

      <div
        className={`
          fixed inset-0 z-[110] bg-black/40
          backdrop-blur-[2px]
          transition-opacity duration-300
          md:hidden
          ${mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
          }
        `}
        onClick={closeMobileDrawer}
        aria-hidden="true"
      />

      {/* =====================================================
          MOBILE DRAWER
      ===================================================== */}

      <aside
        className={`
          fixed right-0 top-0 z-[120]
          flex h-[100dvh]
          w-[min(88vw,390px)]
          flex-col
          bg-white
          shadow-2xl
          transition-transform
          duration-300
          ease-[cubic-bezier(0.22,1,0.36,1)]
          md:hidden
          ${mobileOpen
            ? "translate-x-0"
            : "translate-x-full"
          }
        `}
        aria-hidden={!mobileOpen}
      >

        {/* =================================================
            DRAWER HEADER
        ================================================= */}

        <div className="flex h-20 shrink-0 items-center justify-between border-b border-gray-100 px-5">
          <Link
            href="/"
            onClick={closeMobileDrawer}
            className="block"
          >
            <Image
              src={Logo}
              width={150}
              height={55}
              alt="Logo"
              className="h-auto w-[135px]"
            />
          </Link>

          <button
            type="button"
            onClick={closeMobileDrawer}
            aria-label="Close navigation menu"
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-full
              bg-gray-100
              text-gray-700
              transition-all
              hover:bg-gray-200
              active:scale-95
            "
          >
            <LuX size={21} />
          </button>
        </div>

        {/* =================================================
            DRAWER CONTENT
        ================================================= */}

        <div className="relative flex-1 overflow-hidden">

          {/* =================================================
              MAIN MOBILE MENU
          ================================================= */}

          <div
            className={`
              absolute inset-0
              overflow-y-auto
              px-4 py-5
              transition-transform
              duration-300
              ${mobileMenu
                ? "-translate-x-full"
                : "translate-x-0"
              }
            `}
          >

            {/* MENU LABEL */}

            <div className="mb-4 px-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                Navigation
              </p>
            </div>

            <div className="space-y-1">

              {/* COURSES */}

              <button
                type="button"
                onClick={() => openMobileMenu("courses")}
                className="
                  flex w-full
                  items-center justify-between
                  rounded-xl
                  px-3 py-4
                  text-left
                  font-semibold
                  text-gray-800
                  transition-colors
                  hover:bg-gray-50
                  active:bg-gray-100
                "
              >
                <span>Courses</span>

                <LuChevronRight
                  size={19}
                  className="text-gray-400"
                />
              </button>

              {/* STUDY GLOBAL */}

              <button
                type="button"
                onClick={() => openMobileMenu("study")}
                className="
                  flex w-full
                  items-center justify-between
                  rounded-xl
                  px-3 py-4
                  text-left
                  font-semibold
                  text-gray-800
                  transition-colors
                  hover:bg-gray-50
                  active:bg-gray-100
                "
              >
                <span>Study Global</span>

                <LuChevronRight
                  size={19}
                  className="text-gray-400"
                />
              </button>

              {/* PR GLOBAL */}

              <button
                type="button"
                onClick={() => openMobileMenu("pr")}
                className="
                  flex w-full
                  items-center justify-between
                  rounded-xl
                  px-3 py-4
                  text-left
                  font-semibold
                  text-gray-800
                  transition-colors
                  hover:bg-gray-50
                  active:bg-gray-100
                "
              >
                <span>PR Global</span>

                <LuChevronRight
                  size={19}
                  className="text-gray-400"
                />
              </button>

              {/* VISA GLOBAL */}

              <button
                type="button"
                onClick={() => openMobileMenu("visa")}
                className="
                  flex w-full
                  items-center justify-between
                  rounded-xl
                  px-3 py-4
                  text-left
                  font-semibold
                  text-gray-800
                  transition-colors
                  hover:bg-gray-50
                  active:bg-gray-100
                "
              >
                <span>Visa Global</span>

                <LuChevronRight
                  size={19}
                  className="text-gray-400"
                />
              </button>

              {/* DIVIDER */}

              <div className="my-3 h-px bg-gray-100" />

              {/* ABOUT */}

              <Link
                href="#"
                onClick={closeMobileDrawer}
                className="
                  flex w-full
                  items-center justify-between
                  rounded-xl
                  px-3 py-4
                  font-semibold
                  text-gray-800
                  transition-colors
                  hover:bg-gray-50
                "
              >
                About

                <LuChevronRight
                  size={19}
                  className="text-gray-400"
                />
              </Link>
            </div>

            {/* =================================================
                MOBILE ACTIONS
            ================================================= */}

            <div className="mt-7 border-t border-gray-100 pt-6">

              <button
                type="button"
                onClick={closeMobileDrawer}
                className="
                  flex w-full
                  items-center justify-center
                  rounded-xl
                  border border-gray-200
                  px-5 py-3.5
                  font-semibold
                  text-gray-700
                  transition-all
                  hover:border-blue-900
                  hover:text-blue-900
                "
              >
                Log in
              </button>

              <button
                type="button"
                onClick={closeMobileDrawer}
                className="
                  mt-3
                  flex w-full
                  items-center justify-center
                  rounded-xl
                  bg-blue-900
                  px-5 py-3.5
                  font-bold
                  text-white
                  shadow-lg
                  shadow-blue-900/20
                  transition-all
                  hover:bg-red-600
                  active:scale-[0.98]
                "
              >
                Sign up
              </button>
            </div>

            {/* SMALL FOOTER TEXT */}

            <div className="mt-8 px-2 pb-6">
              <p className="text-xs leading-5 text-gray-400">
                Explore courses, study destinations,
                PR and visa opportunities.
              </p>
            </div>
          </div>

          {/* =================================================
              COURSES SUB MENU
          ================================================= */}

          <div
            className={`
              absolute inset-0
              overflow-y-auto
              bg-white
              transition-transform
              duration-300
              ${mobileMenu === "courses"
                ? "translate-x-0"
                : "translate-x-full"
              }
            `}
          >
            <div className="sticky top-0 z-10 flex items-center gap-3 border-b border-gray-100 bg-white px-4 py-4">
              <button
                type="button"
                onClick={closeMobileMenu}
                className="
                  flex h-9 w-9
                  items-center justify-center
                  rounded-full
                  bg-gray-100
                  text-gray-700
                "
              >
                <LuChevronRight
                  size={19}
                  className="rotate-180"
                />
              </button>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Explore
                </p>

                <h2 className="text-base font-bold text-gray-900">
                  Courses
                </h2>
              </div>
            </div>

            <div className="px-4 py-5">
              <CoursesMenu
                onClose={closeMobileDrawer}
              />
            </div>
          </div>

          {/* =================================================
              STUDY GLOBAL SUB MENU
          ================================================= */}

          <div
            className={`
              absolute inset-0
              overflow-y-auto
              bg-white
              transition-transform
              duration-300
              ${mobileMenu === "study"
                ? "translate-x-0"
                : "translate-x-full"
              }
            `}
          >
            <div className="sticky top-0 z-10 flex items-center gap-3 border-b border-gray-100 bg-white px-4 py-4">
              <button
                type="button"
                onClick={closeMobileMenu}
                className="
                  flex h-9 w-9
                  items-center justify-center
                  rounded-full
                  bg-gray-100
                  text-gray-700
                "
              >
                <LuChevronRight
                  size={19}
                  className="rotate-180"
                />
              </button>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Explore
                </p>

                <h2 className="text-base font-bold text-gray-900">
                  Study Global
                </h2>
              </div>
            </div>

            <div className="px-4 py-5">
              <CountriesMenu
                onClose={closeMobileDrawer}
              />
            </div>
          </div>

          {/* =================================================
              PR GLOBAL SUB MENU
          ================================================= */}

          <div
            className={`
              absolute inset-0
              overflow-y-auto
              bg-white
              transition-transform
              duration-300
              ${mobileMenu === "pr"
                ? "translate-x-0"
                : "translate-x-full"
              }
            `}
          >
            <div className="sticky top-0 z-10 flex items-center gap-3 border-b border-gray-100 bg-white px-4 py-4">
              <button
                type="button"
                onClick={closeMobileMenu}
                className="
                  flex h-9 w-9
                  items-center justify-center
                  rounded-full
                  bg-gray-100
                  text-gray-700
                "
              >
                <LuChevronRight
                  size={19}
                  className="rotate-180"
                />
              </button>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Explore
                </p>

                <h2 className="text-base font-bold text-gray-900">
                  PR Global
                </h2>
              </div>
            </div>

            <div className="px-4 py-5">
              <CountriesPRGlobal
                onClose={closeMobileDrawer}
              />
            </div>
          </div>

          {/* =================================================
              VISA GLOBAL SUB MENU
          ================================================= */}

          <div
            className={`
              absolute inset-0
              overflow-y-auto
              bg-white
              transition-transform
              duration-300
              ${mobileMenu === "visa"
                ? "translate-x-0"
                : "translate-x-full"
              }
            `}
          >
            <div className="sticky top-0 z-10 flex items-center gap-3 border-b border-gray-100 bg-white px-4 py-4">
              <button
                type="button"
                onClick={closeMobileMenu}
                className="
                  flex h-9 w-9
                  items-center justify-center
                  rounded-full
                  bg-gray-100
                  text-gray-700
                "
              >
                <LuChevronRight
                  size={19}
                  className="rotate-180"
                />
              </button>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Explore
                </p>

                <h2 className="text-base font-bold text-gray-900">
                  Visa Global
                </h2>
              </div>
            </div>

            <div className="px-4 py-5">
              <CountriesVisaGlobal
                onClose={closeMobileDrawer}
              />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}