
"use client";
import Image from "next/image";
import { LuChevronRight } from "react-icons/lu";

const courses = [
    {
        title: "MSc Advanced Computer Science with Business",
        university: "University of Exeter",
        logo: "https://strapi-assets.edvoy.com/live/images/institutions/university-of-exeter-logo.svg?w=96&q=80",
    },
    {
        title: "MSc (PGCert PGDip) Data Analytics",
        university: "University of Brighton",
        logo: "https://strapi-assets.edvoy.com/live/images/institutions/university-of-exeter-logo.svg?w=96&q=80",
    },
    {
        title: "MSc Advanced Computer Science",
        university: "University of Liverpool",
        logo: "https://strapi-assets.edvoy.com/live/images/institutions/university-of-exeter-logo.svg?w=96&q=80",
    },
    {
        title: "MSc Health Research Methods",
        university: "University of Exeter",
        logo: "https://strapi-assets.edvoy.com/live/images/institutions/university-of-exeter-logo.svg?w=96&q=80",
    },
    {
        title: "MSc/PGDip/PGCert Computing Science",
        university: "University of Glasgow",
        logo: "https://strapi-assets.edvoy.com/live/images/institutions/university-of-exeter-logo.svg?w=96&q=80",
    },
];

const subjects = [
    "Computer Sciences",
    "Artificial Intelligence",
    "Business",
    "Cyber Security",
    "Health care",
    "Data Sciences and Big Data",
    "Finance",
    "Emergency Medicine",
    "Business Administration",
    "Engineering And Technology",
];

const countries = [
    { name: "United Kingdom", flag: "https://img.freepik.com/free-vector/illustration-uk-flag_53876-18166.jpg?semt=ais_rp_progressive&w=740&q=80" },
    { name: "Ireland", flag: "https://img.freepik.com/free-vector/illustration-uk-flag_53876-18166.jpg?semt=ais_rp_progressive&w=740&q=80" },
    { name: "United States", flag: "https://img.freepik.com/free-vector/illustration-uk-flag_53876-18166.jpg?semt=ais_rp_progressive&w=740&q=80" },
    { name: "Canada", flag: "https://img.freepik.com/free-vector/illustration-uk-flag_53876-18166.jpg?semt=ais_rp_progressive&w=740&q=80" },
    { name: "New Zealand", flag: "https://img.freepik.com/free-vector/illustration-uk-flag_53876-18166.jpg?semt=ais_rp_progressive&w=740&q=80" },
    { name: "Australia", flag: "https://img.freepik.com/free-vector/illustration-uk-flag_53876-18166.jpg?semt=ais_rp_progressive&w=740&q=80" },
    { name: "Switzerland", flag: "https://img.freepik.com/free-vector/illustration-uk-flag_53876-18166.jpg?semt=ais_rp_progressive&w=740&q=80" },
];
// ... (keep your courses, subjects, and countries arrays as they were)

export const CoursesMenu = () => {
    return (
        // Added pt-5 to bridge the gap between trigger and menu
        <div className="absolute -left-40 top-full pt-1 w-175 z-50">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 flex gap-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                {/* Left Side: Courses */}
                <div className="w-3/5">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
                        Top Courses
                    </h3>
                    <div className="space-y-6">
                        {courses.map((course, i) => (
                            <div key={i} className="flex gap-4 group cursor-pointer">
                                <div className="relative h-12 w-12 shrink-0">
                                    <Image
                                        src={course.logo}
                                        fill
                                        alt="logo"
                                        className="rounded-lg object-contain border p-1 group-hover:border-red-600 transition-colors"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 text-sm group-hover:text-red-600 transition-colors line-clamp-1">
                                        {course.title}
                                    </p>
                                    <p className="text-gray-500 text-xs mt-0.5">{course.university}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="flex items-center gap-2 text-blue-900 mt-8 text-sm font-bold hover:gap-3 transition-all">
                        See all courses <LuChevronRight />
                    </button>
                </div>

                {/* Right Side: Subjects */}
                <div className="w-2/5 border-l border-gray-100 pl-8">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
                        Popular Subjects
                    </h3>
                    <div className="grid grid-cols-1 gap-y-3">
                        {subjects.map((item, i) => (
                            <p key={i} className="text-gray-600 text-[14px] hover:text-red-600 hover:translate-x-1 transition-all cursor-pointer flex items-center gap-2">
                                {item}
                            </p>
                        ))}
                    </div>
                    <button className="flex items-center gap-2 text-blue-900 mt-8 text-sm font-bold hover:gap-3 transition-all">
                        Browse all <LuChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export const CountriesMenu = () => {
    return (
        <div className="absolute -left-10 top-full pt-1 w-72 z-50">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 animate-in fade-in zoom-in-95 duration-200">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Study Destinations</h3>
                <div className="space-y-1">
                    {countries.map((country, i) => (
                        <div key={i} className="flex items-center justify-between p-2 hover:bg-purple-50 rounded-xl cursor-pointer group transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="relative w-8 h-5 overflow-hidden rounded-sm">
                                    <Image src={country.flag} fill className="object-cover" alt={country.name} />
                                </div>
                                <p className="text-sm font-medium text-gray-700 group-hover:text-red-600">{country.name}</p>
                            </div>
                            <span className="text-gray-300 group-hover:text-red-600 opacity-0 group-hover:opacity-100 transition-all">
                                <LuChevronRight />
                            </span>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};