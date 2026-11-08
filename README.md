# Mary Neha — Portfolio & Technical Dossier

> **AI Solution Builder · ML Engineer in training**  
> Modern, high-performance portfolio website engineered with Next.js (App Router), TypeScript, Tailwind CSS, React Three Fiber (R3F), GSAP, and Framer Motion. Configured for static export and GitHub Pages hosting in an **Obsidian Dark & Electric Cyan (`#00D4FF`)** theme.

---

## ⚡ Tech Stack & Highlights

- **Framework**: Next.js 14 (App Router, Static Export `output: 'export'`)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom Obsidian & Electric Cyan tokens
- **Full-Width 3D Word Embedding Simulation**: Interactive wide 3D vector space across the hero (modeled after Word2Vec 3D demos) featuring real-time mathematical **Cosine Similarity calculation** $\cos(\theta) = \frac{\mathbf{u} \cdot \mathbf{v}}{\|\mathbf{u}\| \|\mathbf{v}\|}$, OrbitControls (drag to rotate, wheel to zoom), dynamic laser vector chords, and nearest neighbor ranking.
- **Developer Flex Playground**: Live interactive Delulu Text-to-SQL AST simulator
- **Smooth Scroll**: Lenis (`@studio-freight/lenis` / `lenis`)
- **Animations**: Framer Motion & GSAP ScrollTrigger
- **Database / Inbound**: Supabase JS client (`@supabase/supabase-js`, insert-only with honeypot spam protection)
- **Accessibility**: WCAG AA contrast compliant, `prefers-reduced-motion` respected across all 3D/animation layers

---

## 🚀 Quick Start

### 1. Installation

Ensure Node.js (v18+) is installed.

```bash
# Clone the repository
git clone https://github.com/Cute02/Cute02.github.io.git
cd Cute02.github.io

# Install dependencies
npm install
```

### 2. Local Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Static Export

```bash
npm run build
```

This compiles and generates an optimized, standalone static site in the `out/` folder, ready for direct deployment to GitHub Pages.

---

## 🌐 Deploying to GitHub Pages

1. **Repository Setup**:
   Create a repository named `<your-username>.github.io` (e.g. `Cute02.github.io`) on GitHub.

2. **Automated GitHub Action**:
   Configured in `.github/workflows/deploy.yml` to automatically build and deploy `out/` on pushes to `main`.

---

## 🧩 Architectural Component Architecture

- `src/components/hero/CinematicHero.tsx`: Master hero orchestrator inspired by the KAGE demo aesthetic, featuring giant layered dimensional typography (`NEHA`), 3D Word Embedding Space with live cosine similarity, telemetry HUD, and interactive chapter scrubber.
- `src/components/hero/EmbeddingSpace3D.tsx`: Three.js procedural 3D vector space with OrbitControls (zoomable & movable), dynamic vector chords, and billboarding node labels.
- `src/components/hero/EmbeddingTelemetryHUD.tsx`: Live telemetry overlay showing the mathematical cosine similarity formula, active query vector, ranked cognate neighbors, and quick-jump anchor pills.
- `src/components/hero/EmbeddingSpaceFallback.tsx`: Lightweight 2D canvas embedding space fallback for low-power devices and reduced motion.
- `src/components/hero/ChapterScrubber.tsx`: Horizontal chapter navigation (`[ 01 ]`, `[ 02 ]`, `[ 03 ]`, `[ 04 ]`) with active slide indicators.
- `src/components/hero/DeluluPlayground.tsx`: Live interactive Developer Flex runner allowing recruiters to test-drive natural language queries into verified PostgreSQL AST and natural language insights.
- `src/components/hero/PhotoPlaceholder.tsx`: Circular frame labeled "Add photo", wired to `/photo.jpg`.
- `src/components/ui/ProjectCard.tsx`: 3D hover tilt with cursor-following radial border glow and strict status badges.
- `src/components/stack/ConstellationGraph.tsx`: Interactive canvas/SVG constellation node graph with physics links, category grouping, and verified skill levels.
- `src/components/contact/ContactForm.tsx`: Supabase insert client with honeypot anti-spam trap, client validation, and confetti celebration.

---

## 🔍 Verification & Placeholders Summary

| Placeholder Code Marker | File Location | Purpose & Next Steps |
| :--- | :--- | :--- |
| `TODO: add photo` | `src/components/hero/PhotoPlaceholder.tsx` | Place your official photo as `public/photo.jpg`. Until then, an explicit cyber placeholder displays. |
| `TODO: confirm Open to opportunities badge` | `src/app/contact/page.tsx` | Hidden until confirmed by Neha. Uncomment badge block once confirmed. |
| `TODO: confirm Google Startup Buildathon line` | `src/data/education.ts` | Displayed as "Applied (Pending Confirmation)". Update to Verified once approved. |

### Verified Facts Included
- **Display Name**: Mary Neha
- **Roles**: AI Solution Builder · ML Engineer in training
- **Education**: 
  - BCA in Machine Learning & AI, Jain University (ODL, 2026–2029, In progress)
  - AI Solution Builder (ML & AI, 1-year program), Brototype, Kochi (2026–2027, In progress)
  - Higher Secondary (Class XII) Computer Science, Assisi Vidyaniketan Public School (2024–2026, 86.4% Distinction)
  - Secondary Education (Class X), Marello Public School (2024, 95.6% Distinction)
- **Achievements**:
  - Participant, Buildathon conducted by HireD and Brototype (2026)
  - Applicant, Google Startup Buildathon India 2026 (Applied)
- **Projects**:
  1. *Delulu*: Text-to-SQL AI Agent (In progress)
  2. *Mitra*: Emotion-detection app using BERT GoEmotions (In progress)
  3. *Heart Disease Prediction*: Supervised ML, leakage-free (Completed)
  4. *GlowTrace*: Skincare analysis app using Computer Vision & ML lifecycle (In progress)
  5. *Motion Detection Alarm System*: PIR sensor embedded alarm (Completed)
  6. *Voice Controlled Light Automation*: Voice control via MQTT & ESP8266 (Completed)
- **Contact**: `maryneha248@gmail.com` · `github.com/Cute02` · `linkedin.com/in/mary-neha-0036a5264` · Ernakulam, Kerala, India
