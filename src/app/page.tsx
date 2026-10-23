import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Beyond } from "@/components/Beyond";
import { Contact, Footer } from "@/components/Contact";
import { AnimatedBackdrop } from "@/components/AnimatedBackdrop";

export default function Home() {
  return (
    <>
      <AnimatedBackdrop />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Beyond />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
