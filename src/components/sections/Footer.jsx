import { Phone, MessageSquare, MessageCircle, Instagram, MapPin } from "lucide-react";
import { PHONE_DISPLAY, TEL_HREF, SMS_HREF, WHATSAPP_HREF, INSTAGRAM_HANDLE, INSTAGRAM_HREF } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="border-t border-[#C9A227]/20 bg-black px-5 pt-14 pb-24 md:pb-14">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="font-display text-white text-4xl tracking-wide mb-2">Inkspire <span className="text-[#C9A227]">Tattoo Studio</span></h3>
        <p className="text-white/50 mb-8">Your story, on your skin.</p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-5 sm:gap-8 mb-8">
          <a href={TEL_HREF} className="flex items-center gap-2 py-2 text-white/70 hover:text-[#C9A227] transition-colors">
            <Phone size={18} /> Call {PHONE_DISPLAY}
          </a>
          <a href={SMS_HREF} className="flex items-center gap-2 py-2 text-white/70 hover:text-[#C9A227] transition-colors">
            <MessageSquare size={18} /> Text Us
          </a>
          <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 py-2 text-sm text-white/50 hover:text-[#C9A227] transition-colors">
            <MessageCircle size={16} /> Also on WhatsApp
          </a>
          <a href={INSTAGRAM_HREF} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 py-2 text-[#C9A227] hover:text-[#d4af3a] transition-colors">
            <Instagram size={20} /> {INSTAGRAM_HANDLE}
          </a>
          <span className="flex items-center gap-2 text-white/70">
            <MapPin size={18} /> Gastonia, NC
          </span>
        </div>
        <p className="text-white/30 text-sm">© {new Date().getFullYear()} Inkspire Tattoo Studio. All rights reserved.</p>
      </div>
    </footer>
  );
}