"use client";

import { useState } from "react";
import UkVisaChecker from "./_components/UkVisaChecker";
import UkVisaFaq from "./_components/UkVisaFaq";
import UkVisaModal from "./_components/UkVisaModal";

export default function UkVisaClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("UK Visa Assessment");

  const openModal = (title = "UK Visa Application") => {
    setModalTitle(title);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-[#E61C24] selection:text-white p-4 lg:p-14">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-slate-100">
        <div className="">
          <div className="text-center">
            <span className="inline-block bg-[#0B4FD8]/10 text-[#0B4FD8] font-bold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
              UKVI Points-Based Immigration Guidance
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              United Kingdom Visa Global <br />
              <span className="text-[#0B4FD8]">Study, Work</span> &{" "}
              <span className="text-[#E61C24]">Visitor Visa.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              Step-by-step professional legal filing for UK Student Visas,
              2-Year Graduate Route Work Permits, Skilled Worker Visas, and
              Standard Visitor Visas with pre-submission CAS and financial
              audit.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openModal("Hero UK Visa Button")}
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
                  title: "2-Year PSW",
                  desc: "Graduate route open work permit",
                },
                {
                  title: "20 Hrs / Week",
                  desc: "Work allowed during university terms",
                },
                {
                  title: "28-Day Rule",
                  desc: "UKVI strict financial proof guidance",
                },
                {
                  title: "97% Approval",
                  desc: "Meticulous pre-CAS & SOP vetting",
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

      {/* 2. CORE UK VISA CATEGORIES */}
      <section className="mt-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            United Kingdom Visa Streams We Support
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Select the visa route best aligned with your higher studies,
            professional career, or tourism goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              subclass: "Student Route",
              title: "UK Student Visa",
              tag: "Degree & Masters",
              badgeColor: "bg-blue-50 text-[#0B4FD8]",
              details: [
                "Confirmation of Acceptance for Studies (CAS) from licensed sponsor",
                "Work up to 20 hours/week during active academic semesters",
                "Full-time working rights during official course vacations",
                "Includes NHS healthcare access via Immigration Health Surcharge (IHS)",
              ],
              time: "3 - 5 Weeks",
            },
            {
              subclass: "Post-Study Route",
              title: "Graduate Route Visa",
              tag: "2-Year Open Work",
              badgeColor: "bg-emerald-50 text-emerald-700",
              details: [
                "Unrestricted 2-year full-time open work permit (3 years for PhD)",
                "No minimum salary threshold or employer sponsorship needed",
                "Switch to a Skilled Worker Visa anytime an eligible offer is made",
                "Ideal springboard toward UK permanent settlement (ILR)",
              ],
              time: "4 - 8 Weeks",
            },
            {
              subclass: "Points-Based Work",
              title: "Skilled Worker Visa",
              tag: "Employer Sponsored",
              badgeColor: "bg-red-50 text-[#E61C24]",
              details: [
                "Requires a valid Certificate of Sponsorship (CoS) from a UK employer",
                "Role must be eligible under the eligible occupational codes",
                "Meet the appropriate minimum salary threshold",
                "Direct 5-year route to UK Indefinite Leave to Remain (ILR)",
              ],
              time: "3 - 8 Weeks",
            },
            {
              subclass: "Standard Visitor",
              title: "UK Tourist & Business Visa",
              tag: "6-Month Multi-Entry",
              badgeColor: "bg-amber-50 text-amber-700",
              details: [
                "Stay up to 6 months for holidays, family visits, or business meetings",
                "Options for 2, 5, or 10-year long-term multi-entry visas",
                "Requires robust proof of UK accommodation and funds",
                "Priority and Super Priority (24-hour decision) VFS services available",
              ],
              time: "2 - 4 Weeks",
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
      <section
        id="visa-checker"
        className="py-20 border-y border-slate-200"
      >
        <UkVisaChecker onOpenModal={openModal} />
      </section>

      {/* 4. STEP BY STEP UKVI FILING METHOD */}
      <section className="mt-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Our 4-Stage UK Visa Filing Method
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Eliminating refusal triggers through thorough 28-day financial
            monitoring and pre-CAS mock interview sessions.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "CAS / CoS Validation",
              desc: "Auditing course modules, CAS statements, sponsor licence validity, or visitor invitation letters before application initiation.",
            },
            {
              step: "02",
              title: "28-Day Financial Rule",
              desc: "Ensuring maintenance funds and living expenses remain untouched in your bank account for 28 consecutive days before fee submission.",
            },
            {
              step: "03",
              title: "TB Test & IHS Payment",
              desc: "Assisting with certified IOM/UKVI Tuberculosis testing appointments and computing correct Immigration Health Surcharge (IHS) fees.",
            },
            {
              step: "04",
              title: "VFS Biometrics & Grant",
              desc: "Uploading high-resolution document bundles to VFS Global, scheduling biometric appointments, and interview prep if requested.",
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
        <UkVisaFaq />
      </section>

      {/* MODAL BRIDGE */}
      <UkVisaModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        leadPurpose={modalTitle}
      />
    </main>
  );
}
