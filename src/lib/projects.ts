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

import hwCrisis from "@/assets/holy-woah/crisis.png.asset.json";
import hwRooftops from "@/assets/holy-woah/rooftops.png.asset.json";
import hwCycle from "@/assets/holy-woah/cycle.png.asset.json";
import hwKats from "@/assets/holy-woah/kats-overview.png.asset.json";
import hwPipe1 from "@/assets/holy-woah/pipeline-1.png.asset.json";
import hwPipe2 from "@/assets/holy-woah/pipeline-2.png.asset.json";
import hwRlhf from "@/assets/holy-woah/rlhf.png.asset.json";
import hwUi1 from "@/assets/holy-woah/ui-1.png.asset.json";
import hwUi2 from "@/assets/holy-woah/ui-2.png.asset.json";

import udjInstallation from "@/assets/urban-dj/installation.jpg.asset.json";
import udjInterface from "@/assets/urban-dj/interface.png.asset.json";
import udjRender from "@/assets/urban-dj/render.png.asset.json";
import udjAvatars from "@/assets/urban-dj/avatars.png.asset.json";
import udjExtra from "@/assets/urban-dj/extra.png.asset.json";

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
void p2;
void p3;

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
    tag: "Urban rooftop farming · KATS AI",
    year: "2026",
    image: hwCrisis.url,
    className: "md:col-span-5",
    subtitle:
      "Reviving Barcelona's local agriculture from its rooftops — paired with KATS, a 3-layer machine-learning system that learns from the urban farmer.",
    location: "Barcelona · IAAC · MaAI 2025–2026",
    role: "Designer · Developer (with Rojda Gulel and Vimal TN)",
    tools: [
      "Hydroponics",
      "ANN",
      "SVM",
      "Random Forest",
      "RLHF",
      "Digital Twin",
    ],
    overview:
      "The global agricultural system is facing a severe crisis. Currently, agriculture is responsible for consuming a staggering 79% of global freshwater. Despite this massive consumption, the process is highly inefficient, with 60% of irrigation water being lost. Furthermore, modern farming relies heavily on chemicals, seeing a 70% increase in pesticides, while an estimated 40% of costs are tied directly to transportation.\n\nTo address this pressing issue, a new project dubbed Holy Woah proposes a radical shift towards urban rooftop farming. Focusing on Barcelona — a city that has seen a 77% drop in local food production since the 1970s and where only 9% of land is currently used for farming — the project identifies a massive untapped resource: 1,764 hectares of potential farming space right on the city's rooftops.\n\nTaking inspiration from successful urban farming proofs-of-concept in densely populated cities like Singapore, Hong Kong, and New York (such as Gotham Greens, which uses 95% less water through hydroponics), the project aims to make sustainable farming accessible to everyone.",
    concept:
      "The continuous agricultural cycle proposed by Holy Woah is divided into three main stages that feed into a continuous loop:\n\n- Phase 1 — Soil & Seed Preparation: the starting point. It involves preparing the appropriate substrate or growing medium (which requires a special, lightweight treatment for urban rooftops) and carrying out the initial sowing.\n- Phase 2 — Plant Care & Fertilization: the development and growth stage. This is exactly where the KATS AI system has its greatest impact: monitoring water needs, applying fertilizers efficiently, and detecting potential diseases in real-time to ensure plants grow healthy.\n- Phase 3 — Harvesting & Rotation: the final stage where the fresh produce is collected. The mention of rotation is crucial, as it indicates that once the crop is harvested, the space is prepared for a different type of plant. This helps prevent nutrient depletion in the system and restarts the cycle.\n\nIn short, this is the basic operational model used to maintain a constant and sustainable flow of food production on the rooftops of Barcelona.\n\nThe left side of the project reflects our commitment to reviving local agriculture and drastically reducing water waste, while the right side represents KATS, our custom-built artificial intelligence system. By fusing hands-on plant care with an intelligent, 3-layer machine learning pipeline and a human-in-the-loop feedback system, we aren't just planting seeds on roofs — we're building an adaptive, smart ecosystem that learns directly from our urban farmers to make agriculture greener, highly efficient, and completely tailored to the city's unique microclimates.",
    process:
      "KATS acts as the digital nervous system for these urban farms, operating through a sophisticated 3-layer pipeline that acquires sensor data and processes it using three distinct Machine Learning models:\n\n- ANN (Artificial Neural Network): dedicated to water optimization, this model analyzes temperature, moisture, humidity, and light to predict and recommend precise water reductions, tackling the massive freshwater waste seen in traditional farming.\n- SVM (Support Vector Machine): focused on plant health, this model uses fungal risk and NDVI data to detect diseases and classify plant stress.\n- Random Forest: this model monitors the overall system health based on all environmental sensor inputs.\n\nThe system relies on a central Fusion Engine that weights the outputs of all three models to produce a single, actionable recommendation.\n\nHuman-in-the-Loop (RLHF) — what makes KATS truly groundbreaking is its Human-in-the-Loop feedback mechanism. The AI doesn't just dictate commands; it collaborates with the urban farmer. When KATS proposes a decision, the farmer can:\n\n- Approve the decision, which reinforces the successful model weights.\n- Modify the suggestions, prompting the system to rebalance model contributions.\n- Report issues, which triggers a retraining of the models.\n\nOver time, KATS dynamically adjusts its weights to become increasingly aligned with the highly specific micro-climates of individual rooftops.",
    outcome:
      "A Consumer-Grade Experience for the Urban Farmer. Farming tech is often clunky, but KATS offers a beautifully designed, consumer-app-grade User Interface. Utilizing a light neumorphic design, the dashboard features iOS-style metric widgets, a real-time Digital Twin map of the rooftop farm, and a highly interactive AI chatbot assistant named Klif (represented by a water drop mascot).\n\nBy marrying the ambitious spatial vision of the Holy Woah project with the bleeding-edge AI architecture of KATS, the future of agriculture doesn't just look smarter — it looks greener, highly localized, and ready to transform our city skylines.\n\nHoly Woah is a project of IAAC, Institute for Advanced Architecture of Catalonia, developed in the Master in AI for Architecture and the Built Environment 01 (2025–2026) by Juan Gaitán, Rojda Gulel and Vimal TN during the MaAI01 25/26 Research Projects Studio with Alexander Kamenev and Shrey Kapur.",
    gallery: [
      { src: hwCrisis.url, caption: "The crisis — 79% of global freshwater consumed by agriculture, 60% lost in irrigation", span: "full" },
      { src: hwRooftops.url, caption: "Barcelona — 1,764 hectares of untapped rooftop farming space", span: "full" },
      { src: hwCycle.url, caption: "The continuous agricultural cycle — Soil & Seed · Care & Fertilization · Harvesting & Rotation", span: "full" },
      { src: hwKats.url, caption: "Two halves of the project — rooftop agriculture meets the KATS AI system", span: "full" },
      { src: hwPipe1.url, caption: "KATS pipeline — ANN, SVM and Random Forest unified by a Fusion Engine" },
      { src: hwPipe2.url, caption: "Sensor acquisition and 3-layer model architecture" },
      { src: hwRlhf.url, caption: "Human-in-the-Loop (RLHF) — Approve · Modify · Report", span: "full" },
      { src: hwUi1.url, caption: "KATS dashboard — neumorphic widgets and real-time Digital Twin" },
      { src: hwUi2.url, caption: "Klif — the in-app AI assistant for the urban farmer" },
    ],
  },
  {
    id: "urban-dj",
    index: "03",
    title: "Urban DJ",
    tag: "AI bias · interactive sound installation",
    year: "2025",
    image: udjInstallation.url,
    className: "md:col-span-5",
    subtitle:
      "Demystifying AI bias through sound — a semicircular booth where three AI avatars hear the same city differently.",
    location: "Barcelona · IAAC · AI for All — Architecture & the Built Environment",
    role: "Designer · Developer (with Chun-Chun Chang, Gaelle Habib, Salvador Cantuarias)",
    tools: ["C++", "Audio ML", "LED strips", "Physical computing", "Sound design"],
    overview:
      "Urban DJ demystifies AI bias through sound. Visitors interact with a semicircular booth inspired by Barcelona neighborhoods, pressing physical buttons to generate 30-second neighborhood-based audio scenes. The sound is visualized on a screen and through LED light strips along the circular wall. Three AI avatars — Vigil, Ludo, and Flora — classify the same audio differently because each was trained on a different dataset: surveillance, cultural, or natural sounds. By comparing their predictions and the highlighted soundwave segments, visitors understand that AI does not \"hear\" objectively; it interprets through the bias of its training data.",
    concept:
      "Developed for AI for All, the project aims to demystify artificial intelligence by showing that AI systems are not neutral. Instead of explaining bias through technical diagrams or abstract definitions, we translate it into an interactive sound experience that visitors can see, hear, and physically trigger.\n\nThe installation is designed as a semicircular booth. At the center, visitors find a screen and a set of physical buttons shaped like Barcelona neighborhoods. Each button generates a 30-second soundscape inspired by the selected neighborhood, using familiar urban sounds such as crowds, music, fireworks, sirens, nature, water, or street activity. As the audio plays, the visitor sees the sound represented visually on the screen in a rhythm-based interface inspired by Guitar Hero. At the same time, the soundwave is projected onto LED light strips installed along the circular wall, turning the audio into an immersive spatial visualization.",
    process:
      "The generated sound is then processed by three AI avatars: Vigil, Ludo, and Flora. Each avatar represents a different \"way of listening,\" shaped by a different training dataset:\n\n- Vigil — trained on surveillance and security-related sounds.\n- Ludo — trained on cultural and festival sounds.\n- Flora — trained on natural and environmental sounds.\n\nBecause each avatar has learned from a different sound world, the same audio can produce different interpretations. A sharp explosive sound might be classified by Vigil as gunshots, by Ludo as fireworks, and by Flora as thunder. None of the avatars are simply \"wrong\"; their answers reveal the limits and assumptions created by their training data.\n\nOn the screen, visitors see the prediction of each avatar, along with a short explanation of why the model interpreted the sound that way. When a visitor selects one avatar, the LED soundwave highlights the part of the audio that most influenced that avatar's classification — making clear that AI decisions are not magical or invisible, but based on patterns the model has learned to associate with certain labels.",
    outcome:
      "Through this experience, the audience learns a central idea: AI does not understand the world objectively. It classifies, predicts, and interprets based on the data it was trained on. If the training data is limited, unbalanced, or shaped by a specific context, the AI's output will reflect those biases. By using sound as a shared and emotional language, Urban DJ makes AI bias understandable, memorable, and accessible to everyone.",
    gallery: [
      { src: udjInstallation.url, caption: "Installation image — the semicircular booth with neighborhood buttons", span: "full" },
      { src: udjInterface.url, caption: "Interface development — rhythm-based visualization inspired by Guitar Hero" },
      { src: udjRender.url, caption: "Render of space — LED soundwave along the circular wall" },
      { src: udjAvatars.url, caption: "Avatar interpretation on screen — Vigil, Ludo and Flora", span: "full" },
      { src: udjExtra.url, caption: "Neighborhood-based soundscape exploration" },
    ],
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
