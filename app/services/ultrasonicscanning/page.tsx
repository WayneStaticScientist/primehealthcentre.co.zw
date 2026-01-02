import React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BreadCrumb } from "@/components/layout/breadcrump";
import { ServiceBlogLayout } from "@/components/super-layouts/service-blog";

export default function UltrasonicScanning() {
  return (
    <React.Fragment>
      <Header page="ultrasonicscanning" />
      <main className="main">
        <BreadCrumb title={"Ultrasonic Scanning"} />
        <ServiceBlogLayout
          title={"Advanced Diagnostic Sonography Services"}
          descriptions={[
            "Prime Health Centre provides high-resolution Ultrasonic Scanning (Sonography) to assist in the accurate diagnosis of various internal medical conditions. Our specialized Sonographers use non-invasive imaging technology to examine internal organs, soft tissues, and blood flow, providing critical data that informs effective treatment plans.",
            "As part of our commitment to 'Excellence' and 'Innovation,' our ultrasound services are available both at our Highfields clinic and through our Mobile Medical Unit. This allows us to bring advanced diagnostic capabilities directly to remote work sites—such as mines and construction hubs—ensuring that workers have access to vital screenings without leaving their place of employment.",
          ]}
          blockquote="By embracing new technologies and mobile approaches, we improve occupational health access and uphold the highest standards of diagnostic integrity."
          summary="Our sonography department works in close 'Collaboration' with our doctors and radiologists to provide a 'Full Body Scan' experience. Whether for routine wellness checks or investigating specific health concerns, we ensure rapid turnaround times for results, helping businesses maintain a healthy and productive workforce."
          summaryTitle="Mobile and In-Clinic Diagnostic Excellence"
        />
      </main>
      <Footer />
    </React.Fragment>
  );
}
