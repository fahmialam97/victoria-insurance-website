import type { Overlay } from "@/lib/i18n/overlay";
import type { layananContent } from "../layanan";

/** Terjemahan Inggris teks halaman layanan (data/layanan.ts). Judul dokumen diterjemahkan lewat kamus. */
export const layananEn: Overlay<typeof layananContent> = {
  workshop: {
    heading: "Partner Workshop Updates",
    contact: { label: "Claims Department, PT. Victoria Insurance, Tbk", name: "Mr Arifin" },
    image: { alt: "Victoria Insurance Motor Vehicle Claims Team" },
  },
  complaint: {
    intro: "Consumer complaints can be submitted through the Company's official website.",
    whistleblowingIntro:
      "Confidential consumer complaints (whistleblowing) can be submitted through the Company's official website.",
  },
  transaction: {
    intro: [
      "Transacting with PT. Victoria Insurance, Tbk involves two main stages: Policy Purchase and Claim Submission.",
      "PT. Victoria Insurance, Tbk provides protection against financial losses related to assets or legal liability, such as vehicles, property, cargo, etc.",
    ],
    purchase: {
      title: "Policy Purchase Procedure",
      lead: "Obtaining insurance protection from PT. Victoria Insurance, Tbk involves the following steps:",
      steps: [
        {
          title: "Identify Your Needs and the Product",
          text: "Understand which risks you want to protect against (for example, a house fire or a car accident) and choose the right general insurance product.",
        },
        {
          title: "Complete the Documents",
          text: "Fill in the application form and attach supporting documents, such as your identity card and details of the insured object (for example, the vehicle registration (STNK) for motor vehicle insurance).",
        },
        {
          title: "Understand the Policy",
          text: "Read the policy terms and conditions carefully, including the scope of cover, exclusions, coverage limits, and the deductible (the amount you pay yourself when making a claim).",
        },
        {
          title: "Pay the Premium",
          text: "Once your application is approved, you must pay the premium, the cost of your insurance protection, to PT. Victoria Insurance, Tbk. Your policy becomes active once the payment is received.",
        },
      ],
    },
    claim: {
      title: "Claim Submission Procedure",
      lead: "If a loss or damage covered by your policy occurs, you can submit a claim with the following steps:",
      steps: [
        {
          title: "Assess and Document the Damage",
          text: "Immediately after the incident, document the damage thoroughly by taking detailed photos or videos as evidence.",
        },
        {
          title: "Contact PT. Victoria Insurance, Tbk",
          text: "Report the incident as soon as possible to PT. Victoria Insurance, Tbk or your agent. We will provide information about the specific procedure and the claim forms required.",
        },
        {
          title: "Fill In the Claim Form and Collect Documents",
          text: "Complete the claim form provided and gather all supporting documents, such as a police report (if required), repair receipts, or other proof of loss.",
        },
        {
          title: "Submit the Claim Form",
          text: "Send the form and supporting documents to PT. Victoria Insurance, Tbk according to the instructions given.",
        },
        {
          title: "Wait for Verification and Analysis",
          text: "PT. Victoria Insurance, Tbk will process your claim, verify it, and review whether it qualifies under your policy.",
        },
        {
          title: "Receive Payment or Notification of the Claim Result",
          text: "If the claim is approved, the company will pay compensation or cover the repair costs according to the policy terms. If it is declined, you will receive a written notice explaining the reasons.",
        },
      ],
    },
  },
  literacy: {
    image: { alt: "Victoria Insurance Financial Literacy and Inclusion activities in 2026" },
  },
};
