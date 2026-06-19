import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Nav } from "@/components/Nav";
import { MeshBackground } from "@/components/MeshBackground";
import { Reveal } from "@/components/Reveal";
import { ProjectCard, type Project } from "@/components/ProjectCard";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Juan Gaitán — AI in Architecture" },
      {
        name: "description",
        content:
          "Portfolio of an AI-in-Architecture designer. Parametric, generative, cinematic spatial systems.",
      },
      { property: "og:title", content: "Juan Gaitán — AI in Architecture" },
      {
        property: "og:description",
        content: "Generative architecture, computed form, cinematic spatial systems.",
      },
    ],
  }),
  component: Index,
});

const projects: Project[] = [
  { id: "archai", index: "01", title: "Archai", tag: "Generative form research", year: "2025", image: p1, className: "md:col-span-7 md:row-span-2" },
  { id: "holy-woah", index: "02", title: "Holy Woah", tag: "Sacred / Parametric lattice", year: "2024", image: p2, className: "md:col-span-5" },
  { id: "urban-dj", index: "03", title: "Urban DJ", tag: "Responsive urban interface", year: "2025", image: p3, className: "md:col-span-5" },
  { id: "mass", index: "04", title: "Mass", tag: "Computed monolith study", year: "2024", image: p4, className: "md:col-span-7" },
  { id: "urban-demolition", index: "05", title: "Urban Demolition", tag: "Subtractive city / Ruin grammar", year: "2024", image: p6, className: "md:col-span-7" },
  { id: "acoustic-skin", index: "06", title: "Acoustic Skin", tag: "Sonic envelope / Material", year: "2023", image: p5, className: "md:col-span-5" },
];

function Index() {
  const [hovered, setHovered] = useState<string | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section id="home" ref={heroRef} className="relative h-[100svh] w-full overflow-hidden">
        <MeshBackground />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-between px-6 pb-12 pt-32 sm:pt-40"
        >
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center gap-3 font-display text-[10px] uppercase tracking-[0.4em] text-muted-foreground"
          >
            <span className="block size-1 rounded-full bg-accent-glow" />
            <span>Studio · 2026 Index</span>
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="font-display text-[10px] uppercase tracking-[0.4em] text-muted-foreground"
            >
              AI · IN · ARCHITECTURE
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="text-shimmer mt-6 font-display text-[14vw] font-light leading-[0.88] tracking-[-0.04em] sm:text-[11vw] lg:text-[9rem]"
            >
              Computed
              <br />
              <span className="italic">space.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="mt-10 grid max-w-5xl gap-8 sm:grid-cols-3"
            >
              <div className="sm:col-span-2">
                <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Portfolio of an AI-in-Architecture designer. Generative form,
                  parametric structure, and cinematic spatial systems — engineered
                  at the boundary between computation and matter.
                </p>
              </div>
              <div className="flex items-end justify-start sm:justify-end">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-3 font-display text-xs uppercase tracking-[0.3em] text-foreground"
                >
                  <span>Enter Index</span>
                  <span className="relative block h-px w-12 overflow-hidden bg-border">
                    <span className="absolute inset-0 -translate-x-full bg-accent-glow transition-transform duration-700 group-hover:translate-x-0" />
                  </span>
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="flex items-center justify-between font-display text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
          >
            <span>Lat 41.39° / Lon 2.15°</span>
            <span className="hidden sm:block">Scroll ↓</span>
            <span>v.04 — Generative Index</span>
          </motion.div>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative mx-auto max-w-7xl px-6 py-32 sm:py-48">
        <Reveal>
          <div className="flex items-baseline justify-between gap-6">
            <div>
              <p className="font-display text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                01 — Index
              </p>
              <h2 className="mt-4 font-display text-5xl font-light leading-[0.9] tracking-tight sm:text-7xl">
                IAAC Projects
              </h2>
            </div>
            <p className="hidden max-w-xs text-sm leading-relaxed text-muted-foreground sm:block">
              Selected works exploring machine intelligence as a co-author of
              architectural form — from urban prosthetics to ephemeral pavilions.
            </p>
          </div>
        </Reveal>

        <div className="hairline my-16" />

        <div
          className="grid grid-cols-1 gap-5 md:grid-cols-12 md:auto-rows-[280px]"
          onMouseLeave={() => setHovered(null)}
        >
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08} className={p.className}>
              <ProjectCard project={p} hovered={hovered} onHover={setHovered} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* VISION */}
      <section id="vision" className="relative border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-48">
          <div className="grid gap-16 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <p className="font-display text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                02 — Vision
              </p>
            </Reveal>
            <div className="md:col-span-8">
              <Reveal>
                <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight sm:text-6xl">
                  We build with machines that <span className="text-shimmer italic">dream</span> in
                  structure — and translate that grammar into matter.
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-16 grid gap-12 sm:grid-cols-3">
                  {[
                    { k: "Generative", v: "Diffusion-based form-finding paired with structural optimization." },
                    { k: "Parametric", v: "Computational grammars from urban scale down to joinery detail." },
                    { k: "Material", v: "Robotic fabrication, 3D-printed concrete, mycelium composites." },
                  ].map((b) => (
                    <div key={b.k}>
                      <div className="font-display text-[10px] uppercase tracking-[0.3em] text-accent-glow">
                        {b.k}
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {b.v}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-48">
          <div className="grid gap-20 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <p className="font-display text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                03 — Signal
              </p>
              <h2 className="mt-6 font-display text-5xl font-light leading-[0.95] tracking-tight sm:text-7xl">
                Begin a<br /> transmission.
              </h2>
              <div className="mt-10 space-y-2 font-display text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                <p>studio@nova-iaac.ai</p>
                <p>Barcelona / Remote</p>
              </div>
            </Reveal>

            <Reveal className="md:col-span-7" delay={0.1}>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-10"
              >
                {[
                  { id: "name", label: "Name", type: "text" },
                  { id: "email", label: "Email", type: "email" },
                  { id: "studio", label: "Studio / Affiliation", type: "text" },
                ].map((f) => (
                  <GhostField key={f.id} {...f} />
                ))}
                <GhostField id="message" label="Brief" type="textarea" />

                <button
                  type="submit"
                  className="group relative mt-4 inline-flex items-center gap-4 overflow-hidden rounded-full border border-border px-7 py-3 font-display text-xs uppercase tracking-[0.3em] text-foreground transition-colors hover:text-background"
                >
                  <span className="absolute inset-0 -translate-x-full bg-foreground transition-transform duration-500 ease-out group-hover:translate-x-0" />
                  <span className="relative">Transmit</span>
                  <span className="relative block size-1 rounded-full bg-accent-glow shadow-[0_0_10px_var(--accent-glow)]" />
                </button>
              </form>
            </Reveal>
          </div>
        </div>

        <div className="hairline" />
        <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 font-display text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Nova Studio · All form rights reserved</span>
          <span>Designed in collaboration with machines.</span>
        </footer>
      </section>
    </div>
  );
}

function GhostField({
  id,
  label,
  type,
}: {
  id: string;
  label: string;
  type: string;
}) {
  const common =
    "peer w-full border-0 border-b border-transparent bg-transparent px-0 py-3 text-base text-foreground outline-none transition-colors duration-500 placeholder:text-transparent hover:border-border focus:border-accent-glow focus:shadow-[0_1px_0_0_var(--accent-glow)]";
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="block font-display text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea id={id} rows={3} placeholder=" " className={common} />
      ) : (
        <input id={id} type={type} placeholder=" " className={common} />
      )}
    </div>
  );
}
