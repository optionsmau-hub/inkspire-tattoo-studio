import { MapPin, ExternalLink } from "lucide-react";
import { Image } from "@/components/ui/image";

const BUILDING_PHOTO = "https://media.base44.com/images/public/6ad6dee3527a59df050f2127/e2963432c_Location.jpg";

export default function Location() {
  return (
    <section id="ubicacion" className="py-20 md:py-28 px-5 max-w-5xl mx-auto scroll-mt-16">
      <p className="text-[#C9A227] font-heading uppercase tracking-[0.3em] text-sm mb-3 text-center">Visit us</p>
      <h2 className="font-display text-white text-5xl md:text-6xl tracking-wide mb-10 text-center">Location</h2>
      <figure className="mb-10">
        <div className="rounded-2xl overflow-hidden border border-[#C9A227]/20">
          <Image src={BUILDING_PHOTO} alt="Exterior of the building housing Inkspire Tattoo Studio" className="w-full h-64 md:h-80 object-cover" fittingType="fill" />
        </div>
        <figcaption className="text-center text-white/60 text-sm mt-3">Our building: 4024 E Franklin Blvd, Suite 112, Gastonia, NC.</figcaption>
      </figure>
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        <div className="flex flex-col justify-center">
          <div className="flex items-start gap-3 mb-5">
            <MapPin size={24} className="text-[#C9A227] shrink-0 mt-1" />
            <p className="text-white/80 text-lg leading-relaxed">4024 E Franklin Blvd, Suite 112<br />Gastonia, NC 28056</p>
          </div>
          <div className="bg-[#C9A227]/10 border border-[#C9A227]/30 rounded-xl p-4 mb-6">
            <p className="text-white/80 text-sm leading-relaxed">The studio is in a building with several offices. Enter the building and look for the <span className="text-[#C9A227] font-semibold">Suite 112 (Inkspire Tattoo Studio)</span>.</p>
          </div>
          <a href="https://www.google.com/maps/search/?api=1&query=4024+E+Franklin+Blvd+Suite+112+Gastonia+NC+28056" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#C9A227] text-black px-6 py-3.5 rounded-full font-heading uppercase tracking-wide font-semibold hover:bg-[#d4af3a] transition-colors w-full sm:w-auto">
            <ExternalLink size={20} /> Open in Google Maps
          </a>
        </div>
        <div className="rounded-2xl overflow-hidden border border-[#C9A227]/20 min-h-[300px]">
          <iframe
            src="https://www.google.com/maps?q=4024+E+Franklin+Blvd+Suite+112+Gastonia+NC+28056&output=embed"
            className="w-full h-full min-h-[300px]"
            loading="lazy"
            title="Map of Inkspire Tattoo Studio"
          />
        </div>
      </div>
    </section>
  );
}