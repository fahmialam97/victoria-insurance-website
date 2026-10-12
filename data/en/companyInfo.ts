import type { Overlay } from "@/lib/i18n/overlay";
import type { companyInfoContent } from "../companyInfo";

/** Terjemahan Inggris teks halaman Informasi Perusahaan (data/companyInfo.ts). Judul dokumen lewat lib/i18n/docTitles. */
export const companyInfoEn: Overlay<typeof companyInfoContent> = {
  governance: {
    heading: "Implementation of Good Corporate Governance",
    text: "We fully understand that the credibility, accountability, and reputation of the Company as a responsible insurance company are inseparable from the implementation of Good Corporate Governance (GCG). On that basis, the Company is committed to implementing GCG in accordance with government regulations and the applicable provisions of the Financial Services Authority (OJK) and the capital market, such as OJK Regulation No. 21/POJK.04/2015 on the Implementation of Corporate Governance Guidelines for Public Companies and OJK Regulation No. 73/POJK.05/2016 on Good Corporate Governance for Insurance Companies. The Company also continuously evaluates and improves its internal policies and procedures in line with the latest GCG developments and requirements.",
  },
  committees: {
    text: "Composition of the Committees of PT. Victoria Insurance, Tbk",
  },
  corporateSecretary: {
    decree: "Board of Directors Decree No. 0025/VINS-IN/DIR/III/2026",
    image: {
      alt: "Announcement of the change of Corporate Secretary of PT Victoria Insurance Tbk from Herna Anggraeni to Netta Ivana Calista based on Board of Directors Decree No. 0025/VINS-IN/DIR/III/2026",
    },
  },
  articlesOfAssociation: {
    text: "The provisions of the Company's Articles of Association below are the Articles of Association currently in force based on the latest amendment No. 41 dated 11 June 2015, drawn up before Notary Fathiah Helmi, SH. The deed has been notified to and received the Approval of Amendment to the Articles of Association from the Ministry of Law and Human Rights of the Republic of Indonesia No. AHU-0937704.AH.01.02.Tahun 2015 dated 19 June 2015, and was registered in the Company Register No. AHU-3522349.AH.01.11.Tahun 2015 dated 19 June 2015.",
  },
  supportingInstitutions: [
    { role: "Notary", address: "The H Tower Building, 20th Floor A&G, Jl. HR Rasuna Said Kav C-20 Kuningan, South Jakarta 12940." },
    { role: "Public Accountant", address: "Menara Palma Building 10th Floor Unit 02, Jl. HR Rasuna Said Blok X2 Kav.6, South Jakarta 12950" },
    { role: "Share Registrar", address: "Kirana Boutique Office, Jl. Kirana Avenue III, Blok F3 No. 5, Kelapa Gading, North Jakarta 14250" },
  ],
};
