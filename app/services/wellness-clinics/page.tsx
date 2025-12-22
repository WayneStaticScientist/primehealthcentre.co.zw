import React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BreadCrumb } from "@/components/layout/breadcrump";
import { ServiceBlogLayout } from "@/components/super-layouts/service-blog";

export default function WellnessClinics() {
  return (
    <React.Fragment>
      <Header page="wellness-clinics" />
      <main className="main">
        <BreadCrumb title={"Wellness Clinics"} />
        <ServiceBlogLayout
          title={"Employee Wellness Clinics & Preventative Health"}
          descriptions={[
            "Health is more than just the absence of illness; it is a state of complete physical and mental well-being. Prime Health Centre’s Wellness Clinics are designed to provide proactive health management for your workforce, offering free testing, professional counseling, and education on general lifestyle improvements.",
            "Our clinics utilize non-invasive technology to perform comprehensive full-body scans, allowing us to identify potential health risks before they become chronic issues. By bringing these clinics to your site, we foster a culture of health that reduces absenteeism and boosts morale across your organization.",
          ]}
          blockquote="We provide empathetic and supportive care to workers, maintaining the highest levels of confidentiality and privacy regarding all health information."
          summary="Our wellness programs are tailored to the specific needs of your team, covering everything from nutritional guidance to mental health support. We believe that an informed worker is a protected worker, and our clinical team is dedicated to empowering your staff with the knowledge they need to stay healthy both on and off the job."
          summaryTitle="Promoting Holistic Well-being and Productivity"
        />
      </main>
      <Footer />
    </React.Fragment>
  );
}
