"use client";

import React, { useEffect, useState } from "react";
import { getCountry, deleteCountry } from "../../../src/routes/adminApi.js";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import AddCountryModal from "./AddCountryModal";
import UpdateCountryModal from "./UpdateCountryModal";
import {
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiGlobe,
  FiDollarSign,
} from "react-icons/fi";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const fetchCountries = async () => {
    try {
      const res = await getCountry();
      setCountries(Array.isArray(res) ? res : res.data);
    } catch (error) {
      toast.error("Failed to load countries");
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  console.log("countries", countries);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this! All images will be deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteCountry(id);
          Swal.fire("Deleted!", "Country has been deleted.", "success");

          fetchCountries();
        } catch (error) {
          console.log(error);
          Swal.fire("Error!", "Something went wrong.", "error");
        }
      }
    });
  };

  return (
    <div className="p-8 bg-[#F8FAFC] min-h-screen font-sans">
      {/* --- HEADER SECTION --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-blue-900 tracking-tight">
            Country Details
          </h1>
          {/* <p className="text-slate-500 mt-1">
            Manage your global country list and pricing.
          </p> */}
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-900/20 hover:bg-blue-800 transform transition-all active:scale-95"
        >
          <FiPlus className="text-lg" />
          Add New Country
        </button>
      </div>

      {/* --- TABLE CARD --- */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="p-5 text-xs font-bold uppercase tracking-wider text-slate-500">
                  Preview
                </th>
                <th className="p-5 text-xs font-bold uppercase tracking-wider text-slate-500">
                  Country Details
                </th>

                <th className="p-5 text-xs font-bold uppercase tracking-wider text-slate-500">
                  URL Slug
                </th>
                <th className="p-5 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {countries.length > 0 ? (
                countries.map((item) => (
                  <tr
                    key={item._id}
                    className="group hover:bg-blue-50/30 transition-colors"
                  >
                    <td className="p-5">
                      <div className="relative w-14 h-10 rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                        <img
                          src={item?.image?.url}
                          alt={item.countryName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>

                    <td className="p-5">
                      <div className="flex items-center gap-2">
                        <FiGlobe className="text-blue-900/40" />
                        <span className="font-semibold text-slate-800">
                          {item.countryName}
                        </span>
                      </div>
                    </td>

                    <td className="p-5">
                      <code className="text-[13px] bg-slate-100 px-2 py-1 rounded text-blue-700 font-medium">
                        /{item.slug}
                      </code>
                    </td>

                    <td className="p-5">
                      <div className="flex justify-end gap-3">
                        <button
                          onClick={() => {
                            setSelectedCountry(item);
                            setIsUpdateModalOpen(true);
                          }}
                          className="p-2 text-slate-400 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all"
                          title="Edit"
                        >
                          <FiEdit2 size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                          title="Delete"
                        >
                          <FiTrash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="p-20 text-center text-slate-400 italic"
                  >
                    No records found. Click "Add New Country" to get started.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- MODALS --- */}
      {isAddModalOpen && (
        <AddCountryModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          refresh={fetchCountries}
        />
      )}
      {isUpdateModalOpen && (
        <UpdateCountryModal
          isOpen={isUpdateModalOpen}
          country={selectedCountry}
          onClose={() => setIsUpdateModalOpen(false)}
          refresh={fetchCountries}
        />
      )}
    </div>
  );
};

export default CountryList;
