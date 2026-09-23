interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  onBack: () => void;
  onNext: () => void;
}

export default function FormNavigation({
  currentStep,
  totalSteps,
  onBack,
  onNext,
}: FormNavigationProps) {
  return (
    <div className="mt-8 flex items-center justify-between gap-4">
      <button
        type="button"
        onClick={onBack}
        disabled={currentStep === 1}
        className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Back
      </button>

      <button
        type="button"
        onClick={onNext}
        className="rounded-xl bg-[#1C398E] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1C398E]/20 transition hover:bg-[#152d73]"
      >
        {currentStep === totalSteps
          ? "Calculate My Score"
          : "Continue"}
      </button>
    </div>
  );
}