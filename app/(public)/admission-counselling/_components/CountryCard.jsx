"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
// Ensure you have your API route correctly imported
import { getCountry } from "../../../../routes/userApi.js";
import EnquiryModal from "./EnquiryModal.jsx";

// Data map for details not provided by the API (to match the design exactly)
const extraCountryData = {
  Russia: {
    price: "₹4L/yr",
    total: "₹25-45L total · 6 Years",
    badge: "MOST POPULAR",
    tags: ["NMC Approved", "WHO Listed", "English Medium"],
    flagCode: "ru",
  },
  Georgia: {
    price: "₹4L/yr",
    total: "₹35-45L total · 6 Years",
    badge: "FASTEST GROWING",
    tags: ["EU Standard", "Safe Country", "Direct Admit"],
    flagCode: "ge",
  },
  Kazakhstan: {
    price: "₹4L/yr",
    total: "₹25-45L total · 6 Years",
    badge: "MODERN CAMPUS",
    tags: ["NMC Listed", "WHO Approved", "Modern Infra"],
    flagCode: "kz",
  },
  Uzbekistan: {
    price: "₹4L/yr",
    total: "₹25-45L total · 6 Years",
    badge: "MOST AFFORDABLE",
    tags: ["Budget Friendly", "Indian Food", "NMC Listed"],
    flagCode: "uz",
  },
  Kyrgyzstan: {
    price: "₹4.0L/yr",
    total: "₹25-45L total · 6 Years",
    badge: "BEST VALUE",
    tags: ["Cheapest Option", "NMC Listed", "Indian Food"],
    flagCode: "kg",
  },
};

const defaultData = {
  price: "₹4L/yr",
  total: "₹15-45L total · 6 Years",
  badge: "TOP DESTINATION",
  tags: ["NMC Listed", "WHO Approved"],
  flagCode: "un", // Default flag
};

const CountryCard = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchCountry = async () => {
    try {
      const res = await getCountry();
      console.log("res", res);
      // Fallback fallback to empty array if API fails but returns success
      setCountries(res || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  return (
    <section className="py-16 bg-white font-sans">
      <div className="max-w-370 mx-auto px-4 sm:px-6 lg:px-18">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <h4 className="text-[#b8955a] text-xs font-bold tracking-[0.2em] uppercase mb-3">
              Top Destinations
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 font-serif">
              Choose Your <span className="text-red-700">Country</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              All NMC-approved. All WHO-listed. Transparent fees, no hidden
              charges, full support throughout.
            </p>
          </div>
          <div>
            {/* <Link 
              href="/countries" 
              className="inline-block border border-gray-200 text-[#1a233a] font-semibold text-sm px-6 py-3 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all"
            >
              View All Countries &rarr;
            </Link> */}
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center h-48">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1a233a]"></div>
          </div>
        )}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {countries.map((country) => {
            // Merge API data with our static design map
            const staticData =
              extraCountryData[country.countryName] || defaultData;
            const imageUrl =
              country.images && country.images.length > 0
                ? country.images[0]
                : "https://via.placeholder.com/400x300?text=No+Image";

            return (
              <div
                key={country._id}
                className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image Container (Top Half) */}
                <div
                  className="h-48 relative bg-cover bg-center"
                  style={{ backgroundImage: `url(${imageUrl})` }}
                >
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#111827] via-transparent to-transparent opacity-90"></div>

                  {/* Flag Icon */}
                  {/* <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white border-2 border-white shadow-sm overflow-hidden flex items-center justify-center">
                    <img 
                      src={`https://flagcdn.com/w40/${staticData.flagCode}.png`} 
                      alt={`${country.countryName} flag`}
                      className="w-full h-full object-cover"
                    />
                  </div> */}

                  {/* Top Right Badge */}
                  <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded shadow-sm">
                    <p className="text-[#e2bd75] text-[9px] font-bold tracking-widest uppercase">
                      {staticData.badge}
                    </p>
                  </div>

                  {/* Country Name */}
                  <h3 className="absolute bottom-3 left-4 text-white text-2xl font-serif tracking-wide">
                    {country.countryName}
                  </h3>
                </div>

                {/* Content Container (Bottom Half) */}
                <div className="p-5 flex-1 flex flex-col bg-white">
                  {/* Pricing Details */}
                  <div className="mb-4">
                    <p className="text-[#c19b6c] text-[1.4rem] font-serif leading-none mb-1.5">
                      {staticData.price}
                    </p>
                    <p className="text-gray-400 text-[11px] font-medium tracking-wide">
                      {staticData.total}
                    </p>
                  </div>

                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {staticData.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-50 border border-gray-100 text-gray-600 text-[10px] font-semibold px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <div className="mt-auto pt-2">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="block w-full bg-[#182033] hover:bg-[#2a3754] text-white text-center text-sm font-semibold py-3 rounded-xl transition-colors duration-300 shadow-md"
                    >
                      Know More &rarr;
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default CountryCard;
