import React from "react";
import type { Metadata } from "next";

import Section_1 from "@/src/components/homeSection/Section_1";
import Section_2 from "@/src/components/homeSection/Section_2";
import Section_3 from "@/src/components/homeSection/Section_3";
import Section_4 from "@/src/components/homeSection/Section_4";

export const metadata: Metadata = {
  title: "Graduvate Education | Best Abroad Consultancy",
  description:
    "Get admission in top universities abroad with Graduvate Education.",
  openGraph: {
    title: "Graduvate Education",
    description:
      "Expert guidance for admissions in Georgia, Russia, and more.",
    url: "https://graduvate.com/",
    siteName: "StudyMBBS",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const Page = () => {
  return (
    <>
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
    </>
  );
};

export default Page;