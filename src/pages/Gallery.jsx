import React from "react";
import PageLayout from "../components/PageLayout";
import bgImage from "../assets/hawa-mahal.png";
import GalleryContent from "../components/GalleryContent";

export default function Gallery() {
  return (
    <PageLayout bgImage={bgImage} fullWidth={true}>
      <GalleryContent />
    </PageLayout>
  );
}
 