import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./assets/css/bootstrap.min.css";
import "./assets/css/all-fontawesome.min.css";

import "./assets/css/animate.min.css";
import "./assets/css/nice-select.min.css";

import "./assets/css/style.css";

import "./assets/css/jquery-ui.min.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/magnific-popup.min.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prime Health Centre",
  description:
    "Your Health, Our Priority - Comprehensive Medical Services at Prime Health Centre",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased home-2`}
      >
        {children}
        <Script
          src="/assets/js/modernizr.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="/assets/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="/assets/js/imagesloaded.pkgd.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="/assets/js/jquery.magnific-popup.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="/assets/js/isotope.pkgd.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="/assets/js/jquery.appear.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="/assets/js/jquery.easing.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="/assets/js/owl.carousel.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="/assets/js/counter-up.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="/assets/js/jquery-ui.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="/assets/js/jquery.nice-select.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="/assets/js/countdown.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="/assets/js/wow.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script src="/assets/js/main.js" strategy="beforeInteractive"></Script>
      </body>
    </html>
  );
}
