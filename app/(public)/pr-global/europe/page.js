import EuropePRClient from "./EuropePRClient";

export const metadata = {
  title:
    "Europe Permanent Residency 2026 | EU Blue Card & Permanent Settlement | Graduvate",
  description:
    "Secure your European Permanent Residency through the EU Blue Card, Germany Opportunity Card (Chancenkarte), or Golden Residence programs. Direct path to Schengen mobility and PR settlement.",
  keywords: [
    "Europe permanent residency",
    "EU Blue Card",
    "Germany PR consultant",
    "Chancenkarte Germany 2026",
    "Schengen permanent residency",
    "Europe PR from India",
    "Netherlands Highly Skilled Migrant",
    "Europe work permit to PR",
  ],
  alternates: {
    canonical: "https://graduvate.com/pr-global/europe",
  },
  openGraph: {
    title:
      "Europe Permanent Residency & EU Blue Card 2026 | Graduvate PR Global",
    description:
      "Fast-track your pathway to European permanent residency and citizenship. Explore EU Blue Card, Chancenkarte, and investor residency across 27 Schengen countries.",
    url: "https://graduvate.com/pr-global/europe",
    siteName: "Graduvate",
    type: "website",
  },
};

export default function Page() {
  const schemaData = {
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
            item: "https://graduvate.com/pr-global",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Europe PR",
            item: "https://graduvate.com/pr-global/europe",
          },
        ],
      },
      {
        "@type": "ProfessionalService",
        name: "Graduvate Global Immigration",
        telephone: "+918608608668",
        url: "https://graduvate.com",
        priceRange: "$$",
        areaServed: ["India", "Germany", "France", "Netherlands", "Europe"],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "1650",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How fast can I get Permanent Residency in Europe with an EU Blue Card?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "In countries like Germany, EU Blue Card holders can obtain permanent settlement (Niederlassungserlaubnis) in just 21 months with B1 German language proficiency, or 27-33 months with basic A1 German.",
            },
          },
          {
            "@type": "Question",
            name: "What is the Germany Opportunity Card (Chancenkarte)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Chancenkarte is a points-based job seeker visa launched by Germany allowing qualified foreign specialists to search for skilled employment in Germany for up to one year, converting directly into an EU Blue Card or work residence permit.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <EuropePRClient />
    </>
  );
}
