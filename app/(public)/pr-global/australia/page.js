import AustraliaPRClient from "./AustraliaPRClient";

export const metadata = {
  title:
    "Australia Permanent Residency 2026 | Subclass 189, 190 & 491 Visa | Graduvate",
  description:
    "Secure your Australia PR through General Skilled Migration (Subclass 189, 190, 491). MARA-licensed guidance, skills assessment support, points calculator, and free eligibility review.",
  keywords: [
    "Australia permanent residency",
    "Australia PR consultant",
    "Subclass 189 visa",
    "Subclass 190 visa",
    "Australia PR points calculator",
    "Australia PR from India",
    "MARA agent Australia PR",
    "SkillSelect Australia 2026",
  ],
  alternates: {
    canonical: "https://graduvate.com/pr-global/australia",
  },
  openGraph: {
    title: "Australia Permanent Residency 2026 | Graduvate PR Global",
    description:
      "Get end-to-end guidance for Australian Skilled Migration. Verify points, skills assessment, and state nominations.",
    url: "https://graduvate.com/pr-global/australia",
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
            name: "Australia PR",
            item: "https://graduvate.com/pr-global/australia",
          },
        ],
      },
      {
        "@type": "ProfessionalService",
        name: "Graduvate Global Immigration",
        telephone: "+918608608668",
        url: "https://graduvate.com",
        priceRange: "$$",
        areaServed: ["India", "Australia", "UAE"],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "1840",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the minimum score required for Australia PR in 2026?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The statutory minimum requirement is 65 points on the Department of Home Affairs points test. However, invitations for high-demand occupations typically require 75 to 85+ points.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between Subclass 189 and Subclass 190?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Subclass 189 is an independent PR visa allowing you to settle anywhere in Australia without nomination. Subclass 190 requires a state nomination, grants +5 extra points, and comes with a 2-year commitment to that state.",
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
      <AustraliaPRClient />
    </>
  );
}
