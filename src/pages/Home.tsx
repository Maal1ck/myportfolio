import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Resume } from "../components/Resume";
import { Contact } from "../components/Contact";

export function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </>
  );
}
