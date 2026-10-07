import React from "react";
import { Phone, MapPin } from "lucide-react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaCheckCircle,
  FaAward,
  FaHandshake,
} from "react-icons/fa";

export const metadata = {
  title: "Study Abroad & PR Consultants in Trichy | Gradubvate",

  description:
    "Gradubvate is a study abroad and PR consultancy in Trichy offering overseas education counselling, university admissions, student visa guidance, PR pathways and immigration assistance.",

  keywords: [
    "Study Abroad Consultants in Trichy",
    "Study Abroad Consultancy in Trichy",
    "Overseas Education Consultants in Trichy",
    "PR Consultants in Trichy",
    "Immigration Consultants in Trichy",
    "Student Visa Consultants in Trichy",
    "Abroad Education Consultants in Trichy",
    "Overseas Education Consultancy Trichy",
    "PR Consultancy Trichy",
    "Study Visa Consultants in Trichy",
    "Gradubvate Trichy",
  ],

  alternates: {
    canonical: "https://www.gradubvate.com/trichy",
  },

  openGraph: {
    title: "Study Abroad & PR Consultants in Trichy | Gradubvate",
    description:
      "Get expert guidance for studying abroad, university admissions, student visas, PR pathways and immigration from Gradubvate's Trichy consultancy.",
    url: "https://www.gradubvate.com/trichy",
    siteName: "Gradubvate",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function TrichyLandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-red-100 selection:text-red-900">
      {/* Hero Section */}
      <section className="relative bg-slate-50 pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm text-blue-900 font-semibold text-sm mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
              </span>
              Your Trusted Overseas Education Partner
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-black leading-[1.05] text-blue-900 mb-6 tracking-tight">
              Study Abroad & <br />
              <span className="text-red-600">PR Consultants</span> <br />
              in Trichy
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Plan your international education and immigration journey with
              Gradubvate. Our Trichy team provides personalized guidance for
              overseas university admissions, student visas, PR pathways and
              immigration applications, helping you make informed decisions
              about your future abroad.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Call */}
              <a
                href="tel:+9181900 15424"
                className="w-full sm:w-auto bg-blue-900 hover:bg-blue-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <FaPhoneAlt />
                Book a Free Consultation
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/9181900 15424"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-white border-2 border-green-500 text-green-600 hover:bg-green-50 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-md flex items-center justify-center gap-3"
              >
                <FaWhatsapp className="text-2xl" />
                WhatsApp Our Experts
              </a>
            </div>
          </div>

          {/* Right Feature Card */}
          <div className="lg:w-2/5 w-full relative">
            <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(8,112,184,0.07)] border border-gray-100 relative z-20">
              <div className="absolute -top-5 -right-5 bg-red-600 text-white p-4 rounded-2xl shadow-lg rotate-12">
                <FaAward className="text-3xl" />
              </div>

              <h3 className="text-2xl font-extrabold text-blue-900 mb-8 pb-4 border-b border-gray-100">
                Why Choose Gradubvate?
              </h3>

              <ul className="space-y-8">
                {/* Feature 1 */}
                <li className="flex items-start gap-5">
                  <div className="bg-blue-50 p-3 rounded-2xl text-blue-600 mt-1">
                    <FaCheckCircle className="text-xl" />
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-gray-900">
                      Personalized Study Abroad Guidance
                    </h4>

                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                      Get personalized guidance on courses, universities,
                      destinations, eligibility and admission requirements based
                      on your academic goals.
                    </p>
                  </div>
                </li>

                {/* Feature 2 */}
                <li className="flex items-start gap-5">
                  <div className="bg-blue-50 p-3 rounded-2xl text-blue-600 mt-1">
                    <FaCheckCircle className="text-xl" />
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-gray-900">
                      Student Visa & PR Guidance
                    </h4>

                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                      Receive professional assistance with student visa
                      documentation, application preparation and available
                      permanent residency pathways.
                    </p>
                  </div>
                </li>

                {/* Feature 3 */}
                <li className="flex items-start gap-5">
                  <div className="bg-blue-50 p-3 rounded-2xl text-blue-600 mt-1">
                    <FaHandshake className="text-xl" />
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-gray-900">
                      End-to-End Application Support
                    </h4>

                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                      From university shortlisting and application guidance to
                      visa documentation and pre-departure support, our team
                      assists you throughout your journey.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Decorative Card */}
            <div className="absolute top-8 -right-8 w-full h-full bg-blue-900 rounded-[2.5rem] -z-10 opacity-5 hidden sm:block"></div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-slate-50 border-t border-gray-100">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-4">
              Visit Our Study Abroad & PR Consultancy in Trichy
            </h2>

            <p className="text-gray-600 font-medium leading-relaxed">
              Meet our overseas education and immigration consultants at our
              Trichy office for personalized guidance on studying abroad,
              university admissions, student visas, PR pathways and immigration
              opportunities.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 my-8">
            {/* Phone */}
            <div className="flex items-center gap-3 justify-center">
              <div className="bg-red-50 p-2.5 rounded-full text-red-600 shrink-0">
                <Phone className="w-5 h-5" />
              </div>

              <a
                href="tel:+9181900 15424"
                className="text-lg font-bold text-gray-800 hover:text-red-600 transition"
              >
                +91 81900 15424
              </a>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-10 bg-gray-200"></div>

            {/* Location */}
            <div className="flex items-start gap-3">
              <div className="bg-blue-50 p-2.5 rounded-full text-blue-900 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>

              <p className="text-sm font-medium text-gray-600 max-w-sm leading-relaxed">
                C-2, 2nd Floor, Second Cross, Thillainagar West, Trichy –
                620018, Tamil Nadu
              </p>
            </div>
          </div>

          {/* Map Container */}
          <div className="w-full h-100 sm:h-125 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-4 border-white relative z-10 bg-gray-200">
            <iframe
              title="Gradubvate Study Abroad & PR Consultancy Trichy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4209.659443615038!2d78.68236987530966!3d10.825828858279964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf5a2e480368b%3A0x7658d175f987505b!2s2nd%20Cross%20Rd%2C%20Tiruchirappalli%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1780115137052!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
