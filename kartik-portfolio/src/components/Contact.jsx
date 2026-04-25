import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 border-t border-[#333333]">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-[#1AFF75] text-lg tracking-widest uppercase mb-8"
        >
          What's Next?
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-7xl md:text-9xl text-white mb-12 hover:text-[#1AFF75] transition-colors cursor-pointer break-all"
        >
          <a href="mailto:bathejasam.17@gmail.com">LET'S TALK.</a>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-xl mx-auto font-mono text-[#A0A0A0] text-lg leading-relaxed mb-16"
        >
          <p>
            I'm currently looking to join a cross-functional team that values improving people's lives through accessible design, or have a project in mind? Let's connect.
          </p>
        </motion.div>
        
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          href="https://mail.google.com/mail/?view=cm&fs=1&to=bathejasam.17@gmail.com"
          target="_blank"
          rel="noopener noreferrer" 
          className="px-12 py-6 border border-[#333333] hover:border-[#1AFF75] text-white hover:text-[#1AFF75] font-display text-2xl uppercase tracking-widest transition-colors"
        >
          SAY HELLO
        </motion.a>
      </div>
    </section>
  );
}

export default Contact;