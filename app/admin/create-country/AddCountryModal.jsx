"use client";

import React, { useState } from "react";
import { createCountry } from "../../../src/routes/adminApi.js";
import { toast } from "react-toastify"; // consistency ke liye hot-toast use kiya hai
import { motion, AnimatePresence } from "framer-motion";
import Tiptap from "../../../src/components/textEditior/Tiptap.jsx";
import {
  FiX,
  FiGlobe,
  FiMapPin,
  FiClock,
  FiShield,
  FiImage,
  FiPlus,
  FiTrash2,
  FiHelpCircle,
  FiSearch,
  FiFileText,
  FiBarChart2,
} from "react-icons/fi";
import { refreshData } from "../../actions.js";
// export const revalidate = 86400;

const AddCountryModal = ({ isOpen, onClose, refresh }) => {
  const [loading, setLoading] = useState(false);
  const [faqs, setFaqs] = useState([{ question: "", answer: "" }]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [optionalImages, setOptionalImages] = useState([]);
  const [content, setContent] = useState("");
  const [formData, setFormData] = useState({
    countryName: "",
    slug: "",
    metaTitle: "",
    metaDesc: "",
    heading1: "",
    subHeadingPara: "",
    description: content,
  });

  const handleEditorChange = (html) => {
    setContent(html);
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedImages(file);
    }
  };

  const handleOptionalImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setOptionalImages(file);
    }
  };

  const handleFaqChange = (i, field, value) => {
    const updated = [...faqs];
    updated[i][field] = value;
    setFaqs(updated);
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
    if (selectedImages) {
      data.append("image", selectedImages);
    }

    if (optionalImages) {
      data.append("optionalImage", optionalImages);
    }

    try {
      const res = await createCountry(data);
      console.log(res);

      toast.success("Country added successfully!");
      refreshData("/admin/create-country");
      refresh?.();
      onClose();
    } catch (error) {
      console.log("error", error);
      toast.error(error?.message || "Failed to create country");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute bg-black"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative bg-white w-full max-w-8xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="bg-blue-900 px-8 py-6 flex justify-between items-center shrink-0">
              <div>
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <FiPlus className="bg-white/20 p-1 rounded-lg" />
                  Add Global Destination
                </h2>
                {/* <p className="text-blue-200 text-sm mt-1">Setup new country profile and pricing details.</p> */}
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white cursor-pointer"
              >
                <FiX size={24} />
              </button>
            </div>

            {/* Form Content */}
            <form
              onSubmit={handleSubmit}
              className="overflow-y-auto p-8 custom-scrollbar"
            >
              <div className="space-y-10">
                {/* Section: Basic Info */}
                <section>
                  <div className="flex items-center gap-2 mb-6 text-blue-900 border-b pb-2">
                    <FiGlobe className="text-xl" />
                    <h3 className="font-bold text-lg uppercase tracking-wider">
                      Basic Information
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <InputField
                      label="Country Name"
                      icon={<FiMapPin />}
                      name="countryName"
                      value={formData.countryName}
                      onChange={handleChange}
                      placeholder="e.g. Germany"
                    />
                    <InputField
                      label="Slug"
                      icon={<FiSearch />}
                      name="slug"
                      value={formData.slug}
                      onChange={handleChange}
                      placeholder="germany-mbbs"
                    />
                    <InputField
                      label="Meta Title"
                      name="metaTitle"
                      value={formData.metaTitle}
                      onChange={handleChange}
                      placeholder="Meta Title"
                    />
                    <InputField
                      label="Meta Desc"
                      name="metaDesc"
                      value={formData.metaDesc}
                      onChange={handleChange}
                      placeholder="Meta Desc"
                    />
                  </div>
                </section>

                {/* Section: Media */}
                <section className="bg-slate-50 p-6 rounded-xl border-2 border-dashed border-slate-200 flex justify-evenly">
                  <div>
                    <div className="flex items-center gap-2 mb-4 text-blue-900">
                      <FiImage className="text-xl" />
                      <h3 className="font-bold text-lg">Logo Image</h3>
                    </div>

                    <input
                      type="file"
                      accept="image/*" // Yeh line user ko sirf images select karne degi (optional par badhiya hai)
                      onChange={handleImageChange}
                      className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-900 file:text-white hover:file:bg-blue-800 cursor-pointer"
                    />

                    {/* Loop ki jagah ab seedha check karenge agar image selected hai toh naam dikhe */}
                    {selectedImages && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="bg-white border border-blue-200 text-blue-900 text-xs font-medium  rounded-lg shadow-sm">
                          {selectedImages.name}
                        </span>
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4 text-blue-900">
                      <FiImage className="text-xl" />
                      <h3 className="font-bold text-lg">Optional Image</h3>
                    </div>

                    <input
                      type="file"
                      accept="image/*" // Yeh line user ko sirf images select karne degi (optional par badhiya hai)
                      onChange={handleOptionalImageChange}
                      className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-900 file:text-white hover:file:bg-blue-800 cursor-pointer"
                    />

                    {/* Loop ki jagah ab seedha check karenge agar image selected hai toh naam dikhe */}
                    {optionalImages && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="bg-white border border-blue-200 text-blue-900 text-xs font-medium rounded-lg shadow-sm">
                          {optionalImages.name}
                        </span>
                      </div>
                    )}
                  </div>
                </section>

                {/* Section: SEO & Content */}
                <section>
                  <div className="flex items-center gap-2 mb-6 text-blue-900 border-b pb-2">
                    <FiFileText className="text-xl" />
                    <h3 className="font-bold text-lg uppercase tracking-wider">
                      SEO & Content
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <TextAreaField
                      label="Intro Heading 1"
                      name="heading1"
                      value={formData.heading1}
                      onChange={handleChange}
                      rows="2"
                      required
                    />
                    <TextAreaField
                      label="Paragraph"
                      name="subHeadingPara"
                      value={formData.subHeadingPara}
                      onChange={handleChange}
                      rows="4"
                    />

                    <Tiptap onChange={handleEditorChange} />
                  </div>

                  {/* <div className="mt-10 p-4 border-t">
                    <h3>Live Preview / Output:</h3>
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                  </div> */}
                </section>

                {/* Section: FAQs */}
                <section className="bg-blue-50/50 p-6 rounded-2xl">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2 text-blue-900">
                      <FiHelpCircle className="text-xl" />
                      <h3 className="font-bold text-lg">
                        Knowledge Base (FAQs)
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={addFaq}
                      className="bg-white text-blue-900 border border-blue-200 px-4 py-2 rounded-xl text-sm font-bold shadow-sm hover:bg-blue-900 hover:text-white transition-all flex items-center gap-2"
                    >
                      <FiPlus /> Add FAQ
                    </button>
                  </div>

                  <div className="space-y-4">
                    {faqs.map((faq, i) => (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        key={i}
                        className="bg-white p-5 rounded-xl border border-blue-100 shadow-sm relative group"
                      >
                        {faqs.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeFaq(i)}
                            className="absolute top-4 right-4 text-red-400 hover:text-red-600 transition-colors"
                          >
                            <FiTrash2 size={18} />
                          </button>
                        )}
                        <div className="grid gap-3 pr-8">
                          <input
                            placeholder="Question"
                            value={faq.question}
                            onChange={(e) =>
                              handleFaqChange(i, "question", e.target.value)
                            }
                            className="w-full font-semibold text-blue-900 outline-none border-b border-transparent focus:border-blue-200 py-1"
                            required
                          />
                          <textarea
                            placeholder="Detailed Answer..."
                            value={faq.answer}
                            onChange={(e) =>
                              handleFaqChange(i, "answer", e.target.value)
                            }
                            className="w-full text-slate-600 text-sm outline-none bg-slate-50 p-3 rounded-lg mt-1"
                            rows="2"
                            required
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Footer Actions */}
              <div className="mt-12 pt-6 border-t flex flex-col sm:flex-row justify-end gap-4 sticky -bottom-6 z-999 bg-white px-8 py-3.5">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-8 py-3 rounded-xl font-bold text-slate-500 hover:bg-slate-100 transition-colors"
                >
                  Discard
                </button>
                <button
                  disabled={loading}
                  className="bg-blue-900 text-white px-10 py-3 rounded-xl font-bold shadow-lg shadow-blue-900/30 hover:bg-blue-800 disabled:bg-slate-300 transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    "Publish Country Profile"
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// Reusable Helper Components for Cleanliness
const InputField = ({ label, icon, ...props }) => (
  <div className="space-y-1.5">
    <label className="text-[13px] font-bold text-slate-500 uppercase flex items-center gap-1.5">
      {icon} {label}
    </label>
    <input
      {...props}
      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 focus:ring-4 focus:ring-blue-900/5 focus:border-blue-900 outline-none transition-all placeholder:text-slate-300"
    />
  </div>
);

const TextAreaField = ({ label, ...props }) => (
  <div className="space-y-1.5">
    <label className="text-[13px] font-bold text-slate-500 uppercase">
      {label}
    </label>
    <textarea
      {...props}
      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:ring-4 focus:ring-blue-900/5 focus:border-blue-900 outline-none transition-all"
    />
  </div>
);

export default AddCountryModal;
