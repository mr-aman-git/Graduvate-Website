import CanadaPRClient from "./CanadaPRClient";

export const metadata = {
  title:
    "Canada Permanent Residency 2026 | Licensed Immigration Consultants | Graduvate",
  description:
    "Get Canadian permanent residency through Express Entry, PNP, or Family Sponsorship. Licensed RCIC consultants, 95% success rate, flat-fee pricing. Free eligibility assessment.",
  keywords: [
    "Canada permanent residency",
    "Canada PR consultant",
    "Express Entry India",
    "Canada PR 2026",
    "immigration consultant for Canada PR",
    "Canada PR from India",
    "Provincial Nominee Program Canada",
    "CRS score calculator",
    "RCIC licensed consultant",
  ],
  alternates: {
    canonical: "https://graduvate.com/pr-global/canada",
  },
  openGraph: {
    title: "Canada Permanent Residency 2026 | Graduvate",
    description:
      "Licensed RCIC Consultants, 95% Success Rate, Flat-Fee Pricing.",
    url: "https://graduvate.com/pr-global/canada",
    siteName: "Graduvate",
    locale: "en_US",
    type: "website",
  },
};

export default function CanadaPRPage() {
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
            name: "PR Global",
            item: "https://graduvate.com/pr-global/canada",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Canada",
            item: "https://graduvate.com/pr-global/canada",
          },
        ],
      },
      {
        "@type": "ProfessionalService",
        name: "Graduvate Immigration Consultancy",
        url: "https://graduvate.com",
        telephone: "+918608608668",
        priceRange: "$$",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "2100",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do I need a job offer to apply for Canadian PR?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Federal Skilled Worker (FSW) and Canadian Experience Class (CEC) do not require a job offer. However, a qualifying Canadian job offer adds 50-200 additional CRS points.",
            },
          },
          {
            "@type": "Question",
            name: "What CRS score do I need to get an Invitation to Apply (ITA)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The CRS cutoff varies with every draw. General draws range around 430-530, while category-based draws for healthcare, STEM, trades, and French close significantly lower.",
            },
          },
          {
            "@type": "Question",
            name: "How long does the Canada PR process take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Express Entry applications are typically processed within 6 months of submitting your complete application. PNP non-EE can take 12-24 months.",
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
      <CanadaPRClient />
    </>
  );
}
