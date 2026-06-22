import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", hash: "home" },
  { label: "IAAC Projects", hash: "projects" },
  { label: "Vision", hash: "vision" },
  { label: "Contact", hash: "contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6"
    >
      <nav
        className={`glass flex items-center gap-2 rounded-full px-3 py-2 transition-all duration-500 sm:gap-6 sm:px-5 ${
          scrolled ? "shadow-[0_8px_40px_-12px_rgba(120,180,255,0.18)]" : ""
        }`}
      >
        <Link
          to="/"
          hash="home"
          className="flex items-center gap-2 pl-2 pr-1"
        >
          <span className="block size-1.5 rounded-full bg-accent-glow shadow-[0_0_12px_var(--accent-glow)]" />
          <span className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-foreground">
            Juan Gaitán
          </span>
        </Link>
        <span className="h-4 w-px bg-border" />
        <ul className="flex items-center gap-1 sm:gap-2">
          {links.map((l) => (
            <li key={l.hash}>
              <Link
                to="/"
                hash={l.hash}
                className="group relative rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground sm:text-xs"
              >
                {l.label}
                <span className="pointer-events-none absolute inset-x-3 -bottom-0.5 h-px scale-x-0 bg-accent-glow shadow-[0_0_10px_var(--accent-glow)] transition-transform duration-500 group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
