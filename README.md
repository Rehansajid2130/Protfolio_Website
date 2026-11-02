# Rehan — Frontend Developer Portfolio

A modern, high-performance, animation-rich personal portfolio built with **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed with clean component architecture, precision typography, and zero vendor lock-in.

---

## ✨ Features

- **Floating Dynamic Island Navigation**: Fixed-radius pill navbar with expandable quick-navigation links and smooth section jumping.
- **Hero & Interactive 3D Card**: Centered headline typography framed by floating 3D elements and an interactive 3D avatar card that smoothly flips between front and back views on scroll.
- **Scroll-Pinned Core Philosophy**: Sticky viewport (`useScroll`) that locks on screen while illuminating words progressively as the user scrolls through the statement.
- **Services & Capabilities**: Structured stack rows highlighting core engineering capabilities and design competencies.
- **Featured Works & Editorial Thoughts**: Clean grid layouts featuring rolling text hover animations (`RollingText`) and quick external links.
- **Tactile Paper Canvas (`#f9f6f2`)**: Subtle custom warm canvas layered with an authentic fine-grain noise texture overlay (`bg-noise.png`) for a physical, tactile feel.
- **Dark Contact Section**: Refined black card with fine film grain, custom token borders (`#faf7f380`), white focus states, and quick social buttons (X, Instagram, LinkedIn, YouTube).
- **Colossal Typography Footer**: Bold edge-to-edge wordmark with direct contact email and back-to-top shortcut.

---

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Motion & Interactions**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: Custom inline lightweight SVGs (zero bundle bloat)
- **Package Manager**: [pnpm](https://pnpm.io/)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+) and [pnpm](https://pnpm.io/) installed.

### Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd portfolio
pnpm install
```

### Development Server

Start the local development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Compile TypeScript and build the production bundle:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   └── images/              # Local image assets (avatar, 3D stars, noise texture)
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── RollingText.tsx  # Smooth dual-layer rolling text hover effect
│   │   ├── Contact.tsx      # Dark contact card + social channel links
│   │   ├── Footer.tsx       # Colossal typography wordmark & footer navigation
│   │   ├── HeroAndBio.tsx   # Hero section + 3D flipping avatar
│   │   ├── Icons.tsx        # Lightweight custom SVG icons
│   │   ├── Navbar.tsx       # Dynamic island navigation
│   │   ├── Projects.tsx     # Featured projects grid
│   │   ├── Quote.tsx        # Sticky scroll-pinned illuminated philosophy
│   │   ├── Services.tsx     # Capability rows
│   │   ├── Testimonials.tsx # Client reviews & ratings
│   │   └── Thoughts.tsx     # Editorial articles & blog previews
│   ├── data/                # Static data definitions (projects, articles, testimonials)
│   ├── App.tsx              # Master layout container with side gutters
│   ├── index.css            # Base Tailwind styles & custom typography tokens
│   └── main.tsx             # Application entry point
├── .gitignore               # Ignored dependencies, build artifacts & system files
├── package.json             # Project dependencies & build scripts
├── tailwind.config.js       # Tailwind CSS theme extension
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite build configuration
```

---

## 📄 License

MIT &bull; Created by **Rehan** (2026).

