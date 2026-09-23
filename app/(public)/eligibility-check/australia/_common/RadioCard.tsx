"use client";

interface RadioCardProps {
  label: string;
  description?: string;
  selected: boolean;
  onClick: () => void;
  badge?: string;
}

export default function RadioCard({
  label,
  description,
  selected,
  onClick,
  badge,
}: RadioCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative w-full rounded-2xl border p-4 text-left transition-all ${
        selected
          ? "border-[#1C398E] bg-[#1C398E]/5 shadow-sm"
          : "border-slate-200 bg-white hover:border-[#1C398E]/40"
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
            selected
              ? "border-[#1C398E]"
              : "border-slate-300"
          }`}
        >
          {selected && (
            <div className="h-2.5 w-2.5 rounded-full bg-[#1C398E]" />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <p className="font-semibold text-slate-900">
              {label}
            </p>

            {badge && (
              <span className="rounded-full bg-[#F4180B]/10 px-2.5 py-1 text-xs font-bold text-[#F4180B]">
                {badge}
              </span>
            )}
          </div>

          {description && (
            <p className="mt-1 text-sm text-slate-500">
              {description}
            </p>
          )}
        </div>
      </div>
    </button>
  );
}