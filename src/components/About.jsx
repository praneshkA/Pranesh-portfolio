import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";
import { personal, achievements } from "../data/portfolio";

export default function About() {
  return (
    <SectionWrapper id="about">
      <p className="font-mono text-accent text-sm mb-1">01. who am i</p>
      <h2 className="section-heading">About Me</h2>
      <div className="heading-accent" />

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Bio */}
        <div>
          <p className="text-subtle leading-8 text-base whitespace-pre-line mb-6">
            {personal.about}
          </p>

          {/* Contact info */}
          <ul className="space-y-3">
            {[
              { Icon: FiMapPin, text: personal.location },
              { Icon: FiMail,   text: personal.email    },
              { Icon: FiPhone,  text: personal.phone    },
            ].map(({ Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-subtle text-sm">
                <Icon className="text-accent shrink-0" size={16} />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Achievements card */}
        <div className="glass-card">
          <h3 className="text-text font-semibold text-lg mb-4">Achievements</h3>
          <ul className="space-y-3">
            {achievements.map((a) => (
              <li key={a} className="flex items-start gap-3 text-subtle text-sm">
                <span className="text-accent mt-0.5">▹</span>
                {a}
              </li>
            ))}
          </ul>

          {/* Stats row */}
          <div className="mt-6 pt-5 border-t border-border grid grid-cols-3 gap-4 text-center">
            {[
              { value: "250+", label: "LeetCode" },
              { value: "600+", label: "SkillRack" },
              { value: "10+",    label: "Projects"  },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-2xl font-bold gradient-text">{value}</p>
                <p className="text-xs text-muted mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
