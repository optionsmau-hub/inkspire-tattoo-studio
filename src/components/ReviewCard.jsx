import { Star } from "lucide-react";

const initials = (name) =>
  name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

export default function ReviewCard({ name, text, stars = 5 }) {
  return (
    <figure className="bg-black/40 border border-[#C9A227]/20 rounded-2xl p-6 flex flex-col">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} size={16} className="fill-[#C9A227] text-[#C9A227]" />
        ))}
      </div>
      <blockquote className="text-white/75 leading-relaxed mb-6 flex-1">&ldquo;{text}&rdquo;</blockquote>
      <figcaption className="flex items-center gap-3">
        <span className="w-9 h-9 shrink-0 rounded-full bg-[#C9A227]/15 border border-[#C9A227]/40 text-[#C9A227] font-heading text-sm flex items-center justify-center">
          {initials(name)}
        </span>
        <span>
          <span className="block text-white font-heading uppercase tracking-wide text-sm">{name}</span>
          <span className="block text-white/40 text-xs">Google review</span>
        </span>
      </figcaption>
    </figure>
  );
}