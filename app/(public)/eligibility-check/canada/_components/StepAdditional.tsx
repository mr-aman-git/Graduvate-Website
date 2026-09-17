"use client";

import type { CRSFormData } from "../crs";

interface Props {
    data: CRSFormData;
    update: <K extends keyof CRSFormData>(
        key: K,
        value: CRSFormData[K]
    ) => void;
}

export default function StepAdditional({
    data,
    update,
}: Props) {
    const updateSpouse = (
        field: keyof NonNullable<CRSFormData["spouse"]>,
        value: string | number
    ) => {
        update("spouse", {
            education:
                data.spouse?.education ??
                "high_school",

            languageCLB:
                data.spouse?.languageCLB ?? 0,

            canadianWork:
                data.spouse?.canadianWork ??
                "none",

            [field]: value,
        } as CRSFormData["spouse"]);
    };

    return (
        <div className="space-y-7">
            <div>
                <p className="text-sm font-bold uppercase tracking-wider text-red-600">
                    Step 05
                </p>

                <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">
                    Additional factors
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                    A few additional factors can affect your estimated CRS
                    score.
                </p>
            </div>

            <div className="space-y-3">
                <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200">
                    <div>
                        <p className="text-sm font-bold text-slate-800">
                            Sibling in Canada
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                            Brother or sister who meets the applicable Canadian
                            status requirements.
                        </p>
                    </div>

                    <input
                        type="checkbox"
                        checked={data.siblingInCanada}
                        onChange={(e) =>
                            update(
                                "siblingInCanada",
                                e.target.checked
                            )
                        }
                        className="h-5 w-5"
                    />
                </label>

                <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200">
                    <div>
                        <p className="text-sm font-bold text-slate-800">
                            Provincial / Territorial nomination
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                            Select only if you have a qualifying nomination.
                        </p>
                    </div>

                    <input
                        type="checkbox"
                        checked={data.provincialNomination}
                        onChange={(e) =>
                            update(
                                "provincialNomination",
                                e.target.checked
                            )
                        }
                        className="h-5 w-5"
                    />
                </label>
            </div>

            <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                    French NCLC level
                </label>

                <select
                    value={data.frenchNCLC}
                    onChange={(e) =>
                        update(
                            "frenchNCLC",
                            Number(e.target.value)
                        )
                    }
                    className="crs-input"
                >
                    <option value={0}>
                        No qualifying French result
                    </option>

                    <option value={4}>NCLC 4</option>
                    <option value={5}>NCLC 5</option>
                    <option value={6}>NCLC 6</option>
                    <option value={7}>NCLC 7+</option>
                    <option value={8}>NCLC 8+</option>
                    <option value={9}>NCLC 9+</option>
                </select>
            </div>

            {data.maritalStatus === "married" && (
                <div className="rounded-3xl border border-blue-100 bg-blue-50 p-5 sm:p-6">
                    <h3 className="text-lg font-black text-blue-950">
                        Spouse / partner information
                    </h3>

                    <div className="mt-5 space-y-5">
                        <div>
                            <label className="mb-2 block text-sm font-bold text-slate-700">
                                Spouse's education
                            </label>

                            <select
                                value={
                                    data.spouse?.education ??
                                    "high_school"
                                }
                                onChange={(e) =>
                                    updateSpouse(
                                        "education",
                                        e.target.value
                                    )
                                }
                                className="crs-input"
                            >
                                <option value="high_school">
                                    High school
                                </option>

                                <option value="one_year">
                                    One-year credential
                                </option>

                                <option value="two_year">
                                    Two-year credential
                                </option>

                                <option value="bachelor">
                                    Bachelor's / 3+ year
                                </option>

                                <option value="two_or_more">
                                    Two or more credentials
                                </option>

                                <option value="masters">
                                    Master's
                                </option>

                                <option value="phd">
                                    PhD
                                </option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-bold text-slate-700">
                                Spouse's language CLB
                            </label>

                            <select
                                value={
                                    data.spouse?.languageCLB ??
                                    0
                                }
                                onChange={(e) =>
                                    updateSpouse(
                                        "languageCLB",
                                        Number(e.target.value)
                                    )
                                }
                                className="crs-input"
                            >
                                <option value={0}>
                                    Below CLB 5
                                </option>

                                <option value={5}>
                                    CLB 5–6
                                </option>

                                <option value={7}>
                                    CLB 7–8
                                </option>

                                <option value={9}>
                                    CLB 9+
                                </option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-bold text-slate-700">
                                Spouse's Canadian work experience
                            </label>

                            <select
                                value={
                                    data.spouse?.canadianWork ??
                                    "none"
                                }
                                onChange={(e) =>
                                    updateSpouse(
                                        "canadianWork",
                                        e.target.value
                                    )
                                }
                                className="crs-input"
                            >
                                <option value="none">
                                    None / less than 1 year
                                </option>

                                <option value="one">
                                    1 year
                                </option>

                                <option value="two">
                                    2 years
                                </option>

                                <option value="three">
                                    3 years
                                </option>

                                <option value="four">
                                    4 years
                                </option>

                                <option value="five_plus">
                                    5+ years
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}