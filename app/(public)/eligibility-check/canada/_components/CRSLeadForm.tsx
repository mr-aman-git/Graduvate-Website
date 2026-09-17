"use client";

import { useState } from "react";
import type { LeadData } from "../crs";
import { validateLead } from "../_lib/validation";

interface Props {
  onSubmit: (lead: LeadData) => void;
}

const initialLead: LeadData = {
  name: "",
  email: "",
  phone: "",
  location: "",
};

export default function CRSLeadForm({
  onSubmit,
}: Props) {
  const [lead, setLead] =
    useState<LeadData>(initialLead);

  const [error, setError] =
    useState<string | null>(null);

  const update = (
    key: keyof LeadData,
    value: string
  ) => {
    setLead((previous) => ({
      ...previous,
      [key]: value,
    }));
  };

  const handleSubmit = (
    event: React.FormEvent
  ) => {
    event.preventDefault();

    const validationError =
      validateLead(lead);

    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);

    /*
     * Frontend-only MVP:
     * The parent reveals the already-calculated
     * client-side score.
     */
    onSubmit(lead);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
    >
      <div className="mb-6">

        <h3 className="mt-2 text-2xl font-black text-slate-950">
          Reveal your CRS score
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Enter your details below to reveal your estimated score.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">
            Full name
          </label>

          <input
            value={lead.name}
            onChange={(e) =>
              update("name", e.target.value)
            }
            placeholder="Your full name"
            className="crs-input"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">
            Email address
          </label>

          <input
            type="email"
            value={lead.email}
            onChange={(e) =>
              update(
                "email",
                e.target.value
              )
            }
            placeholder="you@example.com"
            className="crs-input"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">
            Mobile number
          </label>

          <input
            type="tel"
            value={lead.phone}
            onChange={(e) =>
              update(
                "phone",
                e.target.value
              )
            }
            placeholder="+91 98765 43210"
            className="crs-input"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">
            Current location
          </label>

          <input
            value={lead.location}
            onChange={(e) =>
              update(
                "location",
                e.target.value
              )
            }
            placeholder="City, Country"
            className="crs-input"
          />
        </div>
      </div>

      {error && (
        <div className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold secondaryColor">
          {error}
        </div>
      )}

      <button
        type="submit"
        className="mt-6 w-full rounded-xl bg-[#E61C24] hover:bg-[#cc050c] px-6 py-4 text-sm font-black text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:shadow-xl"
      >
        Reveal My Score →
      </button>

      <p className="mt-4 text-center text-xs leading-5 text-slate-400">
        By continuing, you agree to be contacted by Graduvate
        regarding your immigration assessment.
      </p>
    </form>
  );
}