"use client";
import React, { useRef, useState, useEffect } from "react";
import { Download, Mail, X, Paperclip, Loader2, Send } from "lucide-react";

/**
 * Note: External imports like 'next/dynamic', 'react-email-editor', and local service paths
 * are marked as external to prevent build errors in this specific preview environment.
 * The logic remains intact for your actual Next.js project.
 */

// @ts-ignore
import dynamic from "next/dynamic";
// @ts-ignore
import { sendMail } from "@/services/mail";
// @ts-ignore
import { EditorRef } from "react-email-editor";
// @ts-ignore
import { PHSConstants } from "@/utils/constants";
// @ts-ignore
import { CgSpinner } from "react-icons/cg";

// Mocking CgSpinner in case the icon library isn't found in the bundle
const SpinnerIcon = () => (
  <svg
    className="tw:animate-spin tw:h-5 tw:w-5 tw:text-blue-600"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="tw:opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="tw:opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

// 1. Dynamic import to fix Hydration Error (SSR: false)
const EmailEditor = dynamic(() => import("react-email-editor"), {
  ssr: false,
  loading: () => (
    <div className="tw:flex tw:items-center tw:justify-center tw:h-full tw:bg-slate-50">
      <SpinnerIcon />
    </div>
  ),
});

export default function App() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [sending, setSending] = useState(false);
  const emailEditorRef = useRef<EditorRef>(null);
  const [openDialog, setOpenDialog] = useState(false);

  // State for multiple files
  const [files, setFiles] = useState<File[]>([]);

  // Helper: Convert File to Base64 String
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        const base64String = result.split(",")[1];
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
    // Reset input so the same file can be selected again if deleted
    e.target.value = "";
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const exportHtml = async () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml(async (data: any) => {
      // @ts-ignore - import toast might be missing in some contexts
      const { toast } = await import("react-toastify");

      if (!email.trim()) return toast.error("Recipient email can't be empty");
      if (!subject.trim()) return toast.error("Subject can't be empty");

      setOpenDialog(false);
      setSending(true);

      try {
        let { html } = data;
        const footerImage = `
          <div style="text-align: start; margin-top: 20px; font-family: sans-serif;">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td style="vertical-align: middle;">
                  <img src="https://primehealthcentre.co.zw/opengraph-image.png" 
                       alt="Logo" 
                       style="width: 120px; height: auto; display: block; margin-right: 14px;" />
                </td>
                <td style="vertical-align: middle;">
                  <img src="https://primehealthcentre.co.zw/scope.png" 
                       alt="Scope" 
                       style="width: 120px; height: auto; display: block;" />
                </td>
              </tr>
            </table>
            
            <a href="${PHSConstants?.website || "https://primehealthcentre.co.zw"}" style="display: block; margin-top: 10px; color: #0000EE; text-decoration: none;">
              ${PHSConstants?.website || "https://primehealthcentre.co.zw"}
            </a>
            <div style="color: #333333;">373 Engineering Drive</div>
            <div style="color: #333333;">Harare</div>
          </div>
        `;
        html = html.replace("</body>", `${footerImage}</body>`);

        // Process multiple attachments
        const attachments = await Promise.all(
          files.map(async (f) => ({
            filename: f.name,
            content: await fileToBase64(f),
          })),
        );

        const result = await sendMail({
          body: html,
          reccipient: email,
          subject: subject,
          attachments: attachments.length > 0 ? attachments : undefined,
        });

        if (result.success) {
          toast.success("Email sent successfully!");
          setFiles([]); // Clear all files after success
          setEmail("");
          setSubject("");
        } else {
          toast.error(result.message || "Failed to send email");
        }
      } catch (error) {
        toast.error("An error occurred while preparing the email.");
      } finally {
        setSending(false);
      }
    });
  };

  return (
    <div className="tw:flex tw:flex-col tw:h-screen tw:w-full tw:bg-slate-50 tw:overflow-hidden tw:font-sans">
      {/* Modal Dialog */}
      {openDialog && (
        <div className="tw:fixed tw:inset-0 tw:z-50 tw:flex tw:items-center tw:justify-center tw:bg-black/60 tw:backdrop-blur-sm tw:p-4">
          <div className="tw:bg-white tw:rounded-2xl tw:w-full tw:max-w-md tw:p-6 tw:shadow-2xl tw:flex tw:flex-col tw:gap-4">
            <div className="tw:flex tw:justify-between tw:items-center">
              <h2 className="tw:text-xl tw:font-bold tw:text-gray-800">
                New Message
              </h2>
              <button
                onClick={() => setOpenDialog(false)}
                className="tw:text-gray-400 hover:tw:text-gray-600"
              >
                <X size={20} />
              </button>
            </div>

            <div className="tw:flex tw:flex-col tw:gap-1">
              <label className="tw:text-sm tw:font-medium tw:text-gray-600">
                To:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="recipient@example.com"
                className="tw:w-full tw:px-3 tw:py-2 tw:border tw:border-gray-300 tw:rounded-lg focus:tw:ring-2 focus:tw:ring-blue-500 tw:outline-none"
              />
            </div>

            <div className="tw:flex tw:flex-col tw:gap-1">
              <label className="tw:text-sm tw:font-medium tw:text-gray-600">
                Subject:
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter subject"
                className="tw:w-full tw:px-3 tw:py-2 tw:border tw:border-gray-300 tw:rounded-lg focus:tw:ring-2 focus:tw:ring-blue-500 tw:outline-none"
              />
            </div>

            <div className="tw:flex tw:flex-col tw:gap-2">
              <label className="tw:text-sm tw:font-medium tw:text-gray-600">
                Attachments:
              </label>
              <div className="tw:relative">
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="tw:absolute tw:inset-0 tw:opacity-0 tw:cursor-pointer"
                />
                <div className="tw:flex tw:items-center tw:gap-2 tw:px-4 tw:py-2 tw:bg-blue-50 tw:text-blue-700 tw:rounded-lg tw:border tw:border-dashed tw:border-blue-300 tw:justify-center">
                  <Paperclip size={16} />
                  <span className="tw:text-sm tw:font-semibold">Add Files</span>
                </div>
              </div>

              <div className="tw:flex tw:flex-col tw:gap-2 tw:max-h-32 tw:overflow-y-auto tw:mt-1">
                {files.map((f, index) => (
                  <div
                    key={`${f.name}-${index}`}
                    className="tw:flex tw:items-center tw:justify-between tw:p-2 tw:bg-slate-50 tw:border tw:border-slate-200 tw:rounded-lg"
                  >
                    <span className="tw:text-xs tw:text-slate-700 tw:font-medium tw:truncate tw:max-w-70">
                      📎 {f.name}
                    </span>
                    <button
                      onClick={() => removeFile(index)}
                      className="tw:p-1 tw:hover:bg-red-100 tw:rounded-full tw:text-red-500"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="tw:flex tw:justify-end tw:gap-3 tw:mt-4">
              <button
                onClick={() => setOpenDialog(false)}
                className="tw:px-4 tw:py-2 tw:text-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={exportHtml}
                disabled={sending}
                className="tw:px-6 tw:py-2 tw:bg-blue-600 tw:text-white tw:font-semibold tw:rounded-lg hover:tw:bg-blue-700 disabled:tw:opacity-50 tw:flex tw:items-center tw:gap-2"
              >
                {sending ? (
                  <Loader2 className="tw:animate-spin" size={16} />
                ) : (
                  <Send size={16} />
                )}
                Send Email
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="tw:flex tw:items-center tw:justify-between tw:px-6 tw:py-4 tw:bg-white tw:border-b tw:z-10">
        <div className="tw:flex tw:items-center tw:gap-3">
          <div className="tw:p-2 tw:bg-blue-600 tw:rounded-lg">
            <Mail className="tw:text-white" size={20} />
          </div>
          <div>
            <h1 className="tw:text-lg tw:font-bold tw:text-slate-900 tw:leading-none">
              PrimeHealth Email
            </h1>
            <p className="tw:text-[11px] tw:text-slate-500 tw:mt-1 tw:uppercase tw:tracking-wider tw:font-semibold">
              #madebyprimehealth_centre
            </p>
          </div>
        </div>

        <button
          onClick={() => setOpenDialog(true)}
          disabled={sending}
          className="tw:flex tw:items-center tw:gap-2 tw:px-4 tw:py-2 tw:text-white tw:bg-blue-600 tw:rounded-md hover:tw:bg-blue-700 disabled:tw:opacity-50"
        >
          {sending ? (
            <Loader2 className="tw:animate-spin" size={18} />
          ) : (
            <>
              <Download size={18} /> <span>Compose & Send</span>
            </>
          )}
        </button>
      </header>

      <main className="tw:flex-1 tw:relative tw:bg-slate-100">
        <EmailEditor ref={emailEditorRef} />
      </main>
    </div>
  );
}
