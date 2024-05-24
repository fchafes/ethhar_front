import Beneficios from "../src/components/Beneficios";
import Features from "../src/components/Features";
import BigVideo from "../src/components/BigVideo";
import StepByStep from "@/src/components/StepByStep";
import HeroHeader from "../src/components/HeroHeader";
import AppIntro from "../src/components/AppIntro";
import Layout from "../src/layout/Layout";
import LogoMarquee from "@/src/components/LogoMarquee";
import Testimonios from "@/src/components/Testimonios";
import Team from "@/src/components/Team";
import Pricing from "@/src/components/Pricing";
import ContactForm from "@/src/components/ContactForm";
import { useState } from "react";

const Index = () => {
  const [reproducirVideo, setReproducirVideo] = useState(false);
  const handleReproducirVideo = () => {
    setReproducirVideo(true);
  };

  console.log("ANALYTICS ID", process.env.MEASUREMENT_ID);

  return (
    <Layout navLight getStartText navHoverColor="nav-orange-red-hover">
      <HeroHeader onReproducirVideo={handleReproducirVideo} />
      <hr className="divider" />
      <BigVideo reproducir={reproducirVideo} />
      <hr className="divider" />
      <AppIntro />
      <LogoMarquee />
      <Beneficios />
      <StepByStep />
      <Features />
      <Testimonios />
      <Team />
      <hr className="divider" />
      <Pricing />
      <hr className="divider" />
      <ContactForm />
    </Layout>
  );
};

export default Index;
