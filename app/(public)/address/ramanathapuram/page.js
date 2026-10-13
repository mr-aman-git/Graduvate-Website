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
  title: "Study Abroad & PR Consultants in Ramanathapuram | Gradubvate",

  description:
    "Looking for study abroad and PR consultants in Ramanathapuram? Gradubvate offers overseas education guidance, university admissions support, student visa assistance, PR pathways and immigration application guidance.",

  keywords: [
    "Study Abroad Consultants in Ramanathapuram",
    "Study Abroad Consultancy in Ramanathapuram",
    "Overseas Education Consultants in Ramanathapuram",
    "PR Consultants in Ramanathapuram",
    "Immigration Consultants in Ramanathapuram",
    "Student Visa Consultants in Ramanathapuram",
    "Abroad Education Consultancy Ramanathapuram",
    "PR Consultancy Ramanathapuram",
    "Study Visa Consultants in Ramanathapuram",
    "Gradubvate Ramanathapuram",
  ],
  alternates: {
    canonical: "https://www.gradubvate.com/address/ramanathapuram",
  },

  openGraph: {
    title: "Study Abroad & PR Consultants in Ramanathapuram | Gradubvate",
    description:
      "Explore overseas education, student visa and PR guidance with Gradubvate in Ramanathapuram.",
    url: "https://www.gradubvate.com/address/ramanathapuram",
    siteName: "Gradubvate",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RamanathapuramLandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-red-100 selection:text-red-900">
      {/* Hero Section */}
      <section className="relative bg-slate-50 pt-10 pb-32 overflow-hidden">
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

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] text-blue-950 mb-6 tracking-tight">
              Study Abroad & <br />
              <span className="text-red-600">PR Consultants</span>
              <br />
              in Ramanathapuram
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Plan your international education and immigration journey with
              Gradubvate. Get personalized guidance for overseas university
              admissions, student visa applications, permanent residency
              pathways and immigration documentation. Our team helps you
              understand your options and take informed steps towards your
              international goals.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Call Button */}
              <a
                href="tel:+917639399013"
                className="w-full sm:w-auto bg-blue-950 hover:bg-blue-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <FaPhoneAlt />
                Book a Consultation
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/917639399013"
                target="_blank"
                rel="noopener noreferrer"
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

              <h2 className="text-2xl font-extrabold text-blue-950 mb-8 pb-4 border-b border-gray-100">
                Why Choose Gradubvate?
              </h2>

              <ul className="space-y-8">
                {/* Feature 1 */}
                <li className="flex items-start gap-5">
                  <div className="bg-blue-50 p-3 rounded-2xl text-blue-600 mt-1">
                    <FaCheckCircle className="text-xl" />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-gray-900">
                      Personalized Study Abroad Guidance
                    </h3>

                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                      Explore suitable courses, universities and study
                      destinations with guidance based on your academic
                      background, career goals and eligibility.
                    </p>
                  </div>
                </li>

                {/* Feature 2 */}
                <li className="flex items-start gap-5">
                  <div className="bg-blue-50 p-3 rounded-2xl text-blue-600 mt-1">
                    <FaCheckCircle className="text-xl" />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-gray-900">
                      Student Visa & PR Assistance
                    </h3>

                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                      Get guidance on student visa documentation, application
                      preparation and relevant permanent residency pathways for
                      your preferred destination.
                    </p>
                  </div>
                </li>

                {/* Feature 3 */}
                <li className="flex items-start gap-5">
                  <div className="bg-blue-50 p-3 rounded-2xl text-blue-600 mt-1">
                    <FaHandshake className="text-xl" />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-gray-900">
                      End-to-End Application Support
                    </h3>

                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                      From university shortlisting and application preparation
                      to visa documentation and pre-departure guidance, receive
                      support throughout your journey.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Decorative Background Card */}
            <div className="absolute top-8 -right-8 w-full h-full bg-blue-900 rounded-[2.5rem] -z-10 opacity-5 hidden sm:block"></div>
          </div>
        </div>
      </section>

      {/* Location & Map Section */}
      <section className="py-16 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 mb-4">
              Visit Our Study Abroad & PR Consultancy in Ramanathapuram
            </h2>

            <p className="text-gray-600 font-medium leading-relaxed">
              Connect with our team for personalized guidance on overseas
              education, international university admissions, student visas, PR
              options and immigration application processes. Contact us to
              discuss your requirements and arrange a consultation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 my-8">
            {/* Phone Number */}
            <div className="flex items-center gap-3 justify-center">
              <div className="bg-red-50 p-2.5 rounded-full text-red-600 shrink-0">
                <Phone className="w-5 h-5" />
              </div>

              <a
                href="tel:+917639399013"
                className="text-lg font-bold text-gray-800 hover:text-red-600 transition"
              >
                +91 76393 99013
              </a>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-10 bg-gray-200"></div>

            {/* Office Address */}
            <div className="flex items-start gap-3">
              <div className="bg-blue-50 p-2.5 rounded-full text-blue-900 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>

              <p className="text-sm font-medium text-gray-600 max-w-sm leading-relaxed">
                511-7, Muthu Bakery Upstairs, Bus Stop No. 1, Opposite Bharathi
                Nagar, Ramanathapuram – 623503, Tamil Nadu
              </p>
            </div>
          </div>

          {/* Google Maps */}
          <div className="w-full h-100 sm:h-125 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-4 border-white relative z-10 bg-gray-200">
            <iframe
              title="Gradubvate Study Abroad & PR Consultancy Ramanathapuram Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4228.840771796513!2d78.84554727529755!3d9.362766683674534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0197fc9e059c0b%3A0xd4572be31dffc961!2sMuthu%20bakery!5e1!3m2!1sen!2sin!4v1780051904647!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
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
