import React from "react";
import Link from "next/link";
import { LuArrowRight, LuCalculator } from "react-icons/lu";

const prCountries = [
  {
    name: "Canada PR",
    subtext: "Express Entry & PNP Eligibility",
    code: "CA",
    flag: "🇨🇦",
    tag: "High Success Rate",
    href: "#", // Baad me /calculator/canada ya relevant link daal sakte ho
  },
  {
    name: "Australia PR",
    subtext: "Subclass 189, 190 & 491 Points",
    code: "AU",
    flag: "🇦🇺",
    tag: "Direct PR Pathway",
    href: "#", // Baad me /calculator/australia
  },
  {
    name: "Germany PR",
    subtext: "EU Blue Card & Opportunity Card",
    code: "DE",
    flag: "🇩🇪",
    tag: "Chancenkarte Points",
    href: "#", // Baad me /calculator/germany
  },
];

const Page = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {prCountries.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="group relative flex flex-col justify-between p-6 bg-white rounded-2xl border border-slate-200 hover:border-[#0B4FD8] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            {/* Top Brand Accent Border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#0B4FD8] to-[#E61C24] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div>
              {/* Header: Flag & Tag */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl p-2 bg-slate-50 rounded-xl border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                  {item.flag}
                </span>
                <span className="text-[11px] font-semibold text-[#0B4FD8] bg-[#0B4FD8]/10 px-2.5 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0B4FD8] transition-colors">
                {item.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                {item.subtext}
              </p>
            </div>

            {/* Bottom Action Strip */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 group-hover:text-[#E61C24] transition-colors">
                <LuCalculator className="w-4 h-4 text-[#0B4FD8]" />
                Check Points Score
              </span>
              <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#E61C24] flex items-center justify-center transition-colors">
                <LuArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-white transition-colors" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;