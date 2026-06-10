import { FiBook } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <p className="font-mono text-accent text-sm mb-1">04. academics</p>
      <h2 className="section-heading">Education</h2>
      <div className="heading-accent" />

      {/* Vertical timeline */}
      <div className="relative pl-6 border-l-2 border-border space-y-8">
        {education.map((edu, i) => (
          <div key={i} className="relative">
            {/* Timeline dot */}
            <span className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-accent border-2 border-bg flex items-center justify-center">
              <FiBook size={8} className="text-white" />
            </span>

            <div className="glass-card hover:border-accent/30 transition-colors duration-300">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <h3 className="text-text font-semibold">{edu.degree}</h3>
                <span className="font-mono text-xs text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                  {edu.period}
                </span>
              </div>
              <p className="text-subtle text-sm mb-1">{edu.institution}</p>
              <p className="text-muted text-xs font-mono">{edu.grade}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
