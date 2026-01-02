import React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BreadCrumb } from "@/components/layout/breadcrump";
import { ServiceBlogLayout } from "@/components/super-layouts/service-blog";

export default function MinorSurgicalProcedures() {
  return (
    <React.Fragment>
      <Header page="minorsurgicalprocedure" />
      <main className="main">
        <BreadCrumb title={"Minor Surgical Procedures"} />
        <ServiceBlogLayout
          title={"Safe and Precise Minor Surgical Interventions"}
          descriptions={[
            "Prime Health Centre offers specialized minor surgical procedures designed to address immediate health concerns with minimal downtime. Our clinical team prioritizes safety and precision, ensuring that minor injuries or conditions are treated effectively to prevent them from escalating into long-term health issues or work-related disabilities.",
            "Utilizing modern medical technology and adhering to strict sterilized protocols, we handle procedures such as suturing, abscess drainage, and minor wound debridement. Our goal is to provide high-quality surgical care that supports the rapid recovery of workers, keeping them healthy, safe, and productive in their respective environments.",
          ]}
          blockquote="We prioritize Safety and Prevention, focusing on high-quality clinical interventions to combat the risk of work-related complications and promote long-term recovery."
          summary="All procedures are supported by our internal laboratory and diagnostic services, including Digital X-rays and full body scans where necessary. This integration ensures that our medical team has a complete clinical picture before and after any procedure, upholding our core value of Excellence in every interaction."
          summaryTitle="Integrated Clinical Care & Rapid Recovery"
        />
      </main>
      <Footer />
    </React.Fragment>
  );
}
