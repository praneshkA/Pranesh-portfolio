import { FiAward } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";
import { certifications } from "../data/portfolio";

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <p className="font-mono text-accent text-sm mb-1">06. credentials</p>
      <h2 className="section-heading">Certifications</h2>
      <div className="heading-accent" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="glass-card flex items-start gap-4 hover:border-accent/40 transition-colors duration-300 group"
          >
            {/* Icon */}
            <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent/25 transition-colors">
              <FiAward className="text-accent" size={18} />
            </div>

            <div>
              <h3 className="text-text font-semibold text-sm leading-5 mb-1">
                {cert.title}
              </h3>
              <p className="text-subtle text-xs">{cert.issuer}</p>
              <p className="font-mono text-muted text-xs mt-0.5">{cert.year}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
