import React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BreadCrumb } from "@/components/layout/breadcrump";
import { ServiceBlogLayout } from "@/components/super-layouts/service-blog";

export default function FirstAidTraining() {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <BreadCrumb title={"First Aid Training"} />
        <ServiceBlogLayout
          title={"Professional First Aid Training (Basic & Detailed)"}
          descriptions={[
            "In any industrial or mining environment, the first few minutes after an incident are critical. Prime Health Centre offers professional First Aid Training programs ranging from basic awareness to detailed advanced responder courses. Our training is designed to equip your staff with the confidence and practical skills needed to handle workplace emergencies effectively.",
            "Our curriculum is delivered by experienced medical professionals and covers essential life-saving techniques, including CPR, wound management, and emergency response protocols. By training your team on-site, we ensure that the scenarios practiced are relevant to your specific operational risks, whether in a construction zone, a mine, or a corporate office.",
          ]}
          blockquote="We strive for high-quality services and education, ensuring that safety is not just a policy, but a practical skill shared by every member of the workforce."
          summary="Upon completion of our courses, participants receive certifications that meet national safety standards. Investing in First Aid Training with Prime Health Centre not only ensures regulatory compliance but also demonstrates a genuine commitment to the safety and value of your human capital."
          summaryTitle="Empowering Your Team to Save Lives"
        />
      </main>
      <Footer />
    </React.Fragment>
  );
}
