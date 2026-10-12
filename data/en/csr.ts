import type { Overlay } from "@/lib/i18n/overlay";
import type { csr } from "../csr";

/** Terjemahan Inggris halaman CSR (data/csr.ts); urutan array sama dengan data Indonesia. */
export const csrEn: Overlay<typeof csr> = {
  agendas: [
    {
      title: "Victoria Insurance CSR Activity – Donation to the Amal Sholeh Sejahtera Foundation",
      images: [{ alt: "Victoria Insurance presents a donation to the board of the Amal Sholeh Sejahtera Foundation, 14 March 2025" }],
    },
    {
      title: "Victoria Kesehatan CSR Delivers Vitamins, Stationery, and Air Conditioners",
      images: [
        { alt: "Collage of the #VictoriaKesehatan aid handover at SD Laksa Bhakti" },
        {
          alt: "Victoria Kesehatan CSR: vitamins, stationery, and air conditioners for elementary schools in West Jakarta & North Jakarta, 16 November 2023",
        },
      ],
    },
    {
      title: "Victoria Peduli CSR Delivers Medical Equipment for Covid-19 Response",
      images: [
        { alt: "Victoria Peduli CSR hands over medical equipment for the Covid-19 response to elementary school students, 29 October 2021" },
      ],
    },
  ],
  peduli: {
    title: "Victoria Peduli CSR Activity",
    paragraphs: [
      "PT Victoria Insurance, Tbk took serious steps to help accelerate the response to the spread of the Coronavirus (Covid-19) in schools. This care was realised by donating medical equipment to elementary schools in West Jakarta & North Jakarta.",
      "The medical equipment donated included hand sanitiser and portable hand-washing stations. The aid was handed over directly by PT Bank Victoria Internasional, Tbk – Ms Syahda Candra, HCM & GA Division Head, representing the Management of the Victoria Group (29/10).",
      "This aid is in line with the “Victoria Peduli” Covid-19 response programme: “We hope this aid helps and can be used to accelerate the handling of the Covid-19 outbreak. Overcoming the spread of this outbreak requires the cooperation and attention of all parties, including by following health protocols properly. We hope this outbreak is handled soon and passes quickly.”",
    ],
    place: "Jakarta, 29 October 2021",
    image: { alt: "The Victoria Group team with elementary school students at the Victoria Peduli Synergy to Prevent COVID-19 activity" },
    gallery: [
      { alt: "Photo gallery of the hand sanitiser handover at an elementary school #VictoriaPeduli" },
      { alt: "Photo gallery of the Victoria team's visit to a classroom and the portable hand-washing station" },
      { alt: "Photo gallery of the Victoria team with the school #VictoriaPeduli" },
    ],
  },
  about:
    "The Company is committed to carrying out its corporate social responsibility (CSR). This stems from the awareness that the Company exists not only to generate profit but also to contribute to sustainable development for people and the planet. Accordingly, the Company carries out CSR in the areas of the environment, employment, social and community affairs, and customers. The Company's CSR activities are expected to create harmonious interaction between the Company, the community, and stakeholders in order to improve people's quality of life.",
  pillars: [
    {
      title: "Environmental CSR",
      paragraphs: [
        "The Company supports government environmental programmes by continuously striving to reduce the environmental impact of its operations. The Company's environmental responsibility programmes include:",
      ],
      points: [
        "Saving energy, water, and electricity in the office;",
        "Running a paperless programme by reusing suitable paper for photocopying and using technology such as scanning and email for correspondence;",
        "Striving to use environmentally friendly materials.",
      ],
    },
    {
      title: "Occupational Health & Safety CSR",
      paragraphs: [
        "The Company recognises that human resources are one of its most important assets in sustaining productivity and growth. This requires reliable employees with high integrity who are professionals in their fields. To achieve this, the Company plans and carries out recruitment that gives every individual equal opportunity, regardless of ethnicity, age, ethnic background, religion, gender, or other personal characteristics. The Company also develops employees' competencies and careers based on the principles of fairness and equality, provides remuneration and benefits in line with labour regulations, and provides occupational health and safety (OHS) facilities. The Company also holds several get-togethers to strengthen relations between the Company's leaders and all employees.",
      ],
    },
    {
      title: "Social and Community Development CSR",
      paragraphs: [
        "The Company always strives to make a positive impact on the surrounding community. To this end, it carries out social and community activities such as helping repair places of worship, donating to schools, celebrating religious holidays, sponsoring community events, providing cleaning equipment, and greening the surrounding environment.",
      ],
    },
    {
      title: "Customer-Related CSR",
      paragraphs: [
        "The Company is committed to maintaining good long-term relationships with customers by respecting their rights and obligations and disclosing information that matters to them. To this end, the Company communicates the products and services it provides and prioritises excellent customer service. The Company follows up on claims accurately and promptly, in accordance with the agreement between the Company and the customer. The Company also receives and follows up on every customer complaint, whether by email, telephone, or letter, as well as through the Corporate Secretary.",
      ],
    },
  ],
};
