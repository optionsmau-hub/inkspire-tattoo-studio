import { useState } from "react";
import { Image } from "@/components/ui/image";
import { X } from "lucide-react";

const images = [
  "https://media.base44.com/images/public/6ad6dee3527a59df050f2127/424d222ea_WhatsAppImage2026-10-17at92051PM2.jpg",
  "https://media.base44.com/images/public/6ad6dee3527a59df050f2127/f90e01dd3_WhatsAppImage2026-10-17at92052PM4.jpg",
  "https://media.base44.com/images/public/6ad6dee3527a59df050f2127/9ada6b8a5_WhatsAppImage2026-10-17at92052PM8.jpg",
  "https://media.base44.com/images/public/6ad6dee3527a59df050f2127/55d8cadb5_WhatsAppImage2026-10-17at92052PM.jpg",
  "https://media.base44.com/images/public/6ad6dee3527a59df050f2127/a3ed6bdb8_WhatsAppImage2026-10-17at92052PM7.jpg",
  "https://media.base44.com/images/public/6ad6dee3527a59df050f2127/9fa8b1819_WhatsAppImage2026-10-17at92052PM1.jpg",
  "https://media.base44.com/images/public/6ad6dee3527a59df050f2127/9c8ffffd4_WhatsAppImage2026-10-17at92052PM3.jpg",
  "https://media.base44.com/images/public/6ad6dee3527a59df050f2127/d917e42d7_WhatsAppImage2026-10-17at92051PM1.jpg",
  "https://media.base44.com/images/public/6ad6dee3527a59df050f2127/fe010c300_WhatsAppImage2026-10-17at92052PM2.jpg",
  "https://media.base44.com/images/public/6ad6dee3527a59df050f2127/02eb1d3a1_WhatsAppImage2026-10-17at92052PM6.jpg",
  "https://media.base44.com/images/public/6ad6dee3527a59df050f2127/bb0d7e607_WhatsAppImage2026-10-17at92051PM.jpg",
  "https://media.base44.com/images/public/6ad6dee3527a59df050f2127/4c9b235e0_WhatsAppImage2026-10-17at92052PM5.jpg",
  "https://media.base44.com/images/public/6ad6dee3527a59df050f2127/641cc996f_WhatsAppImage2026-10-17at91830PM1.jpg",
  "https://media.base44.com/images/public/6ad6dee3527a59df050f2127/f89b95b85_WhatsAppImage2026-10-17at91830PM2.jpg",
  "https://media.base44.com/images/public/6ad6dee3527a59df050f2127/b17cfecde_WhatsAppImage2026-10-17at91830PM3.jpg",
  "https://media.base44.com/images/public/6ad6dee3527a59df050f2127/0c11e404c_WhatsAppImage2026-10-17at91830PM4.jpg",
  "https://media.base44.com/images/public/6ad6dee3527a59df050f2127/e49de937d_WhatsAppImage2026-10-17at91830PM.jpg",
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section id="galeria" className="py-20 md:py-28 px-5 max-w-6xl mx-auto scroll-mt-16">
      <p className="text-[#C9A227] font-heading uppercase tracking-[0.3em] text-sm mb-3 text-center">Portfolio</p>
      <h2 className="font-display text-white text-5xl md:text-6xl tracking-wide mb-10 text-center">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {images.map((src, i) => (
          <button key={i} onClick={() => setActive(src)} className="relative overflow-hidden rounded-xl group aspect-square bg-[#111]">
            <Image src={src} alt="Tattoo by Jose Urdaneta" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" fittingType="fill" />
          </button>
        ))}
      </div>
      {active && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4" onClick={() => setActive(null)}>
          <button className="absolute top-5 right-5 text-[#C9A227] z-10" onClick={() => setActive(null)} aria-label="Close">
            <X size={30} />
          </button>
          <Image src={active} alt="Tattoo by Jose Urdaneta" className="max-w-full max-h-[85vh] rounded-xl object-contain" fittingType="fit" />
        </div>
      )}
    </section>
  );
}