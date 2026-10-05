import nodemailer from "nodemailer";

/** Tujuan sementara sampai email resmi Victoria tersedia; ganti lewat env COMPLAINT_TO_EMAIL. */
const DEFAULT_COMPLAINT_TO = "alamfahmi76@gmail.com";

export type Complaint = {
  referenceId: string;
  name: string;
  email: string;
  phone: string;
  policyNumber: string;
  message: string;
  submittedAt: Date;
};

export class MailerNotConfiguredError extends Error {}

function getTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) throw new MailerNotConfiguredError("SMTP belum dikonfigurasi");

  const port = Number(SMTP_PORT ?? 465);
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: SMTP_SECURE ? SMTP_SECURE === "true" : port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function sendComplaintEmail(complaint: Complaint) {
  const transport = getTransport();
  const to = process.env.COMPLAINT_TO_EMAIL || DEFAULT_COMPLAINT_TO;
  const from = process.env.SMTP_FROM || process.env.SMTP_USER!;
  const time = complaint.submittedAt.toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });

  const rows: [string, string][] = [
    ["No. Referensi", complaint.referenceId],
    ["Waktu", `${time} WIB`],
    ["Nama", complaint.name || "-"],
    ["Email", complaint.email],
    ["Telepon", complaint.phone || "-"],
    ["Nomor Polis", complaint.policyNumber || "-"],
  ];

  const text = [...rows.map(([k, v]) => `${k}: ${v}`), "", "Isi Pengaduan:", complaint.message].join("\n");
  const html = `
    <h2 style="font-family:sans-serif;color:#0c2444">Pengaduan Konsumen Baru</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="padding:4px 12px 4px 0;color:#5b6b82">${k}</td><td style="padding:4px 0"><strong>${escapeHtml(v)}</strong></td></tr>`,
        )
        .join("")}
    </table>
    <h3 style="font-family:sans-serif;color:#0c2444">Isi Pengaduan</h3>
    <p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(complaint.message)}</p>
  `;

  await transport.sendMail({
    from: `"Website Victoria Insurance" <${from}>`,
    to,
    // Balas email langsung ke pengadu
    replyTo: complaint.email,
    subject: `[Pengaduan Website] ${complaint.referenceId} – ${complaint.name || complaint.email}`,
    text,
    html,
  });
}
