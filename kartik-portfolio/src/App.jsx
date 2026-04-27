import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#1AFF75] selection:text-black">
      {/* Left side fixed email */}
      <div className="hidden md:flex fixed left-10 top-0 bottom-0 flex-col items-center justify-end z-40 pb-12">
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=bathejasam.17@gmail.com" 
          className="text-[#A0A0A0] hover:text-[#1AFF75] transition-colors font-mono text-sm tracking-widest mb-6"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          bathejasam.17@gmail.com
        </a>
        <div className="w-[1px] h-32 bg-[#A0A0A0]/30"></div>
      </div>

      <div className="md:ml-24">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;