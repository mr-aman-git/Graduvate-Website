import CanadaVisaClient from "./CanadaVisaClient";

export const metadata = {
  title:
    "Canada Visa Global 2026 | Study Permit, Work Permit & Visitor Visa | Graduvate",
  description:
    "Apply for Canada Study Visa, LMIA Work Permit, Post-Graduation Work Permit (PGWP), and Visitor Visa. CICC-licensed immigration legal support, high approval rates, and fast document processing.",
  keywords: [
    "Canada visa global",
    "Canada study permit consultant",
    "Canada work permit from India",
    "Canada visitor visa",
    "Canada PGWP consultant",
    "Canada super visa",
    "CICC licensed Canada visa consultant",
    "Canada visa processing time 2026",
  ],
  alternates: {
    canonical: "https://graduvate.com/visa-global/canada",
  },
  openGraph: {
    title:
      "Canada Visa Global 2026 | Study, Work & Visitor Visa Guidance | Graduvate",
    description:
      "End-to-end legal filing for Canada temporary residence visas. Fast-track your application with CICC-licensed consultants.",
    url: "https://graduvate.com/visa-global/canada",
    siteName: "Graduvate",
    type: "website",
  },
};

export default function CanadaVisaPage() {
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
            name: "Canada Visa",
            item: "https://graduvate.com/visa-global/canada",
          },
        ],
      },
      {
        "@type": "ProfessionalService",
        name: "Graduvate Global Visa Services",
        telephone: "+918608608668",
        url: "https://graduvate.com",
        priceRange: "$$",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "2250",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can I convert my Canada Study Visa into a Work Permit?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, graduating from a designated learning institution (DLI) allows you to apply for a Post-Graduation Work Permit (PGWP), valid up to 3 years.",
            },
          },
          {
            "@type": "Question",
            name: "What is the processing time for a Canada Visitor Visa?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Processing time for Canadian tourist/visitor visas ranges between 20 to 45 business days depending on IRCC queue and biometric verification.",
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
      <CanadaVisaClient />
    </>
  );
}
