import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  const [loading, setLoading] = useState(true);

  // Loader duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loader
    return () => clearTimeout(timer);
  }, []);

  const name = "Kartik Batheja";
  
  // Name staggered animation variants
  const nameContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // 0.05s delay between letters
        delayChildren: 0.2, // Small delay after loader disappears
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  // General fade-up variants for other elements
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          >
            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
                filter: "blur(10px)"
              }}
              animate={{
                scale: 1,
                opacity: 1,
                filter: "blur(0px)"
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut"
              }}
              className="text-[#1AFF75] font-display text-5xl md:text-7xl lg:text-9xl tracking-widest text-center px-4"
              style={{
                textShadow: "0 0 20px rgba(26,255,117,0.6)"
              }}
            >
              Kartik Batheja
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative overflow-hidden bg-black">
        {/* Subtle Background Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1AFF75]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        {/* We only mount the hero content after loading so the initial animations trigger perfectly */}
        {!loading && (
          <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center md:items-start text-center md:text-left">
            
            {/* Animated Name Reveal */}
            <motion.h1 
              variants={nameContainerVariants}
              initial="hidden"
              animate="visible"
              className="font-display text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight mb-4 flex flex-wrap justify-center md:justify-start"
            >
              {name.split("").map((char, index) => (
                <motion.span 
                  key={index} 
                  variants={letterVariants}
                  className={char === " " ? "w-4 md:w-8" : "inline-block"}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            {/* Role Subtitle */}
            <motion.h2
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.2 }} // Wait for name to finish (14 letters * 0.05 + 0.2 = ~0.9s)
              className="text-xl md:text-3xl font-mono text-[#1AFF75] mb-6"
            >
              Full Stack Developer <span className="text-[#A0A0A0]">|</span> Django & React Developer
            </motion.h2>

            {/* Tagline */}
            <motion.p
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.4 }}
              className="text-lg md:text-xl text-[#A0A0A0] max-w-2xl mb-12 font-mono leading-relaxed"
            >
              "I build scalable full-stack applications with modern technologies."
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.6 }}
              className="flex flex-col sm:flex-row gap-6 mb-12 w-full sm:w-auto"
            >
              <a href="#projects" className="px-8 py-4 bg-[#1AFF75] text-black font-display text-xl uppercase tracking-widest hover:bg-white transition-colors border-2 border-transparent">
                View Projects
              </a>
              <a href="/Resume_kartik.pdf" 
              
              target="_blank"
              rel="noopener noreferrer" 
              className="px-8 py-4 bg-transparent text-white font-display text-xl uppercase tracking-widest border-2 border-[#333333] hover:border-[#1AFF75] hover:text-[#1AFF75] transition-colors">
                Download Resume
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.8 }}
              className="flex gap-8 justify-center md:justify-start"
            >
              <a href="https://github.com/KartikBatheja17" target="_blank" rel="noreferrer" className="text-[#A0A0A0] hover:text-[#1AFF75] transition-all hover:scale-110">
                <FaGithub size={32} />
              </a>
              <a href="https://linkedin.com/in/kartik-batheja" target="_blank" rel="noreferrer" className="text-[#A0A0A0] hover:text-[#1AFF75] transition-all hover:scale-110">
                <FaLinkedin size={32} />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bathejasam.17@gmail.com"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-[#A0A0A0] hover:text-[#1AFF75] transition-all hover:scale-110">
                <FaEnvelope size={32} />
              </a>
            </motion.div>

          </div>
        )}
      </section>
    </>
  );
}

export default Hero;