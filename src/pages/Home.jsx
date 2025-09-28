import React from "react";
import PageLayout from "../components/PageLayout";
import SuccessStories from "../components/SuccessStories";
import NewsSection from "../components/News";
import PartnersSection from "../components/PartnerSection";
import FeaturedBusiness from "../components/BusinessSection";
import PaidInfoSection from "../components/PaidInfoSection.jsx";
import IntroSection from "../components/IntroSection.jsx";
import Footer from "../components/Footer";
import HomeBanner from "../components/HomeBanner";
import Navbar from "../components/Navbar";
import MissionSection from "../components/MissionSection";
import FoundationStructure from "../components/Person";
import FeaturedEvent from "../components/FeatureEvent";

export default function Home() {
  return (
    <> 
      <HomeBanner />
      <MissionSection />
      <FoundationStructure />
      <FeaturedEvent />
      <PaidInfoSection />
      <FeaturedBusiness />
      <NewsSection />
    {/* <IntroSection />
    <PaidInfoSection />
    <FeaturedBusiness />
    <PartnersSection />
    <NewsSection /> 
      <SuccessStories hasTree={false} /> */}
      <Footer />
      </>
  );
}
        