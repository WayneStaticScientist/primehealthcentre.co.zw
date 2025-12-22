import React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BreadCrumb } from "@/components/layout/breadcrump";
import { ServiceBlogLayout } from "@/components/super-layouts/service-blog";

export default function DigitalXRay() {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <BreadCrumb title={"Digital X-Ray"} />
        <ServiceBlogLayout
          title={"High-Frequency Digital X-Ray Services"}
          descriptions={[
            "Prime Health Centre utilizes state-of-the-art high-frequency Digital X-Ray technology to provide superior image quality with lower radiation exposure. This advanced diagnostic tool is essential for detecting occupational lung diseases, cardiac conditions, and skeletal injuries that can occur in high-impact industrial environments.",
            "Our digital imaging system allows for instant results and remote consultation capabilities. Integrated into our Mobile Medical Unit, we bring hospital-grade radiology directly to your site, ensuring that mandatory chest X-rays for NSSA and Pneumoconiosis certificates are completed with maximum efficiency and minimum worker downtime.",
          ]}
          blockquote="Our core value of Safety means prioritizing the health and safety of workers and communities through the use of innovative medical technology and rigorous clinical standards."
          summary="By transitioning from traditional film to Digital Radiology, we provide precise, rapid, and personalized diagnostic reporting. Our digital archives allow for easy comparison of longitudinal health records, helping SHEQ officers monitor the long-term health trends of their workforce accurately."
          summaryTitle="Advanced Radiology at Your Doorstep"
        />
      </main>
      <Footer />
    </React.Fragment>
  );
}
