import type { Project } from "@/components/ProjectCard";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import massHero from "@/assets/mass-hero.jpg.asset.json";



import archaiCover from "@/assets/archai/cover.jpg.asset.json";
import archaiStats from "@/assets/archai/stats.jpg.asset.json";
import archaiBegues from "@/assets/archai/begues.gif.asset.json";
import archaiPlugin from "@/assets/archai/plugin.jpg.asset.json";
import archaiPipeline from "@/assets/archai/pipeline.png.asset.json";
import archaiWorkflow from "@/assets/archai/workflow.gif.asset.json";
import archaiReport from "@/assets/archai/report.png.asset.json";

import hwCrisis from "@/assets/holy-woah/crisis.png.asset.json";
import hwHero from "@/assets/holy-woah/hero.png.asset.json";
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

import asCeiling from "@/assets/acoustic-skin/ceiling.jpg.asset.json";
import asHero from "@/assets/acoustic-skin/hero.png.asset.json";
import asRcp from "@/assets/acoustic-skin/rcp.jpg.asset.json";
import asPrinting from "@/assets/acoustic-skin/printing.png.asset.json";
import asLaser from "@/assets/acoustic-skin/lasercut.png.asset.json";
import asComponents from "@/assets/acoustic-skin/components.png.asset.json";
import asCircuit from "@/assets/acoustic-skin/circuit.jpeg.asset.json";
import asPrototype from "@/assets/acoustic-skin/prototype.gif.asset.json";
import asFuture from "@/assets/acoustic-skin/future.jpeg.asset.json";

import sdScheme from "@/assets/urban-demolition/scheme.png.asset.json";
import sdHero from "@/assets/urban-demolition/hero.png.asset.json";
import sdWorkflow from "@/assets/urban-demolition/workflow.png.asset.json";
import sdHardware from "@/assets/urban-demolition/hardware.png.asset.json";
import sdAigen from "@/assets/urban-demolition/aigen.png.asset.json";
import sdDetection from "@/assets/urban-demolition/detection.png.asset.json";
import sdAruco from "@/assets/urban-demolition/aruco.png.asset.json";
import sdFramework from "@/assets/urban-demolition/framework.png.asset.json";
import sdRobot from "@/assets/urban-demolition/robot.png.asset.json";
import sdCamera from "@/assets/urban-demolition/camera.png.asset.json";
import sdCalib from "@/assets/urban-demolition/calib.png.asset.json";
import sdAidetect from "@/assets/urban-demolition/aidetect.png.asset.json";
import sdArucodetect from "@/assets/urban-demolition/arucodetect.png.asset.json";
import sdMatch from "@/assets/urban-demolition/match.jpeg.asset.json";
import sdPlan from "@/assets/urban-demolition/plan.png.asset.json";
import sdGap1 from "@/assets/urban-demolition/gap1.png.asset.json";
import sdGap2 from "@/assets/urban-demolition/gap2.png.asset.json";


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
  repo?: string;
}


