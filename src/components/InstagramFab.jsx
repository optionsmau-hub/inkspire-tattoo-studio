import { Instagram } from "lucide-react";
import { INSTAGRAM_HREF } from "@/lib/contact";

export default function InstagramFab() {
  return (
    <a
      href={INSTAGRAM_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow Inkspire Tattoo Studio on Instagram"
      className="fixed right-4 top-20 z-40 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#C9A227] text-black shadow-lg shadow-black/60 transition-all hover:bg-[#d4af3a] hover:scale-105"
    >
      <Instagram size={26} />
    </a>
  );
}