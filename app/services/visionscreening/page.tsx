import React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BreadCrumb } from "@/components/layout/breadcrump";
import { ServiceBlogLayout } from "@/components/super-layouts/service-blog";

export default function VisionScreening() {
  return (
    <React.Fragment>
      <Header page="visionscreening" />
      <main className="main">
        <BreadCrumb title={"Vision Screening"} />
        <ServiceBlogLayout
          title={"Occupational Vision Screening & Diagnostics"}
          descriptions={[
            "Clear vision is critical for workplace safety, especially for personnel operating heavy machinery, driving, or performing precision tasks. Prime Health Centre utilizes the advanced Titmus Vision Screener to provide accurate assessments of visual acuity, depth perception, color vision, and binocular functions.",
            "Our vision screening program is specifically designed to identify visual impairments that could lead to work-related injuries. By integrating these tests into our occupational health audits, we ensure that every worker is visually fit for their specific role, thereby enhancing both individual well-being and overall organizational productivity.",
          ]}
          blockquote="We embrace Innovation by using industry-leading technologies like the Titmus Vision Screener to improve occupational health outcomes and prevent workplace accidents."
          summary="Our vision tests are part of our comprehensive 'Wellness Clinic' approach. If deficiencies are found, our medical team provides immediate counseling and referrals, ensuring that 'Prevention' remains at the heart of our service. We provide detailed reports that help employers maintain compliance with health and safety regulations."
          summaryTitle="Precision Testing with Titmus Technology"
        />
      </main>
      <Footer />
    </React.Fragment>
  );
}
