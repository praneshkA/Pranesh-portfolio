import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import { personal } from "../data/portfolio";

// Staggered children animation container
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 overflow-hidden"
    >
      {/* ── Background glow orbs ── */}
      <div
        className="glow-orb w-[500px] h-[500px]"
        style={{ background: "#6c63ff", top: "10%", left: "-10%" }}
      />
      <div
        className="glow-orb w-[400px] h-[400px]"
        style={{ background: "#a78bfa", bottom: "5%", right: "-8%" }}
      />

      {/* ── Content + Photo ── */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl w-full"
        >
          {/* Greeting pill */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 font-mono text-sm text-accent bg-accent/10 border border-accent/25 px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available for internships &amp; projects
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text leading-tight mb-3"
          >
            Hi, I'm{" "}
            <span className="gradient-text">
              {personal.name.split(" ")[0]}
            </span>
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={item}
            className="text-xl sm:text-2xl text-subtle font-medium mb-4"
          >
            {personal.role}
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="text-base sm:text-lg text-subtle max-w-xl leading-relaxed mb-10"
          >
            {personal.tagline}
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={item} className="flex flex-wrap gap-4 mb-12">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0"
              style={{
                background: "linear-gradient(135deg, #6c63ff, #a78bfa)",
              }}
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl font-semibold text-accent border border-accent hover:bg-accent/10 transition-all duration-200 hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div variants={item} className="flex items-center gap-5">
            {[
              { href: personal.github, Icon: FiGithub, label: "GitHub" },
              { href: personal.linkedin, Icon: FiLinkedin, label: "LinkedIn" },
              {
                href: `mailto:${personal.email}`,
                Icon: FiMail,
                label: "Email",
              },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-subtle hover:text-accent transition-colors duration-200 hover:-translate-y-0.5 transform"
              >
                <Icon size={22} />
              </a>
            ))}

            <span className="w-px h-5 bg-border mx-1" />
            <span className="text-muted text-sm font-mono">
              {personal.location}
            </span>
          </motion.div>
        </motion.div>

        {/* Right Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
          className="relative flex items-center justify-center"
        >
          {/* Background glow behind photo */}
<div className="absolute w-96 h-96 sm:w-[430px] sm:h-[430px] rounded-full bg-accent/20 blur-3xl" />
          {/* Photo card */}
          <motion.div
            whileHover={{ scale: 1.04, rotate: 1 }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] rounded-3xl overflow-hidden border border-accent/30 bg-accent/10 shadow-2xl"          >
            <img
              src="/assets/mypic.jpeg"
              alt="Pranesh"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll down cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-accent transition-colors flex flex-col items-center gap-1 text-xs"
      >
        <span>scroll</span>
        <FiArrowDown className="animate-bounce" size={16} />
      </motion.a>
    </section>
  );
}