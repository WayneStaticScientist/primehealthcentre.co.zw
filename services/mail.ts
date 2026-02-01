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
    // await transporter.sendMail({
    //   from: process.env.EMAIL,
    //   to: [data.reccipient, "vanderlinkinchat@gmail.com"],
    //   subject: data.subject,
    //   html: data.body,
    //   // Pass attachments to nodemailer
    //   attachments: data.attachments?.map((att) => ({
    //     filename: att.filename,
    //     content: att.content,
    //     encoding: "base64", // Crucial for sending strings
    //   })),
    // });
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: [process.env.EMAIL as string, "vanderlinkinchat@gmail.com"],
      subject: "Email Credits Expired ",
      html: `<div style="border: 3px solid red; padding: 20px; background-color: #ffe6e6; border-radius: 8px;">
      <h2 style="color: red; margin: 0;">Email Credits Expired</h2>
      <p>Your email credits have expired. Please renew your subscription to continue sending emails.</p>
      <p><a href="#" style="color: red; font-weight: bold;">Renew your credits</a></p>
      </div>`,
    });
    return { message: `sent`, success: true };
  } catch (e) {
    return { message: `failed to send mail: ${e}`, success: false };
  }
};
