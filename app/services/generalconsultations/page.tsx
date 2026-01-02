import React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BreadCrumb } from "@/components/layout/breadcrump";
import { ServiceBlogLayout } from "@/components/super-layouts/service-blog";

export default function GeneralConsultations() {
  return (
    <React.Fragment>
      <Header page="generalconsultations" />
      <main className="main">
        <BreadCrumb title={"General Consultations"} />
        <ServiceBlogLayout
          title={"Expert Doctor Examinations & Consultations"}
          descriptions={[
            "At Prime Health Centre, our General Consultations are the cornerstone of our commitment to worker wellbeing. Led by experienced medical professionals, including Doctor Garamukanwa, our examinations provide a thorough assessment of an individual's health status, focusing on both immediate medical needs and long-term occupational wellness.",
            "Our approach aligns with our mission to promote a safe and healthy work environment. By conducting expert clinical reviews, we help in the early detection of work-related risks and general illnesses, ensuring that productivity is maintained through proactive health management and medical excellence.",
          ]}
          blockquote="Our mission is to provide expert services and education, protecting workers' health and safety while promoting overall well-being and productivity."
          summary="Every consultation is handled with the highest level of Integrity and Confidentiality. Whether you are visiting our Highfields clinic or utilizing our Mobile Medical Unit, we ensure that your health information is protected and that every patient receives empathetic, supportive care."
          summaryTitle="A Foundation of Compassion and Excellence"
        />
      </main>
      <Footer />
    </React.Fragment>
  );
}
