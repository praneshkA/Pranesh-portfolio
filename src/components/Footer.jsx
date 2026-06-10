import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personal } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        {/* Left: name + year */}
        <p className="font-mono">
          © {year} <span className="text-accent">{personal.name}</span>. All rights reserved. 
        </p>

        {/* Right: social icons */}
        <div className="flex items-center gap-4">
          {[
            { href: personal.github,            Icon: FiGithub,   label: "GitHub"   },
            { href: personal.linkedin,           Icon: FiLinkedin, label: "LinkedIn"  },
            { href: `mailto:${personal.email}`,  Icon: FiMail,     label: "Email"    },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:text-accent transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
