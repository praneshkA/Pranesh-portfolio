/**
 * App.jsx  –  Root component
 * Assembles all sections in order and renders Navbar + Footer.
 */
import Navbar        from "./components/Navbar";
import Hero          from "./components/Hero";
import About         from "./components/About";
import Skills        from "./components/Skills";
import Projects      from "./components/Projects";
import Education     from "./components/Education";
import Experience    from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact       from "./components/Contact";
import Footer        from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg text-text">
      {/* Sticky navigation */}
      <Navbar />

      {/* Page sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
