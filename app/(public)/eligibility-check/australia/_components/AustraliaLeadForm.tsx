"use client";

import { useState } from "react";
import type { AustraliaLeadData } from "../australia";

interface Props {
  onSubmit: (data: AustraliaLeadData) => void;
}

export default function AustraliaLeadForm({
  onSubmit,
}: Props) {
  const [form, setForm] =
    useState<AustraliaLeadData>({
      name: "",
      email: "",
      phone: "",
      location: "",
    });

  const [error, setError] = useState("");

  function update(
    field: keyof AustraliaLeadData,
    value: string
  ) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.location
    ) {
      setError("Please complete all fields.");
      return;
    }

    setError("");

    onSubmit(form);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-800">
          Full Name
        </label>

        <input
          value={form.name}
          onChange={(e) =>
            update("name", e.target.value)
          }
          placeholder="Enter your full name"
          className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition focus:border-[#1C398E] focus:ring-4 focus:ring-[#1C398E]/10"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-800">
          Email Address
        </label>

        <input
          type="email"
          value={form.email}
          onChange={(e) =>
            update("email", e.target.value)
          }
          placeholder="you@example.com"
          className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition focus:border-[#1C398E] focus:ring-4 focus:ring-[#1C398E]/10"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-800">
          Phone Number
        </label>

        <input
          type="tel"
          value={form.phone}
          onChange={(e) =>
            update("phone", e.target.value)
          }
          placeholder="+91 XXXXX XXXXX"
          className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition focus:border-[#1C398E] focus:ring-4 focus:ring-[#1C398E]/10"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-800">
          Location
        </label>

        <input
          value={form.location}
          onChange={(e) =>
            update("location", e.target.value)
          }
          placeholder="City / Country"
          className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition focus:border-[#1C398E] focus:ring-4 focus:ring-[#1C398E]/10"
        />
      </div>

      {error && (
        <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="w-full rounded-xl bg-[#F4180B] px-5 py-4 text-sm font-bold text-white shadow-lg shadow-[#F4180B]/20 transition hover:bg-[#d91408]"
      >
        Reveal My Score
      </button>

      <p className="text-center text-xs text-slate-400">
        By continuing, you agree to be contacted regarding
        your immigration assessment.
      </p>
    </form>
  );
}