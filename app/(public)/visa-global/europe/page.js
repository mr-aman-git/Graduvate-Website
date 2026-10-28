import EuropeVisaClient from "./EuropeVisaClient";

export const metadata = {
  title:
    "Europe Visa Global 2026 | Schengen Tourist, Student & Work Visa | Graduvate",
  description:
    "Apply for Europe Schengen Visa (Type C), Germany National Student Visa (Type D), EU Blue Card Work Permit, and Germany Opportunity Card (Chancenkarte). High approval rates and fast-track VFS appointment guidance.",
  keywords: [
    "Europe visa global",
    "Schengen visa consultant India",
    "Germany student visa type D",
    "EU Blue Card consultant",
    "Chancenkarte job seeker visa 2026",
    "Schengen tourist visa 90 days",
    "Europe work permit consultant",
    "VFS Schengen visa appointment",
  ],
  alternates: {
    canonical: "https://graduvate.com/visa-global/europe",
  },
  openGraph: {
    title: "Europe Visa Global 2026 | Schengen, Study & Work Visas | Graduvate",
    description:
      "End-to-end legal filing for Europe Schengen & National visas. Fast document auditing, blocked account guidance, and VFS slot booking.",
    url: "https://graduvate.com/visa-global/europe",
    siteName: "Graduvate",
    type: "website",
  },
};

export default function EuropeVisaPage() {
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
            name: "Europe Visa",
            item: "https://graduvate.com/visa-global/europe",
          },
        ],
      },
      {
        "@type": "ProfessionalService",
        name: "Graduvate Europe Visa Consulting",
        telephone: "+918608608668",
        url: "https://graduvate.com",
        priceRange: "$$",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "2120",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How many countries can I visit with a Schengen Visa?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A standard Schengen Visa (Type C) allows you to travel freely across all 29 European countries in the Schengen Zone for up to 90 days within any 180-day period.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between a Schengen Visa (Type C) and National Visa (Type D)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Type C is a short-stay visa valid for up to 90 days for tourism or business. Type D is a long-stay national visa issued for studies, employment, or residence exceeding 90 days.",
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
      <EuropeVisaClient />
    </>
  );
}
