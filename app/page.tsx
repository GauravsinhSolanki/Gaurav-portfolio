import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import AiPipeline from './components/AiPipeline';
import Work from './components/Work';
import Tagline from './components/Tagline';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <AiPipeline />
        <Work />
        <Tagline />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
