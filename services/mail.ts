"use server";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORRD, // The 16-digit App Password you generated
  },
});
export const sendMail = async (data: {
  body: string;
  reccipient: string;
  subject: string;
}): Promise<{ success?: boolean | null; message: string }> => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: data.reccipient,
      subject: data.subject,
      html: data.body,
    });
    return { message: `sent`, success: true };
  } catch (e) {
    return { message: `failed to send mnail : ${e}` };
  }
};
import nodemailer from "nodemailer";
