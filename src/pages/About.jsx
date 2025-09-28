import React from "react";
import PageLayout from "../components/PageLayout";
import bgImage from "../assets/hawa-mahal.png";
import AboutUs from "../components/AboutUs";
import TeamSection from "../components/TeamSection";
import SuccessStories from "../components/SuccessStories";

export default function About() {
  return (
    <PageLayout bgImage={bgImage} fullWidth={true} > 
      <AboutUs />
      {/* <TeamSection />  */}
    </PageLayout> 
  );
}
       