import { useState } from "react";
import { FiMail, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";
import { personal } from "../data/portfolio";

export default function Contact() {
  // Simple form state — hook up to Formspree/EmailJS for real submissions
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // ↓ Replace this with your Formspree endpoint or EmailJS call
    // Example Formspree: fetch("https://formspree.io/f/YOUR_ID", { method:"POST", body: JSON.stringify(form) })
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <SectionWrapper id="contact">
      <p className="font-mono text-accent text-sm mb-1">07. say hello</p>
      <h2 className="section-heading">Get In Touch</h2>
      <div className="heading-accent" />

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left: copy */}
        <div>
          <p className="text-subtle leading-7 mb-6">
            I'm currently open to internship opportunities and freelance
            projects. Whether you have a question, a project idea, or just want
            to connect — my inbox is always open.
          </p>

          <ul className="space-y-4">
            {[
              { Icon: FiMail,     href: `mailto:${personal.email}`, label: personal.email    },
              { Icon: FiGithub,   href: personal.github,            label: "github.com/..."  },
              { Icon: FiLinkedin, href: personal.linkedin,           label: "linkedin.com/..." },
            ].map(({ Icon, href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-subtle hover:text-accent transition-colors text-sm group"
                >
                  <Icon className="text-accent group-hover:scale-110 transition-transform" size={18} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: contact form */}
        <div className="glass-card">
          {sent ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-8">
              <span className="text-4xl mb-3">🎉</span>
              <p className="text-text font-semibold">Message sent!</p>
              <p className="text-subtle text-sm mt-1">I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-subtle text-xs mb-1.5 font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-text text-sm placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-subtle text-xs mb-1.5 font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-text text-sm placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-subtle text-xs mb-1.5 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                  className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-text text-sm placeholder:text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0"
                style={{ background: "linear-gradient(135deg, #6c63ff, #a78bfa)" }}
              >
                <FiSend size={16} />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
