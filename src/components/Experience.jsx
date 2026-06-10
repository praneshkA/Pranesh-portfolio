import { FiBriefcase } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <p className="font-mono text-accent text-sm mb-1">05. work</p>
      <h2 className="section-heading">Experience</h2>
      <div className="heading-accent" />

      <div className="space-y-6">
        {experience.map((exp, i) => (
          <div key={i} className="glass-card hover:border-accent/30 transition-colors duration-300">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <FiBriefcase className="text-accent" size={16} />
                  <h3 className="text-text font-semibold">{exp.role}</h3>
                </div>
                <p className="text-subtle text-sm">{exp.company}</p>
              </div>
              <span className="font-mono text-xs text-accent bg-accent/10 px-3 py-1 rounded-full">
                {exp.period}
              </span>
            </div>

            {/* Description */}
            <p className="text-subtle text-sm leading-7 mb-4">{exp.description}</p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((t) => (
                <span key={t} className="skill-tag text-xs">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
