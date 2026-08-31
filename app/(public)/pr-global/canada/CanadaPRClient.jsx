"use client";

import { useState } from "react";
import ReadinessChecker from "./_components/ReadinessChecker";
import FeeCalculator from "./_components/FeeCalculator";
import DocChecklist from "./_components/DocChecklist";
import FaqAccordion from "./_components/FaqAccordion";
import GoogleFormModal from "./_components/GoogleFormModal";

export default function CanadaPRClient() {
  const [formOpen, setFormOpen] = useState(false);
  const [formPurpose, setFormPurpose] = useState("PR Assessment");

  const openForm = (purpose = "General Inquiry") => {
    setFormPurpose(purpose);
    setFormOpen(true);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-[#E61C24] selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-linear-to-b from-[#0B4FD8]/5 via-white to-white py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <span className="inline-block bg-[#0B4FD8]/10 text-[#0B4FD8] font-bold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
              CICC Regulated Practice
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Permanent Residency in Canada,{" "}
              <span className="text-[#0B4FD8]">Done</span>{" "}
              <span className="text-[#E61C24]">Right.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed">
              Graduvate matches your profile to the strongest PR pathway, builds
              your application end-to-end, and stays with you until the day you
              land. 15+ years. Thousands of approvals.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openForm("Hero Assessment Button")}
                className="bg-[#E61C24] hover:bg-[#c9141b] text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-red-500/20 transition hover:-translate-y-0.5"
              >
                Book Free PR Assessment →
              </button>
              <a
                href="#readiness-check"
                className="bg-[#0B4FD8] hover:bg-[#093db0] text-white px-7 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/20 transition"
              >
                Check PR Score
              </a>
              <a
                href="tel:+918608608668"
                className="inline-flex items-center gap-2 border-2 border-slate-200 hover:border-[#0B4FD8] bg-white px-6 py-4 rounded-xl font-semibold text-slate-800 transition"
              >
                📞 +91 8608608668
              </a>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              Free 30-minute consultation. We assess your profile against every
              PR pathway — no obligation.
            </p>

            {/* Trust Strip */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-3 text-sm text-slate-700 font-medium">
              <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                🛡️ CICC Licensed RCIC
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                📊 95% Success Rate
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                💰 Flat-Fee Pricing
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                🏢 India & Canada Offices
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm col-span-2 md:col-span-1">
                ⭐ 4.9/5 Client Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PR READINESS CHECKER */}
      {/* <section
        id="readiness-check"
        className="py-20 bg-slate-50 border-b border-slate-200"
      >
        <ReadinessChecker
          onOpenForm={() => openForm("Readiness Assessment Result")}
        />
      </section> */}

      {/* 3. WHAT IS CANADA PR */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            What Is Canadian Permanent Residency?
          </h2>
          <p className="mt-4 text-lg">
            The legal right to live, work, and study anywhere in Canada
            indefinitely with direct access to public healthcare and education.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-green-200 bg-green-50/50 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-green-900 mb-4">
              What PR Lets You Do
            </h3>
            <ul className="space-y-3 text-slate-700 text-[18px]">
              <li>✅ Live and settle in any province or territory</li>
              <li>✅ Work for any employer or start your own enterprise</li>
              <li>
                ✅ Access publicly funded healthcare and free education for kids
              </li>
              <li>✅ Sponsor spouse, children, parents, and grandparents</li>
              <li>✅ Apply for Canadian Citizenship after 3 years</li>
              <li>✅ Travel internationally freely with a PR card</li>
            </ul>
          </div>
          <div className="border border-slate-200 bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              What PR Does NOT Give You
            </h3>
            <ul className="space-y-3 text-slate-600 text-[18px]">
              <li>❌ Right to vote in federal/provincial elections</li>
              <li>
                ❌ Canadian passport (eligible only after obtaining citizenship)
              </li>
              <li>
                ❌ Right to hold certain high-level security clearance positions
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. 6 MAIN PATHWAYS */}
      {/* <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              6 Pathways to Canadian PR
            </h2>
            <p className="mt-4 text-slate-100 text-lg">
              We evaluate every profile against all available streams to select
              your highest probability route.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Federal Skilled Worker (FSWP)",
                tag: "Skilled Professionals Outside Canada",
                req: [
                  "1 yr continuous skilled exp (NOC TEER 0/1/2/3)",
                  "CLB 7+ in English/French",
                  "ECA verified degree/diploma",
                  "67+ selection points",
                ],
                time: "~6 Months from ITA",
                fee: "CAD $1,365",
              },
              {
                title: "Canadian Experience Class (CEC)",
                tag: "Graduates & Workers in Canada",
                req: [
                  "1 yr Canadian skilled work exp in last 3 yrs",
                  "CLB 7 (TEER 0/1) or CLB 5 (TEER 2/3)",
                  "No settlement funds required",
                  "Plan to live outside QC",
                ],
                time: "~6 Months from ITA",
                fee: "CAD $1,365",
              },
              {
                title: "Provincial Nominee Program (PNP)",
                tag: "Moderate CRS / In-Demand Occupations",
                req: [
                  "Adds +600 points to CRS score",
                  "Job offer or high in-demand occupation",
                  "Streams: OINP, BC PNP, AAIP, SINP, MPNP",
                  "Provincial intent required",
                ],
                time: "8-18 Months",
                fee: "CAD $1,365 + Prov. fees",
              },
              {
                title: "Family Sponsorship",
                tag: "Spouses, Children & Parents",
                req: [
                  "Sponsor must be Citizen/PR (18+)",
                  "No CRS or English score needed",
                  "No Canadian work experience required",
                  "Signed support undertaking",
                ],
                time: "~12 Months",
                fee: "CAD $1,365 + RPRF",
              },
              {
                title: "Atlantic Immigration Program (AIP)",
                tag: "Workers in Atlantic Provinces",
                req: [
                  "Job offer from designated Atlantic employer",
                  "NB, NS, PEI, NL streams",
                  "CLB 4-5 language baseline",
                  "No LMIA required",
                ],
                time: "12-18 Months",
                fee: "CAD $1,365",
              },
              {
                title: "Start-Up Visa Program",
                tag: "Entrepreneurs & Founders",
                req: [
                  "Letter of support (VC / Angel / Incubator)",
                  "CLB 5+ language score",
                  "Adequate settlement funds",
                  "Qualifying business structure",
                ],
                time: "12-16 Months",
                fee: "CAD $1,365",
              },
            ].map((pathway, idx) => (
              <div
                key={idx}
                className="bg-slate-800 border border-slate-700 hover:border-[#0B4FD8] rounded-2xl p-6 flex flex-col justify-between transition"
              >
                <div>
                  <span className="text-xs font-semibold text-[#E61C24] bg-[#E61C24]/10 px-3 py-1 rounded-full">
                    {pathway.tag}
                  </span>
                  <h3 className="text-xl font-bold mt-4 mb-3">
                    {pathway.title}
                  </h3>
                  <ul className="space-y-2 text-slate-300 text-xs">
                    {pathway.req.map((r, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#0B4FD8] font-bold">•</span> {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-700/80">
                  <div className="flex justify-between text-xs text-slate-400 mb-4">
                    <span>⏱️ {pathway.time}</span>
                    <span>💵 {pathway.fee}</span>
                  </div>
                  <button
                    onClick={() => openForm(`Pathway: ${pathway.title}`)}
                    className="w-full py-2.5 bg-slate-700 hover:bg-[#0B4FD8] text-white font-semibold text-xs rounded-xl transition"
                  >
                    Evaluate Eligibility →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* 5. CATEGORY-BASED DRAWS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Category-Based Express Entry Draws
          </h2>
          <p className="mt-3 text-slate-600">
            Lower CRS cutoffs targeting high-demand industry sectors in Canada.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <thead className="bg-[#0B4FD8] text-white text-sm">
              <tr>
                <th className="p-4">Category</th>
                <th className="p-4">Target Occupations</th>
                <th className="p-4">Typical CRS Cutoff</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {[
                {
                  cat: "🏥 Healthcare",
                  occ: "Nurses, Doctors, Medical Lab Techs, Pharmacists",
                  crs: "~430-480",
                },
                {
                  cat: "🔬 STEM",
                  occ: "Software Engineers, Data Scientists, Tech Architects",
                  crs: "~440-490",
                },
                {
                  cat: "🔧 Trades",
                  occ: "Electricians, Carpenters, Plumbers, Welders",
                  crs: "~420-470",
                },
                {
                  cat: "🇫🇷 French Proficiency",
                  occ: "Any occupation with CLB 7+ in French",
                  crs: "~400-450",
                },
                {
                  cat: "🌾 Agriculture",
                  occ: "Agricultural Specialists, Food Processors",
                  crs: "~420-460",
                },
                {
                  cat: "🚛 Transport",
                  occ: "Truck Drivers, Supply Chain & Logistics Managers",
                  crs: "~430-470",
                },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 transition">
                  <td className="p-4 font-bold text-slate-900">{row.cat}</td>
                  <td className="p-4 text-slate-600">{row.occ}</td>
                  <td className="p-4 font-semibold text-[#0B4FD8]">
                    {row.crs}
                  </td>
                  <td className="p-4">
                    <span className="bg-green-100 text-green-700 text-xs px-2.5 py-1 rounded-full font-bold">
                      Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. 4-STEP PROCESS */}
      {/* <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Our 4-Step PR Journey
            </h2>
            <p className="mt-3 text-slate-600">
              From document evaluation to landing in Canada with your PR card.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Eligibility Assessment",
                sub: "Day 1 (Free)",
                desc: "Deep review of your age, education, and language scores to map viable streams.",
              },
              {
                step: "02",
                title: "Strategy & Documents",
                sub: "Weeks 1-8",
                desc: "ECA setup, language exam roadmaps, NOC duties validation, and reference drafts.",
              },
              {
                step: "03",
                title: "Submission & Filing",
                sub: "Weeks 8-12",
                desc: "Direct representation before IRCC, ITA filing within 60 days, and real-time portal updates.",
              },
              {
                step: "04",
                title: "Landing & Beyond",
                sub: "Post-Approval",
                desc: "COPR guidance, PR card processing, SIN generation, and settlement support.",
              },
            ].map((st, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-slate-200 relative shadow-sm"
              >
                <span className="text-4xl font-black text-[#0B4FD8]/20">
                  {st.step}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-2">
                  {st.title}
                </h3>
                <span className="text-xs font-semibold text-[#E61C24] block mb-3">
                  {st.sub}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* 7. DOCUMENT CHECKLIST & CALCULATOR */}
      {/* <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <DocChecklist />
          <FeeCalculator onOpenForm={() => openForm("Fee Calculation Query")} />
        </div>
      </section> */}

      {/* 8. FAQ ACCORDION */}
      {/* <section className="py-20 bg-slate-50 border-t border-slate-200">
        <FaqAccordion />
      </section> */}

      {/* 9. FINAL CTA FOOTER LEAD CAPTURE */}
      {/* <section className="py-20 bg-linear-to-br from-slate-900 via-[#0B4FD8] to-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Your PR Plan Starts With One Honest Conversation
          </h2>
          <p className="mt-4 text-blue-100 max-w-2xl mx-auto text-sm sm:text-base">
            30 minutes with a licensed RCIC gives you a definitive pathway,
            predictable costs, and exact timelines. No sales pitch — just facts.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => openForm("Final CTA Consultation")}
              className="bg-[#E61C24] hover:bg-[#c9141b] text-white px-8 py-4 rounded-xl font-bold shadow-xl transition hover:scale-105"
            >
              Request Free Consultation →
            </button>
            <a
              href="https://wa.me/918608608668?text=Hi%20Graduvate,%20I%20want%20to%20evaluate%20my%20Canada%20PR%20profile"
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold shadow-xl transition"
            >
              💬 WhatsApp Us
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-xs text-slate-300 flex flex-wrap justify-center gap-6">
            <span>🛡️ CICC Regulated</span>
            <span>📍 Offices: Tamil Nadu, Delhi & Canada</span>
            <span>✉️ graduvateabroad@gmail.com</span>
          </div>
        </div>
      </section> */}

      {/* LEAD MODAL */}
      <GoogleFormModal
        isOpen={formOpen}
        onClose={() => setFormOpen(false)}
        defaultPurpose={formPurpose}
      />
    </main>
  );
}
