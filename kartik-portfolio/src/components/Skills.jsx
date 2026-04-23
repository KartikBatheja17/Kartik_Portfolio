import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaPython, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiDjango, SiPostgresql, SiMysql, SiPostman } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

function Skills() {
  const skillCategories = [
    {
      title: "FRONTEND",
      skills: [
        { name: "REACT", icon: <FaReact size={48} className="text-[#61DAFB]" /> },
        { name: "JAVASCRIPT", icon: <SiJavascript size={48} className="text-[#F7DF1E]" /> },
        { name: "HTML", icon: <FaHtml5 size={48} className="text-[#E34F26]" /> },
        { name: "CSS", icon: <FaCss3Alt size={48} className="text-[#1572B6]" /> },
        { name: "TAILWIND", icon: <SiTailwindcss size={48} className="text-[#06B6D4]" /> },
      ]
    },
    {
      title: "BACKEND",
      skills: [
        { name: "PYTHON", icon: <FaPython size={48} className="text-[#3776AB]" /> },
        { name: "DJANGO", icon: <SiDjango size={48} className="text-[#092E20]" /> },
        { name: "REST APIs", icon: <div className="text-[#1AFF75] font-display text-4xl">API</div> },
      ]
    },
    {
      title: "DATABASE",
      skills: [
        { name: "POSTGRESQL", icon: <SiPostgresql size={48} className="text-[#4169E1]" /> },
        { name: "MYSQL", icon: <SiMysql size={48} className="text-[#4479A1]" /> },
      ]
    },
    {
      title: "TOOLS",
      skills: [
        { name: "GIT", icon: <FaGitAlt size={48} className="text-[#F05032]" /> },
        { name: "GITHUB", icon: <FaGithub size={48} className="text-white" /> },
        { name: "POSTMAN", icon: <SiPostman size={48} className="text-[#FF6C37]" /> },
        { name: "VS CODE", icon: <VscCode size={48} className="text-[#007ACC]" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 px-6 md:px-12 border-t border-[#333333]">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-[#1AFF75] text-7xl md:text-8xl mb-24"
        >
          SKILLS.
        </motion.h2>

        <div className="space-y-24">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="font-display text-[#333333] text-6xl md:text-8xl mb-12 leading-none">
                {category.title}
              </h3>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 w-full"
              >
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex flex-col items-center justify-center gap-6 group">
                    <div className="transition-all duration-300 transform group-hover:scale-110 flex items-center justify-center h-16 drop-shadow-md">
                      {skill.icon}
                    </div>
                    <span className="font-mono text-xs md:text-sm tracking-widest text-[#A0A0A0] group-hover:text-white transition-colors text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;