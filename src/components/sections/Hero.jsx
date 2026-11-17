import { MessageCircle, MessageSquare, Phone, Instagram, ArrowDown } from "lucide-react";
import { Image } from "@/components/ui/image";
import { PHONE_DISPLAY, TEL_HREF, SMS_HREF, WHATSAPP_HREF, INSTAGRAM_HANDLE, INSTAGRAM_HREF } from "@/lib/contact";

const HERO_BG = "https://media.base44.com/images/public/6ad6dee3527a59df050f2127/5cfccd131_IMG_2281.jpg";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image src={HERO_BG} alt="Neon hands reaching toward each other" className="w-full h-full" fittingType="fit" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-5 w-full pt-20">
        <div className="max-w-2xl">
          <p className="text-[#C9A227] font-heading uppercase tracking-[0.3em] text-sm mb-4">Gastonia, North Carolina</p>
          <h1 className="font-display text-white text-6xl sm:text-7xl md:text-8xl leading-[0.9] tracking-wide [text-shadow:0_2px_22px_rgba(0,0,0,0.75)]">
            Inkspire<br />Tattoo Studio
          </h1>
          <p className="text-white/90 text-xl md:text-2xl mt-5 font-light [text-shadow:0_2px_14px_rgba(0,0,0,0.85)]">Your story, on your skin.</p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-8">
            <a href="#estimado" className="flex items-center justify-center gap-2 bg-[#C9A227] text-black px-7 py-3.5 rounded-full font-heading uppercase tracking-wide font-semibold hover:bg-[#d4af3a] transition-colors">
              <MessageCircle size={20} /> Get estimate
            </a>
            <a href={TEL_HREF} className="flex items-center justify-center gap-2 border border-[#C9A227] text-[#C9A227] px-7 py-3.5 rounded-full font-heading uppercase tracking-wide font-semibold hover:bg-[#C9A227]/10 transition-colors min-h-[48px]">
              <Phone size={20} /> Call {PHONE_DISPLAY}
            </a>
            <a href={SMS_HREF} className="flex items-center justify-center gap-2 border border-[#C9A227] text-[#C9A227] px-7 py-3.5 rounded-full font-heading uppercase tracking-wide font-semibold hover:bg-[#C9A227]/10 transition-colors min-h-[48px]">
              <MessageSquare size={20} /> Text Us
            </a>
            <a href={INSTAGRAM_HREF} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border border-[#C9A227] text-[#C9A227] px-7 py-3.5 rounded-full font-heading uppercase tracking-wide font-semibold hover:bg-[#C9A227]/10 transition-colors min-h-[48px]">
              <Instagram size={20} /> Follow {INSTAGRAM_HANDLE}
            </a>
          </div>
          <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-5 text-sm text-white/60 hover:text-[#C9A227] transition-colors">
            <MessageCircle size={18} /> Also on WhatsApp
          </a>
        </div>
      </div>
      <a href="#sobre-mi" className="absolute bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 z-10 text-[#C9A227] animate-bounce" aria-label="Scroll down">
        <ArrowDown size={28} />
      </a>
    </section>
  );
}