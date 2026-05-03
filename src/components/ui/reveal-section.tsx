import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

type RevealSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function RevealSection({
  children,
  className = "",
  delay = 0,
}: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
