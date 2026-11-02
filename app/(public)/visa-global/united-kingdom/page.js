import UkVisaClient from "./UkVisaClient";

export const metadata = {
  title:
    "UK Visa Global 2026 | Student Visa, Skilled Worker & Visitor Visa | Graduvate",
  description:
    "Apply for UK Student Visa (CAS based), Graduate Route 2-Year Post-Study Work Visa, Skilled Worker Visa, and UK Standard Visitor Visa. Expert legal filing, CAS interview prep, and high UKVI approval rates.",
  keywords: [
    "UK visa global",
    "UK student visa consultant India",
    "UK Skilled Worker visa 2026",
    "Graduate Route visa 2 years",
    "UK standard visitor visa 6 months",
    "CAS letter UK visa guidance",
    "UK visa processing time from India",
    "UKVI TB test and financial requirements",
  ],
  alternates: {
    canonical: "https://graduvate.com/visa-global/united-kingdom",
  },
  openGraph: {
    title:
      "UK Visa Global 2026 | Student, Skilled Worker & Visitor Visas | Graduvate",
    description:
      "End-to-end legal filing for United Kingdom visas under the UKVI Points-Based System. Fast document checks, TB clearance prep, and VFS priority slots.",
    url: "https://graduvate.com/visa-global/united-kingdom",
    siteName: "Graduvate",
    type: "website",
  },
};

export default function UkVisaPage() {
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
            name: "UK Visa",
            item: "https://graduvate.com/visa-global/united-kingdom",
          },
        ],
      },
      {
        "@type": "ProfessionalService",
        name: "Graduvate UK Visa Consulting",
        telephone: "+918608608668",
        url: "https://graduvate.com",
        priceRange: "$$",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "2310",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is a CAS letter and why is it needed for a UK Student Visa?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A Confirmation of Acceptance for Studies (CAS) is a unique electronic reference number issued by a licensed UK university confirming that you have been offered an unconditional place on an approved course.",
            },
          },
          {
            "@type": "Question",
            name: "How long can I stay on the UK Graduate Route Visa after studies?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Graduate Route allows international students who complete an eligible undergraduate or master's degree to stay and work unrestricted in the UK for 2 years (3 years for PhD graduates).",
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
      <UkVisaClient />
    </>
  );
}
