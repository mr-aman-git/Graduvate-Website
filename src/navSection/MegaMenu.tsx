"use client";

import Image from "next/image";
import { LuChevronRight, LuX } from "react-icons/lu";

interface MenuProps {
    onClose?: () => void;
}

interface Country {
    name: string;
    flag: string;
}

interface Course {
    title: string;
    university: string;
    logo: string;
}

const courses: Course[] = [
    {
        title: "MSc Advanced Computer Science with Business",
        university: "University of Exeter",
        logo: "https://strapi-assets.edvoy.com/live/images/institutions/university-of-exeter-logo.svg?w=96&q=80",
    },
    {
        title: "MSc (PGCert PGDip) Data Analytics",
        university: "University of Brighton",
        logo: "https://strapi-assets.edvoy.com/live/images/institutions/university-of-brighton-logo.svg?w=96&q=80",
    },
    {
        title: "MSc Advanced Computer Science",
        university: "University of Liverpool",
        logo: "https://strapi-assets.edvoy.com/live/images/institutions/university-of-liverpool-logo.svg?w=96&q=80",
    },
    {
        title: "MSc Health Research Methods",
        university: "University of Exeter",
        logo: "https://strapi-assets.edvoy.com/live/images/institutions/university-of-exeter-logo.svg?w=96&q=80",
    },
    {
        title: "MSc/PGDip/PGCert Computing Science",
        university: "University of Glasgow",
        logo: "https://strapi-assets.edvoy.com/live/images/institutions/university-of-glasgow-logo.svg?w=96&q=80",
    },
];

