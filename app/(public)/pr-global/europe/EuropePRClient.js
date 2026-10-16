"use client";

import { useState } from "react";
import EuropeEligibilityChecker from "./_components/EuropeEligibilityChecker";
import EuropeFaqAccordion from "./_components/EuropeFaqAccordion";
import EuropeLeadModal from "./_components/EuropeLeadModal";

export default function EuropePRClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Europe PR Consultation");

  const handleOpenModal = (title = "Europe PR Evaluation") => {
    setModalTitle(title);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-[#E61C24] selection:text-white p-3 lg:p-14">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="">
          <div className="text-center ">
            <span className="inline-block bg-[#0B4FD8]/10 text-[#0B4FD8] font-bold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
              Schengen Settlement & EU Blue Card Program
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Live, Work & Settle Across the EU <br />
              <span className="text-[#0B4FD8]">European Permanent</span>{" "}
              <span className="text-[#E61C24]">Residency.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              Unlock visa-free travel across 29 Schengen states, premier social
              benefits, and fast-track permanent residency in Germany, France,
              the Netherlands, and Scandinavia.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => handleOpenModal("Hero Assessment CTA")}
                className="bg-[#E61C24] hover:bg-[#c9141b] text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-red-500/20 transition hover:-translate-y-0.5"
              >
                Book Free Profile Evaluation →
              </button>
              <a
                href="#eligibility-check"
                className="bg-[#0B4FD8] hover:bg-[#093db0] text-white px-7 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/20 transition"
              >
                Check EU Eligibility
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
                { title: "29 Countries", desc: "Visa-free Schengen freedom" },
                { title: "21-33 Months", desc: "Fast-track PR in Germany" },
                {
                  title: "Family Inclusive",
                  desc: "Immediate spouse work rights",
                },
                {
                  title: "Free Education",
                  desc: "Top tier public universities",
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

      {/* 2. CORE EUROPE PATHWAYS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            3 Leading Pathways to European Permanent Residency
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Whether through high-skilled employment, points-based job seeking,
            or residence permits, find your strongest legal route.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "EU Blue Card",
              country: "Pan-European (Germany, France, etc.)",
              tag: "Fastest Path to PR",
              badgeColor: "bg-blue-50 text-[#0B4FD8]",
              details: [
                "For university graduates with a qualifying job offer in the EU",
                "Fast-track PR eligibility in Germany within 21 to 27 months",
                "Unrestricted open work permit for your spouse from Day 1",
                "Facilitated intra-EU mobility to another EU state after 12 months",
              ],
              time: "21 - 33 Months to PR",
            },
            {
              title: "Germany Chancenkarte",
              country: "Opportunity Card (Job Seeker)",
              tag: "Points-Based Visa",
              badgeColor: "bg-red-50 text-[#E61C24]",
              details: [
                "Enter Germany for up to 1 year to search for skilled employment",
                "Requires min. 6 points based on degree, age, language & experience",
                "Work part-time (up to 20 hours/week) during your search period",
                "Converts into a full EU Blue Card upon securing a contract",
              ],
              time: "6 - 12 Months",
            },
            {
              title: "Permanent Settlement",
              country: "Niederlassungserlaubnis / Long-Term EU",
              tag: "Indefinite Residence",
              badgeColor: "bg-amber-50 text-amber-700",
              details: [
                "Unrestricted right to live, work, and launch businesses in the EU",
                "Full security of stay with no employer sponsorship tie",
                "Subsidized healthcare, social insurance, and child allowances",
                "Direct precursor to European Union passport citizenship",
              ],
              time: "3 - 5 Years",
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
                  {item.title}
                </h3>
                <p className="text-xs font-bold text-slate-500 mb-6 uppercase tracking-wider">
                  {item.country}
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
                  onClick={() => handleOpenModal(`Explore ${item.title}`)}
                  className="text-xs font-bold text-[#0B4FD8] hover:text-[#E61C24] transition-colors"
                >
                  Verify Roadmap →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INTERACTIVE ELIGIBILITY CHECKER */}
      <section
        id="eligibility-check"
        className="py-20 bg-slate-50 border-y border-slate-200"
      >
        <EuropeEligibilityChecker onOpenModal={handleOpenModal} />
      </section>

      {/* 4. STEP-BY-STEP PROCESS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Our 4-Step Road to European Permanent Residency
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            From degree recognition (ZAB / Anabin) to securing your permanent
            residence card.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Degree Recognition",
              desc: "We verify your university credentials via Anabin / ZAB (Germany) or corresponding European evaluation boards to ensure full equivalency.",
            },
            {
              step: "02",
              title: "Pathway Strategy",
              desc: "Shortlisting whether direct employer contracts, the EU Blue Card, or the Opportunity Card (Chancenkarte) suits your current background.",
            },
            {
              step: "03",
              title: "Embassy Filing",
              desc: "Complete documentation audit, declaration letters, blocked account / sponsorship compliance, and national visa interview preparation.",
            },
            {
              step: "04",
              title: "Landing & PR Conversion",
              desc: "Registration at the local Ausländerbehörde (Foreigners Authority), work permit stamping, and scheduled PR conversion upon reaching tenure.",
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
        <EuropeFaqAccordion />
      </section>

      {/* 6. BOTTOM CONVERSION CTA */}
      <section className="py-20 bg-linear-to-br from-slate-950 via-[#0B4FD8] to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            Ready to Build Your Career and Future in Europe?
          </h2>
          <p className="mt-4 text-blue-100 text-sm sm:text-base max-w-xl mx-auto">
            Schedule a personalized session with our European immigration
            specialists to map your credentials to in-demand EU roles and
            permanent residency.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => handleOpenModal("Bottom CTA Europe PR")}
              className="bg-[#E61C24] hover:bg-[#c9141b] text-white px-8 py-4 rounded-xl font-bold shadow-xl transition hover:scale-105"
            >
              Request Free Consultation →
            </button>   
            <a
              href="https://wa.me/918608608668?text=Hi%20Graduvate,%20I%20have%20an%20enquiry%20regarding%20Europe%20PR%20and%20EU%20Blue%20Card"
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold shadow-xl transition"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* MODAL BRIDGE */}
      <EuropeLeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        leadPurpose={modalTitle}
      />
    </main>
  );
}
