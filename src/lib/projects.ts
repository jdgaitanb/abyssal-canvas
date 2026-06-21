import type { Project } from "@/components/ProjectCard";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

import archaiCover from "@/assets/archai/cover.jpg.asset.json";
import archaiStats from "@/assets/archai/stats.jpg.asset.json";
import archaiBegues from "@/assets/archai/begues.gif.asset.json";
import archaiPlugin from "@/assets/archai/plugin.jpg.asset.json";
import archaiPipeline from "@/assets/archai/pipeline.png.asset.json";
import archaiWorkflow from "@/assets/archai/workflow.gif.asset.json";
import archaiReport from "@/assets/archai/report.png.asset.json";

export interface GalleryItem {
  src: string;
  caption?: string;
  span?: "full" | "wide";
}

export interface ProjectDetail extends Project {
  subtitle: string;
  location: string;
  role: string;
  tools: string[];
  overview: string;
  concept: string;
  process: string;
  outcome: string;
  gallery?: GalleryItem[];
}

// keep unused p1 reference avoided: archai now uses its own cover
void p1;

export const projects: ProjectDetail[] = [
  {
    id: "archai",
    index: "01",
    title: "Archai",
    tag: "AI compliance checker · Rhino plugin",
    year: "2026",
    image: archaiCover.url,
    className: "md:col-span-7 md:row-span-2",
    subtitle:
      "An AI-powered compliance checker that reads urban regulations and audits 3D models inside Rhino.",
    location: "Barcelona · IAAC · MaAI 2025–2026",
    role: "Designer · Developer (with Rafik El Khoury, Sumit Shingne, Dhruvil Bhanushali, Rudra Mhatre)",
    tools: ["Rhino 3D", "Python", "NotebookLM", "ChromaDB", "RAG", "LLMs"],
    overview:
      "Compliance checking is one of the most essential — and most tedious — parts of architectural design. Around 90% of firms and government bodies still do it manually, spending 55+ hours per project, and 50–60% of requirements are still missed. Archai is an AI-powered compliance checking plugin that integrates directly into the architectural design workflow as a Rhino 3D plugin. Tested against Barcelona's regulatory framework, it checks parameters such as building height, number of floors and plot area, and generates clear PDF reports with pass/fail results, regulatory references and guidance for improvement.",
    concept:
      "Archai is not meant to replace architects, but to eliminate repetitive manual tasks, reduce errors, and make regulatory constraints legible from the earliest stages of design. The founding proof of concept analysed existing buildings in Begues, near Barcelona, comparing height, density, floor count and built area against municipal regulations — correctly identifying that most non-compliant cases were older houses predating current rules, and establishing that an AI-driven system could reliably interpret complex urban codes.",
    process:
      "A custom Rhino plug-in UI scans the model's layers and packages the spatial data into a structured EXPORT.JSON. Each 3D object is converted into a lightweight node in a Geometry Graph — stripped of meshes and reduced to dimensions, location and type — so an LLM can reason about it. In parallel, regulation PDFs are ingested through NotebookLM: the text is extracted, normalised, and split into semantic chunks with metadata. Those chunks are embedded and stored in a ChromaDB vector store, enabling a Retrieval-Augmented Generation pipeline that pulls only the rules relevant to the geometry being checked. The retrieved regulations and the geometry data are assembled into a single grounded prompt; the LLM performs the logical comparison and emits a PDF summary the architect opens directly inside Rhino.",
    outcome:
      "A working Rhino-native interface where the architect inputs a project location, syncs the 3D volumetry, and receives a comprehensive compliance report citing specific rules. Validation runs on the same model show the system returns the same verdict ~92% of the time — a stable, assertive technical audit rather than a guess. The roadmap extends Archai beyond Barcelona to other cities and countries, into Revit, AutoCAD and other BIM platforms, with QGIS integration for infrastructural constraints and eventual application to client briefs, internal design standards, and firms' own project archives.",
    gallery: [
      { src: archaiStats.url, caption: "55+ hours per project · 50–60% of requirements still missed", span: "full" },
      { src: archaiBegues.url, caption: "Proof of concept — compliance audit of existing buildings in Begues", span: "full" },
      { src: archaiPlugin.url, caption: "Archai running natively inside Rhino 3D" },
      { src: archaiPipeline.url, caption: "System diagram — from Rhino layers to LLM reasoning" },
      { src: archaiWorkflow.url, caption: "Live workflow — sync volumetry, generate compliance report", span: "full" },
      { src: archaiReport.url, caption: "Reliability — ~92% consistent verdicts across repeated runs" },
    ],
  },

  {
    id: "holy-woah",
    index: "02",
    title: "Holy Woah",
    tag: "Sacred / Parametric lattice",
    year: "2024",
    image: p2,
    className: "md:col-span-5",
    subtitle: "A sacred lattice computed from acoustic prayer fields.",
    location: "Barcelona · IAAC",
    role: "Designer · Fabricator",
    tools: ["Grasshopper", "Kangaroo", "Karamba3D", "Robotic 3DP"],
    overview:
      "Holy Woah is a contemporary chapel envelope generated from the resonant frequencies of recorded liturgical chant. The interior lattice densifies where sound dwells and dissolves where light is meant to enter, producing a tactile diagram of presence.",
    concept:
      "Sacred space as an instrument: the building does not contain ritual, it tunes it. Every void is acoustic, every rib structural and devotional at once.",
    process:
      "FFT analysis of chant recordings drives a 3D scalar field. A particle-spring relaxation finds the minimum-surface lattice that satisfies both acoustic targets and structural load paths under Karamba.",
    outcome:
      "A 1:5 robotically 3D-printed concrete prototype exhibited at IAAC's end-of-year show, with measured 22% reduction in reverberation compared to a baseline shell.",
  },
  {
    id: "urban-dj",
    index: "03",
    title: "Urban DJ",
    tag: "Responsive urban interface",
    year: "2025",
    image: p3,
    className: "md:col-span-5",
    subtitle: "The city as a mixing console.",
    location: "Barcelona · IAAC",
    role: "Interaction designer · ML engineer",
    tools: ["TouchDesigner", "PyTorch", "ESP32", "Unreal Engine"],
    overview:
      "Urban DJ converts live urban telemetry — traffic, pedestrian density, noise, air quality — into a real-time audiovisual performance that re-skins a city block at night. Citizens become the performers, and the façade becomes the score.",
    concept:
      "Cities already perform; we just rarely listen. Urban DJ proposes a civic interface where data is not surveilled but staged, returning the sensed city back to its inhabitants as spectacle.",
    process:
      "A small recurrent model classifies street states into musical modes; mapped through TouchDesigner into projection, light, and ambient sound. Edge ESP32 nodes handle local sensing with on-device inference.",
    outcome:
      "A six-night public pilot on a façade in Poblenou, drawing ~3,800 visitors and producing an open dataset of urban rhythm signatures.",
  },
  {
    id: "mass",
    index: "04",
    title: "Mass",
    tag: "Computed monolith study",
    year: "2024",
    image: p4,
    className: "md:col-span-7",
    subtitle: "An exercise in computed weight.",
    location: "Barcelona · IAAC",
    role: "Designer · Researcher",
    tools: ["Houdini", "Rhino", "Karamba3D", "CNC milling"],
    overview:
      "Mass is a study in subtractive monumentality: a single computed monolith carved by topology optimization until only its load paths remain. The project asks what remains of mass when intelligence removes the unnecessary.",
    concept:
      "Where most generative work adds, Mass subtracts. The aesthetic outcome is a brutalist object that is paradoxically lighter than the void it occupies — heaviness as residue.",
    process:
      "SIMP-based topology optimization in Karamba, post-processed in Houdini with VDB smoothing. Final geometry CNC-milled in foam at 1:20 for daylight and shadow studies.",
    outcome:
      "Three milled studies and a fabrication protocol for full-scale rammed-earth translation.",
  },
  {
    id: "urban-demolition",
    index: "05",
    title: "Urban Demolition",
    tag: "Subtractive city / Ruin grammar",
    year: "2024",
    image: p6,
    className: "md:col-span-7",
    subtitle: "A grammar for unbuilding the 20th-century city.",
    location: "Barcelona · IAAC",
    role: "Urban researcher · Computational designer",
    tools: ["QGIS", "Python", "Grasshopper", "Diffusion models"],
    overview:
      "Urban Demolition reframes demolition as a design act. A trained model proposes which fragments of obsolete urban tissue to keep, which to dismantle, and which to let ruin into landscape — generating a new typology of partial city.",
    concept:
      "Subtraction is the missing verb of urbanism. The project builds a grammar for it, treating ruin as a legitimate state rather than failure of maintenance.",
    process:
      "GIS layers (age, structural condition, embodied carbon, social value) feed a scoring model. A diffusion model then hallucinates the post-demolition fabric, evaluated against carbon and biodiversity targets.",
    outcome:
      "A speculative master plan for a 14-hectare post-industrial zone, projecting 38% embodied carbon savings versus a conventional redevelopment.",
  },
  {
    id: "acoustic-skin",
    index: "06",
    title: "Acoustic Skin",
    tag: "Sonic envelope / Material",
    year: "2023",
    image: p5,
    className: "md:col-span-5",
    subtitle: "A façade tuned to the noise of its street.",
    location: "Barcelona · IAAC",
    role: "Material researcher · Designer",
    tools: ["Pachyderm Acoustics", "Grasshopper", "CNC", "Mycelium"],
    overview:
      "Acoustic Skin is a parametric façade panel system whose perforation pattern is computed from the spectral signature of the surrounding urban noise. Each panel is a localized acoustic response, grown from mycelium composite.",
    concept:
      "A building's skin should know the sound of its street. Acoustic Skin closes the loop between sensing and material, producing envelopes that absorb exactly what their context emits.",
    process:
      "Street-level recordings are converted to absorption targets across octave bands. A genetic algorithm searches perforation geometries that meet those targets while satisfying daylight and privacy constraints.",
    outcome:
      "A 12-panel prototype wall, measured to reduce street-facing reverberation by 31% in the 500–2000 Hz range.",
  },
];

export const getProject = (id: string) => projects.find((p) => p.id === id);
