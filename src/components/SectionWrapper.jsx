import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * SectionWrapper
 * Wraps every section with:
 *  - consistent id, padding, and max-width
 *  - a fade-up animation that triggers once when the section enters the viewport
 *
 * Props:
 *  id        — matches the href in the nav (e.g. "about")
 *  children  — section content
 *  className — optional extra classes
 */
export default function SectionWrapper({ id, children, className = "" }) {
  const ref = useRef(null);
  // Trigger animation when 15% of the section is visible
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section id={id} ref={ref} className={`section-wrapper ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
