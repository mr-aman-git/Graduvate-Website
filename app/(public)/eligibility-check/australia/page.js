import AustraliaCalculator from "./_components/AustraliaCalculator";

export const metadata = {
  title: "Australia Points Calculator | Graduvate",
  description:
    "Calculate your indicative Australia skilled migration points score.",
};

export default function AustraliaPointsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <AustraliaCalculator />
    </main>
  );
}
