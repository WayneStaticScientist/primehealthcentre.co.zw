import React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BreadCrumb } from "@/components/layout/breadcrump";
import { ServiceBlogLayout } from "@/components/super-layouts/service-blog";

export default function Echocardiography() {
  return (
    <React.Fragment>
      <Header page="echocardiographpy" />
      <main className="main">
        <BreadCrumb title={"Echocardiography"} />
        <ServiceBlogLayout
          title={"Specialized Cardiac Imaging & Heart Health"}
          descriptions={[
            "Prime Health Centre offers Echocardiography services to provide a detailed look at the heart's structure and function. This non-invasive ultrasound of the heart allows our medical team to monitor heart valves, chamber size, and pumping capacity, which is essential for diagnosing cardiovascular conditions early.",
            "In line with our mission to promote 'well-being and productivity,' we use echocardiography to screen workers in high-intensity roles. Identifying underlying cardiac issues is a vital part of our 'Prevention' strategy, ensuring that employees are physically fit for their duties and reducing the risk of sudden medical emergencies on-site.",
          ]}
          blockquote="We prioritize the health and safety of workers by utilizing advanced cardiac diagnostics to detect and manage heart-related risks before they impact the workplace."
          summary="Our Echocardiography services are delivered with 'Compassion' and 'Confidentiality.' Whether as a follow-up to an abnormal ECG or as part of a comprehensive executive wellness check, our highly trained staff ensures that every patient receives accurate results and expert guidance on maintaining a healthy heart."
          summaryTitle="Expert Heart Monitoring for a Productive Workforce"
        />
      </main>
      <Footer />
    </React.Fragment>
  );
}
