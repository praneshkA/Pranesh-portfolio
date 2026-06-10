import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";
import { projects } from "../data/portfolio";

// Stagger child cards as they come into view
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <p className="font-mono text-accent text-sm mb-1">03. what i built</p>
      <h2 className="section-heading">Projects</h2>
      <div className="heading-accent" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            whileHover={{
              y: -8,
              scale: 1.02,
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            className="glass-card flex flex-col justify-between group hover:border-accent/40 transition-colors duration-300 overflow-hidden"
          >
            {/* Project image */}
            {project.image && (
              <div className="w-full h-44 mb-5 overflow-hidden rounded-xl">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                />
              </div>
            )}

            {/* Card header */}
            <div>
              {/* Icon row */}
              <div className="flex items-center justify-between mb-4">
                {/* Folder icon */}
                <motion.div
                  whileHover={{
                    rotate: 12,
                    scale: 1.1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                  className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center"
                >
                  <span className="text-accent text-lg">⬡</span>
                </motion.div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.githubLink !== "#" && (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-muted hover:text-accent transition-colors"
                    >
                      <FiGithub size={18} />
                    </motion.a>
                  )}

                  {project.liveLink !== "#" && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live demo"
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-muted hover:text-accent transition-colors"
                    >
                      <FiExternalLink size={18} />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Title + description */}
              <h3 className="text-text font-semibold text-lg mb-2 group-hover:text-accent transition-colors duration-200">
                {project.title}
              </h3>

              <p className="text-subtle text-sm leading-6">
                {project.description}
              </p>
            </div>

            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-2 mt-5">
              {project.tech.map((t) => (
                <motion.span
                  key={t}
                  whileHover={{
                    y: -2,
                    scale: 1.05,
                  }}
                  className="text-xs font-mono px-2 py-0.5 rounded bg-accent/10 text-accent/80"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}