// keep unused p1 reference avoided: archai now uses its own cover
void p1;
void p2;
void p3;
void p4;

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
    image: hwHero.url,
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
    repo: "https://github.com/rojda34/Holy-Woah---Smart-Farming",

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
    tools: [
      "C++",
      "ROS2 Kilted",
      "ONNX Runtime",
      "YAMNet",
      "FastAPI",
      "React 19 + Vite",
      "Claude API",
      "Arduino Uno",
      "Raspberry Pi Pico",
      "LED matrix",
    ],
    repo: "https://github.com/PaintDumpster/ai-dj_network",
    overview:
      "Urban DJ — also known as the AI DJ Audio Bias Pavilion — is an interactive kiosk that lets visitors compose an audio mix on a 4×4 keypad, then classifies it live with three parallel YAMNet models (surveillance, natural, cultural). Each model is voiced by a named AI persona — Vigil, Flora, and Ludo — who narrate what they hear in character on a React webapp and a 74×75 RGB LED matrix. By comparing their interpretations of the same sound, visitors understand that AI does not \"hear\" objectively; it interprets through the bias of its training data.",
    concept:
      "Developed for AI for All, the project demystifies artificial intelligence by showing that AI systems are not neutral. Instead of explaining bias through technical diagrams or abstract definitions, we translate it into an interactive sound experience that visitors can see, hear, and physically trigger.\n\nThe installation is a semicircular booth. At the center, visitors find a screen and a set of physical buttons shaped like Barcelona neighborhoods. Each button is hold-to-play: pressing several buttons back to back chains the full, untrimmed sound effects into a single mix — often 90+ seconds of actual audio inside a 30-second recording window. As the audio plays, the soundwave is projected onto LED light strips installed along the circular wall, turning the audio into an immersive spatial visualization, and a rhythm-based interface inspired by Guitar Hero shows the same wave on screen.",
    process:
      "Under the hood, the system runs as a ROS2 network on a Raspberry Pi 5. An Arduino Uno reads the 4×4 keypad and publishes PRESS / RELEASE / NAV / SELECT events. A C++ build_waveform node assembles the mix with libsndfile and streams a normalised waveform to two Raspberry Pi Picos that drive the LED matrix — Pico 1 covers clusters 1–3 (74×45 px, ~18 s of audio), Pico 2 covers clusters 4–5 (74×30 px, ~12 s).\n\nThree parallel yamnet_classification nodes — Vigil, Flora, Ludo — run ONNX Runtime on the full recording, batched across all YAMNet frames. Each persona is shaped by the dataset its classifier head was trained on:\n\n- Vigil — surveillance and security sounds. Red. Watchful security AI, urgent, gives safety advice on danger sounds.\n- Flora — natural and environmental sounds. Green. Calm AI tuned to the natural world, soothing and observational.\n- Ludo — cultural and festival sounds. Blue. Exuberant AI for city culture and community life, lively and inviting.\n\nA Python llm_node calls the Claude API to voice each persona in character. The prompt scales tone to confidence (>0.5 confident, 0.25–0.5 hedged, <0.25 \"nothing notable\") so noise-level detections aren't narrated as confirmed events, and it collapses YAMNet's per-window timeline into relative early / middle / late phases instead of literal seconds. A FastAPI + WebSocket web_bridge fans everything out to a React 19 + Vite webapp that shows each avatar's icon, its generated line, and — on expand — the raw top-5 detections.",
    outcome:
      "Through this experience, the audience learns a central idea: AI does not understand the world objectively. The same explosive sound can be read by Vigil as gunshots, by Ludo as fireworks, and by Flora as thunder — none of the avatars are simply \"wrong\"; their answers reveal the limits and assumptions of their training data. When a visitor selects an avatar, the LED soundwave highlights the part of the audio that most influenced that classification, making clear that AI decisions are not magical or invisible but based on learned patterns. By using sound as a shared, emotional language, Urban DJ makes AI bias understandable, memorable, and accessible. Our first project written in C++ — full source, ROS2 launch files, and webapp are open on GitHub.",
    gallery: [
      { src: udjInstallation.url, caption: "Installation — the semicircular booth with neighborhood buttons", span: "full" },
      { src: udjInterface.url, caption: "React webapp — rhythm-based visualization inspired by Guitar Hero" },
      { src: udjRender.url, caption: "Render of space — 74×75 RGB LED matrix along the circular wall" },
      { src: udjAvatars.url, caption: "Avatar interpretation on screen — Vigil (surveillance), Flora (natural), Ludo (cultural)", span: "full" },
      { src: udjExtra.url, caption: "Neighborhood-based soundscape exploration" },
    ],
  },

  {
    id: "mass",
    index: "04",
    title: "HeatGuard",
    tag: "Parametric festival shade · AI pipeline · in development",
    year: "2026",
    image: massHero.url,
    className: "md:col-span-7",
    subtitle:
      "A parametric design and AI platform for festival organizers that crosses climate data and crowd-flow simulations to generate upcycled shade structures exactly where they're needed. Project currently in development.",
    location: "Barcelona · IAAC · MaAI 2025–2026",
    role: "Designer · Developer (with Rafik El Khoury, Dominika Klopotek, Seid)",
    tools: [
      "TanStack Start",
      "React + shadcn",
      "Anthropic Claude",
      "FastAPI",
      "PPO / DRL",
      "infrared.city",
      "Rhino.Compute",
      "Grasshopper",
      "Karamba3D",
      "Stable Diffusion + ControlNet",
    ],
    overview:
      "Status: in development — this page tracks the live spec. HeatGuard is a parametric design and artificial intelligence platform for festival organizers. Given a festival brief (capacity, budget, theme, location), the system crosses climate data and crowd-flow simulations to identify exactly where shade is most urgently needed. It then automatically generates the required structural geometry, clads it using upcycled materials sourced from local waste streams to minimize the carbon footprint, and outputs a layout plan, a locked budget, life-cycle carbon savings, and a photorealistic render.\n\nThe Golden Rule (amended 2026-06-09 — cooling re-coupled to material via transmissivity):\n\n- Maximize Cooling — driven primarily by geometry (where the shade falls and how much area it covers). The chosen membrane's solar transmissivity then applies a correction factor to the cooling benefit. Geometry sizes the shade; material quality scales its effectiveness.\n- Minimize Carbon — solved exclusively through material selection (upcycled / recycled materials, prioritizing the shortest transport distance). Carbon remains fully decoupled from geometry.\n\nAmendment note (2026-06-09): the original Golden Rule held that material type did not affect the thermal calculation. Because the 10 membranes transmit ~20–70% of solar radiation, treating all shade as equal overstated cooling. Cooling is now geometry × membrane-transmissivity correction; carbon stays material-only.",
    concept:
      "The frontend is not a free-form drawing canvas — it is a parametric engineering control panel. The user (festival organizer) does not need CAD or 3D modeling experience. The interface flow is strictly divided into three views.\n\nView 1 — Data Input (The Spatial Brief): an interactive map (Mapbox GL JS or Google Maps) with simple text and numeric forms. Drawing tools let the user trace Event Boundaries (the navigable site perimeter) and Target Zones (labeled destinations such as Stage A, Food Court, Restrooms). A sidebar panel collects Total Capacity, Budget (€), Date (used by the climate API to calculate exact solar vectors), and a Design Theme dropdown (Urban, Maritime, Natural, Industrial).\n\nView 2 — Loading State (Pipeline Transparency): because processing the DRL and Rhino.Compute modules takes several seconds or minutes, a sequential technical progress indicator is shown rather than a generic spinner — Calculating solar radiation matrix with infrared.city → Simulating crowd dynamics for 70,000 virtual agents → Generating parametric structural geometry (Rhino.Compute) → Optimizing material lifecycle carbon footprints.\n\nView 3 — The Results Dashboard (The Deliverable): hero photorealistic render returned by Stable Diffusion; KPI cards for Spent vs Total Budget, Carbon Saved (KgCO₂e) and Total Square Meters of Shade Generated; an interactive 2D top-down map with the satellite base layer, the thermal heat-map overlay and the final shade footprint polygon; a Bill of Materials data table; and an Export Project (PDF / CSV) call-to-action.\n\nAmendment (2026-06-10) — frontend realization is locked to the existing heatguard-ai-console repo (TanStack Start + React + shadcn/Radix, satellite-backed SVG canvas). Its 5-step console — Login → Workspace → Simulation → Structural → Dashboard — is a superset of the three views above. Mapbox GL is optional (may be added at Phase 7). Wiring happens in two passes: Phase 2.2 connects only the heat + crowd simulation views to the real pipeline (everything else stays mock), and Phase 7 completes the remaining views.",
    process:
      "The HeatGuard data flow is strictly sequential and deterministic. No AI engine invents architectural structures; the AIs are restricted to parsing inputs or rendering aesthetic textures.\n\nPhase 1 — LLM (Client Data Parser): the LLM does not design anything. It is an algorithmic translator transforming chaotic natural language into strict, injectable code variables. Anthropic API only (never OpenAI), claude-sonnet-4-6 by default (claude-haiku-4-5 acceptable). max_tokens ~1024, temperature 0.0, structured outputs via output_config with a JSON schema (capacity int, budget int, date YYYY-MM-DD, theme enum). System prompt is locked: a backend data processor that extracts operational parameters and ignores anything outside the schema. Validation loop reads the structured object and stop_reason; up to 3 retries before a 500 is returned.\n\nPhase 2 — DRL Engine (Crowd Simulator) & Climate: isolated Python + FastAPI microservice. Climate sends GPS + date to infrared.city and receives a UTCI grid; any cell with UTCI < 26°C is dropped. The DRL environment converts the site into a walkable 2D grid; impassable obstacles are flagged; each agent sees a 5 m radius and its target. Pre-trained PPO policy runs static inference only. Reward = P_destination (+10 reaching a target polygon) − P_heat (−5 stepping on UTCI > 26°C) − P_collision (−2 for distance < 0.5 m). Instantiate N = capacity / 100 agents and run 200 virtual steps.\n\nPhase 2.1 amendment (2026-06-10, site-native crowd model V2): the V1 policy showed an out-of-distribution gap on the real ~800 m site. The policy is retrained on the real georeferenced venue — boundary, real entrances, real stage positions, building footprints flagged impassable. Simulation horizon may be site-scaled via SIM_STEPS_V2 (seeds logged); N = capacity / 100 unchanged. The Weidmann fundamental-diagram acceptance gate (±20%, locked) must be re-run for new weights; crowd_density reverts to ASSUMED until the new weights pass.\n\nData extraction — dwell_zones: DBSCAN clusters where agent velocity ≈ 0 for >10 consecutive steps (queues, waiting spots). flow_vectors: lines connecting P_origin → P_destination for major agent concentrations (the crowd's invisible highways).\n\nPhase 3 — Core Logic (Greedy Placement): deterministic. Score_cell = Crowd_Density × (UTCI − 26). Sort all cells descending. Iterate, marking cells for shade and accumulating spent_budget. Stop the moment spent_budget ≥ client's budget or Score == 0. Output: clean polygonal boundaries representing the targeted footprint.\n\nPhase 4 — Rhino.Compute & Grasshopper: headless Windows Server instance running Rhinoceros. The .gh script exposes inputs named IN_Footprint, IN_FlowVectors, IN_SunVector. A point grid is seeded inside the footprint; any point intersecting a buffer around a flow vector is culled (no pillar ever lands in an evacuation route). Columns extrude from the remaining points; a roof mesh / NURBS rests on top, tilted perpendicular to the sun vector to maximize shadow on target. Karamba3D performs passive verification: beam elements + gravity + wind loads; if deflection exceeds limits, column radii thicken automatically. Outputs OUT_Mesh and OUT_BOM (e.g. Pillars: 40, Membrane_m2: 1200). Backend POSTs JSON to http://<rhino-server>:8081/grasshopper and decodes the response into .gltf (web viewer) and .obj (Stable Diffusion).\n\nPhase 5 — Material Selection & Carbon Accounting: query data/materials.json and isolate materials whose theme array contains the brief's theme. For all structurally viable candidates evaluate Transport_Carbon = 2 × Distance_km × Mass_tonnes × Emission_transport_mode. Sort ascending and select index 0 (absolute minimum transport carbon). Multiply quantity by unit cost from the JSON entry to lock the final budget. Cooling correction (amendment 2026-06-09): read the chosen membrane's solar_transmissivity τ; the cooling benefit is scaled by (1 − τ) — solid PVC vinyl (τ ≈ 0.25) delivers ~75% of the ideal full-shade UTCI reduction; a loose-knit HDPE net (τ ≈ 0.4) delivers ~60%. Structural-only materials carry solar_transmissivity: null and are never selected as cladding.\n\nPhase 5b — Cooling Acceptance Gate (amendment 2026-06-09): after geometry and membrane are fixed, the system MUST verify the design actually cools. Two criteria, both required — (1) Coverage: the shade footprint covers ≥ Y% of the highest-priority (hottest × busiest) dwell cells within budget. (2) UTCI delta: re-simulate UTCI over the shaded footprint applying the membrane's solar_transmissivity; mean shaded UTCI must be ≥ X°C below the no-shade baseline. X and Y are declared before the run and never tuned after. A design failing either criterion is reported as FAIL — \"it ran to completion\" is not a pass bar.\n\nPhase 6 — Strict Rendering (ControlNet + Stable Diffusion): the AI is forbidden from altering structural volumetrics. A headless render (pyrender or Rhino CLI) captures a 45° isometric bird's-eye view against solid black to extract a Depth Map or Canny Edge Map, locking geometry boundaries. ControlNet is forced to controlnet_conditioning_scale = 1.0, controlnet_model = depth (or canny), denoising_strength = 0.75 (rich textures and lighting without changing shapes). Prompt assembled dynamically from Phase 1 + Phase 5 variables, with a mandatory negative prompt blocking geometric distortions, extra pillars, floating elements and cartoonish output. Output uploaded to S3; URL returned to the frontend.",
    outcome:
      "Material Database (data/materials.json) — the material system is a rule evaluation layer with exactly 10 upcycled / reclaimed entries (5 structural, 5 membrane) cataloged from Barcelona waste streams for the Parc del Fòrum site (41.4106°N, 2.2203°E). Each entry carries id, name, type (STRUCT | MEMBR), source, unit (metre | unit | m²), theme tags, usage_conditions (max_span_meters, waterproof), dimensions (thickness_mm, unit_mass_kg), cost_per_unit, solar_transmissivity (fraction 0–1 or null for structural-only), and an lca_profile (distance_km, transport_mode_factor). A top-level _meta object records site coords, counts, the carbon-boundary statement and field notes. Mass for the carbon formula is derived from dimensions.unit_mass_kg × quantity ÷ 1000 (tonnes).\n\nNon-Negotiables (system guardrails):\n\n- The LLM never designs — it is explicitly barred from placing structures, choosing dimensions, generating structural vectors, or estimating financial balances. It handles text extraction and theme classification only.\n- Carbon is exclusively logistical — under the recycled Cut-off framework, material manufacturing carbon is valued at zero. The system only tracks physical truck transportation emissions for the round-trip delivery and dismantling phases.\n- No module catalog — structures are generated mathematically on-the-fly inside Grasshopper to fit the landscape constraints. The system does not pick from a pre-fabricated asset library.\n- Cooling requires human density — the engine is barred from spending budget on shading hot areas if the DRL crowd data shows zero foot traffic in those coordinates.\n- ControlNet enforcement — the image generation engine cannot override or change structural layouts. The output image must always match the physical model generated by Rhino.Compute.\n\nAmendment (2026-06-20 — CORE-05 optimality-vocabulary lock scoped to the greedy core): the greedy core in src/core/ continues to make NO optimality claim — it is a bounded (1 − 1/e) heuristic, and the lock over src/core/*.py + score_grid.json / footprint.json / provenance.json / structure_zones.json is retained unchanged. A new exact ILP-MCLP engine in src/placement_ilp/ may claim earned-optimal IFF it emits a verifiable optimality certificate (mip_gap == 0 ⇒ proven_optimal); that claim is confined to optimality_certificate.json and bound there by a same-sentence conditional clause tying it to the certificate. Shared provenance.json and structure_zones.json stay \"optimal\"-free even on the ILP path.\n\nStatus — HeatGuard is currently in active development by Juan Gaitán, Rafik El Khoury, Dominika Klopotek and Seid at IAAC's Master in AI for Architecture and the Built Environment (2025–2026). This page is the living public spec; the FestCOOL repo and the heatguard-ai-console frontend implement it pass by pass.",
  },
  {
    id: "urban-demolition",
    index: "05",
    title: "Smart Demolition",
    tag: "AI-driven material identification & sorting",
    year: "2026",
    image: sdHero.url,
    className: "md:col-span-7",
    subtitle:
      "An automated, AI-powered material recognition and sorting pipeline that turns demolition debris into categorised, reusable assets.",
    location: "Barcelona · IAAC · MRAC 2025–2026",
    role: "Designer · Developer (with Subha Tahsin Saba, Jiani Zhang, Priyam Gulati Ravinder, Dominika Klopotek)",
    tools: ["Computer Vision", "Roboflow", "Python", "ROS", "ArUco", "Robotic Arm"],
    overview:
      "The global construction industry currently faces a significant sustainability crisis, characterized by the massive generation of material waste that often bypasses recycling streams. This challenge stems primarily from a technological gap: the lack of real-time identification, sorting, and decision-making systems on active demolition sites. Without an efficient way to distinguish between various debris types, valuable resources are frequently lost to landfills.\n\nTo bridge this gap, our initiative focuses on developing an automated, AI-powered material recognition and sorting pipeline. By integrating advanced computer vision and machine learning algorithms, this system would enable faster on-site material separation, ensuring that materials like masonry and structural components are accurately identified for salvage. This shift toward automation is more than a technical upgrade; it is a fundamental catalyst for data-driven circular construction workflows. By transforming disorganised rubble into categorised, reusable assets, we can significantly increase reuse and recycling rates. This approach moves the industry away from traditional linear consumption and toward a circular economy, where the life cycle of construction materials is extended, environmental impacts are minimised, and \"waste\" is redefined as a valuable resource for future builds.",
    concept:
      "This project proposes an automated, AI-powered material recognition and sorting pipeline to facilitate the circular reuse of construction and demolition debris. An integrated computer vision system monitors a workspace containing mixed waste — specifically clay, concrete, steel, and plastic — identifying individual components through a custom-trained object detection model.\n\nEach detected element is analyzed to determine its material classification and precise spatial orientation. The system processes this visual data through a matching logic that categorizes the debris, ensuring high-purity streams for architectural salvage. This information is then translated into actionable task planning, bridging the gap between digital perception and physical manipulation. A robotic arm subsequently retrieves the categorized pieces and executes precise pick-and-place maneuvers, sorting the materials into designated zones for immediate reintegration into the construction lifecycle.\n\nTo successfully bridge the gap between AI perception and physical sorting, the project relies on a robust integration of hardware and software, structured into two primary layers to ensure the system is both powerful enough for real-time processing and flexible enough for iterative development.",
    process:
      "AI Model Training — To enable the robotic system to recognize construction materials, we trained a basic AI object detection model. The first step was preparing a dataset: 300 labeled images of construction materials, manually annotated, captured across different camera angles, various lighting conditions, and some partially hidden objects (occlusions). The dataset covered brick, concrete, steel and plastic. After preparing the dataset, we trained an object detection model using the Roboflow platform, balancing accuracy (correctly identifying materials) and speed (running fast enough for real-time detection). The result is a trained model that can recognize construction materials in real time.\n\nReal-Time Object Detection — An RGB camera mounted on a fixed position overlooking the workspace continuously captures images of the working area. The captured images are sent to the AI detection model, which performs live material identification from the camera feed, bounding box generation around detected objects, material classification labels (brick, concrete, plastic…) and confidence score evaluation. The overall workflow follows a simple pipeline: vision system → AI model → robotic control logic.\n\nFramework — Our pick-and-place pipeline is the central nervous system of the project, seamlessly connecting digital perception to robotic action. The process begins at the Camera Node, where raw imagery is captured and aligned with the workspace through a one-time Table Calibration, mapping 2D visual data to 3D physical coordinates. The Detect phase runs a dual-track analysis: the AI Model Detector classifies material types, while the ArUco Detector establishes precise spatial markers. These data streams converge in the Matcher, which applies sorting rules to specific objects. Once tasks are matched, the Pick-and-Place Planner generates a final execution script. Before physical movement, the system validates the path in a digital environment, ultimately sending the command to the Move Group Node for precise manipulation.",
    outcome:
      "Robotic Object Grabbing & Placement — After the materials are detected by the vision system, the robotic arm performs the grabbing and placement tasks. The robotic control system receives object location and a material selection command for sorting, calculates an appropriate grasp point, and picks the correct object from the mixed pile. Once picked up, the arm deposits the material into the assigned container, using grid-based positioning for organized transport or storage.\n\nAchievements — successful real-time material detection, an automated sorting workflow, and functional human–AI collaboration. Limitations — dataset size, material surface similarity, and edge cases such as damaged or mixed materials. Future improvements — larger and more diverse datasets, additional material classes, a full autonomy mode, integration with material reuse databases, and CO₂ and cost impact calculations.\n\nSmart Demolition is a project of IAAC, Institute for Advanced Architecture of Catalonia, developed in the Master in Robotics & Advanced Construction 01 (2025–2026) by Subha Tahsin Saba, Jiani Zhang, Priyam Gulati Ravinder, Dominika Klopotek and Juan Gaitán during the MRAC01 25/26 Hardware II course with Hamid Peiro and Aleksandra Kraeva.",
    gallery: [
      { src: sdScheme.url, caption: "Project overview — AI-powered material recognition and sorting pipeline", span: "full" },
      { src: sdWorkflow.url, caption: "Workflow — from mixed debris to categorised, reusable assets", span: "full" },
      { src: sdHardware.url, caption: "Project infrastructure — hardware and software layers", span: "full" },
      { src: sdAigen.url, caption: "Trained model recognising construction materials in real time" },
      { src: sdDetection.url, caption: "Real-time detection — bounding boxes, labels and confidence scores" },
      { src: sdAruco.url, caption: "ArUco-marked box for spatial reference" },
      { src: sdFramework.url, caption: "Vision-based pick-and-place pipeline — Camera · Calibration · Detect · Match · Plan · Move", span: "full" },
      { src: sdRobot.url, caption: "Robotic object grabbing & placement" },
      { src: sdCamera.url, caption: "Camera Node" },
      { src: sdCalib.url, caption: "Table Calibration" },
      { src: sdAidetect.url, caption: "Detect — AI model detector" },
      { src: sdArucodetect.url, caption: "Calibration — ArUco detector" },
      { src: sdMatch.url, caption: "Match — sorting rules applied to detected objects" },
      { src: sdPlan.url, caption: "Pick and place plan" },
      { src: sdGap1.url, caption: "Gap to real — digital validation before physical execution" },
      { src: sdGap2.url, caption: "Move Group Node — precise manipulation" },
    ],
  },
  {
    id: "acoustic-skin",
    index: "06",
    title: "Acoustic Skin",
    tag: "Intelligent, shape-shifting sound control",
    year: "2026",
    image: asHero.url,
    className: "md:col-span-5",
    subtitle:
      "An acoustic panel that morphs its surface geometry in real time to control the way sound interacts with the environment.",
    location: "Barcelona · IAAC · MaAI 2025–2026",
    role: "Designer · Developer (with Dominika Klopotek, Gaelle Habib, Rojda Gulel, Rim Choufani, Chun-Chun Chang)",
    tools: ["Arduino Uno", "MG90S Servos", "Sound Sensors", "3D Printing", "Laser Cutting", "Cork & Lycra"],
    overview:
      "Acoustic Skin is an acoustic panel that morphs its surface geometry in real time to control the way sound interacts with the environment. It uses an array of miniature pistons embedded in a felt-covered membrane, behaving like a living, breathing skin that adapts its texture and porosity to the acoustic conditions of a space.\n\nSystem behaviour — Listen → Detect noise → Adjust geometry → Measure effect → Return to rest.",
    concept:
      "First idea — the system could be integrated into a real architectural ceiling. The concrete slab sits at the top, followed by a structural frame holding the piston system. Below that is the ceiling level where the flexible acoustic surface is installed. When the actuators extend, they push the membrane downward, creating a dynamic contour that adapts in real time to sound conditions. A red dashed line represents the limit of maximum extension, indicating how far the ceiling can safely deform without interfering with the space below. This forms a responsive acoustic layer embedded between the structural ceiling and the interior room.\n\nLocating the noise — the system continuously listens to the surrounding environment through an array of embedded microphones distributed across the panel or ceiling field. These sensors measure overall sound pressure level and spatial differences in intensity to identify where the noise is strongest.",
    process:
      "3D Printing — Linear servo actuators were fabricated using the open-source design from Thingiverse #3170748. After importing the components into Bambu Studio, the prints were optimised for tolerance and later sanded to ensure smooth piston movement. This stage was critical for minimizing friction and achieving reliable actuation during rapid, repeated shape changes.\n\nLaser Cutting — Two materials were tested for the skin's tactile surface: 3 mm cork (selected for its natural sound-absorbing properties) and 1.15 mm cardboard (used for fast iteration and pattern studies). Both were laser-cut with a perforated triangular tessellation that distributes stress evenly, so when the actuators push from below the cork bends smoothly without cracking along a single direction. Unlike square or hexagonal grids, triangles prevent directional bias and let the panel deform in multiple directions, creating more organic, controllable curvature.\n\nTesting (sensor calibration) — Initial system tests ran each motor individually with a simplified script to confirm proper actuation. Two motors were identified as faulty and removed. Each sound sensor was then calibrated to ensure consistent sensitivity across the grid.\n\nComponents — Arduino Uno reads all sound sensor inputs and sends movement commands to the servos. ADRKY-037 LH analog sound sensors feed continuous voltage signals to the microcontroller. MG90S Micro Servos rotate up to 180° and drive the 3D-printed gear system inside each linear actuator, converting rotation into vertical linear displacement via a rack-and-pinion mechanism.\n\nCircuit Diagram — the diagram shows one sound sensor and one servo motor as the pattern for one pair of a 9×9 matrix, repeated nine times. All nine sound sensors connect to dedicated analog pins, the nine servo motors are powered directly from a 5 V / 10 A power supply (not from the Arduino's 5 V pin), and each control signal connects to a separate digital pin.",
    outcome:
      "Prototype — a 430 × 430 mm wooden frame holds all components in a 3×3 grid: 9 linear servo actuators (a scaled-down stand-in for the full 9×9 matrix), a Lycra fabric intermediary layer chosen for its elasticity, and a 400 × 400 mm laser-cut cork panel with a triangulated pattern that provides mesh-like flexibility and natural sound-absorbing qualities. This setup tested material flexibility, actuator performance and overall surface morphing before considering larger architectural applications.\n\nLimitations — collecting nine micro servos and nine sound sensors in time was challenging; the 180° servo rotation, combined with the small gears matched to the actuator dimensions, limited the extension range; an ESP32 setup required a bigger 5 V / 10 A power supply; and the laser-cut cork was too thick to move smoothly, so the final visualization relied mainly on the fabric.\n\nFuture optimisation — in a perfect setting, the gears extend the linear actuator even further, pushing a light and flexible sound-absorbing fabric. In an architectural setting, it becomes a dynamic sound-absorbing ceiling, taking sound control to another level.\n\nAcoustic Skin is a project of IAAC, Institute for Advanced Architecture of Catalonia, developed in the Master in AI for Architecture and the Built Environment 01 (2025–2026) by Dominika Klopotek, Juan Gaitán, Gaelle Habib, Rojda Gulel, Rim Choufani and Chun-Chun Chang during the MRAC01 MAAI01 25/26 Hardware I course with Huanyu Li, Hamid Peiro and Aleksandra Kraeva.",
    gallery: [
      { src: asCeiling.url, caption: "First idea — system integrated into an architectural ceiling", span: "full" },
      { src: asRcp.url, caption: "Locating the noise — embedded microphone array across the ceiling field", span: "full" },
      { src: asPrinting.url, caption: "3D Printing — linear servo actuators (Thingiverse #3170748)", span: "full" },
      { src: asLaser.url, caption: "Laser Cutting — triangular tessellation in cork for uniform flexibility", span: "full" },
      { src: asComponents.url, caption: "Components — Arduino Uno · ADRKY-037 LH · MG90S · 3D-printed linear actuators", span: "full" },
      { src: asCircuit.url, caption: "Circuit Diagram — pattern for one sensor/servo pair, repeated across the 9×9 matrix" },
      { src: asPrototype.url, caption: "Prototype — 430 × 430 mm frame with 3×3 actuator grid morphing the cork surface", span: "full" },
      { src: asFuture.url, caption: "Future optimisation — dynamic sound-absorbing architectural ceiling", span: "full" },
    ],
  },
];


export const getProject = (id: string) => projects.find((p) => p.id === id);
