"use client";

import { STEPS } from "../_lib/constants";

interface CRSStepperProps {
  currentStep: number;
}

export default function CRSStepper({
  currentStep,
}: CRSStepperProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {STEPS.map((step, index) => {
          const stepNumber = index + 1;

          const active =
            stepNumber === currentStep;

          const completed =
            stepNumber < currentStep;

          return (
            <div
              key={step.id}
              className="flex flex-1 items-center"
            >
              <div className="flex flex-col items-center">
                <div
                  className={[
                    "flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold transition-all",
                    completed || active
                      ? "bg-[#0B4FD8] text-white shadow-lg shadow-blue-700/20"
                      : "bg-slate-100 text-slate-400",
                  ].join(" ")}
                >
                  {completed ? "✓" : stepNumber}
                </div>

                <span
                  className={[
                    "mt-2 hidden text-xs font-semibold sm:block",
                    active
                      ? "primaryColor"
                      : "text-slate-400",
                  ].join(" ")}
                >
                  {step.title}
                </span>
              </div>

              {index < STEPS.length - 1 && (
                <div
                  className={[
                    "mx-2 h-0.5 flex-1 transition-colors",
                    completed
                      ? "bg-[#0B4FD8]"
                      : "bg-slate-100",
                  ].join(" ")}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}