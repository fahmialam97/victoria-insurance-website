import type { Overlay } from "@/lib/i18n/overlay";
import type { companyContent } from "../company";

/**
 * Terjemahan Inggris konten Tentang Kami (data/company.ts). Array mengikuti urutan data Indonesia;
 * nama orang/perusahaan, nomor akta, dan URL tidak diterjemahkan.
 */
export const companyEn: Overlay<typeof companyContent> = {
  profile: {
    paragraphs: [
      "The company was established in 1978 under the name PT Asuransi Agung Asia. In November 1989 it changed its name to PT Asuransi SUMMA, and in July 1993 it was renamed again as PT Asuransi Umum Centris. In August 2010, all shares and management of the company were taken over by a major group of companies under the VICTORIA banner, and the company's name was changed to PT Victoria Insurance. The Victoria Group is a national investment holding company with a business portfolio that includes financial services, banking, agriculture, plantations, and more. In 2013 the Company's Head Office moved to a new building, The Victoria Building. In July 2013 the paid-up capital was increased to Rp 100 billion. In 2015 the Company became a Public Company and planned its Initial Public Offering (IPO).",
      "The company provides general insurance services, both standard and special programmes, including fire, motor vehicle, marine cargo, engineering, and surety bond insurance, to customers such as multi-finance companies, banks, regional governments, state-owned enterprises, private companies, and individuals.",
    ],
    timeline: [
      {
        text: "PT Victoria Insurance Tbk was established under the name PT Asuransi Agung Asia on 11 May 1978 as a general insurance company offering a range of protection products and services to customers across various segments. The Company's establishment was recorded in Deed No. 58 dated 11 May 1978 by Notary Haji Bebasa Daeng Lalo, SH. The deed was approved by the Ministry of Law and Human Rights under Decree No. Y.A.5/272/20 dated 14 August 1978.",
      },
      {
        text: "Along the way, the Company changed its name to PT Asuransi SUMMA in 1989 based on Deed No. 79 dated 30 November 1989 by Notary Ny. Rukmasanti Hardjasatya SH in Jakarta.",
      },
      {
        label: "July",
        text: "The Company then changed its name again to PT Asuransi Umum Centris in 1993 based on Deed No. 78 dated 29 April 1993 by Notary Ny. Rukmasanti Hardjasatya SH in Jakarta.",
      },
      {
        label: "August",
        text: "In 2010, the Company was acquired by PT Victoria Sekuritas and officially became part of the Victoria Investama group, marked by its change of name to PT Victoria Insurance based on Deed No. 93 dated 19 August 2010 by Notary Suwarni Sukiman, SH. The deed was approved by the Ministry of Law and Human Rights under Decree No. AHU-43243.AH.01.02. dated 2 September 2010.",
      },
      {
        text: "To achieve the Company's Vision of becoming the best national general insurance company in its class in delivering value to policyholders, business partners, employees, Shareholders, and the public, on 28 September 2015 the Company conducted an initial public offering on the Indonesia Stock Exchange. The offering strengthened the capital the Company needs to develop its business.",
      },
    ],
    corporateStructure: {
      alt: "Corporate Structure: PT Victoria Investama Tbk oversees PT Victoria Insurance Tbk, PT Victoria Sekuritas Indonesia, PT Bank Victoria International Tbk, PT Victoria Manajemen Investasi, and PT Victoria Alife Indonesia. Share Capital: PT Victoria Investama Tbk 84.93%, Aldo Jusuf Tjahaja 0.69%, Public 14.38%.",
    },
  },
  visionMission: {
    vision: "To be a healthy, strong, efficient, and trusted national general insurance company",
    missions: [
      "Safeguarding and maintaining the interests of our customers by providing fast and accurate service",
      "Providing innovative, competitive, and high-quality insurance products.",
    ],
  },
  businessNetwork: {
    strategy: [
      "Consistently refining our business processes.",
      "Strengthening synergy and cooperation within and beyond the Victoria Group, and adding bank, multifinance, and broker partners.",
      "Developing technology-based marketing and digital transformation (Industry 4.0).",
      "Optimising the structure and functions of the organisation.",
      "Improving human resources education and training.",
    ],
    prospects: [
      {
        title: "Market Conditions",
        text: "The national economy is expected to keep growing. The Company targets high growth, still dominated by the property, motor vehicle, cargo, and personal accident lines of business.",
      },
      {
        title: "Business Development",
        text: "The Company innovates by developing a digital marketing system, restructuring its business portfolio, and being more selective in choosing risks and sources of business.",
      },
      {
        title: "Operational Optimisation",
        text: "The Company regularly evaluates its operational activities and continuously improves the working standards of every division.",
      },
    ],
    partners: [
      { title: "Reinsurance Network" },
      { title: "Reinsurance Brokers" },
      { title: "Multifinance Partners" },
      { title: "Bank Partners" },
      { title: "Direct Brokers" },
    ],
  },
  awards: {
    // Hanya judul ke-4 yang perlu diubah (teks resmi sudah berbahasa Inggris, kecuali nama bulan)
    highlights: [undefined, undefined, undefined, { title: "Media Asuransi Magazine – July 2018" }],
    gallery: [
      {
        image: {
          alt: "Bisnis Indonesia Financial Awards, September 2024: The Most Efficient Insurance, General Insurance with Assets < Rp 1 Trillion",
        },
      },
      {
        image: {
          alt: "Media Asuransi September 2023: Best General Insurance 2023, Equity Rp100–200 billion category; Media Asuransi October 2024: Best General Insurance 2024, Equity Rp150–250 billion category",
        },
      },
      {
        image: {
          alt: "Investor Magazine 2022: Best Issuer 2022, Insurance Sector; Infobank Magazine: Financial Performance Full-Year 2021, rated Excellent",
        },
      },
      {
        image: {
          alt: "Award from the Ministry of National Development Planning/Bappenas, 24 November 2021, for contributions to the SDGs programme; Membership Certificate of the Special Risk Insurance Consortium (KARK) 2022–2023",
        },
      },
      {
        image: {
          alt: "Investor Magazine July 2020: Best Listed Companies 2020; Infobank August 2020: ranked 1st among general insurers with gross premiums under Rp100 billion; Media Asuransi October 2020: Best General Insurance 2020",
        },
      },
      {
        image: {
          alt: "Media Asuransi Best General Insurance 2018 certificate and Warta Ekonomi Indonesia Insurance Awards 2018 certificate",
        },
      },
    ],
  },
  orgStructure: [
    {
      title: "Board of Commissioners",
      image: {
        alt: "Board of Commissioners chart: Sulistijowati (President Commissioner) with the Nomination & Remuneration Committee, Tomi Parisianto Wibowo (Independent Commissioner) with the Audit Committee, Jimmy P. Watulingas (Independent Commissioner) with the Risk Monitoring Committee",
      },
    },
    {
      title: "Board of Directors",
      image: {
        alt: "Board of Directors organisational chart of PT Victoria Insurance, Tbk: Suwandi Suharto (President Director) oversees Prayogo Gunawan (Finance & Accounting), Rosalina Gunawan (Compliance & HR Director), and Fatchurhuda (Technical Director), along with the committees, Secretariat, and Internal Audit Unit (SKAI)",
      },
    },
  ],
  commissioners: [
    {
      position: "President Commissioner",
      photo: { alt: "Photo of Sulistijowati" },
      bio: [
        {
          paragraphs: [
            "Indonesian citizen, domiciled in Jakarta. Earned a Bachelor's degree in Economics from Universitas Indonesia, Depok, Indonesia in 1982. Has served as the Company's President Commissioner since 2012 based on the Decree of the Chairman of the Capital Market and Financial Institution Supervisory Agency No. KEP-596/BL/2012 dated 31 October 2012. She has no affiliation with other members of the Board of Commissioners, members of the Board of Directors, or the Main and Controlling Shareholders.",
            "Her experience includes serving as President Commissioner of PT Bank Victoria International Tbk (2002-2012), Commissioner of PT Bank Victoria International Tbk (2000-2002), Assistant Managing Director at Pegasus (1998-2000), President Director of PT Duta Kirana Finance (1996-1998), Vice President Project Finance at Chase Manhattan Bank, NA (1993-1996), and Vice President – Team Leader of Corporate Finance at Citibank, NA (1984-1992).",
          ],
        },
      ],
    },
    {
      position: "Independent Commissioner",
      photo: { alt: "Photo of Tomi Parisianto Wibowo" },
      bio: [
        {
          paragraphs: [
            "Indonesian citizen, domiciled in Jakarta. Earned a Bachelor's degree in Accounting from Universitas Indonesia, Depok, Indonesia, in 1997.",
            "Has served as the Company's Independent Commissioner since 2024 based on the Decree of the Board of Commissioners of the Financial Services Authority No. KEP-598/PD.02/2024 dated 22 October 2024. He has no affiliation with other members of the Board of Commissioners, members of the Board of Directors, or the Main and Controlling Shareholders.",
            "He currently also serves as a member of the audit committee of PT Perusahaan Listrik Negara (Persero) (since 2021) and as Associate Partner at KAP Heliantono & Rekan (Parker Russell Indonesia) (since 2021).",
            "His experience includes serving as SEVP Finance, Accounting, & Strategic Performance at PT Bank Victoria International, Tbk (2018 – 2021), Head of Finance & Accounting at PT Bank QNB Indonesia Tbk (2013 – 2018), Group Head of Financial Control and Corporate Planning at PT Bank ICB Indonesia Tbk (2011 – 2013), Senior Manager Financial Assurance at KAP Tanudiredja, Wibisana & Rekan (PricewaterhouseCoopers) (2006 – 2011), and Associate Manager Assurance and Advisory Services at KAP Prasetio, Sarwoko & Sandjaja (Ernst & Young) (1997-2006).",
          ],
        },
      ],
    },
    {
      position: "Independent Commissioner",
      photo: { alt: "Photo of Jimmy Paulus Watulingas" },
      bio: [
        {
          paragraphs: [
            "Indonesian citizen, domiciled in Jakarta. Earned a Bachelor's degree in Computer Informatics from Universitas Pembangunan Nasional “Veteran”, Jakarta, Indonesia in 1988. Has served as the Company's Independent Commissioner since 2015 based on the Decree of the Board of Commissioners of the Financial Services Authority No. KEP-560/NB.11/2015 dated 10 September 2015. He has no affiliation with other members of the Board of Commissioners, members of the Board of Directors, or the Main and Controlling Shareholders.",
            "His experience includes serving as Director of PT KENT Mandiri Indonesia (2015), Head of Business and Technology Division at PT Asuransi Jiwa Adisarana Wanaartha (2009-2014), Business Development, Jamsostek Project Manager and Head of Outsourcing Operations at PT Astra Graphia Information Technology (2007-2009), Head of Information Technology Division at PT Asuransi Umum Bintang Tbk (2006-2007), Assistant Vice President, Information Technology Manager at Mountain View International School (2002-2005), Head of Information Technology and Special Projects Division at PT Asuransi Jiwa Prudential (1999-2001), Data Processing Centre Manager at PT Bank Bumiputera (1990-1996), Assistant Manager at Citibank (1989-1990), and Electronic Data Processing Supervisor at PT Rajawali Citra Televisi Indonesia (1988-1989).",
          ],
        },
      ],
    },
  ],
  directors: [
    {
      position: "President Director",
      photo: { alt: "Photo of Suwandi Suharto" },
      bio: [
        {
          paragraphs: [
            "Suwandi has more than 30 (thirty) years of experience in the Indonesian insurance industry, gained while working for joint-venture insurers, insurance brokers, and local insurance companies.",
            "He has held a variety of positions, particularly in technical, marketing, and leadership roles, including Technical Director of PT Asuransi Mitra Maparya, Technical Director of PT. Malacca Trust Wuwungan Insurance, Marketing Director of PT. Asuransi Indrapura, President Director of PT Asuransi Eka Lloyd Jaya, President Director of PT Jamindo General Insurance, and President Director of PT KSK Insurance Indonesia.",
            "A graduate of the Australian and New Zealand Institute of Insurance and Finance, Australia, Suwandi has now joined PT Victoria Insurance Tbk as President Director.",
          ],
        },
      ],
    },
    {
      position: "Compliance Director",
      photo: { alt: "Photo of Rosalina Gunawan" },
      bio: [
        {
          paragraphs: [
            "First appointed as the Company's Compliance Director in 2020 based on the Deed of Statement of Resolutions of the Company's Extraordinary General Meeting of Shareholders No. 10 dated 28 December 2020, and effectively serving as Compliance Director based on the Decree of the Board of Commissioners of the Financial Services Authority No. KEP-426/NB.11/2020 dated 08 December 2020.",
          ],
        },
        { heading: "Education", paragraphs: ["Bachelor of Accounting, 1999, STIE YAI"] },
        {
          heading: "Work Experience",
          paragraphs: [
            "Her positions include Head of Accounting Section at PT Bank Kharisma from 1993-1999, assistant manager accounting from 1999-2009 and finance manager from 2009-2012 at PT Asuransi Rama Satria Wibawa, assistant GM of finance and accounting at PT Asuransi Himalaya Pelindung from 2012-2016, and finance and accounting GM at PT Victoria Insurance Tbk from 2016-2020.",
          ],
        },
      ],
    },
    {
      position: "Technical Director",
      photo: { alt: "Photo of Drs. Fatchurhuda" },
      bio: [
        {
          paragraphs: [
            "Huda, with more than 2 (two) decades of experience in general insurance, has contributed his expertise in insurance and business development to several leading companies.",
            "He began his career as an insurance practitioner at PT Asuransi Bina Dharma Artha. With a positive attitude, Huda was appointed IT Manager at PT Tata Internasional General Insurance and then Marketing Analyst Manager at PT MAA General Insurance. After earning the Indonesian Non-Life Insurance Expert certification (AAIK) from AAMAI (the Indonesian Insurance Management Association), his broad experience led him to become Head of the Technical Division at several companies, and he has now joined PT Victoria Insurance as Technical Director.",
            "Huda is a leader in developing strategy and implementing risk management, as well as managing operations through ongoing initiatives to maximise sales, increase productivity, reduce costs, improve performance, build profitability, and extract maximum value from operational investments.",
          ],
        },
      ],
    },
  ],
};
