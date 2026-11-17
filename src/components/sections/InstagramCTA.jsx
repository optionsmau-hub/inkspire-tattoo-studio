import { Instagram } from "lucide-react";
import { INSTAGRAM_HANDLE, INSTAGRAM_HREF } from "@/lib/contact";

export default function InstagramCTA() {
  return (
    <section className="px-5 pb-4">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-display text-white text-3xl md:text-4xl tracking-wide mb-6">Follow for more work</p>
        <a
          href={INSTAGRAM_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#C9A227] text-black px-7 py-3.5 rounded-full font-heading uppercase tracking-wide font-semibold hover:bg-[#d4af3a] transition-colors min-h-[48px]"
        >
          <Instagram size={20} /> Follow {INSTAGRAM_HANDLE}
        </a>
      </div>
    </section>
  );
}