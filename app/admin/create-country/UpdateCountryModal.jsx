"use client";

import React, { useState, useEffect } from "react";
import { updateCountry } from "../../../src/routes/adminApi.js";
import { toast } from "react-toastify";
import Tiptap from "../../../src/components/textEditior/Tiptap.jsx";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiX,
  FiGlobe,
  FiMapPin,
  FiClock,
  FiShield,
  FiImage,
  FiSave,
  FiTrash2,
  FiHelpCircle,
  FiSearch,
  FiFileText,
  FiEdit3,
  FiInfo,
  FiPlus,
} from "react-icons/fi";
import { MdCurrencyRupee } from "react-icons/md";
import { refreshData } from "../../actions.js";
export const revalidate = 86400;

const UpdateCountryModal = ({ isOpen, country, onClose, refresh }) => {
  const [loading, setLoading] = useState(false);
  const [faqs, setFaqs] = useState([]);
  const [content, setContent] = useState("");
  const [formData, setFormData] = useState({
    countryName: "",
    slug: "",
    metaTitle: "",
    metaDesc: "",
    budget: "",
    heading1: "",
    subHeadingPara: "",
    description: content,
  });
  const [selectedImages, setSelectedImages] = useState([]);

  const handleEditorChange = (html) => {
    setContent(html);
  };
  // Pre-fill data when modal opens

  console.log("country", country);
  
  useEffect(() => {
    if (country) {
      setFormData({
        countryName: country.countryName || "",
        slug: country.slug || "",
        metaTitle: country.metaTitle || "",
        metaDesc: country.metaDesc || "",
        budget: country.budget || "",
        heading1: country.heading1 || "",
        subHeadingPara: country.subHeadingPara || "",
        description: country.description || "",
      });
      setFaqs(country.faqs || [{ question: "", answer: "" }]);
    }
  }, [country]);

  if (!isOpen || !country) return null;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 2) return toast.error("Maximum 2 images allowed");
    setSelectedImages(files);
  };

  const handleFaqChange = (index, field, value) => {
    const newFaqs = [...faqs];
    newFaqs[index][field] = value;
    setFaqs(newFaqs);
  };

  const addFaq = () => setFaqs([...faqs, { question: "", answer: "" }]);
  const removeFaq = (i) => setFaqs(faqs.filter((_, idx) => idx !== i));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    Object.keys(formData).forEach((k) => {
      if (k !== "description") {
        // Safe side ke liye hum description yahan se nahi uthayenge
        data.append(k, formData[k]);
      }
    });
    data.append("description", content);
    data.append("faqs", JSON.stringify(faqs));
    selectedImages.forEach((img) => data.append("images", img));

    // data.forEach((value, key) => {
    //   console.log(key, value);
    // });

    try {
      const res = await updateCountry(country._id, data);
      setLoading(false);
      toast.success("Country Updated");
      // refreshData("/admin/create-country");
      console.log(res);

      refresh(); // Data reload
      onClose();
    } catch (error) {
      console.log("Country Update Error", error);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute bg-black/40 "
        />

        {/* Modal Card */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 40 }}
          className="relative bg-white w-full max-w-8xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        >
          {/* Header - Thoda different color tone for Edit */}
          <div className="bg-linear-to-r from-blue-900 to-indigo-900 px-8 py-7 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-2xl">
                <FiEdit3 className="text-white text-2xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Edit {country.countryName}
                </h2>
                {/* <p className="text-blue-200/80 text-sm">
                  Update pricing, content, and media assets.
                </p> */}
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 cursor-pointer hover:bg-white/10 rounded-full transition-colors text-white/70 hover:text-white"
            >
              <FiX size={24} />
            </button>
          </div>

          {/* Form Content */}
          <form
            onSubmit={handleSubmit}
            className="overflow-y-auto p-8 custom-scrollbar bg-slate-50/30"
          >
            <div className="space-y-10">
              {/* Section: Basic Info */}
              <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-2 mb-6 text-blue-900 border-b border-slate-50 pb-3">
                  <FiGlobe className="text-xl" />
                  <h3 className="font-bold text-sm uppercase tracking-widest">
                    General Information
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <InputField
                    label="Country Name"
                    icon={<FiMapPin />}
                    name="countryName"
                    value={formData.countryName}
                    onChange={handleChange}
                  />
                  <InputField
                    label="URL Slug"
                    icon={<FiSearch />}
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                  />
                  <InputField
                    label="Meta Title"
                    icon={<MdCurrencyRupee />}
                    name="metaTitle"
                    value={formData.metaTitle}
                    onChange={handleChange}
                  />
                  <InputField
                    label="Meta Desc"
                    icon={<FiClock />}
                    name="metaDesc"
                    value={formData.metaDesc}
                    onChange={handleChange}
                  />

                  <InputField
                    label="Budget"
                    icon={<MdCurrencyRupee />}
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  />
                </div>
              </section>

              {/* Section: Media Assets */}
              <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-2 mb-4 text-blue-900">
                  <FiImage className="text-xl" />
                  <h3 className="font-bold text-sm uppercase tracking-widest">
                    Media Assets
                  </h3>
                </div>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1 w-full">
                    <label className="group relative flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-200 rounded-2xl cursor-pointer hover:bg-blue-50/50 hover:border-blue-300 transition-all">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <FiPlus
                          className="text-slate-400 group-hover:text-blue-600 mb-2"
                          size={24}
                        />
                        <p className="text-sm text-slate-500 font-medium">
                          Click to upload new images
                        </p>
                      </div>
                      <input
                        type="file"
                        multiple
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* Current Images Info */}
                  <div className="w-full md:w-72 bg-blue-50/50 rounded-2xl p-4 border border-blue-100">
                    <p className="text-[11px] font-bold text-blue-900/50 uppercase mb-3 flex items-center gap-1">
                      <FiInfo /> New Selection
                    </p>
                    {selectedImages.length > 0 ? (
                      <div className="space-y-2">
                        {selectedImages.map((img, i) => (
                          <div
                            key={i}
                            className="text-xs bg-white p-2 rounded-lg border border-blue-100 truncate shadow-sm"
                          >
                            {img.name}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs text-blue-600/60 italic">
                        No new images selected. Keeping original ones.
                      </p>
                    )}
                  </div>
                </div>
              </section>

              {/* Section: Content */}
              <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-2 mb-6 text-blue-900 border-b border-slate-50 pb-3">
                  <FiFileText className="text-xl" />
                  <h3 className="font-bold text-sm uppercase tracking-widest">
                    SEO & Narrative Content
                  </h3>
                </div>
                <div className="space-y-6">
                  <TextAreaField
                    label="Introductory Heading"
                    name="heading1"
                    value={formData.heading1}
                    onChange={handleChange}
                    rows="2"
                  />
                  <TextAreaField
                    label="Detailed Description"
                    name="subHeadingPara"
                    value={formData.subHeadingPara}
                    onChange={handleChange}
                    rows="5"
                  />
                </div>

                <Tiptap
                  onChange={handleEditorChange}
                  value={formData.description}
                />
              </section>

              {/* Section: FAQs */}
              <section className="bg-slate-900 p-8 rounded-4xl shadow-xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="flex justify-between items-center mb-8 relative z-10">
                  <div className="flex items-center gap-3 text-white">
                    <FiHelpCircle className="text-2xl text-blue-400" />
                    <h3 className="font-bold text-xl">Knowledge Base</h3>
                  </div>
                  <button
                    type="button"
                    onClick={addFaq}
                    className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2"
                  >
                    <FiPlus /> New FAQ
                  </button>
                </div>

                <div className="space-y-4 relative z-10">
                  {faqs.map((faq, i) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      key={i}
                      className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 group"
                    >
                      <div className="flex justify-between gap-4">
                        <div className="flex-1 space-y-3">
                          <input
                            placeholder="Common Question..."
                            value={faq.question}
                            onChange={(e) =>
                              handleFaqChange(i, "question", e.target.value)
                            }
                            className="w-full bg-transparent font-bold text-blue-200 outline-none border-b border-white/10 focus:border-blue-400 py-1 transition-all"
                          />
                          <textarea
                            placeholder="Provide a detailed answer..."
                            value={faq.answer}
                            onChange={(e) =>
                              handleFaqChange(i, "answer", e.target.value)
                            }
                            className="w-full bg-white/5 text-slate-300 text-sm outline-none p-3 rounded-xl border border-white/5 focus:border-white/20 transition-all"
                            rows="2"
                          />
                        </div>
                        {faqs.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeFaq(i)}
                            className="h-10 w-10 flex items-center justify-center text-red-400 hover:bg-red-400/10 rounded-xl transition-all"
                          >
                            <FiTrash2 size={20} />
                          </button>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            </div>

            {/* Footer */}
            <div className="mt-12 flex flex-col sm:flex-row justify-end gap-4 pb-4 sticky -bottom-6 z-999 bg-white px-8 py-3.5">
              <button
                type="button"
                onClick={onClose}
                className="px-8 py-3.5 rounded-2xl font-bold text-slate-500 hover:bg-slate-100 transition-all"
              >
                Discard Changes
              </button>
              <button
                disabled={loading}
                className="bg-blue-900 cursor-pointer text-white px-12 py-3.5 rounded-2xl font-bold shadow-xl shadow-blue-900/30 hover:bg-blue-800 disabled:bg-slate-300 transition-all flex items-center justify-center gap-3"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <FiSave /> Save Profile
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

// Reusable Components
const InputField = ({ label, icon, ...props }) => (
  <div className="space-y-2">
    <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest flex items-center gap-2">
      {icon} {label}
    </label>
    <input
      {...props}
      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-800 focus:ring-4 focus:ring-blue-900/5 focus:bg-white focus:border-blue-900 outline-none transition-all placeholder:text-slate-300 font-medium"
    />
  </div>
);

const TextAreaField = ({ label, ...props }) => (
  <div className="space-y-2">
    <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest">
      {label}
    </label>
    <textarea
      {...props}
      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-4 text-slate-800 focus:ring-4 focus:ring-blue-900/5 focus:bg-white focus:border-blue-900 outline-none transition-all font-medium"
    />
  </div>
);

export default UpdateCountryModal;
