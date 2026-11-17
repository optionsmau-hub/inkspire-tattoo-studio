import { Image } from "@/components/ui/image";

const PORTRAIT_PHOTO = "https://media.base44.com/images/public/6ad6dee3527a59df050f2127/4f14676d5_IMG_2282.jpg";
const JOURNEY_PHOTO = "https://media.base44.com/images/public/6ad6dee3527a59df050f2127/6e9b34943_Jose2026-1998.jpg";

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 md:py-28 px-5 max-w-6xl mx-auto scroll-mt-16">
      <p className="text-[#C9A227] font-heading uppercase tracking-[0.3em] text-sm mb-3">The artist</p>
      <h2 className="font-display text-[#F2EDE4] text-5xl md:text-6xl tracking-wide mb-10">About Jose Urdaneta</h2>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative rounded-2xl overflow-hidden bg-black aspect-[4/5]">
          <Image src={PORTRAIT_PHOTO} alt="Jose Urdaneta, founder of Inkspire Tattoo Studio" className="w-full h-full" fittingType="fit" />
        </div>
        <div>
          <p className="font-body text-[#F2EDE4] text-[17px] md:text-[18px] font-normal leading-[1.6]">
            <span className="font-serif italic text-[#C9A227] text-[19px] md:text-[20px]">Hi, I’m Jose, founder of Inkspire Tattoo Studio.</span>{" "}
            For more than 15 years I’ve been tattooing, and what I love most is turning a person’s idea into a piece that means something to them. Every tattoo I do starts with your story. I take the time to understand it, shape it into a design that fits you, and make sure it lasts.
          </p>
          <p className="font-body text-[#F2EDE4] text-[17px] md:text-[18px] font-normal leading-[1.6] mt-5">
            The studio is built to make you comfortable. It’s clean, private, and focused on you, from the first consultation to the last line of ink.
          </p>
        </div>
      </div>
      <figure className="mt-10 md:mt-14">
        <div className="relative rounded-2xl overflow-hidden">
          <Image src={JOURNEY_PHOTO} alt="Jose Urdaneta, from 1993 to 2026" className="w-full aspect-[4/5]" fittingType="fit" />
        </div>
        <figcaption className="text-center text-white/50 text-sm mt-4 font-heading uppercase tracking-wide">From 1993 to Inkspire.</figcaption>
      </figure>
    </section>
  );
}