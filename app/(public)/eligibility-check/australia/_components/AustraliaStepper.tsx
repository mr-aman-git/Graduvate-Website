"use client";

import { STEPS } from "../_lib/constants";

interface AustraliaStepperProps {
  currentStep: number;
}

export default function AustraliaStepper({
  currentStep,
}: AustraliaStepperProps) {
  return (
    <div className="mb-8">
      <div className="hidden items-center justify-between md:flex">
        {STEPS.map((step, index) => {
          const active = currentStep >= step.id;

          return (
            <div
              key={step.id}
              className="flex flex-1 items-center"
            >
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold transition ${
                    active
                      ? "bg-[#1C398E] text-white"
                      : "bg-slate-100 text-slate-400"
                  }`}
                >
                  {step.id}
                </div>

                <span
                  className={`mt-2 text-xs font-medium ${
                    active
                      ? "text-[#1C398E]"
                      : "text-slate-400"
                  }`}
                >
                  {step.title}
                </span>
              </div>

              {index < STEPS.length - 1 && (
                <div
                  className={`mx-2 h-px flex-1 ${
                    currentStep > step.id
                      ? "bg-[#1C398E]"
                      : "bg-slate-200"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="md:hidden">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold text-[#1C398E]">
            Step {currentStep} of {STEPS.length}
          </span>

          <span className="text-slate-500">
            {STEPS[currentStep - 1]?.title}
          </span>
        </div>
      </div>
    </div>
  );
}