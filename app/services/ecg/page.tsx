import React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BreadCrumb } from "@/components/layout/breadcrump";
import { ServiceBlogLayout } from "@/components/super-layouts/service-blog";

export default function ECGServices() {
  return (
    <React.Fragment>
      <Header page="ecg" />
      <main className="main">
        <BreadCrumb title={"ECG (Electrocardiogram)"} />
        <ServiceBlogLayout
          title={"Professional Cardiac Rhythm Monitoring"}
          descriptions={[
            "An Electrocardiogram (ECG) is a fundamental diagnostic tool used by Prime Health Centre to record the electrical activity of the heart. This quick and painless test helps our medical team detect irregularities in heart rhythm (arrhythmias), identify potential heart attacks, and monitor the overall health of the cardiovascular system.",
            "In the context of occupational health, regular ECG screenings are vital for workers exposed to high physical stress or extreme environments. By identifying cardiac abnormalities early, we uphold our core value of 'Prevention,' ensuring that work-related activities do not compromise the heart health of your most valuable assets—your employees.",
          ]}
          blockquote="Striving for high-quality services and excellence, we utilize ECG technology to provide a critical safety net for workers in demanding industries."
          summary="Our ECG services are integrated into our 'One-Stop-Shop' medical approach. Results are interpreted by our expert medical staff, including Doctor Garamukanwa, providing immediate insights and peace of mind. This service is available both at our Highfields centre and via our Mobile Medical Unit for on-site convenience."
          summaryTitle="Rapid Insights for Workplace Heart Safety"
        />
      </main>
      <Footer />
    </React.Fragment>
  );
}
