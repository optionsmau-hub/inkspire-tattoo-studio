import { Star } from "lucide-react";
import GoogleIcon from "@/components/GoogleIcon";
import ReviewCard from "@/components/ReviewCard";

const googleReviewsUrl =
  "https://www.google.com/maps/search/?api=1&query=Inkspire%20tattoo%20studio%20Gastonia%20NC";

const reviews = [
  {
    name: "Phillip Spry",
    text: "Jose, you're a blessing brother! I told you my story and you saw my vision and delivered! Fair pricing and great quality work. He makes sure you're taken care of and tries to make it feel as painless as possible.",
  },
  {
    name: "David Stiltner",
    text: "This man is ABSOLUTELY THE BEST IN GASTONIA! I reached out in short notice he got me in there and we tattooed for a good while just enjoying each others company and listening music! Man has a GREAT taste in music!",
  },
  {
    name: "Biscuit",
    text: "José did a phenomenal job on my leg tattoo! He even added some elements to a previous tattoo that makes it pop out more! He brings your vision to life! Very clean, professional, and comfortable at a reasonable price!",
  },
  {
    name: "Dale Persails",
    text: "Absolutely amazing work! Joze did a spectacular job on my new “Eddie” tattoo on my leg and he did it with very little reference!",
  },
  {
    name: "Tammy Medlin",
    text: "We have been looking for a new artist and we hit a home run with Jose! My husband had a shoulder piece he wanted covered up and Jose delivered an amazing rendition of St Michael for him! We will definitely be back! Jose’s suite is comfortable and clean. Best artist Gastonia has had in a while for sure!",
  },
];

export default function Reviews() {
  return (
    <section id="resenas" className="py-20 md:py-28 px-5 bg-[#0d0d0d] scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#C9A227] font-heading uppercase tracking-[0.3em] text-sm mb-3 text-center">Reviews</p>
        <h2 className="font-display text-white text-5xl md:text-6xl tracking-wide mb-7 text-center">What Clients Say</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12">
          <div className="flex items-center gap-3 bg-black/40 border border-[#C9A227]/20 rounded-full px-5 py-2">
            <GoogleIcon className="w-5 h-5" />
            <span className="text-white font-heading text-lg leading-none">5.0</span>
            <span className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className="fill-[#C9A227] text-[#C9A227]" />
              ))}
            </span>
            <span className="text-white/50 text-sm">69 reviews</span>
          </div>
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C9A227] font-heading uppercase tracking-wide text-sm border-b border-[#C9A227]/40 hover:border-[#C9A227] pb-0.5"
          >
            Read all on Google
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}