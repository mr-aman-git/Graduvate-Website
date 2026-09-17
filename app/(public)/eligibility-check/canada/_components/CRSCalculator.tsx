"use client";

import { useMemo, useState } from "react";

import CRSStepper from "./CRSStepper";
import StepProfile from "./StepProfile";
import StepEducation from "./StepEducation";
import StepLanguage from "./StepLanguage";
import StepExperience from "./StepExperience";
import StepAdditional from "./StepAdditional";
import CRSResultGate from "./CRSResultGate";

import { calculateCRS } from "../_lib/calculator";
import { validateStep } from "../_lib/validation";

import type {
    CRSFormData,
    LeadData,
} from "../crs";

const initialData: CRSFormData = {
    age: 25,

    maritalStatus: "single",

    education: "bachelor",

    firstLanguage: {
        test: "IELTS",
        scores: {
            speaking: 7,
            listening: 8,
            reading: 7,
            writing: 7,
        },
    },

    secondLanguageEnabled: false,

    foreignWorkExperience: "three_plus",

    canadianWorkExperience: "none",

    canadianEducation: "none",

    siblingInCanada: false,

    provincialNomination: false,

    frenchNCLC: 0,
};

export default function CRSCalculator() {
    const [data, setData] =
        useState<CRSFormData>(initialData);

    const [currentStep, setCurrentStep] =
        useState(1);

    const [revealed, setRevealed] =
        useState(false);

    const [error, setError] =
        useState<string | null>(null);

    const result = useMemo(
        () => calculateCRS(data),
        [data]
    );

    const update = <K extends keyof CRSFormData>(
        key: K,
        value: CRSFormData[K]
    ) => {
        setData((previous) => ({
            ...previous,
            [key]: value,
        }));

        setError(null);
    };

    const nextStep = () => {
        const validationError =
            validateStep(currentStep, data);

        if (validationError) {
            setError(validationError);
            return;
        }

        setError(null);

        setCurrentStep((previous) =>
            Math.min(previous + 1, 6)
        );
    };

    const previousStep = () => {
        setError(null);

        setCurrentStep((previous) =>
            Math.max(previous - 1, 1)
        );
    };

    const revealScore = (lead: LeadData) => {
        /*
         * Frontend-only MVP.
         *
         * `lead` is currently not sent anywhere.
         *
         * Later you can replace this with:
         * await fetch("/api/...", ...)
         */
        console.log(
            "CRS lead submitted:",
            lead
        );

        setRevealed(true);
    };

    const restart = () => {
        setData(initialData);
        setCurrentStep(1);
        setRevealed(false);
        setError(null);
    };

    return (
        <div className="min-h-screen bg-slate-50">

            {/* Hero */}

            <div className="relative mx-auto max-w-7xl  text-center py-10 px-6">
                <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-wider primaryColor">
                    Canada Express Entry
                </span>

                <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                    Canada CRS Score
                    <span className="block secondaryColor">
                        Calculator
                    </span>
                </h1>

                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
                    Find out how strong your Express Entry profile could
                    be. Answer a few simple questions and get your
                    estimated CRS score.
                </p>
            </div>

            {/* Calculator */}
            <main className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
                <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
                    {/* Stepper */}
                    <div className="border-b border-slate-100 px-5 py-6 sm:px-8 lg:px-10">
                        <CRSStepper
                            currentStep={currentStep}
                        />
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-8 lg:p-10">
                        {currentStep === 1 && (
                            <StepProfile
                                data={data}
                                update={update}
                            />
                        )}

                        {currentStep === 2 && (
                            <StepEducation
                                data={data}
                                update={update}
                            />
                        )}

                        {currentStep === 3 && (
                            <StepLanguage
                                data={data}
                                update={update}
                            />
                        )}

                        {currentStep === 4 && (
                            <StepExperience
                                data={data}
                                update={update}
                            />
                        )}

                        {currentStep === 5 && (
                            <StepAdditional
                                data={data}
                                update={update}
                            />
                        )}

                        {currentStep === 6 && (
                            <CRSResultGate
                                result={result}
                                revealed={revealed}
                                onReveal={revealScore}
                            />
                        )}

                        {error && currentStep < 6 && (
                            <div className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold secondaryColor">
                                {error}
                            </div>
                        )}

                        {/* Navigation */}
                        {currentStep < 6 && (
                            <div className="mt-10 flex items-center justify-between border-t border-slate-100 pt-6">
                                <button
                                    type="button"
                                    onClick={previousStep}
                                    disabled={currentStep === 1}
                                    className="rounded-xl px-5 py-3 text-sm font-bold text-slate-600 transition hover:bg-slate-50 disabled:invisible"
                                >
                                    ← Back
                                </button>

                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="rounded-xl bg-[#E61C24] hover:bg-[#e40f16] px-7 py-3.5 text-sm font-black text-white transition hover:-translate-y-0.5 cursor-pointer"
                                >
                                    {currentStep === 5
                                        ? "View My Result →"
                                        : "Continue →"}
                                </button>
                            </div>
                        )}

                        {currentStep === 6 && revealed && (
                            <button
                                type="button"
                                onClick={restart}
                                className="mx-auto mt-8 block rounded-xl border border-slate-200 px-6 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
                            >
                                ↻ Calculate Again
                            </button>
                        )}
                    </div>
                </div>

                <div className="mx-auto mt-6 max-w-3xl text-center">
                    <p className="text-xs leading-5 text-slate-400">
                        Graduvate's calculator is an estimate for informational
                        purposes. It does not constitute immigration advice or
                        an official IRCC assessment.
                    </p>
                </div>
            </main>
        </div>
    );
}