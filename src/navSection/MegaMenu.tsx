"use client";

import Image from "next/image";
import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";
import {
    coursesList,
    courseSubjects,
    FlagItem,
} from "./navData";

interface MenuProps {
    onClose?: () => void;
}

/* Reusable Country / Flag List */
export const CountryCardList = ({
    items,
    onClose,
}: {
    items: FlagItem[];
    onClose?: () => void;
}) => (
    <div className="space-y-1">
        {items.map((country) => (
            <Link
                href={country.link}
                key={country.name}
                onClick={onClose}
                className="group flex items-center justify-between rounded-xl p-2.5 transition-colors hover:bg-blue-50/60"
            >
                <div className="flex min-w-0 items-center gap-3">
                    <div className="relative h-5 w-8 shrink-0 overflow-hidden rounded-sm border border-gray-200/60">
                        <Image
                            src={country.flag}
                            fill
                            sizes="32px"
                            alt={country.name}
                            className="object-cover"
                        />
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-blue-900 transition-colors">
                        {country.name}
                    </span>
                </div>
                <LuChevronRight
                    size={16}
                    className="shrink-0 text-gray-300 opacity-0 transition-all group-hover:text-blue-900 group-hover:opacity-100 max-md:opacity-100"
                />
            </Link>
        ))}
    </div>
);

/* Country Dropdown Wrapper */
export const FlagDropdownMenu = ({
    title,
    items,
    onClose,
}: {
    title: string;
    items: FlagItem[];
    onClose?: () => void;
}) => (
    <div className="absolute left-0 top-full z-50 w-72 pt-2 animate-in fade-in slide-in-from-top-1 duration-200">
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-2xl ring-1 ring-black/5">
            <h3 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-gray-400">
                {title}
            </h3>
            <CountryCardList items={items} onClose={onClose} />
        </div>
    </div>
);

/* Courses Mega Dropdown */
export const CoursesMenu = ({ onClose }: MenuProps) => {
    return (
        <div className="absolute lg:left-1/2 left-85 z-50 w-170 -translate-x-1/2 pt-2 animate-in fade-in slide-in-from-top-1 duration-200">
            <div className="flex flex-wrap lg:flex-nowrap gap-8 rounded-2xl border border-gray-100 bg-white p-7 shadow-2xl ring-1 ring-black/5">
                {/* Left Side: Courses */}
                <div className="w-3/5">
                    <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                        Top Courses
                    </h3>
                    <div className="space-y-4">
                        {coursesList.map((course) => (
                            <Link
                                href={course.href || "/courses"}
                                key={course.title}
                                onClick={onClose}
                                className="group flex items-center gap-3.5 rounded-xl p-2 transition-colors hover:bg-slate-50"
                            >
                                <div className="relative h-11 w-11 shrink-0 rounded-lg border border-gray-100 p-1 bg-white">
                                    <Image
                                        src={course.logo}
                                        fill
                                        sizes="44px"
                                        alt={course.university}
                                        className="object-contain p-1"
                                    />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-900 transition-colors">
                                        {course.title}
                                    </p>
                                    <p className="text-xs text-gray-500">{course.university}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right Side: Popular Streams */}
                <div className="w-2/5 border-l border-gray-100 pl-6">
                    <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                        Popular Streams
                    </h3>
                    <div className="space-y-2.5">
                        {courseSubjects.map((subject) => (
                            <Link
                                key={subject}
                                href="/courses"
                                onClick={onClose}
                                className="block text-xs font-medium text-gray-600 transition-all hover:translate-x-1 hover:text-blue-900"
                            >
                                {subject}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};