const subjects: string[] = [
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

const countries: Country[] = [
    {
        name: "United Kingdom",
        flag: "https://img.freepik.com/free-vector/illustration-uk-flag_53876-18166.jpg?semt=ais_rp_progressive&w=740&q=80",
    },
    {
        name: "United States",
        flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
    },
    {
        name: "Canada",
        flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg",
    },
    {
        name: "Germany",
        flag: "https://img.freepik.com/free-vector/illustration-german-flag_53876-27101.jpg?semt=ais_rp_50_assets&w=740&q=80",
    },
    {
        name: "New Zealand",
        flag: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg",
    },
    {
        name: "Australia",
        flag: "https://img.magnific.com/premium-photo/flag-australia_406939-4447.jpg?semt=ais_test_b&w=740&q=80",
    },
    {
        name: "Ireland",
        flag: "https://cdn.britannica.com/33/1733-050-04264811/FLAG-Ireland.jpg",
    },
    {
        name: "Netherland",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/330px-Flag_of_the_Netherlands.svg.png",
    },
    {
        name: "France",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/960px-Flag_of_France.svg.png",
    },
    {
        name: "Europe",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/960px-Flag_of_Europe.svg.png",
    },
];

const prGlobal: Country[] = [
    {
        name: "Canada",
        flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg",
    },
    {
        name: "Australia",
        flag: "https://img.magnific.com/premium-photo/flag-australia_406939-4447.jpg?semt=ais_test_b&w=740&q=80",
    },
    {
        name: "Europe",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/960px-Flag_of_Europe.svg.png",
    },
];

const visaGlobal: Country[] = [
    {
        name: "United Kingdom",
        flag: "https://img.freepik.com/free-vector/illustration-uk-flag_53876-18166.jpg?semt=ais_rp_progressive&w=740&q=80",
    },
    {
        name: "Canada",
        flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg",
    },
    {
        name: "Australia",
        flag: "https://img.magnific.com/premium-photo/flag-australia_406939-4447.jpg?semt=ais_test_b&w=740&q=80",
    },
    {
        name: "Europe",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/960px-Flag_of_Europe.svg.png",
    },
];

/* =====================================================
   MOBILE HEADER
===================================================== */

interface MobileHeaderProps {
    title: string;
    onClose?: () => void;
}

const MobileMenuHeader = ({
    title,
    onClose,
}: MobileHeaderProps) => {
    return (
        <div className="md:hidden sticky top-0 z-20 flex items-center justify-between bg-white border-b border-gray-100 px-5 py-4">
            <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
                    Menu
                </p>

                <h2 className="text-lg font-bold text-gray-900 mt-0.5">
                    {title}
                </h2>
            </div>

            {/* <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition active:scale-95"
            >
                <LuX size={20} />
            </button> */}
        </div>
    );
};

/* =====================================================
   COURSES MENU
===================================================== */

export const CoursesMenu = ({
    onClose,
}: MenuProps) => {
    return (
        <div
            className="
                absolute left-1/2 top-full z-50 w-[700px]
                -translate-x-1/2 pt-2

                md:block

                max-md:fixed
                max-md:inset-0
                max-md:h-[100dvh]
                max-md:w-full
                max-md:translate-x-0
                max-md:pt-0
                max-md:overflow-y-auto
                max-md:bg-white
            "
        >
            <div
                className="
                    flex gap-10
                    overflow-hidden
                    rounded-2xl
                    border border-gray-100
                    bg-white
                    p-8
                    shadow-2xl

                    max-md:min-h-full
                    max-md:block
                    max-md:rounded-none
                    max-md:border-0
                    max-md:p-0
                    max-md:shadow-none
                "
            >
                {/* MOBILE HEADER */}

                <MobileMenuHeader
                    title="Courses"
                    onClose={onClose}
                />

                {/* COURSES */}

                <div
                    className="
                        w-3/5

                        max-md:w-full
                        max-md:px-5
                        max-md:py-6
                    "
                >
                    <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-gray-400">
                        Top Courses
                    </h3>

                    <div className="space-y-5">
                        {courses.map((course) => (
                            <div
                                key={course.title}
                                className="group flex cursor-pointer gap-3.5"
                            >
                                <div className="relative h-11 w-11 shrink-0">
                                    <Image
                                        src={course.logo}
                                        fill
                                        sizes="44px"
                                        alt={course.university}
                                        className="
                                            rounded-lg
                                            border
                                            border-gray-100
                                            object-contain
                                            p-1
                                            transition-colors
                                            group-hover:border-red-600
                                        "
                                    />
                                </div>

                                <div className="min-w-0">
                                    <p className="line-clamp-2 text-sm font-semibold leading-5 text-gray-900 transition-colors group-hover:text-red-600">
                                        {course.title}
                                    </p>

                                    <p className="mt-0.5 text-xs text-gray-500">
                                        {course.university}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        type="button"
                        className="mt-7 flex items-center gap-2 text-sm font-bold text-blue-900 transition-all hover:gap-3"
                    >
                        See all courses
                        <LuChevronRight size={17} />
                    </button>
                </div>

                {/* SUBJECTS */}

                <div
                    className="
                        w-2/5
                        border-l
                        border-gray-100
                        pl-8

                        max-md:w-full
                        max-md:border-l-0
                        max-md:border-t
                        max-md:px-5
                        max-md:py-6
                    "
                >
                    <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-gray-400">
                        Popular Subjects
                    </h3>

                    <div
                        className="
                            grid grid-cols-1 gap-y-3

                            max-md:grid-cols-2
                            max-md:gap-x-6
                            max-md:gap-y-3
                        "
                    >
                        {subjects.map((subject) => (
                            <p
                                key={subject}
                                className="cursor-pointer text-[14px] leading-5 text-gray-600 transition-all hover:translate-x-1 hover:text-red-600"
                            >
                                {subject}
                            </p>
                        ))}
                    </div>

                    <button
                        type="button"
                        className="mt-7 flex items-center gap-2 text-sm font-bold text-blue-900 transition-all hover:gap-3"
                    >
                        Browse all
                        <LuChevronRight size={17} />
                    </button>
                </div>
            </div>
        </div>
    );
};

/* =====================================================
   COUNTRY LIST
===================================================== */

interface CountryListProps {
    items: Country[];
}

const CountryList = ({
    items,
}: CountryListProps) => {
    return (
        <div className="space-y-1">
            {items.map((country) => (
                <div
                    key={country.name}
                    className="
                        group
                        flex
                        cursor-pointer
                        items-center
                        justify-between
                        rounded-xl
                        p-2.5
                        transition-colors
                        hover:bg-purple-50
                    "
                >
                    <div className="flex min-w-0 items-center gap-3">
                        <div className="relative h-5 w-8 shrink-0 overflow-hidden rounded-sm">
                            <Image
                                src={country.flag}
                                fill
                                sizes="32px"
                                alt={country.name}
                                className="object-cover"
                            />
                        </div>

                        <p className="text-sm font-medium text-gray-700 transition-colors group-hover:text-red-600">
                            {country.name}
                        </p>
                    </div>

                    <LuChevronRight
                        size={17}
                        className="
                            shrink-0
                            text-gray-300
                            opacity-0
                            transition-all
                            group-hover:text-red-600
                            group-hover:opacity-100

                            max-md:opacity-100
                        "
                    />
                </div>
            ))}
        </div>
    );
};

/* =====================================================
   GENERIC COUNTRY MENU
===================================================== */

interface CountryMenuProps {
    title: string;
    items: Country[];
    onClose?: () => void;
}

const CountryMenu = ({
    title,
    items,
    onClose,
}: CountryMenuProps) => {
    return (
        <div
            className="
                absolute left-0 top-full z-50 w-72 pt-2

                max-md:fixed
                max-md:inset-0
                max-md:h-dvh
                max-md:w-full
                max-md:pt-0
                max-md:overflow-y-auto
                max-md:bg-white
            "
        >
            <div
                className="
                    rounded-2xl
                    border
                    border-gray-100
                    bg-white
                    p-6
                    shadow-2xl

                    max-md:min-h-full
                    max-md:rounded-none
                    max-md:border-0
                    max-md:p-0
                    max-md:shadow-none
                "
            >
                <MobileMenuHeader
                    title={title}
                    onClose={onClose}
                />

                <div className="max-md:px-5 max-md:py-6">
                    <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400 max-md:hidden">
                        {title}
                    </h3>

                    <CountryList items={items} />
                </div>
            </div>
        </div>
    );
};

/* =====================================================
   STUDY DESTINATIONS
===================================================== */

export const CountriesMenu = ({
    onClose,
}: MenuProps) => {
    return (
        <CountryMenu
            title="Study Destinations"
            items={countries}
            onClose={onClose}
        />
    );
};

/* =====================================================
   PR GLOBAL
===================================================== */

export const CountriesPRGlobal = ({
    onClose,
}: MenuProps) => {
    return (
        <CountryMenu
            title="PR Global"
            items={prGlobal}
            onClose={onClose}
        />
    );
};

/* =====================================================
   VISA GLOBAL
===================================================== */

export const CountriesVisaGlobal = ({
    onClose,
}: MenuProps) => {
    return (
        <CountryMenu
            title="Visa Global"
            items={visaGlobal}
            onClose={onClose}
        />
    );
};