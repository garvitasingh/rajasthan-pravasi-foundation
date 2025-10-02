// src/components/AdVideo.jsx
import React from "react";

export default function AdVideo({ poster }) {
  return (
    <div className="mx-12 flex justify-center py-8">
      <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-lg">
        <div className="w-full flex justify-center py-8">
        <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-lg">
            <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/nF3icHV6TnU?autoplay=1&mute=0&controls=1"
            title="Advertisement Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            />
        </div>
        </div>
        {/* Overlay Gradient (Optional) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
