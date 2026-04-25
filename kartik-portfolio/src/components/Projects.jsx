import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "PROMPTVAULT",
      description: [
        " → Built a full-stack SaaS platform to organize and share AI prompts with a clean, responsive UI.",
        " → Developed REST APIs with Django and PostgreSQL, supporting CRUD, tags, search, and filters.",
        " → Implemented features like favorites, public prompt library, version history, and dark/light mode.",
        " → Designed a scalable SaaS architecture with plans for premium features such as analytics and exports.",
        ],
      tech: "React • Django • PostgreSQL • Tailwind CSS",
      github: "#",
      live: "#"
    },
    {
      title: "GITHUB ANALYZER",
      description:[ 
        " → Built a full-stack web application to analyze GitHub profiles and generate insights about developer activity and repository quality.",
        " → Integrated the GitHub API to extract key metrics such as repositories, stars, followers, and language usage",
        " → Implemented a README analyzer and portfolio scoring system to evaluate documentation quality and provide improvement suggestions.",
        " → Developed a responsive user interface, dashboard using React (Vite), Tailwind CSS, and Django REST APIs."
        ],
      tech: "React • Django • Gemini API",
      github: "#",
      live: "https://github-analyzer-two-delta.vercel.app"
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 md:px-12 border-t border-[#333333]">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-[#1AFF75] text-7xl md:text-8xl mb-16"
        >
          PROJECTS.
        </motion.h2>

        <div className="project-list flex flex-col">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="project-item group border-t border-[#333333] last:border-b py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-8 cursor-crosshair"
            >
              <div className="flex items-start gap-8">
                <span className="font-mono text-[#A0A0A0] text-sm pt-2 md:pt-4">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-display text-4xl md:text-7xl lg:text-8xl text-white group-hover:text-[#1AFF75] transition-colors mb-2 md:mb-0">
                    {project.title}
                  </h3>
                  
                  <div className="mt-4 md:mt-8 text-[#A0A0A0] text-base md:text-lg font-mono max-w-2xl leading-relaxed">
                    {Array.isArray(project.description) ? (
                      <ul className="space-y-2">
                        {project.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{project.description}</p>
                    )}
                  </div>

                  <p className="text-[#1AFF75] text-sm md:text-base font-mono md:hidden mt-6">
                    {project.tech}
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:items-end justify-between h-full gap-4 md:gap-0">
                <p className="hidden md:block text-[#A0A0A0] text-lg font-mono mb-4">
                  {project.tech}
                </p>
                <div className="flex gap-6 font-mono text-sm uppercase tracking-widest text-white mt-4">
                  <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-[#1AFF75] transition-colors pb-1 border-b border-white hover:border-[#1AFF75]">
                    [ GitHub ]
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-[#1AFF75] transition-colors pb-1 border-b border-white hover:border-[#1AFF75]">
                    [ Live Demo ]
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;