import { motion } from "framer-motion";

function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 border-t border-[#333333]">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-[#1AFF75] text-7xl md:text-8xl mb-24"
        >
          EXPERIENCE.
        </motion.h2>

        <div className="border-l border-[#333333] pl-8 md:pl-16 relative">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[41px] md:-left-[73px] top-4 flex h-4 w-4 bg-[#1AFF75]"></span>

            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-8 gap-4">
              <div>
                <h3 className="font-display text-4xl md:text-5xl text-white">SOFTWARE DEVELOPER INTERN</h3>
                <h4 className="font-display text-2xl text-[#1AFF75] mt-2">OXFORD SOFTWARE INSTITUTE</h4>
              </div>
              <div className="font-mono text-[#A0A0A0] text-lg uppercase tracking-widest">
                Nov 2025 — Jan 2026
              </div>
            </div>

            <ul className="space-y-4 text-[#A0A0A0] font-mono text-lg max-w-3xl leading-relaxed">
              <li className="flex items-start gap-4 hover:text-white transition-colors cursor-default">
                <span className="text-[#1AFF75] mt-1">▹</span>
                Developed backend modules using Django and PostgreSQL
              </li>
              <li className="flex items-start gap-4 hover:text-white transition-colors cursor-default">
                <span className="text-[#1AFF75] mt-1">▹</span>
                Built REST APIs for CRUD operations
              </li>
              <li className="flex items-start gap-4 hover:text-white transition-colors cursor-default">
                <span className="text-[#1AFF75] mt-1">▹</span>
                Implemented search, tagging, and filtering systems
              </li>
              <li className="flex items-start gap-4 hover:text-white transition-colors cursor-default">
                <span className="text-[#1AFF75] mt-1">▹</span>
                Worked with Git and Postman for API testing
              </li>
              <li className="flex items-start gap-4 hover:text-white transition-colors cursor-default">
                <span className="text-[#1AFF75] mt-1">▹</span>
                Followed Agile development practices
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Experience;