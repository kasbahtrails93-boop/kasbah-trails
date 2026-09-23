import LuxuryHero from "@/components/home/LuxuryHero";
import Intro from "@/components/home/Intro";
import Journeys from "@/components/home/Journeys";
import TravelYourWay from "@/components/home/TravelYourWay";
import Experiences from "@/components/home/Experiences";
import Values from "@/components/home/Values";
import Destinations from "@/components/Destinations";
import Steps from "@/components/home/Steps";
import Voices from "@/components/home/Voices";
import Guides from "@/components/home/Guides";
import Questions from "@/components/home/Questions";

export default function Home() {
  return (
    <>
      <LuxuryHero />
      <Intro />
      <Journeys />
      <TravelYourWay />
      <Experiences />
      <Values />
      <Destinations />
      <Steps />
      <Voices />
      <Guides />
      <Questions />
    </>
  );
}
