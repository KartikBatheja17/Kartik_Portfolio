import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 border-t border-[#333333]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/3"
        >
          <h2 className="font-display text-[#1AFF75] text-7xl md:text-8xl mb-4">ABOUT<br/>ME.</h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:w-2/3 space-y-8"
        >
          <p className="text-white text-2xl md:text-4xl font-medium leading-tight">
            Hi, I'm Kartik Batheja. A Full Stack Developer with strong experience in building scalable web applications.
          </p>
          <div className="text-[#A0A0A0] text-lg md:text-xl leading-relaxed space-y-6 font-mono max-w-3xl">
            <p>
              I enjoy solving real-world problems and building SaaS-style applications with clean UI and efficient backend systems using Django and React.
            </p>
            <p>
              I have built multiple full-stack applications including AI-powered tools and productivity platforms. I am passionate about learning new technologies and continuously improving my development skills.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;