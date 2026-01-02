import React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BreadCrumb } from "@/components/layout/breadcrump";
import { ServiceBlogLayout } from "@/components/super-layouts/service-blog";

export default function PneumoconiosisTest() {
  return (
    <React.Fragment>
      <Header page="pneumoconiosistest" />
      <main className="main">
        <BreadCrumb title={"Pneumoconiosis Test"} />
        <ServiceBlogLayout
          title={"Statutory Occupational Lung Disease Screening"}
          descriptions={[
            "Pneumoconiosis remains one of the most critical health risks in the mining and construction sectors. Prime Health Centre provides specialized screening services to detect lung damage caused by the inhalation of mineral dusts, such as silica, coal, or asbestos. Our testing protocol is designed to meet strict regulatory requirements and protect the long-term respiratory health of workers.",
            "Utilizing a combination of Digital X-Rays and Spirometry (Lung Function Testing), our medical team looks for early signs of fibrosis or inflammation. By identifying these issues in their earliest stages, we help employers fulfill their legal obligations and, more importantly, uphold our mission of protecting workers' health and preventing work-related illnesses.",
          ]}
          blockquote="We prioritize the Safety of workers in high-risk environments, working closely with industry stakeholders to combat the risk of irreversible work-related lung injuries."
          summary="As a 'One-Stop-Shop' for occupational health, we handle the entire certification process internally. From clinical examination to radiological reporting by our specialized Radiographers, we ensure that your workforce remains compliant with the Pneumoconiosis Act and that every worker is fit for duty."
          summaryTitle="Ensuring Statutory Compliance & Respiratory Safety"
        />
      </main>
      <Footer />
    </React.Fragment>
  );
}
