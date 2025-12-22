import React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BreadCrumb } from "@/components/layout/breadcrump";
import { ServiceBlogLayout } from "@/components/super-layouts/service-blog";

export default function FoodHandlerExams() {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <BreadCrumb title={"Food Handler Exams"} />
        <ServiceBlogLayout
          title={"Food Handler Medical Examinations"}
          descriptions={[
            "Public health safety starts with the wellbeing of those handling our food. Prime Health Centre provides comprehensive Food Handler Examinations designed to screen for communicable diseases and ensure that personnel meet the highest hygiene standards required by law and municipal regulations.",
            "Our certified medical team conducts thorough screenings, including physical exams and specialized clinical laboratory tests, to identify potential health risks. Whether at our Highfields clinic or via our Mobile Medical Unit, we provide a seamless certification process that helps food-related businesses maintain compliance and protect consumer safety.",
          ]}
          blockquote="We believe in Collaboration, working closely with industry stakeholders to promote occupational health and maintain the highest standards of safety in the community."
          summary="Upon successful completion of the exam, we issue official medical clearance certificates. Our 'one-stop-shop' approach means all blood tests and clinical diagnostics are handled internally at our lab, ensuring a rapid turnaround time for your staff clearances."
          summaryTitle="Ensuring Hygiene and Regulatory Compliance"
        />
      </main>
      <Footer />
    </React.Fragment>
  );
}
