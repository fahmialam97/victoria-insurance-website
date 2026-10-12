import type { Overlay } from "@/lib/i18n/overlay";
import type { Product } from "../products";

/** Terjemahan Inggris data produk; urutan sama dengan `products` (data/products.ts). Dokumen RIPLAY tetap berbahasa Indonesia. */
export const productsEn: Overlay<Product[]> = [
  {
    name: "Property Insurance",
    description: [
      "No matter how well you look after your property, events that damage it can still happen. This insurance ensures compensation for damage to or loss of your property caused by fire, natural disasters, riots, or other damage arising from a sudden event.",
    ],
    summary: "Coverage that provides a guarantee or protection against loss of and/or damage to property.",
    documents: [{ title: "RIPLAY Property Insurance" }],
  },
  {
    name: "Motor Vehicle Insurance",
    description: [
      "No matter how carefully you drive, traffic accidents can still happen. This product guarantees compensation for partial damage, total damage, or loss of your motor vehicle.",
      "Additional protection is available for Third Party Legal Liability (accident victims) and Personal Accident for the driver and passengers resulting in death, permanent disability, and medical expenses.",
    ],
    summary:
      "Covers minor damage, major damage, and loss caused by collision, impact, overturning, skidding, theft, fire, or other insured causes.",
    documents: [{ title: "RIPLAY Motor Vehicle Insurance" }],
    detail: {
      coverages: [
        {
          title: "Comprehensive (All Risks)",
          description: "Covers partial or total damage to the vehicle caused by:",
          items: [
            "Collision, impact, overturning, skidding, or falling into a ditch",
            "Malicious acts of other parties",
            "Theft, including theft with violence (robbery)",
            "Fire, including fire spreading from nearby objects or vehicles, and lightning",
            "Loss while on a ferry crossing",
            "Towing costs to a workshop (maximum 0.5% of the sum insured)",
          ],
        },
        {
          title: "Total Loss Only (TLO)",
          description: "Covers losses when the vehicle suffers a total loss due to a risk insured under the policy:",
          items: [
            "The vehicle is lost and not found within 60 days of the date of loss",
            "The vehicle is damaged and the estimated repair cost reaches 75% or more of its market value",
          ],
        },
      ],
      exclusions: [
        "Unlawful acts or crimes committed by the Insured or the Beneficiary",
        "Loss due to the vehicle being unusable",
        "Theft of non-standard accessories",
        "Embezzlement",
        "Using the vehicle to tow or push another vehicle",
        "Overloading and forcing the vehicle to run",
        "Driving the vehicle while it is damaged",
      ],
      claimSteps: [
        {
          title: "Report the incident",
          text: "Give a verbal report within 1×24 hours and/or a written report within 3×24 hours after the incident.",
        },
        {
          title: "Wait for approval",
          text: "Do not repair or replace damage to your vehicle or a third party's before receiving approval from Victoria Insurance.",
        },
        {
          title: "Complete the documents",
          text: "Submit a written chronology of the incident together with the supporting claim documents.",
        },
        {
          title: "Survey & payment",
          text: "Victoria Insurance reviews the documents and conducts a survey. If approved, compensation is paid after deducting the deductible.",
        },
      ],
      claimDocuments: [
        "Insurance policy number",
        "Policyholder's name",
        "Date and place of the incident",
        "Chronology of the incident",
        "Third-party details (if involved)",
        "Police report (if required)",
        "Driver's licence (SIM) and vehicle registration (STNK)",
      ],
    },
  },
  {
    name: "Personal Accident Insurance",
    description: [
      "Watch your step: accidents can happen anytime, anywhere. This product compensates you for accidents caused by sudden events that result in death, permanent disability, and medical expenses. Protection applies 24/7 during a set coverage period, for example one year or a single trip.",
    ],
    summary:
      "Personal Accident Insurance covers the risk of death, permanent disability, and treatment or medical costs caused by an accident.",
    documents: [{ title: "RIPLAY Personal Accident Insurance" }],
  },
  {
    name: "Cargo Insurance",
    description: [
      "Moving goods always involves risks that can damage them. This product ensures that financial losses from such damage are compensated so your business keeps running smoothly. It can be used for sea, land, and air transport.",
    ],
    summary:
      "Provides compensation for losses that occur while goods are being transported from their place of origin to their destination.",
    documents: [{ title: "RIPLAY Cargo Insurance" }],
  },
  {
    name: "Engineering Insurance",
    description: [
      "Construction work often involves huge machinery and structures that can be damaged by sudden, unforeseeable accidents during construction or installation. This product helps ensure construction and installation are completed on time by compensating for the damage that occurs.",
    ],
    summary:
      "Protects construction work, machinery installation, and electronic equipment installation against all risks of loss.",
    documents: [{ title: "RIPLAY Engineering Insurance" }],
  },
  {
    name: "Money Insurance",
    description: [
      "Money attracts crime, both theft and robbery. Being high in value yet small in size, it is often targeted while in storage or while being transferred from one place to another. This product compensates for losses due to money lost through such crimes. It can also protect other items equivalent to money.",
    ],
    summary: "This insurance is specifically designed to protect money or items equivalent to money.",
    documents: [{ title: "RIPLAY Money Insurance" }],
  },
  {
    name: "Liability Insurance",
    description: [
      "This insurance protects against the risk of loss from legal claims or lawsuits by third parties, covering both compensation payments and costs during the legal process.",
    ],
    documents: [{ title: "RIPLAY Liability Insurance" }],
  },
  {
    name: "Movable Property Insurance",
    description: [
      "Movable Property Insurance (often called Moveable All Risk Insurance) is designed to protect portable assets or equipment that frequently change location against the risk of damage or loss.",
    ],
    documents: [{ title: "RIPLAY Movable Property Insurance" }],
  },
  {
    name: "Travel Insurance",
    description: [
      "Travel Insurance provides financial protection against unexpected risks that occur while a person is travelling, both within Indonesia (domestic) and abroad (international).",
    ],
    documents: [{ title: "RIPLAY Victoria Travel Insurance" }],
  },
  {
    name: "Directors and Officers Liability Insurance",
    description: [
      "Directors and Officers Liability Insurance (D&O) is a type of liability insurance designed to protect the personal assets of company leaders (directors, commissioners, and executive officers) from lawsuits arising from their decisions or actions in managing the company.",
    ],
    documents: [{ title: "RIPLAY Directors and Officers Liability Insurance" }],
  },
  {
    name: "Victoria Personal Cyber Insurance",
    description: [
      "Victoria Personal Cyber Insurance is designed to protect individuals and families from financial loss and other harm caused by cybercrime.",
    ],
    documents: [{ title: "RIPLAY Victoria Personal Cyber Insurance" }],
  },
  {
    name: "Victoria Corporate Cyber Insurance",
    description: [
      "Victoria Corporate Cyber Insurance is a strategic protection product designed to shield businesses from the damaging financial and operational impact of cyberattacks, data breaches, or IT system failures.",
    ],
    documents: [{ title: "RIPLAY Victoria Corporate Cyber Insurance" }],
  },
  {
    name: "Health Insurance",
    description: [
      "Health insurance specifically covers the medical or treatment costs of its members if they fall ill or have an accident.",
    ],
    documents: [
      { title: "RIPLAY Rey Complete Care Insurance" },
      { title: "RIPLAY Rey Critical Care Insurance" },
      { title: "RIPLAY Rey Outpatient Care Insurance" },
      { title: "RIPLAY Rey Accident & Infection Care Insurance" },
      { title: "RIPLAY REY Inpatient Allowance Insurance" },
    ],
  },
];
