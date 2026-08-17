import React from "react";
import RegistrationForm from "./_components/RegistrationForm";
import { FaCheckCircle, FaUserMd, FaGlobe } from "react-icons/fa";
// import CountryCard from "./_components/CountryCard";

const Page = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-50 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 ">
          {/* Left Column: Typography & Benefits */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-600 font-bold text-sm tracking-wide uppercase">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
              </span>
              Admissions Open 2026
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-950 leading-[1.1] tracking-tight">
              Start Your <span className="text-red-600">Abroad Education</span>{" "}
              Journey Today.
            </h1>

            <p className="text-lg text-gray-600 font-medium leading-relaxed max-w-lg">
              Register now to get free expert counseling. We guide you through
              college selection, documentation, and securing your Abroad
              Education seat.
            </p>

            <div className="space-y-5 pt-4">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                  <FaCheckCircle className="w-6 h-6" />
                </div>
                <p className="text-lg font-bold text-gray-800">
                  100% NMC Approved Colleges
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                  <FaUserMd className="w-6 h-6" />
                </div>
                <p className="text-lg font-bold text-gray-800">
                  Expert Admission Guidance
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                  <FaGlobe className="w-6 h-6" />
                </div>
                <p className="text-lg font-bold text-gray-800">
                  Top Universities Worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="relative w-full max-w-md mx-auto lg:ml-auto mt-6 lg:mt-0">
            {/* Decorative background blob */}
            {/* <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-blue-900 opacity-20 rounded-[2.5rem] blur-xl"></div> */}
            <RegistrationForm />
          </div>
        </div>
      </div>
      {/* <CountryCard/> */}
    </>
  );
};

export default Page;
