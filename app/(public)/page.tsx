import React from "react";
import type { Metadata } from "next";

import Hero from "@/src/components/homeSection/Hero";
import ShortAbout from "@/src/components/homeSection/ShortAbout";
import DestinationCard from "@/src/components/homeSection/DestinationCard";
import WhyChooseUs from "@/src/components/homeSection/WhyChooseUs";

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
      <Hero />
      <DestinationCard />
      <ShortAbout />
      <WhyChooseUs />
    </>
  );
};

export default Page;