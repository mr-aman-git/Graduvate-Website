export interface NavItemLink {
    label: string;
    href: string;
    badge?: string;
}

export interface FlagItem {
    name: string;
    link: string;
    flag: string;
}

export interface CourseItem {
    title: string;
    university: string;
    logo: string;
    href?: string;
}

/* ================= SIMPLE TEXT DROPDOWNS ================= */
export const aboutUsLinks: NavItemLink[] = [
    { label: "Free Eligibility Check", href: "/" },
    { label: "About Our Story", href: "/" },
    { label: "Contact Us", href: "/" },
];

/* ================= COURSES MEGA MENU DATA ================= */
export const coursesList: CourseItem[] = [
    {
        title: "IELTS Preparation",
        university: "University of Exeter Accredited",
        logo: "https://strapi-assets.edvoy.com/live/images/institutions/university-of-exeter-logo.svg?w=96&q=80",
        href: "/",
    },
    {
        title: "PTE Academic",
        university: "University of Brighton Certified",
        logo: "https://strapi-assets.edvoy.com/live/images/institutions/university-of-brighton-logo.svg?w=96&q=80",
        href: "/",
    },
    {
        title: "TOEFL iBT",
        university: "University of Liverpool Partner",
        logo: "https://strapi-assets.edvoy.com/live/images/institutions/university-of-liverpool-logo.svg?w=96&q=80",
        href: "/",
    },
];

export const courseSubjects: string[] = [
    "Computer Sciences",
    "Artificial Intelligence",
    "Business Administration",
    "Cyber Security",
    "Healthcare & Nursing",
    "Data Science & Big Data",
    "Finance & Banking",
    "Engineering & Robotics",
];

/* ================= FLAG MENUS DATA ================= */
export const studyDestinations: FlagItem[] = [
    { name: "United Kingdom", link: "/", flag: "https://img.freepik.com/free-vector/illustration-uk-flag_53876-18166.jpg?semt=ais_rp_progressive&w=740&q=80" },
    { name: "United States", link: "/", flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" },
    { name: "Canada", link: "/", flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg" },
    { name: "Germany", link: "/", flag: "https://img.freepik.com/free-vector/illustration-german-flag_53876-27101.jpg?semt=ais_rp_50_assets&w=740&q=80" },
    { name: "Australia", link: "/", flag: "https://img.magnific.com/premium-photo/flag-australia_406939-4447.jpg?semt=ais_test_b&w=740&q=80" },
    { name: "Ireland", link: "/", flag: "https://cdn.britannica.com/33/1733-050-04264811/FLAG-Ireland.jpg" },
    { name: "France", link: "/", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/960px-Flag_of_France.svg.png" },
];

export const prDestinations: FlagItem[] = [
    { name: "Canada", link: "/pr-global/canada", flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg" },
    { name: "Australia", link: "/", flag: "https://img.magnific.com/premium-photo/flag-australia_406939-4447.jpg?semt=ais_test_b&w=740&q=80" },
    { name: "Europe", link: "/", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/960px-Flag_of_Europe.svg.png" },
];

export const visaDestinations: FlagItem[] = [
    { name: "United Kingdom", link: "/", flag: "https://img.freepik.com/free-vector/illustration-uk-flag_53876-18166.jpg?semt=ais_rp_progressive&w=740&q=80" },
    { name: "Canada", link: "/", flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg" },
    { name: "Australia", link: "/", flag: "https://img.magnific.com/premium-photo/flag-australia_406939-4447.jpg?semt=ais_test_b&w=740&q=80" },
    { name: "Europe", link: "/", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/960px-Flag_of_Europe.svg.png" },
];