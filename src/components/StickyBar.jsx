import { Phone, MessageSquare, MessageCircle } from "lucide-react";
import { TEL_HREF, SMS_HREF, WHATSAPP_HREF } from "@/lib/contact";

export default function StickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 flex border-t border-[#C9A227]/30 bg-black/95 backdrop-blur-md">
      <a href={TEL_HREF} className="flex-1 flex items-center justify-center gap-1.5 px-1 py-3 min-h-[56px] whitespace-nowrap bg-[#C9A227] text-black text-sm font-heading uppercase tracking-wide font-semibold">
        <Phone size={18} /> Call
      </a>
      <a href={SMS_HREF} className="flex-1 flex items-center justify-center gap-1.5 px-1 py-3 min-h-[56px] whitespace-nowrap border-l border-[#C9A227]/30 text-[#C9A227] text-sm font-heading uppercase tracking-wide font-medium">
        <MessageSquare size={18} /> Text
      </a>
      <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1.5 px-1 py-3 min-h-[56px] whitespace-nowrap border-l border-[#C9A227]/30 text-[#C9A227] text-sm font-heading uppercase tracking-wide font-medium">
        <MessageCircle size={18} /> WhatsApp
      </a>
    </div>
  );
}