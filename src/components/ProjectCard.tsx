import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, type MouseEvent } from "react";

export interface Project {
  id: string;
  index: string;
  title: string;
  tag: string;
  year: string;
  image: string;
  className?: string;
}

export function ProjectCard({
  project,
  hovered,
  onHover,
}: {
  project: Project;
  hovered: string | null;
  onHover: (id: string | null) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 150, damping: 18, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 150, damping: 18, mass: 0.5 });
  const rx = useTransform(sy, [-1, 1], [4, -4]);
  const ry = useTransform(sx, [-1, 1], [-4, 4]);
  const tx = useTransform(sx, [-1, 1], [-8, 8]);
  const ty = useTransform(sy, [-1, 1], [-8, 8]);

  const isActive = hovered === project.id;
  const isDimmed = hovered !== null && !isActive;

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 2);
  };
  const reset = () => { mx.set(0); my.set(0); onHover(null); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, x: tx, y: ty, transformPerspective: 1200 }}
      animate={{ opacity: isDimmed ? 0.3 : 1, filter: isDimmed ? "blur(2px)" : "blur(0px)" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-surface ${project.className ?? ""}`}
    >
      {/* holographic glow border */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(180,220,255,0.6), rgba(140,90,255,0.4), rgba(80,255,220,0.4))",
          padding: "1px",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          filter: "blur(0.4px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-8 rounded-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 50%, rgba(120,180,255,0.25), transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      <div className="relative aspect-[4/5] overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          animate={{ scale: isActive ? 1.08 : 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

        <div className="absolute left-5 top-5 flex items-center gap-2 font-display text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span>{project.index}</span>
          <span className="h-px w-6 bg-border" />
          <span>{project.year}</span>
        </div>

        <div className="absolute inset-x-5 bottom-5">
          <div className="font-display text-[10px] uppercase tracking-[0.3em] text-accent-glow">
            {project.tag}
          </div>
          <h3 className="mt-2 font-display text-2xl font-medium leading-tight text-foreground sm:text-3xl">
            {project.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}
