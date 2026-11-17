import { useState } from "react";
import { base44 } from "@/api/base44Client";
import { MessageCircle, MessageSquare, Phone, Upload, Loader2, Check, Instagram } from "lucide-react";
import { TEL_HREF, SMS_HREF, WHATSAPP_HREF, INSTAGRAM_HANDLE, INSTAGRAM_HREF } from "@/lib/contact";

export default function EstimateForm() {
  const [form, setForm] = useState({ nombre: "", telefono: "", email: "", idea: "" });
  const [files, setFiles] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const fotos = [];
      for (const file of files) {
        const { file_url } = await base44.integrations.Core.UploadPublicFile({ file });
        fotos.push(file_url);
      }
      await base44.entities.Solicitud.create({ ...form, fotos, status: "Nuevo" });
      const photos = fotos.length ? `\n\nReference photos:\n${fotos.join("\n")}` : "";
      const msg = `Hi Jose! My name is ${form.nombre}.\n\nPhone: ${form.telefono}\nEmail: ${form.email}\n\nTattoo idea: ${form.idea}${photos}`;
      window.open(`${WHATSAPP_HREF}?text=${encodeURIComponent(msg)}`, "_blank");
      setDone(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <section id="estimado" className="py-20 md:py-28 px-5 max-w-2xl mx-auto scroll-mt-16">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-[#C9A227] flex items-center justify-center mx-auto mb-6">
            <Check size={32} className="text-black" />
          </div>
          <h2 className="font-display text-white text-4xl md:text-5xl tracking-wide mb-3">Thank you!</h2>
          <p className="text-white/70 text-lg">We'll contact you soon.</p>
          <div className="mt-10">
            <p className="text-white/60 text-sm mb-3">While you wait, follow along on Instagram</p>
            <a href={INSTAGRAM_HREF} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#C9A227] text-black px-7 py-3.5 rounded-full font-heading uppercase tracking-wide font-semibold hover:bg-[#d4af3a] transition-colors min-h-[48px]">
              <Instagram size={20} /> Follow {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="estimado" className="py-20 md:py-28 px-5 bg-gradient-to-b from-[#0d0d0d] to-black scroll-mt-16">
      <div className="max-w-2xl mx-auto">
        <p className="text-[#C9A227] font-heading uppercase tracking-[0.3em] text-sm mb-3 text-center">Let's begin</p>
        <h2 className="font-display text-white text-5xl md:text-6xl tracking-wide mb-3 text-center">Get estimate</h2>
        <p className="text-white/50 text-center mb-10">Share your idea and Jose will reply with a proposal.</p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white/70 text-sm font-heading uppercase tracking-wide mb-1.5">Name *</label>
              <input name="nombre" value={form.nombre} onChange={handleChange} required className="w-full bg-transparent border-b border-[#C9A227]/30 focus:border-[#C9A227] text-white py-2.5 outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-white/70 text-sm font-heading uppercase tracking-wide mb-1.5">Phone *</label>
              <input name="telefono" type="tel" value={form.telefono} onChange={handleChange} required className="w-full bg-transparent border-b border-[#C9A227]/30 focus:border-[#C9A227] text-white py-2.5 outline-none transition-colors" />
            </div>
          </div>
          <div>
            <label className="block text-white/70 text-sm font-heading uppercase tracking-wide mb-1.5">Email *</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full bg-transparent border-b border-[#C9A227]/30 focus:border-[#C9A227] text-white py-2.5 outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-white/70 text-sm font-heading uppercase tracking-wide mb-1.5">Tattoo idea *</label>
            <textarea name="idea" value={form.idea} onChange={handleChange} required rows={4} className="w-full bg-transparent border-b border-[#C9A227]/30 focus:border-[#C9A227] text-white py-2.5 outline-none transition-colors resize-none" />
            <p className="text-white/40 text-xs mt-1.5">Tell us your idea: subject, approximate size, placement, and references if you have them.</p>
          </div>
          <div>
            <label className="block text-white/70 text-sm font-heading uppercase tracking-wide mb-1.5">Attach reference photos (optional)</label>
            <label className="flex items-center gap-3 border border-dashed border-[#C9A227]/40 rounded-xl p-4 cursor-pointer hover:border-[#C9A227] transition-colors">
              <Upload size={22} className="text-[#C9A227] shrink-0" />
              <span className="text-white/60 text-sm">{files.length ? `${files.length} file(s) selected` : "Tap to upload photos"}</span>
              <input type="file" accept="image/*" multiple className="hidden" onChange={(e) => setFiles(Array.from(e.target.files))} />
            </label>
            <p className="text-white/40 text-xs mt-1.5">Your photos are uploaded and sent as links inside the WhatsApp message.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button type="submit" disabled={submitting} className="flex-1 flex items-center justify-center gap-2 bg-[#C9A227] text-black px-6 py-3.5 rounded-full font-heading uppercase tracking-wide font-semibold hover:bg-[#d4af3a] transition-colors disabled:opacity-60 min-h-[48px]">
              {submitting ? <><Loader2 size={20} className="animate-spin" /> Sending...</> : <><MessageCircle size={20} /> Send via WhatsApp</>}
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a href={TEL_HREF} className="flex items-center justify-center gap-2 border border-[#C9A227] text-[#C9A227] px-6 py-3.5 rounded-full font-heading uppercase tracking-wide font-semibold hover:bg-[#C9A227]/10 transition-colors min-h-[48px]">
              <Phone size={20} /> Call
            </a>
            <a href={SMS_HREF} className="flex items-center justify-center gap-2 border border-[#C9A227] text-[#C9A227] px-6 py-3.5 rounded-full font-heading uppercase tracking-wide font-semibold hover:bg-[#C9A227]/10 transition-colors min-h-[48px]">
              <MessageSquare size={20} /> Text us
            </a>
          </div>
          <p className="text-center text-sm">
            <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/60 hover:text-[#C9A227] transition-colors">
              <MessageCircle size={16} /> Also on WhatsApp
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}