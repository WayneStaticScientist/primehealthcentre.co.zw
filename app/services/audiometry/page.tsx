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
        <BreadCrumb title={"Audiometry"} />
        <ServiceBlogLayout
          title={"Industrial Audiometry & Hearing Conservation"}
          descriptions={[
            "Noise-induced hearing loss is a significant risk in many industrial environments. At Prime Health Centre, we provide comprehensive Audiometry testing using advanced automated screening technology. Our goal is to establish baseline hearing levels and monitor shifts in auditory health to ensure long-term worker well-being.",
            "Our hearing conservation program is fully compliant with NSSA and international safety standards. We provide on-site testing through our Mobile Medical Unit, allowing for minimal disruption to production schedules while ensuring that every employee's hearing is protected according to regulatory requirements.",
          ]}
          blockquote="We prioritize Excellence and Prevention, striving for high-quality services that focus on preventing work-related injuries and illnesses before they occur."
          summary="Each audiometric test is performed in a controlled environment by certified technicians. Upon completion, we provide detailed reports and education on the proper use of Hearing Protection Equipment (HPE), helping your organization maintain a safe, compliant, and healthy workplace."
          summaryTitle="Protecting Your Workforce's Vital Senses"
        />
      </main>
      <Footer />
    </React.Fragment>
  );
}
