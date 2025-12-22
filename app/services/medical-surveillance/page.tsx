import React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BreadCrumb } from "@/components/layout/breadcrump";
import { ServiceBlogLayout } from "@/components/super-layouts/service-blog";

export default function AboutPage() {
  return (
    <React.Fragment>
      <Header page="medical-surveillance" />
      <main className="main">
        <BreadCrumb title={"Medical Surveillance"} />
        <ServiceBlogLayout
          title={"Mobile Medical Surveillance"}
          descriptions={[
            "Prime Health Centre provides comprehensive on-site medical surveillance tailored for mining, construction, and industrial sectors. Our specialized mobile units bring high-standard clinical diagnostics directly to your workplace, ensuring that your workforce remains healthy, productive, and compliant with national safety regulations.",
            "Our surveillance program includes a full suite of examinations such as Pre-employment, Periodic, and Exit medicals. By utilizing advanced automated equipment, we provide accurate screenings for Audiometry, Spirometry (Lung Function), and vision, helping to detect and mitigate work-related health risks before they impact your operations.",
          ]}
          blockquote="To be the leading provider in comprehensive health services with much emphasis on occupational health, promoting a safe and healthy work environment that enhances the well-being and productivity of workers."
          summary="Our mobile medical surveillance is designed to offer a 'one-stop' health solution at your doorstep. We prioritize integrity and confidentiality, providing detailed diagnostic reporting that helps organizations maintain NSSA compliance and high safety standards without the need for off-site travel."
          summaryTitle="The Prime Health Advantage"
        />
      </main>
      <Footer />
    </React.Fragment>
  );
}
