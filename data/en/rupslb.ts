import type { Overlay } from "@/lib/i18n/overlay";
import type { RupslbEvent } from "../rupslb";

/** Terjemahan Inggris data RUPSLB; urutan sama dengan `rupslbEvents`. Dokumen PDF tetap berbahasa Indonesia. */
export const rupslbEventsEn: Overlay<RupslbEvent[]> = [
  {
    title: "EGMS 2026",
    meetingTime: "14:19 – 14:32 WIB (Western Indonesia Time)",
    venue: "Graha BIP Building, 3A Floor, Jalan Jenderal Gatot Subroto Kav. 23, South Jakarta 12930",
    agenda:
      "Approval of the amendment to Article 3 of the Company's Articles of Association in connection with Statistics Indonesia (BPS) Regulation No. 7 of 2025 on the Indonesian Standard Industrial Classification (KBLI 2025).",
    documents: [
      {
        title: "EGMS 2026 Announcement",
        shortTitle: "Announcement",
        dateLabel: "Jakarta, 10 July 2026",
        summary:
          "Notice to shareholders of the planned EGMS on Tuesday, 18 August 2026, the invitation schedule, and the shareholder recording date.",
      },
      {
        title: "Invitation to the EGMS 2026 of PT VICTORIA INSURANCE TBK",
        shortTitle: "Invitation",
        dateLabel: "Jakarta, 27 July 2026",
        summary:
          "Meeting invitation with the time, venue, agenda, and procedure for granting proxies through KSEI e-Proxy.",
      },
      {
        title: "EGMS 2026 Rules of Conduct",
        shortTitle: "Rules of Conduct",
        dateLabel: "For the meeting on Tuesday, 18 August 2026",
        summary: "Rules for conducting the meeting, quorum, how to ask questions, voting rights, and the decision mechanism.",
      },
      {
        title: "Announcement of the Summary of Minutes of the EGMS 2026",
        shortTitle: "Summary of Minutes",
        dateLabel: "Jakarta, 20 August 2026",
        summary:
          "Summary of the meeting proceedings, shareholder attendance, voting results, and EGMS resolutions.",
      },
    ],
  },
];
