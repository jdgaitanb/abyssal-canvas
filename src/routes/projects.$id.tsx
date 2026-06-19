import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { getProject, projects } from "@/lib/projects";

export const Route = createFileRoute("/projects/$id")({
  head: ({ params }) => {
    const p = getProject(params.id);
    return {
      meta: [
        { title: p ? `${p.title} — Juan Gaitán` : "Project — Juan Gaitán" },
        {
          name: "description",
          content: p?.subtitle ?? "Project from Juan Gaitán's AI-in-Architecture portfolio.",
        },
        { property: "og:title", content: p ? `${p.title} — Juan Gaitán` : "Project" },
        { property: "og:description", content: p?.subtitle ?? "" },
        ...(p ? [{ property: "og:image" as const, content: p.image }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const project = getProject(params.id);
    if (!project) throw notFound();
    return { project };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <div className="mx-auto max-w-3xl px-6 py-48 text-center">
        <p className="font-display text-[10px] uppercase tracking-[0.4em] text-muted-foreground">404</p>
        <h1 className="mt-6 font-display text-5xl font-light">Signal lost.</h1>
        <Link to="/" className="mt-10 inline-block font-display text-xs uppercase tracking-[0.3em] text-accent-glow">
          ← Return to index
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen bg-background p-12 text-foreground">
      <p>Something broke.</p>
      <button onClick={reset} className="mt-4 underline">Retry</button>
    </div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const idx = projects.findIndex((p) => p.id === project.id);
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative h-[88svh] w-full overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-16">
          <Link
            to="/"
            hash="projects"
            className="mb-10 inline-flex w-fit items-center gap-3 font-display text-[10px] uppercase tracking-[0.4em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="block h-px w-8 bg-border" />
            <span>← Index</span>
          </Link>

          <div className="flex items-center gap-3 font-display text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            <span>{project.index}</span>
            <span className="block h-px w-8 bg-border" />
            <span>{project.year}</span>
            <span className="block h-px w-8 bg-border" />
            <span className="text-accent-glow">{project.tag}</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-shimmer mt-6 font-display text-[12vw] font-light leading-[0.88] tracking-[-0.04em] sm:text-[9vw] lg:text-[8rem]"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            {project.subtitle}
          </motion.p>
        </div>
      </section>

      {/* META */}
      <section className="mx-auto max-w-7xl px-6 pt-24">
        <div className="hairline mb-16" />
        <Reveal>
          <div className="grid gap-10 md:grid-cols-4">
            {[
              { k: "Location", v: project.location },
              { k: "Year", v: project.year },
              { k: "Role", v: project.role },
              { k: "Stack", v: project.tools.join(" · ") },
            ].map((m) => (
              <div key={m.k}>
                <div className="font-display text-[10px] uppercase tracking-[0.3em] text-accent-glow">
                  {m.k}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.v}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* BODY */}
      <section className="mx-auto max-w-7xl px-6 py-32 sm:py-40">
        <div className="space-y-32">
          {[
            { k: "Overview", v: project.overview },
            { k: "Concept", v: project.concept },
            { k: "Process", v: project.process },
            { k: "Outcome", v: project.outcome },
          ].map((b, i) => (
            <Reveal key={b.k} delay={i * 0.05}>
              <div className="grid gap-10 md:grid-cols-12">
                <div className="md:col-span-4">
                  <p className="font-display text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                    0{i + 1} —
                  </p>
                  <h2 className="mt-4 font-display text-3xl font-light tracking-tight sm:text-5xl">
                    {b.k}
                  </h2>
                </div>
                <div className="md:col-span-8">
                  <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
                    {b.v}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* IMAGE BLOCK */}
      <section className="mx-auto max-w-7xl px-6 pb-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-border">
            <img src={project.image} alt={project.title} className="h-auto w-full object-cover" />
          </div>
        </Reveal>
      </section>

      {/* NEXT */}
      <section className="border-t border-border">
        <Link
          to="/projects/$id"
          params={{ id: next.id }}
          className="group relative block overflow-hidden"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-24 sm:py-32">
            <div>
              <p className="font-display text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                Next transmission
              </p>
              <h3 className="mt-6 font-display text-5xl font-light tracking-tight sm:text-7xl">
                {next.title}
              </h3>
            </div>
            <span className="font-display text-xs uppercase tracking-[0.3em] text-accent-glow opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              Enter →
            </span>
          </div>
        </Link>

        <div className="hairline" />
        <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 font-display text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Juan Gaitán · All form rights reserved</span>
          <span>Designed in collaboration with machines.</span>
        </footer>
      </section>
    </div>
  );
}
