import Services from "@/components/home/Services";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import ReadyToRelax from "@/components/sections/ReadyToRelax";

export const metadata = {
  title: "Imperial Wellness Spa | Luxury Massage & Wellness in Indore",
  description:
    "Experience relaxation and rejuvenation at Imperial Wellness Spa, Indore. Explore our massage therapies and book your appointment on WhatsApp.",
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#090806]">
     
      <Hero />
      <About />
      <Services />
      <Gallery/>
      <ReadyToRelax />
    </main>
  );
}
