"use client";

import { useState } from "react";
import AustraliaVisaChecker from "./_components/AustraliaVisaChecker";
import AustraliaVisaFaq from "./_components/AustraliaVisaFaq";
import AustraliaVisaModal from "./_components/AustraliaVisaModal";

export default function AustraliaVisaClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Australia Visa Assessment");

  const openModal = (title = "Australia Visa Application") => {
    setModalTitle(title);
    setModalOpen(true);
  };

  return (
    <main className="p-3 lg:p-14 min-h-screen bg-white text-slate-900 selection:bg-[#E61C24] selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden ">
        <div className="">
          <div className="text-center">
            <span className="inline-block bg-[#0B4FD8]/10 text-[#0B4FD8] font-bold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
              Australian Migration Department Compliance
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Australia Visa Global <br />
              <span className="text-[#0B4FD8]">Study, Work</span> &{" "}
              <span className="text-[#E61C24]">Visitor Visa.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              Fast, transparent filing for Subclass 500 Student Visas,
              Post-Study Work Streams (485), Employer Sponsorship (482/400), and
              Subclass 600 Visitor Visas with expert documentation audit.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openModal("Hero Australia Visa Button")}
                className="bg-[#E61C24] hover:bg-[#c9141b] text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-red-500/20 transition hover:-translate-y-0.5"
              >
                Book Free Profile Review →
              </button>
              <a
                href="#visa-checker"
                className="bg-[#0B4FD8] hover:bg-[#093db0] text-white px-7 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/20 transition"
              >
                Check Visa Readiness
              </a>
              <a
                href="tel:+918608608668"
                className="inline-flex items-center gap-2 border-2 border-slate-200 hover:border-[#0B4FD8] bg-white px-6 py-4 rounded-xl font-semibold text-slate-800 transition"
              >
                📞 +91 8608608668
              </a>
            </div>

            {/* Quick Badges */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
              {[
                {
                  title: "48 Hrs / Fortnight",
                  desc: "Work rights while studying",
                },
                {
                  title: "Up to 3-5 Years",
                  desc: "Post-Study 485 work permit",
                },
                {
                  title: "GS Compliance",
                  desc: "Solid Genuine Student drafting",
                },
                {
                  title: "Fast Lodgement",
                  desc: "Direct ImmiAccount submission",
                },
              ].map((badge, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm"
                >
                  <div className="text-xl font-extrabold text-[#0B4FD8]">
                    {badge.title}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {badge.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE AUSTRALIA VISA CATEGORIES */}
      <section className="mt-14">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Australian Visa Subclasses We Support
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Select the visa subclass that matches your travel, education, or
            employment pathway.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {[
            {
              subclass: "Subclass 500",
              title: "Student Visa",
              tag: "Study & Work",
              badgeColor: "bg-blue-50 text-[#0B4FD8]",
              details: [
                "Admission in CRICOS registered colleges & universities",
                "Confirmation of Enrolment (CoE) required",
                "48 hours per fortnight work allowance during terms",
                "Includes OSHC (Overseas Student Health Cover)",
              ],
              time: "4 - 8 Weeks",
            },
            {
              subclass: "Subclass 485",
              title: "Temporary Graduate",
              tag: "Post-Study Work",
              badgeColor: "bg-emerald-50 text-emerald-700",
              details: [
                "For international graduates of Australian institutions",
                "Post-Higher Education & Post-Vocational work streams",
                "Full unrestricted full-time work rights in Australia",
                "Builds Australian work experience to claim PR points",
              ],
              time: "6 - 12 Weeks",
            },
            {
              subclass: "Subclass 600",
              title: "Visitor / Tourist Visa",
              tag: "Travel & Business",
              badgeColor: "bg-amber-50 text-amber-700",
              details: [
                "Stay for 3, 6, or 12 months for holiday or business visit",
                "Single or multiple entry options based on profile",
                "Requires strong proof of funds and genuine intent to return",
                "Parents of citizens/PRs can get extended stay options",
              ],
              time: "2 - 5 Weeks",
            },
            {
              subclass: "Subclass 482 / 400",
              title: "Work / TSS Visa",
              tag: "Employer Sponsored",
              badgeColor: "bg-red-50 text-[#E61C24]",
              details: [
                "For skilled workers sponsored by an Australian employer",
                "Requires positive skills match and nomination approval",
                "Direct employer-sponsored pathway toward PR (Subclass 186)",
                "Full family inclusion with work rights for spouse",
              ],
              time: "8 - 14 Weeks",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 hover:border-[#0B4FD8] rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div>
                <span
                  className={`text-[11px] font-bold px-3 py-1 rounded-full ${item.badgeColor}`}
                >
                  {item.tag}
                </span>
                <span className="block text-xs font-bold text-slate-400 mt-2">
                  {item.subclass}
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-1">
                  {item.title}
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-600 mt-4">
                  {item.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#0B4FD8] font-bold">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  ⏱️ {item.time}
                </span>
                <button
                  onClick={() =>
                    openModal(`Apply for ${item.subclass} - ${item.title}`)
                  }
                  className="text-xs font-bold text-[#0B4FD8] hover:text-[#E61C24] transition-colors"
                >
                  Start Filing →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INTERACTIVE ELIGIBILITY CHECKER */}
      <section
        id="visa-checker"
        className="py-20 bg-slate-50 border-y border-slate-200"
      >
        <AustraliaVisaChecker onOpenModal={openModal} />
      </section>

      {/* 4. STEP BY STEP IMMIGRATION FILING */}
      <section className="mt-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Our 4-Stage Australia Visa Filing Method
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Meticulous file preparation to satisfy Department of Home Affairs
            case officers.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "CoE / Purpose Audit",
              desc: "Verifying your offer letter, CoE, invitation, or nomination sponsorship to ensure strict legislative compliance.",
            },
            {
              step: "02",
              title: "GS Statement & SOP",
              desc: "Writing a tailored Genuine Student (GS) statement addressing career objectives, economic value, and ties to home country.",
            },
            {
              step: "03",
              title: "Financials & Health",
              desc: "Auditing bank statements, loan sanctions, OSHC insurance coverage, and scheduling HAP ID medical appointments.",
            },
            {
              step: "04",
              title: "ImmiAccount Lodgement",
              desc: "Direct digital filing with Home Affairs, biometric enrollment assistance at VFS, and tracking until visa grant notification.",
            },
          ].map((st, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative"
            >
              <span className="text-4xl font-black text-[#0B4FD8]/15">
                {st.step}
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-2 mb-2">
                {st.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FAQS ACCORDION */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <AustraliaVisaFaq />
      </section>

      {/* MODAL BRIDGE */}
      <AustraliaVisaModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        leadPurpose={modalTitle}
      />
    </main>
  );
}
