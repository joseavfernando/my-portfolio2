import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechCarousel from "@/components/TechCarousel";
import Contact from "@/components/Conctact";


 export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <TechCarousel />
      <Contact />
    </>
  );
}
