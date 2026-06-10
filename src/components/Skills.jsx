import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { skills } from "../data/portfolio";

// Get unique categories from the data
const categories = ["All", ...new Set(skills.map((s) => s.category))];

export default function Skills() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <SectionWrapper id="skills">
      <p className="font-mono text-accent text-sm mb-1">02. what i use</p>
      <h2 className="section-heading">Skills</h2>
      <div className="heading-accent" />

      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-xs font-mono px-4 py-1.5 rounded-full border transition-all duration-200 ${
              active === cat
                ? "bg-accent border-accent text-white"
                : "border-border text-subtle hover:border-accent hover:text-accent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills grid with animated presence */}
      <motion.div layout className="flex flex-wrap gap-3">
        <AnimatePresence>
          {filtered.map((skill) => (
            <motion.span
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.2 }}
              className="skill-tag cursor-default hover:bg-accent/20 transition-colors duration-200"
            >
              {skill.name}
            </motion.span>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}
