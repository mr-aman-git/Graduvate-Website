"use client";

import { useState } from "react";
import EuropeVisaChecker from "./_components/EuropeVisaChecker";
import EuropeVisaFaq from "./_components/EuropeVisaFaq";
import EuropeVisaModal from "./_components/EuropeVisaModal";

export default function EuropeVisaClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Europe Visa Assessment");

  const openModal = (title = "Europe Visa Application") => {
    setModalTitle(title);
    setModalOpen(true);
  };

  return (
    <main className="text-slate-900 selection:bg-[#E61C24] selection:text-white p-4 lg:p-14">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-slate-100">
        <div className="">
          <div className="text-center">
            <span className="inline-block bg-[#0B4FD8]/10 text-[#0B4FD8] font-bold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
              Schengen & National D-Visa Legal Advisory
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Europe Visa Global <br />
              <span className="text-[#0B4FD8]">Schengen, Study</span> &{" "}
              <span className="text-[#E61C24]">Work Visa.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              Fast, transparent filing for 29 Schengen states, Germany National
              Student Visas (Type D), EU Blue Cards, and Opportunity Cards
              (Chancenkarte) with thorough documentation audit.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openModal("Hero Europe Visa Button")}
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

            {/* Quick Metrics */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
              {[
                {
                  title: "29 Countries",
                  desc: "One visa, borderless Schengen travel",
                },
                {
                  title: "Blocked Account",
                  desc: "Sperrkonto setup assistance",
                },
                {
                  title: "Chancenkarte",
                  desc: "1-year German job search visa",
                },
                {
                  title: "96% Approval",
                  desc: "Comprehensive document verification",
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

      {/* 2. CORE EUROPE VISA CATEGORIES */}
      <section className="pt-18">
        <div className="text-center mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            European Visa Categories We Support
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Select the visa stream tailored to your travel, university
            admission, or career move.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              subclass: "Type C Visa",
              title: "Schengen Tourist & Business",
              tag: "29 European Nations",
              badgeColor: "bg-blue-50 text-[#0B4FD8]",
              details: [
                "Up to 90 days stay within any 180-day window",
                "Single, double, or multi-entry options",
                "Full cover travel insurance & flight itinerary compliance",
                "Includes France, Germany, Switzerland, Italy, Spain & more",
              ],
              time: "2 - 4 Weeks",
            },
            {
              subclass: "National Type D",
              title: "Europe Student Visa",
              tag: "University & College",
              badgeColor: "bg-emerald-50 text-emerald-700",
              details: [
                "For bachelor's, master's, or PhD programs in Europe",
                "Germany, France, Ireland & Netherlands pathways",
                "Blocked account (Sperrkonto) & APS certification support",
                "Part-time student work rights (20 hrs/week)",
              ],
              time: "4 - 8 Weeks",
            },
            {
              subclass: "Work Authorization",
              title: "EU Blue Card",
              tag: "Skilled Specialists",
              badgeColor: "bg-red-50 text-[#E61C24]",
              details: [
                "For degree holders with a qualifying European job offer",
                "Fastest route to German permanent residency (21-27 months)",
                "Full work rights for accompanying spouse from Day 1",
                "Easy relocation to other EU states after 12 months",
              ],
              time: "6 - 12 Weeks",
            },
            {
              subclass: "Job Seeker Visa",
              title: "Germany Chancenkarte",
              tag: "Opportunity Card",
              badgeColor: "bg-amber-50 text-amber-700",
              details: [
                "Points-based entry into Germany for up to 1 year",
                "Search for skilled jobs with part-time work rights",
                "Requires minimum 6 points on education, age & language",
                "Direct transition to EU Blue Card upon employment offer",
              ],
              time: "4 - 8 Weeks",
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
                  onClick={() => openModal(`Apply for ${item.title}`)}
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
      <section id="visa-checker" className="py-20 border-y border-slate-200">
        <EuropeVisaChecker onOpenModal={openModal} />
      </section>

      {/* 4. STEP BY STEP FILING METHOD */}
      <section className="mt-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Our 4-Stage Europe Visa Lodgement Process
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Eliminating refusal risks through structured documentation and
            Embassy-compliant cover letters.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Jurisdiction & Category",
              desc: "Identifying the main country of stay (first entry vs primary destination) and matching the right category (Type C vs Type D).",
            },
            {
              step: "02",
              title: "Financials & Insurance",
              desc: "Verifying 6-month bank statements, sponsoring affidavits, €30,000+ Schengen travel insurance, or Sperrkonto blocked account.",
            },
            {
              step: "03",
              title: "Cover Letter & Dossier",
              desc: "Drafting a solid, day-by-day itinerary or Statement of Purpose, alongside hotel bookings and confirmed round-trip flight reservations.",
            },
            {
              step: "04",
              title: "VFS Appointment & Filing",
              desc: "Assisting with VFS / TLScontact slot bookings, biometric appointments, and embassy interview coaching where required.",
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
      <section className="py-20 border-t border-slate-200">
        <EuropeVisaFaq />
      </section>

      {/* MODAL BRIDGE */}
      <EuropeVisaModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        leadPurpose={modalTitle}
      />
    </main>
  );
}
