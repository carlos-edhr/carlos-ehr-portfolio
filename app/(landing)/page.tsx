import Image from "next/image";
import Hero from "./_components/sections/hero";
import AnimatedCounter from "./_components/secondary/animated-counter";
import AppShowcase from "./_components/sections/showcase";
import Navbar from "./_components/sections/navbar";
import LogoShowcase from "./_components/sections/logos-showcase";
import FeatureCards from "./_components/sections/feature-cards";
import Experience from "./_components/sections/experience-timeline";
import TechStack from "./_components/sections/tech-stack";
import Testimonials from "./_components/sections/testimonials";
import Contact from "./_components/sections/contact";
import Footer from "./_components/sections/footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <AppShowcase />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
      {/* <TechStack /> */}
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}
