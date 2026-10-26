import AustraliaVisaClient from "./AustraliaVisaClient";

export const metadata = {
  title:
    "Australia Visa Global 2026 | Student Subclass 500, Work & Visitor Visa | Graduvate",
  description:
    "Apply for Australia Student Visa (Subclass 500), Temporary Graduate (Subclass 485), Visitor Visa (Subclass 600), and TSS 482 Work Visa. Fast processing, genuine student compliance, and MARA-aligned guidance.",
  keywords: [
    "Australia visa global",
    "Australia student visa subclass 500",
    "Australia tourist visa subclass 600",
    "Australia work visa subclass 482",
    "Subclass 485 visa consultant",
    "Australia visa consultant India",
    "Australia visa processing time 2026",
    "GS requirement Australia student visa",
  ],
  alternates: {
    canonical: "https://graduvate.com/visa-global/australia",
  },
  openGraph: {
    title:
      "Australia Visa Global 2026 | Study, Work & Tourist Visas | Graduvate",
    description:
      "Complete legal filing for Australian temporary visas. High success rate, GS statement verification, and fast-track processing.",
    url: "https://graduvate.com/visa-global/australia",
    siteName: "Graduvate",
    type: "website",
  },
};

export default function AustraliaVisaPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://graduvate.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Visa Global",
            item: "https://graduvate.com/visa-global",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Australia Visa",
            item: "https://graduvate.com/visa-global/australia",
          },
        ],
      },
      {
        "@type": "ProfessionalService",
        name: "Graduvate Australia Visa Consulting",
        telephone: "+918608608668",
        url: "https://graduvate.com",
        priceRange: "$$",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "1980",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the Genuine Student (GS) requirement for an Australia Student Visa?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Genuine Student (GS) criteria assesses whether an applicant genuinely intends to study in Australia, focusing on course value, career goals, economic background, and home ties.",
            },
          },
          {
            "@type": "Question",
            name: "Can I work in Australia on a Student Visa (Subclass 500)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, international students are permitted to work up to 48 hours per fortnight during course sessions and unlimited hours during scheduled term breaks.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <AustraliaVisaClient />
    </>
  );
}
