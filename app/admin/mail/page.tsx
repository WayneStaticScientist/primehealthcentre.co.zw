"use client";
import React, { useRef, useState, useEffect } from "react";
import { Download, Mail, X } from "lucide-react";
import dynamic from "next/dynamic";
import { toast } from "react-toastify";
import { sendMail } from "@/services/mail";
import { CgSpinner } from "react-icons/cg";
import { EditorRef } from "react-email-editor";
import { PHSConstants } from "@/utils/constants";

// 1. Dynamic import to fix Hydration Error (SSR: false)
const EmailEditor = dynamic(() => import("react-email-editor"), {
  ssr: false,
  loading: () => (
    <div className="tw:flex tw:items-center tw:justify-center tw:h-full tw:bg-slate-50">
      <CgSpinner className="tw:animate-spin tw:text-blue-600" size={32} />
    </div>
  ),
});

export default function App() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [sending, setSending] = useState(false);
  const emailEditorRef = useRef<EditorRef>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  // Helper: Convert File to Base64 String
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = (reader.result as string).split(",")[1];
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const exportHtml = async () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml(async (data: any) => {
      if (!email.trim()) return toast.error("Recipient email can't be empty");
      if (!subject.trim()) return toast.error("Subject can't be empty");

      setOpenDialog(false);
      setSending(true);

      try {
        let { html } = data;
        const footerImage = `
          <div style="text-align: start; margin-top: 20px;">
            <img src="https://primehealthcentre.co.zw/opengraph-image.png" alt="Footer Image" style="width: 120px; height: auto;" />
            <a href="${PHSConstants.website}" style="display: block; margin-top: 10px; color: #0000EE; text-decoration: none;">${PHSConstants.website}</a>
            <div>373 Engineering Drive</div>
            <div>Harare</div>
            <br/>
            <div style="flex-direction: row; align-items: center;">
            <img src="https://primehealthcentre.co.zw/scope.png" alt="Footer Image" style="width: 50%; height: auto;" />
            </div>
          </div>
        `;
        html = html.replace("</body>", `${footerImage}</body>`);

        let attachments = [];
        if (file) {
          const base64Content = await fileToBase64(file);
          attachments.push({
            filename: file.name,
            content: base64Content,
          });
        }

        const result = await sendMail({
          body: html,
          reccipient: email,
          subject: subject,
          attachments: attachments.length > 0 ? attachments : undefined,
        });

        if (result.success) {
          toast.success("Email sent successfully!");
          setFile(null); // Clear file after success
        } else {
          toast.error(result.message);
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
        <div className="tw:flex tw:flex-col tw:z-50 tw:items-center tw:justify-center tw:w-screen tw:h-screen tw:fixed tw:bg-black/60 tw:top-0 tw:left-0 tw:backdrop-blur-sm">
          <div className="tw:bg-white tw:rounded-2xl tw:w-full tw:max-w-md tw:p-6 tw:shadow-2xl tw:flex tw:flex-col tw:gap-4">
            <h2 className="tw:text-xl tw:font-bold tw:text-gray-800">
              New Message
            </h2>

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

            <div className="tw:flex tw:flex-col tw:gap-1">
              <label className="tw:text-sm tw:font-medium tw:text-gray-600">
                Attachment:
              </label>
              {!file ? (
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="tw:text-sm tw:text-gray-500 file:tw:mr-4 file:tw:py-2 file:tw:px-4 file:tw:rounded-lg file:tw:border-0 file:tw:text-sm file:tw:font-semibold file:tw:bg-blue-50 file:tw:text-blue-700 hover:file:tw:bg-blue-100"
                />
              ) : (
                <div className="tw:flex tw:items-center tw:justify-between tw:p-2 tw:bg-blue-50 tw:border tw:border-blue-200 tw:rounded-lg">
                  <span className="tw:text-xs tw:text-blue-700 tw:font-medium tw:truncate tw:max-w-[250px]">
                    📎 {file.name}
                  </span>
                  <button
                    onClick={() => setFile(null)}
                    className="tw:p-1 tw:hover:bg-blue-200 tw:rounded-full tw:text-blue-700"
                  >
                    <X size={14} />
                  </button>
                </div>
              )}
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
                className="tw:px-6 tw:py-2 tw:bg-blue-600 tw:text-white tw:font-semibold tw:rounded-lg hover:tw:bg-blue-700"
              >
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
              PrimeHealthEmail
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
            <CgSpinner className="tw:animate-spin" />
          ) : (
            <>
              <Download size={16} /> Send Email
            </>
          )}
        </button>
      </header>

      {/* Editor */}
      <main className="tw:flex-1 tw:relative tw:bg-slate-100">
        <EmailEditor ref={emailEditorRef} />
      </main>
    </div>
  );
}
