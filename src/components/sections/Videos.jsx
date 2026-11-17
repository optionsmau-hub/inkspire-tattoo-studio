import { useState } from "react";
import { VolumeX, X } from "lucide-react";

const videos = [
  "https://media.base44.com/videos/public/6ad6dee3527a59df050f2127/87d10f7dc_IMG_2278.MP4",
  "https://media.base44.com/videos/public/6ad6dee3527a59df050f2127/ee55ca0c2_IMG_2277.MP4",
  "https://media.base44.com/videos/public/6ad6dee3527a59df050f2127/10781ca5a_IMG_2276.MP4",
  "https://media.base44.com/videos/public/6ad6dee3527a59df050f2127/d96cddea1_IMG_2275.MP4",
  "https://media.base44.com/videos/public/6ad6dee3527a59df050f2127/9117ce870_IMG_2279.MP4",
];

export default function Videos() {
  const [active, setActive] = useState(null);

  return (
    <section id="videos" className="py-20 md:py-28 px-5 max-w-6xl mx-auto scroll-mt-16">
      <p className="text-[#C9A227] font-heading uppercase tracking-[0.3em] text-sm mb-3 text-center">Videos</p>
      <h2 className="font-display text-white text-5xl md:text-6xl tracking-wide mb-10 text-center">In Motion Tattoos</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {videos.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(src)}
            className="relative overflow-hidden rounded-xl aspect-[9/16] bg-[#111] group"
            aria-label="Play tattoo video"
          >
            <video
              src={src}
              muted
              loop
              autoPlay
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-2 right-2 bg-black/60 text-[#C9A227] rounded-full p-1.5 transition-colors group-hover:bg-black/80">
              <VolumeX size={14} />
            </span>
          </button>
        ))}
      </div>
      {active && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4" onClick={() => setActive(null)}>
          <button className="absolute top-5 right-5 text-[#C9A227] z-10" onClick={() => setActive(null)} aria-label="Close">
            <X size={30} />
          </button>
          <video
            src={active}
            autoPlay
            loop
            controls
            playsInline
            className="max-w-full max-h-[85vh] rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}