import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { Projects } from "@/components/projects/Projects";
import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";
import { Experience } from "@/components/experience/Experience";
import { Process } from "@/components/process/Process";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
