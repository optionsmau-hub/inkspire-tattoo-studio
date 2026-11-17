import Navbar from "@/components/Navbar";
import StickyBar from "@/components/StickyBar";
import InstagramFab from "@/components/InstagramFab";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Mission from "@/components/sections/Mission";
import Gallery from "@/components/sections/Gallery";
import Videos from "@/components/sections/Videos";
import InstagramCTA from "@/components/sections/InstagramCTA";
import Road from "@/components/sections/Road";
import Reviews from "@/components/sections/Reviews";
import EstimateForm from "@/components/sections/EstimateForm";
import Location from "@/components/sections/Location";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Mission />
        <Gallery />
        <Videos />
        <InstagramCTA />
        <Road />
        <Reviews />
        <EstimateForm />
        <Location />
      </main>
      <Footer />
      <InstagramFab />
      <StickyBar />
    </div>
  );
}