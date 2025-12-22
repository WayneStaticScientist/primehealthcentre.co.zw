import React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BreadCrumb } from "@/components/layout/breadcrump";
import { ServiceBlogLayout } from "@/components/super-layouts/service-blog";

export default function AboutPage() {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <BreadCrumb title={"Spirometry"} />
        <ServiceBlogLayout
          title={"Professional Spirometry & Lung Function Testing"}
          descriptions={[
            "Respiratory health is a critical pillar of occupational safety, especially in industries involving dust and chemical exposure. Prime Health Centre offers specialized Spirometry testing to measure lung capacity and function, helping to detect early signs of occupational lung diseases such as silicosis or occupational asthma.",
            "Using high-precision digital spirometers, our certified medical team conducts tests that meet international Thoracic Society standards. We provide these services on-site through our Mobile Medical Unit, ensuring that mandatory respiratory surveillance is conducted efficiently without requiring staff to leave the worksite.",
          ]}
          blockquote="We are committed to providing expert services and education that protect workers' health and safety while promoting long-term well-being and productivity."
          summary="Our Spirometry program includes detailed interpretation of flow-volume loops and capacity measurements. We provide comprehensive reporting for SHEQ managers, ensuring your organization remains fully compliant with NSSA health regulations and the Pneumoconiosis Act."
          summaryTitle="Breathing Life Into Workplace Safety"
        />
      </main>
      <Footer />
    </React.Fragment>
  );
}
