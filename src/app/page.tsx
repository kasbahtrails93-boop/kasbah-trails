import HeroSlider from "@/components/HeroSlider";
import FeaturedTours from "@/components/FeaturedTours";
import Process from "@/components/Process";
import Why from "@/components/Why";
import Destinations from "@/components/Destinations";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <FeaturedTours />
      <Process />
      <Why />
      <Destinations />
      <Reviews />
      <Faq />
      <Contact />
    </>
  );
}
