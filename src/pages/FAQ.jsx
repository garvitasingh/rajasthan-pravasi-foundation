// src/pages/FAQ.jsx
import React from "react";
import PageLayout from "../components/PageLayout";
import bgImage from "../assets/hawa-mahal.png";
import FaqContent from "../components/FaqContent";

export default function FAQ() {
  return (
    <PageLayout bgImage={bgImage}>
      <FaqContent />
    </PageLayout>
  );
}
 