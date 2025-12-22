import React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BreadCrumb } from "@/components/layout/breadcrump";
import { ContactLayout } from "@/components/layout/contact-layout";

export default function AboutPage() {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <BreadCrumb title={"Contact Us"} />
        <ContactLayout />
      </main>
      <Footer />
    </React.Fragment>
  );
}
