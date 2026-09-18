import HeroSlider from "@/components/HeroSlider";
import TrustStrip from "@/components/TrustStrip";
import FeaturedTours from "@/components/FeaturedTours";
import Process from "@/components/Process";
import Why from "@/components/Why";
import Destinations from "@/components/Destinations";
import BlogTeaser from "@/components/BlogTeaser";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <TrustStrip />
      <FeaturedTours />
      <Process />
      <Why />
      <Destinations />
      <BlogTeaser />
      <Reviews />
      <Faq />
      <Contact />
    </>
  );
}
