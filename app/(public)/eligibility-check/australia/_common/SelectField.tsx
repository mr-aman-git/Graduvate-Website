"use client";

import type { SelectHTMLAttributes } from "react";

interface SelectFieldProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  hint?: string;
  error?: string;
}

export default function SelectField({
  label,
  hint,
  error,
  children,
  ...props
}: SelectFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-slate-800">
        {label}
      </label>

      {hint && (
        <p className="text-xs text-slate-500">
          {hint}
        </p>
      )}

      <select
        {...props}
        className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition focus:border-[#1C398E] focus:ring-4 focus:ring-[#1C398E]/10 ${
          error
            ? "border-red-500"
            : "border-slate-200"
        }`}
      >
        {children}
      </select>

      {error && (
        <p className="text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}