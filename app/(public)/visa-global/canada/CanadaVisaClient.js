"use client";

import { useState } from "react";
import CanadaVisaChecker from "./_components/CanadaVisaChecker";
import CanadaVisaFaq from "./_components/CanadaVisaFaq";
import CanadaVisaModal from "./_components/CanadaVisaModal";

export default function CanadaVisaClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Canada Visa Assessment");

  const openModal = (title = "Canada Visa Application") => {
    setModalTitle(title);
    setModalOpen(true);
  };

  return (
    <main className=" p-3 lg:p-14 bg-white text-slate-900 selection:bg-[#E61C24] selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="">
          <div className="text-center mx-auto">
            <span className="inline-block bg-[#0B4FD8]/10 text-[#0B4FD8] font-bold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
              CICC Regulated Temporary Visa Consulting
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Canada Visa Global <br />
              <span className="text-[#0B4FD8]">Study, Work</span> &{" "}
              <span className="text-[#E61C24]">Visitor Visa.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              Transparent, professional filing for student permits,
              LMIA/intra-company work permits, tourist visas, and super visas
              with licensed RCIC legal scrutiny.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openModal("Hero Free Visa Assessment")}
                className="bg-[#E61C24] hover:bg-[#c9141b] text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-red-500/20 transition hover:-translate-y-0.5"
              >
                Apply for Visa Guidance →
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
                { title: "Study to PR", desc: "PGWP eligible DLI programs" },
                { title: "Up to 10 Yrs", desc: "Multi-entry visitor visas" },
                {
                  title: "No Hidden Cost",
                  desc: "Clear flat-fee documentation",
                },
                { title: "95% Success", desc: "High IRCC approval accuracy" },
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

      {/* 2. CORE VISA PATHWAYS */}
      <section className="pt-14">
        <div className="text-center mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Canadian Visa Streams We Support
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Select the visa category matching your travel, career, or education
            goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Canada Study Permit",
              type: "International Education",
              tag: "Work While Studying",
              badgeColor: "bg-blue-50 text-[#0B4FD8]",
              details: [
                "Admission in authorized DLIs (Colleges & Universities)",
                "PAL (Provincial Attestation Letter) compliance",
                "Part-time off-campus work allowed during sessions",
                "Up to 3-year PGWP path after course completion",
              ],
              time: "6 - 10 Weeks",
            },
            {
              title: "Work Permit & LMIA",
              type: "Employment Authorization",
              tag: "Open / Employer-Specific",
              badgeColor: "bg-red-50 text-[#E61C24]",
              details: [
                "LMIA positive supported work authorizations",
                "Intra-Company Transfer (ICT) for executives",
                "Spousal Open Work Permits (SOWP) for eligible partners",
                "Direct Canadian work experience that boosts PR points",
              ],
              time: "8 - 16 Weeks",
            },
            {
              title: "Visitor / Tourist Visa",
              type: "Temporary Resident Visa (TRV)",
              tag: "Multi-Entry up to 10 Yrs",
              badgeColor: "bg-amber-50 text-amber-700",
              details: [
                "Stay up to 6 months per entry for tourism or business",
                "Valid up to passport validity (maximum 10 years)",
                "Strong documentation of ties and financial stability",
                "Fast-track processing for conferences and family visits",
              ],
              time: "3 - 6 Weeks",
            },
            {
              title: "Parents Super Visa",
              type: "Extended Family Reunion",
              tag: "Stay 5 Yrs at a Time",
              badgeColor: "bg-emerald-50 text-emerald-700",
              details: [
                "For parents and grandparents of Canadian PRs & citizens",
                "Stay up to 5 consecutive years without renewing status",
                "Multi-entry validity for up to 10 years",
                "Requires Canadian medical insurance compliance",
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
                <h3 className="text-xl font-black text-slate-900 mt-4">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mb-4">
                  {item.type}
                </p>
                <ul className="space-y-2.5 text-xs text-slate-600">
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
        className="py-20 bg-slate-50 border-y border-slate-200"
      >
        <CanadaVisaChecker onOpenModal={openModal} />
      </section>

      {/* 4. STEP BY STEP LEGAL FILING */}
      <section className="pt-14">
        <div className="text-center mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Our 4-Stage Canada Visa Filing Process
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Refusal prevention is our top priority. Every file is prepared and
            vetted meticulously.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Profile Audit",
              desc: "Deep review of your purpose of travel, financial backing, and previous immigration records to pick the right category.",
            },
            {
              step: "02",
              title: "Document Vetting",
              desc: "Drafting of SOP (Statement of Purpose), proof of funds arrangement, and job offer/acceptance verification.",
            },
            {
              step: "03",
              title: "IRCC Portal Filing",
              desc: "Direct submission through IRCC portal with accurate forms, authorized representation, and immediate biometric slip issuance.",
            },
            {
              step: "04",
              title: "Passport Stamping",
              desc: "Assisting you with the Original Passport Request (OPR), VFS appointment, and pre-departure briefings.",
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
        <CanadaVisaFaq />
      </section>

      {/* MODAL BRIDGE */}
      <CanadaVisaModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        leadPurpose={modalTitle}
      />
    </main>
  );
}
