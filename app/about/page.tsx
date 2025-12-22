import { AboutLayout } from "@/components/layout/about-layout";
import { BreadCrumb } from "@/components/layout/breadcrump";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import React from "react";

export default function AboutPage() {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <BreadCrumb title={"About Us"} />
        <AboutLayout />
      </main>
      <Footer />
    </React.Fragment>
  );
}
