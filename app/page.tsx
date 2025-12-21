import React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BigBanner } from "@/components/layout/big-banner";
import { HeroSlider } from "@/components/layout/hero-slider";
import { ProductList } from "@/components/layout/product-list";
import { SmallBanner } from "@/components/layout/small-banner";
import { MobilePopup } from "@/components/layout/mobile-popup";
import { FeatureArea } from "@/components/layout/feature-area";
import { CategorySection } from "@/components/layout/categories";
import { TrendingItem } from "@/components/layout/trending-item";
import { TestimonialSection } from "@/components/layout/testimonial-section";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <MobilePopup />
      <main className="main">
        <HeroSlider />
        <CategorySection />
        <SmallBanner />
        <TrendingItem />
        <FeatureArea />
        <BigBanner />
        <ProductList />
        <TestimonialSection />
      </main>
      <Footer />
    </React.Fragment>
  );
}
