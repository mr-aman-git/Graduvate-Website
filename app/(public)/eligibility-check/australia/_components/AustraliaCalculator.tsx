"use client";

import { useMemo, useState } from "react";

import AustraliaStepper from "./AustraliaStepper";
import AustraliaResultGate from "./AustraliaResultGate";

import StepProfile from "./StepProfile";
import StepEnglish from "./StepEnglish";
import StepEducation from "./StepEducation";
import StepExperience from "./StepExperience";
import StepStudy from "./StepStudy";
import StepSpecialist from "./StepSpecialist";
import StepPartner from "./StepPartner";
import StepNomination from "./StepNomination";

import ProgressBar from "../_common/ProgressBar";
import FormNavigation from "../_common/FormNavigation";

import { calculateAustraliaPoints } from "../_lib/calculator";

import { validateAustraliaStep } from "../_lib/validation";

import type { AustraliaFormData } from "../australia";

const TOTAL_STEPS = 8;

const INITIAL_DATA: AustraliaFormData = {
    visa: "",
    age: "",
    englishLevel: "none",
    englishTest: "",
    education: "none",
    overseasExperience: "none",
    australianExperience: "none",
    australianStudy: false,
    regionalStudy: false,
    specialistEducation: false,
    professionalYear: false,
    communityLanguage: false,
    partnerStatus: "single",
};

export default function AustraliaCalculator() {
    const [step, setStep] = useState(1);

    const [data, setData] =
        useState<AustraliaFormData>(INITIAL_DATA);

    const [error, setError] = useState("");

    const [showResult, setShowResult] = useState(false);

    /*
     * Calculate score whenever form data changes.
     *
     * The calculation logic itself lives inside:
     * lib/australia/calculator.ts
     */
    const score = useMemo(() => {
        return calculateAustraliaPoints(data);
    }, [data]);

    /*
     * Update any form field
     */
    function updateData(
        values: Partial<AustraliaFormData>
    ) {
        setData((previous) => ({
            ...previous,
            ...values,
        }));

        setError("");
    }

    /*
     * Continue to next step
     */
    function handleNext() {
        const validationError =
            validateAustraliaStep(step, data);

        if (validationError) {
            setError(validationError);
            return;
        }

        setError("");

        /*
         * Last step
         * Show result gate
         */
        if (step === TOTAL_STEPS) {
            setShowResult(true);
            return;
        }

        setStep((previous) => previous + 1);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    /*
     * Go back
     */
    function handleBack() {
        if (step === 1) {
            return;
        }

        setError("");

        setStep((previous) => previous - 1);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    /*
     * After completing all steps,
     * show the result gate.
     */
    if (showResult) {
        return (
            <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
                <AustraliaResultGate score={score} />
            </div>
        );
    }

    return (
        <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-8">

            {/* =========================
          HEADER
      ========================== */}

            <div className="mb-10 text-center">

                <div className="mb-4 inline-flex rounded-full bg-[#1C398E]/10 px-4 py-2 text-xs font-bold text-[#1C398E]">
                    Australia Skilled Migration
                </div>

                <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                    Australia Points Calculator
                </h1>

                <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500">
                    Calculate your indicative points score for
                    Australia&apos;s points-tested skilled migration
                    pathways.
                </p>

            </div>

            {/* =========================
          STEPPER
      ========================== */}

            <AustraliaStepper
                currentStep={step}
            />

            {/* =========================
          PROGRESS BAR
      ========================== */}

            <ProgressBar
                current={step}
                total={TOTAL_STEPS}
            />

            {/* =========================
          FORM CONTAINER
      ========================== */}

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/30 sm:p-8">

                {/* STEP 1 */}

                {step === 1 && (
                    <StepProfile
                        data={data}
                        updateData={updateData}
                    />
                )}

                {/* STEP 2 */}

                {step === 2 && (
                    <StepEnglish
                        data={data}
                        updateData={updateData}
                    />
                )}

                {/* STEP 3 */}

                {step === 3 && (
                    <StepEducation
                        data={data}
                        updateData={updateData}
                    />
                )}

                {/* STEP 4 */}

                {step === 4 && (
                    <StepExperience
                        data={data}
                        updateData={updateData}
                    />
                )}

                {/* STEP 5 */}

                {step === 5 && (
                    <StepStudy
                        data={data}
                        updateData={updateData}
                    />
                )}

                {/* STEP 6 */}

                {step === 6 && (
                    <StepSpecialist
                        data={data}
                        updateData={updateData}
                    />
                )}

                {/* STEP 7 */}

                {step === 7 && (
                    <StepPartner
                        data={data}
                        updateData={updateData}
                    />
                )}

                {/* STEP 8 */}

                {step === 8 && (
                    <StepNomination
                        data={data}
                        updateData={updateData}
                    />
                )}

                {/* =========================
            VALIDATION ERROR
        ========================== */}

                {error && (
                    <div className="mt-6 rounded-xl border border-red-100 bg-red-50 p-4 text-sm font-medium text-red-600">
                        {error}
                    </div>
                )}

                {/* =========================
            BACK / NEXT
        ========================== */}

                <FormNavigation
                    currentStep={step}
                    totalSteps={TOTAL_STEPS}
                    onBack={handleBack}
                    onNext={handleNext}
                />

            </div>

            {/* =========================
          DISCLAIMER
      ========================== */}

            <p className="mt-6 text-center text-xs leading-5 text-slate-400">
                This calculator provides an indicative points
                assessment only and is not immigration or legal
                advice.
            </p>

        </div>
    );
}