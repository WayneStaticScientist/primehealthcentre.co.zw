"use client";
import React, { useRef, useEffect, useState } from "react";
import { Download, FileCode, Mail, Loader2 } from "lucide-react";
import EmailEditor, { EditorRef } from "react-email-editor";
import { toast } from "react-toastify";
import { sendMail } from "@/services/mail";
import { send } from "process";
import { CgSpinner } from "react-icons/cg";

/**
 * EmailBuilder Component
 * Uses the Unlayer Global Script to avoid module resolution errors.
 */
export default function App() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [sending, setSending] = useState(false);
  const emailEditorRef = useRef<EditorRef>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const exportHtml = async () => {
    const unlayer = emailEditorRef.current?.editor;
    unlayer?.exportHtml(async (data: any) => {
      if (email.trim() == "") {
        return toast.error("recipient email cant be empty");
      }
      if (subject.trim() == "") {
        return toast.error("subject  cant be empty");
      }
      setOpenDialog(false);
      let { html } = data;
      const footerImage = `
      <div style="text-align: center; margin-top: 20px;">
        <img src="https://primehealthcentre.co.zw/opengraph-image.png" alt="Footer Image" style="width: 120px; height: 63;" />
      </div>
    `;
      html = html.replace("</body>", `${footerImage}</body>`);
      setSending(true);
      const result = await sendMail({
        body: html,
        reccipient: "vanderlinkinchat@gmail.com",
        subject: "Greetings From HIM",
      });
      setSending(false);
      if (result.success) {
        toast.success("Email has been sent succesfully");
      } else {
        toast.error(result.message);
      }
    });
  };

  return (
    <div className="tw:flex tw:flex-col tw:h-screen tw:w-full tw:bg-slate-50 tw:overflow-hidden tw:font-sans">
      {/* Header Toolbar */}
      {openDialog && (
        <div className="tw:flex tw:flex-col tw:z-50 tw:items-center tw:justify-center tw:w-screen tw:h-screen tw:fixed tw:bg-[#00000099] tw:top-0 tw:left-0">
          <div className="tw:bg-white tw:rounded-2xl tw:w-full tw:max-w-md tw:p-6 tw:shadow-xl tw:flex tw:flex-col tw:gap-4">
            <h2 className="tw:text-xl tw:font-bold tw:text-gray-800 tw:mb-2">
              New Message
            </h2>

            {/* Recipient Input */}
            <div className="tw:flex tw:flex-col tw:gap-1">
              <label className="tw:text-sm tw:font-medium tw:text-gray-600">
                To:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="recipient@example.com"
                className="tw:w-full tw:px-3 tw:py-2 tw:border tw:border-gray-300 tw:rounded-lg tw:focus:outline-none tw:focus:ring-2 tw:focus:ring-blue-500"
              />
            </div>

            {/* Subject Input */}
            <div className="tw:flex tw:flex-col tw:gap-1">
              <label className="tw:text-sm tw:font-medium tw:text-gray-600">
                Subject:
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter subject"
                className="tw:w-full tw:px-3 tw:py-2 tw:border tw:border-gray-300 tw:rounded-lg tw:focus:outline-none tw:focus:ring-2 tw:focus:ring-blue-500"
              />
            </div>

            {/* Action Buttons */}
            <div className="tw:flex tw:justify-end tw:gap-3 tw:mt-4">
              <button
                onClick={() => setOpenDialog(false)}
                className="tw:px-4 tw:py-2 tw:text-gray-500 tw:hover:bg-gray-100 tw:rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={exportHtml}
                className="tw:px-6 tw:py-2 tw:bg-blue-600 tw:text-white tw:font-semibold tw:rounded-lg tw:hover:bg-blue-700 tw:transition-colors"
              >
                Send Email
              </button>
            </div>
          </div>
        </div>
      )}
      <header className="tw:flex tw:items-center tw:justify-between tw:px-6 tw:py-4 tw:bg-white tw:border-b tw:border-slate-200 tw:shadow-sm tw:z-10">
        <div className="tw:flex tw:items-center tw:gap-3">
          <div className="tw:p-2 tw:bg-blue-600 tw:rounded-lg">
            <Mail className="tw:text-white" size={20} />
          </div>
          <div>
            <h1 className="tw:text-lg tw:font-bold tw:text-slate-900 tw:leading-none">
              Email Designer
            </h1>
            <p className="tw:text-[11px] tw:text-slate-500 tw:mt-1 tw:uppercase tw:tracking-wider tw:font-semibold">
              Campaign Builder
            </p>
          </div>
        </div>

        <div className="tw:flex tw:items-center tw:gap-3">
          <button
            onClick={() => setOpenDialog(true)}
            className="tw:flex tw:items-center tw:gap-2 tw:px-4 tw:py-2 tw:text-sm tw:font-medium tw:text-white tw:bg-blue-600 tw:rounded-md tw:hover:bg-blue-700 tw:shadow-sm tw:transition-all tw:active:scale-95"
          >
            {sending ? (
              <CgSpinner className="tw:animate-spin" />
            ) : (
              <>
                <Download size={16} />
                Send Email
              </>
            )}
          </button>
        </div>
      </header>

      {/* Main Editor Area */}
      <main className="tw:flex-1 tw:relative tw:bg-slate-100">
        <EmailEditor ref={emailEditorRef} />
      </main>
    </div>
  );
}
