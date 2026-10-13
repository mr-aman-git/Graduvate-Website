"use client";

import { useState } from "react";
import AustraliaPointsCalculator from "./_components/AustraliaPointsCalculator";
import AusFaqAccordion from "./_components/AusFaqAccordion";
import AusLeadModal from "./_components/AusLeadModal";

export default function AustraliaPRClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Australia PR Assessment");

  const handleOpenModal = (title = "Free Assessment") => {
    setModalTitle(title);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-[#E61C24] selection:text-white lg:p-14 p-3">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mx-auto">
            <span className="inline-block bg-[#0B4FD8]/10 text-[#0B4FD8] font-bold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
              Direct General Skilled Migration (GSM)
            </span>
            <h1 className="text-3xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              Live, Work & Settle in Australia <br />
              <span className="text-[#0B4FD8]">Permanent Residency</span>{" "}
              <span className="text-[#E61C24]">Pathway.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              No sponsored job required for skilled independent categories.
              Calculate your points, verify your ANZSCO skills assessment, and
              file your Expression of Interest (EOI) with verified immigration
              advisors.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => handleOpenModal("Hero Assessment Request")}
                className="bg-[#E61C24] hover:bg-[#c9141b] text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-red-500/20 transition hover:-translate-y-0.5"
              >
                Book Free Profile Review →
              </button>
              <a
                href="#points-calculator"
                className="bg-[#0B4FD8] hover:bg-[#093db0] text-white px-7 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/20 transition"
              >
                Calculate Points Score
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
                { title: "65 Points", desc: "Statutory eligibility mark" },
                { title: "Direct PR", desc: "Subclass 189 & 190 streams" },
                {
                  title: "Medicare Perks",
                  desc: "Universal healthcare access",
                },
                {
                  title: "Citizenship in 4 Yrs",
                  desc: "Passport upon eligibility",
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

      {/* 2. THE 3 GENERAL SKILLED MIGRATION VISAS */}
      <section className="mt-16">
        <div className="text-center mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            3 Core Australia Skilled Migration Pathways
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Every visa has distinct location flexibilities, point additions, and
            state nomination criteria.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              subclass: "Subclass 189",
              title: "Skilled Independent Visa",
              tag: "Direct Permanent Resident",
              badgeColor: "bg-blue-50 text-[#0B4FD8]",
              details: [
                "Live & work anywhere in Australia without state restriction",
                "No family or state sponsorship required",
                "Requires positive skills assessment on MLTSSL list",
                "Points driven: highest scores receive direct invitations",
              ],
              time: "6 - 12 Months",
            },
            {
              subclass: "Subclass 190",
              title: "Skilled Nominated Visa",
              tag: "+5 State Bonus Points",
              badgeColor: "bg-red-50 text-[#E61C24]",
              details: [
                "Direct PR status from Day 1 of landing",
                "Requires nomination by an Australian State/Territory",
                "Adds +5 bonus points toward your SkillSelect score",
                "2-year commitment to live and work in the nominated state",
              ],
              time: "7 - 14 Months",
            },
            {
              subclass: "Subclass 491",
              title: "Skilled Work Regional (Provisional)",
              tag: "+15 Regional Bonus Points",
              badgeColor: "bg-amber-50 text-amber-700",
              details: [
                "5-year provisional visa with defined PR conversion (Subclass 191)",
                "State or eligible relative in regional area must sponsor",
                "Adds +15 massive bonus points to your profile",
                "Live and work in regional locations (e.g., Adelaide, Perth, Gold Coast)",
              ],
              time: "9 - 18 Months",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 hover:border-[#0B4FD8] rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${item.badgeColor}`}
                >
                  {item.tag}
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-4">
                  {item.subclass}
                </h3>
                <p className="text-sm font-semibold text-slate-600 mb-6">
                  {item.title}
                </p>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                  {item.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#0B4FD8] font-bold">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  ⏱️ {item.time}
                </span>
                <button
                  onClick={() => handleOpenModal(`Explore ${item.subclass}`)}
                  className="text-xs font-bold text-[#0B4FD8] hover:text-[#E61C24] transition-colors"
                >
                  Verify Eligibility →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INTERACTIVE POINTS ENGINE */}
      <section
        id="points-calculator"
        className="py-20 bg-slate-50 border-y border-slate-200"
      >
        <AustraliaPointsCalculator onOpenModal={handleOpenModal} />
      </section>

      {/* 4. STEP-BY-STEP PROCESS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            How Graduvate Secures Your Australia PR
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            From initial skills assessment authority filing to final visa
            stamping.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Skills Assessment",
              desc: "We file your profile with the authorized assessing body (ACS, VETASSESS, Engineers Australia, ANMAC) matching your ANZSCO code.",
            },
            {
              step: "02",
              title: "Language & PTE",
              desc: "Targeting Superior English (PTE 79+ / IELTS 8.0) to lock the maximum 20 points toward your SkillSelect score.",
            },
            {
              step: "03",
              title: "EOI & State Nomination",
              desc: "Filing your Expression of Interest on SkillSelect and applying for state sponsorship matrixes (NSW, VIC, WA, QLD, SA).",
            },
            {
              step: "04",
              title: "Visa Grant & Landing",
              desc: "Upon Invitation to Apply (ITA), we prepare police clearances, medicals, and lodge final visa papers within 60 days.",
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
        <AusFaqAccordion />
      </section>

      {/* 6. BOTTOM CONVERSION CTA */}
      
      {/* <section className="py-20 bg-linear-to-br from-slate-950 via-[#0B4FD8] to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            Ready to Begin Your Australian Migration Journey?
          </h2>
          <p className="mt-4 text-blue-100 text-sm sm:text-base max-w-xl mx-auto">
            Get an honest review of your ANZSCO occupation availability, points
            breakdown, and realistic timeline from our specialists.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => handleOpenModal("Bottom CTA Assessment")}
              className="bg-[#E61C24] hover:bg-[#c9141b] text-white px-8 py-4 rounded-xl font-bold shadow-xl transition hover:scale-105"
            >
              Request Free Evaluation →
            </button>
            <a
              href="https://wa.me/918608608668?text=Hi%20Graduvate,%20I%20want%20to%20evaluate%20my%20Australia%20PR%20profile"
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold shadow-xl transition"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section> */}

      {/* MODAL BRIDGE */}
      <AusLeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        leadPurpose={modalTitle}
      />
    </main>
  );
}
