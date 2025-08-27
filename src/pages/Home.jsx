import React from "react";
import PageLayout from "../components/PageLayout";
import bgImage from "../assets/hawa-mahal.png";
import SuccessStories from "../components/SuccessStories";
import NewsSection from "../components/News";
import PartnersSection from "../components/PartnerSection";
import FeaturedBusiness from "../components/BusinessSection";
import PaidInfoSection from "../components/PaidInfoSection.jsx";
import IntroSection from "../components/IntroSection.jsx";

export default function Home() {
  return (
    <PageLayout bgImage={bgImage} fullWidth={true} > 
    <IntroSection />
    <PaidInfoSection />
    <FeaturedBusiness />
    <PartnersSection />
    <NewsSection /> 
      <SuccessStories hasTree={false} />   
    </PageLayout> 
  );
}
        