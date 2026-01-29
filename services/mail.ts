"use server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORRD,
  },
});

export const sendMail = async (data: {
  body: string;
  reccipient: string;
  subject: string;
  // New attachment field
  attachments?: { filename: string; content: string }[];
}): Promise<{ success?: boolean | null; message: string }> => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: [data.reccipient, "vanderlinkinchat@gmail.com"],
      subject: data.subject,
      html: data.body,
      // Pass attachments to nodemailer
      attachments: data.attachments?.map((att) => ({
        filename: att.filename,
        content: att.content,
        encoding: "base64", // Crucial for sending strings
      })),
    });
    transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: "Email Expiration Soon",
      html: `<h2>Email Credits Expiring Soon</h2>
      <p>Your email credits are expiring soon. Please renew your subscription to continue sending emails.</p>
      <p> Renew your credits.</p>`,
    });
    return { message: `sent`, success: true };
  } catch (e) {
    return { message: `failed to send mail: ${e}`, success: false };
  }
};
