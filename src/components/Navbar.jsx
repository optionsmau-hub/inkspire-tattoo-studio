import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#sobre-mi", label: "About" },
  { href: "#mision", label: "Mission" },
  { href: "#galeria", label: "Gallery" },
  { href: "#videos", label: "Videos" },
  { href: "#proceso", label: "Process" },
  { href: "#ubicacion", label: "Location" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-md border-b border-[hsl(46_67%_47%/0.2)]" : "bg-transparent"}`}>
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#inicio" className="font-display text-2xl tracking-wider text-white">
          INK<span className="text-[#C9A227]">SPIRE</span>
        </a>
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm uppercase tracking-wide text-white/70 hover:text-[#C9A227] transition-colors font-heading">
              {l.label}
            </a>
          ))}
          <a href="#estimado" className="text-sm uppercase tracking-wide bg-[#C9A227] text-black px-5 py-2 rounded-full font-semibold hover:bg-[#d4af3a] transition-colors">
            Get estimate
          </a>
        </div>
        <button className="md:hidden text-[#C9A227]" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-black/95 border-t border-[#C9A227]/20 px-4 py-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-white/80 hover:text-[#C9A227] uppercase tracking-wide font-heading py-1">
              {l.label}
            </a>
          ))}
          <a href="#estimado" onClick={() => setOpen(false)} className="block text-center bg-[#C9A227] text-black px-5 py-2.5 rounded-full font-semibold uppercase tracking-wide">
            Get estimate
          </a>
        </div>
      )}
    </header>
  );
}