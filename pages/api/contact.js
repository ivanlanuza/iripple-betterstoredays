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

    const { fields = {}, page = "", source = "website-contact" } = req.body || {};

    // Labels must match your form labels from the sheet
    const name = String(fields["Name"] ?? "").trim();
    const email = String(fields["Email"] ?? "").trim();
    const legacyCompany = String(fields["Company"] ?? "").trim();
    const legacyBranches = String(fields["# of branches"] ?? "").trim();
    const industryType = String(fields["Industry Type"] ?? "").trim();
    const numberOfBranches = String(fields["Number of branches"] ?? "").trim();

    const isRequestDemo = source === "request-demo";

    if (isRequestDemo) {
      const interest = String(fields["Interest"] ?? "").trim();
      if (!name || !email || !industryType || !numberOfBranches || !interest) {
        return res.status(400).json({
          error:
            "Missing required fields: Name, Email, Industry Type, Number of branches, Interest.",
        });
      }
      if (name.length > 25) {
        return res.status(400).json({ error: "Name cannot exceed 25 characters." });
      }
    } else {
      if (!name || !legacyCompany || !email || !legacyBranches) {
        return res.status(400).json({
          error: "Missing required fields: Name, Company, Email, # of branches.",
        });
      }
    }

    if (!isEmail(email)) {
      return res.status(400).json({ error: "Invalid email." });
    }

    const lines = Object.entries(fields).map(
      ([k, v]) => `${k}: ${String(v ?? "").trim()}`
    );

    const text = [
      isRequestDemo ? "New Request for Demo submission" : "New Schedule a Demo request",
      "",
      `Source: ${source}`,
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
      subject: isRequestDemo
        ? `Request for Demo: ${name}${industryType ? ` (${industryType})` : ""}`
        : `Demo request: ${legacyCompany} (${name})`,
      text,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: "Failed to send email." });
  }
}
