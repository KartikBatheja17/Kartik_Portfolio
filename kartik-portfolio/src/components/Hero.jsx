import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl relative z-10 w-full"
      >
        <h1 className="font-display text-[#1AFF75] text-[15vw] md:text-[12vw] leading-[0.85] m-0 p-0">
          FULL STACK
        </h1>
        <h1 className="font-display text-white text-[15vw] md:text-[12vw] leading-[0.85] m-0 p-0">
          DEVELOPER
        </h1>
        
        <div className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-[#333333] pt-8">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              KARTIK BATHEJA
            </h2>
            <p className="text-[#A0A0A0] text-lg font-mono leading-relaxed">
              I build scalable full-stack web applications with modern technologies. 
              Currently interning at YugaYatra.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="px-8 py-4 bg-[#1AFF75] text-black font-display text-xl uppercase tracking-widest text-center hover:bg-white transition-colors border-2 border-transparent">
              VIEW PROJECTS
            </a>
            <a href="#" className="px-8 py-4 bg-transparent text-white font-display text-xl uppercase tracking-widest text-center border-2 border-[#333333] hover:border-[#1AFF75] hover:text-[#1AFF75] transition-colors">
              RESUME
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;