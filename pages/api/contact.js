import nodemailer from "nodemailer";

function isEmail(s = "") {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s).trim());
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const gmailAddress = process.env.GMAIL_ADDRESS;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailAddress || !gmailAppPassword) {
      return res.status(500).json({
        error:
          "Server email not configured. Set GMAIL_ADDRESS and GMAIL_APP_PASSWORD.",
      });
    }

    const { fields = {}, page = "" } = req.body || {};

    // Labels must match your form labels from the sheet
    const name = String(fields["Name"] ?? "").trim();
    const company = String(fields["Company"] ?? "").trim();
    const email = String(fields["Email"] ?? "").trim();
    const branches = String(fields["# of branches"] ?? "").trim();

    // Required fields
    if (!name || !company || !email || !branches) {
      return res.status(400).json({
        error: "Missing required fields: Name, Company, Email, # of branches.",
      });
    }

    if (!isEmail(email)) {
      return res.status(400).json({ error: "Invalid email." });
    }

    const lines = Object.entries(fields).map(
      ([k, v]) => `${k}: ${String(v ?? "").trim()}`
    );

    const text = [
      "New Schedule a Demo request",
      "",
      `Page: ${page}`,
      "",
      ...lines,
      "",
    ].join("\n");

    // Gmail SMTP using App Password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailAddress, pass: gmailAppPassword },
    });

    await transporter.sendMail({
      from: gmailAddress,
      to: "sales@iripple.com",
      replyTo: email,
      subject: `Demo request: ${company} (${name})`,
      text,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: "Failed to send email." });
  }
}
