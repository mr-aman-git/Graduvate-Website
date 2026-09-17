"use client";

import type { CRSFormData } from "../crs";

interface Props {
    data: CRSFormData;
    update: <K extends keyof CRSFormData>(
        key: K,
        value: CRSFormData[K]
    ) => void;
}

export default function StepExperience({
    data,
    update,
}: Props) {
    return (
        <div className="space-y-7">
            <div>
                <p className="text-sm font-bold uppercase tracking-wider text-red-600">
                    Step 04
                </p>

                <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">
                    Your work experience
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                    Work experience can affect both core CRS points and
                    skill-transferability points.
                </p>
            </div>

            <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                    Foreign skilled work experience
                </label>

                <select
                    value={data.foreignWorkExperience}
                    onChange={(e) =>
                        update(
                            "foreignWorkExperience",
                            e.target.value as CRSFormData["foreignWorkExperience"]
                        )
                    }
                    className="crs-input"
                >
                    <option value="none">
                        None
                    </option>

                    <option value="one_two">
                        1–2 years
                    </option>

                    <option value="three_plus">
                        3+ years
                    </option>
                </select>
            </div>

            <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                    Canadian skilled work experience
                </label>

                <select
                    value={data.canadianWorkExperience}
                    onChange={(e) =>
                        update(
                            "canadianWorkExperience",
                            e.target.value as CRSFormData["canadianWorkExperience"]
                        )
                    }
                    className="crs-input"
                >
                    <option value="none">
                        None / less than 1 year
                    </option>

                    <option value="one">1 year</option>
                    <option value="two">2 years</option>
                    <option value="three">3 years</option>
                    <option value="four">4 years</option>
                    <option value="five_plus">
                        5+ years
                    </option>
                </select>
            </div>

            <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                    Canadian education
                </label>

                <select
                    value={data.canadianEducation}
                    onChange={(e) =>
                        update(
                            "canadianEducation",
                            e.target.value as CRSFormData["canadianEducation"]
                        )
                    }
                    className="crs-input"
                >
                    <option value="none">
                        None
                    </option>

                    <option value="one_two_year">
                        1–2 year Canadian credential
                    </option>

                    <option value="three_plus">
                        3+ year Canadian credential
                    </option>
                </select>
            </div>

            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
                <p className="text-sm font-bold text-amber-900">
                    Job offer note
                </p>

                <p className="mt-1 text-xs leading-5 text-amber-800">
                    A job offer is not being awarded the old 50/200 CRS
                    bonus in this calculator.
                </p>
            </div>
        </div>
    );
}