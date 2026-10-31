# Portfolio Style Guide

Design rules for Rehan's personal portfolio. Read this before building or changing any section.

**One-line brief:** a bright, airy, sky-blue and white portfolio with a small, deliberate orange accent. Confident and a little editorial. It should look like a person with taste made it, not like a template or a generated site.

---

## 1. Principles

1. **Restraint over decoration.** Every effect needs a reason. If removing it changes nothing, remove it.
2. **Content leads.** Real projects, real screenshots, real sentences. Design frames the work, it does not compete with it.
3. **One loud thing per screen.** One headline, or one 3D object, or one orange element. Never all three fighting.
4. **Orange is rare.** It marks the single most important action or word in a view.
5. **Specific beats generic.** Specific copy, specific numbers, specific project details. Vague claims are what make sites feel generated.

---

## 2. Color

### Palette

| Token | Hex | Use |
|---|---|---|
| `--white` | `#FFFFFF` | Main background, cards |
| `--paper` | `#F6FAFD` | Alternate section background |
| `--sky-50` | `#EEF7FD` | Tinted panels, hover fills |
| `--sky-100` | `#D9EEFB` | Tags, subtle fills, dividers on tint |
| `--sky-300` | `#8CD0F5` | Illustration, 3D material highlights |
| `--sky-500` | `#2BA3E6` | Primary brand blue, large shapes, icons |
| `--sky-700` | `#0B6FA8` | Links and small blue text on white |
| `--ink` | `#0E1B26` | Headings and body text (never pure black) |
| `--ink-soft` | `#4A5B69` | Secondary text |
| `--line` | `#D6E4EE` | Borders and dividers |
| `--orange-500` | `#FF7A1A` | The accent |
| `--orange-600` | `#E8650A` | Accent hover/pressed |
| `--orange-100` | `#FFE9D6` | Soft highlight behind a word |

### Proportions

- About **70% white / paper**, **22% sky blue and ink**, **under 8% orange**.
- If orange covers more than a button, one highlighted word and one small indicator in a view, there is too much.

### Where orange is allowed

- The primary CTA button (one per view)
- One highlighted word or underline in a heading
- The active state of nav, a focus ring accent, a small status dot
- A single 3D detail (see section 9)

### Where orange is not allowed

- Body text, large backgrounds, section dividers, card borders, multiple buttons side by side

### Contrast rules

- Body text is `--ink` on white or paper. Never set text in `--sky-500`; it is too light. Use `--sky-700` for blue text and links.
- **Do not put white text on orange.** It is about 2.9:1. Use `--ink` on `--orange-500` (about 6.7:1).
- White text on `--sky-700` or darker is fine. White on `--sky-500` only for large text (24px and up).
- Always re-check with a contrast tool after changing a color.

### Avoid

- Purple, pink, or neon gradients
- Rainbow or multi-stop gradients. If a gradient is used, it is `--sky-100` to `--white` or `--sky-500` to `--sky-300`, subtle, and used once.
- Gradient text on headlines
- Glowing colored shadows

### Dark mode (optional, later)

Not required for launch. If added, use a deep navy base (`#0A1620`), keep sky blue as the brand color, lighten text to `#E8F1F8`, and keep orange at the same small proportion. Do not simply invert colors.

---

## 3. Typography

| Role | Font | Weights |
|---|---|---|
| Headings | **Familjen Grotesk** | 500, 600 |
| Body / UI | **Instrument Sans** | 400, 500 |
| Labels, tags, metadata | **IBM Plex Mono** | 400, 500 |

All three are on Google Fonts. Self-host with `font-display: swap` for performance. Fallbacks: `system-ui, -apple-system, "Segoe UI", sans-serif` and `ui-monospace, monospace`.

If the heading font feels off in testing, swap it for **Fraunces** (soft serif) for a more editorial feel. Change one font at a time and keep the body font.

### Scale (fluid with `clamp`)

| Style | Size | Line height | Tracking |
|---|---|---|---|
| Display (hero) | `clamp(2.75rem, 7vw, 6rem)` | 1.0 | -0.03em |
| H1 | `clamp(2.25rem, 4.5vw, 3.75rem)` | 1.05 | -0.025em |
| H2 | `clamp(1.75rem, 3vw, 2.5rem)` | 1.15 | -0.02em |
| H3 | `1.25rem` | 1.3 | -0.01em |
| Body | `1rem` to `1.125rem` | 1.65 | 0 |
| Small | `0.875rem` | 1.5 | 0 |
| Label (mono) | `0.75rem` uppercase | 1.4 | +0.06em |

### Rules

- Left-align headings and body. Center only short, single-line elements.
- Body line length: 60 to 70 characters (`max-width: 65ch`).
- Maximum two heading weights on a page.
- Mono is for small labels only (year, stack, role). Never for paragraphs.

---

## 4. Layout and spacing

- **Spacing unit:** 4px base. Use the scale `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`.
- **Container:** `max-width: 1200px`, side padding `24px` mobile, `48px` desktop.
- **Grid:** 12 columns on desktop, 4 on mobile, 24px gutters.
- **Section padding:** `96px` to `128px` vertical on desktop, `64px` on mobile.
- **Be asymmetric on purpose.** Headline on 7 columns with the 3D object overlapping the right 5. Project cards at different heights where it helps. Avoid the identical three-column card row repeated everywhere.
- Use whitespace as a design element. If a section feels empty, fix the content, do not fill the space with decoration.
- Break the grid once or twice per page (an oversized number, a project image bleeding to the edge), not on every section.

---

## 5. Shape, borders, elevation

- **Radius:** `6px` for inputs and tags, `12px` for cards, `999px` only for small pills and status dots. Do not use `rounded-3xl` on everything.
- **Borders over shadows.** Cards are `1px solid var(--line)` on white. Hover can darken the border or lift 2 to 4px.
- **Shadow (one token only):** `0 8px 24px rgba(14, 27, 38, 0.08)`. Neutral and soft. No colored glows.
- **No glassmorphism** except possibly the sticky nav (`backdrop-filter: blur(12px)` over white at 80% opacity).
- No grain overlay, no floating decorative blobs, no neon outlines.

---

## 6. Components

### Navbar
- Sticky, white at 80% with a blur and a bottom border once scrolled.
- Logo or name on the left, 4 to 5 links on the right, one text link or small button for "Contact".
- Active link: ink text with a 2px orange underline.

### Buttons
- **Primary:** `--orange-500` background, `--ink` text, 12px radius, 14px 24px padding, medium weight. Hover: `--orange-600`, 1px lift.
- **Secondary:** transparent, `1px solid var(--ink)`, ink text. Hover: `--sky-50` fill.
- **Text link:** `--sky-700`, underline on hover, with a small arrow that shifts 2px.
- One primary button per view.

### Hero
- Left-aligned. Short headline with **one** orange-highlighted word (`--orange-100` marker behind it or orange underline stroke).
- One supporting sentence, two buttons, a small line of status (for example "Available for freelance work").
- 3D object sits to the right and slightly overlaps the text column edge.

### Project cards
- Real screenshot or recording on top, title, one-line description, stack tags in mono, year.
- Border card, no heavy shadow. Hover: image scales 1.03 inside its frame, arrow appears.
- Each links to a short case study: the problem, what you built, what you used, the result, live link, GitHub link.

### Tags
- `--sky-100` background, `--sky-700` text, mono 12px, 6px radius.

### Inputs and forms
- 1px `--line` border, 6px radius, 14px 16px padding. Focus: `--sky-500` border and a 3px `--sky-100` ring.
- Visible labels above the field. No placeholder-only labels.
- Error text in a dark red (`#B42318`) with an icon, not orange.

### Stats, testimonials, FAQ
- Only include them if they are real. Use real Fiverr and Freelancer feedback with names or handles, and real numbers.
- Do not invent testimonials or round-number stats ("100% satisfaction").

### Footer
- Large closing line, email, social links, small copyright. White or `--paper`. Keep it quiet.

---

## 7. Motion

### Tokens

```css
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
--dur-fast: 150ms;   /* hovers */
--dur-base: 300ms;   /* UI state changes */
--dur-slow: 700ms;   /* reveals, entrances */
```

### Rules

- Animate `transform` and `opacity` only. Avoid animating layout properties.
- **Reveal on scroll:** fade up 16 to 24px, once, with a short stagger (60 to 80ms). Do not re-trigger every time.
- **Hero load:** headline lines slide up from a mask, then the rest fades in. Total under 1.2 seconds.
- **Smooth scroll:** Lenis, light settings. Do not hijack scroll direction.
- **Hover:** subtle. 2 to 4px movement, color change, an arrow. No bouncing, shaking, or spinning.
- **Custom cursor:** optional, small, desktop only. Skip it if it is not adding anything.
- **Page transitions:** a short fade or wipe, under 400ms.
- Respect `prefers-reduced-motion`: disable parallax, scroll-linked movement, and 3D autorotation, and keep simple fades only.

### Libraries
- Framer Motion for component and layout transitions
- GSAP + ScrollTrigger for the pinned or scroll-driven sections
- Pick one of them per feature. Do not stack both on the same element.

---

## 8. 3D

- **Where:** hero only, plus at most one more section. Not on every page.
- **What:** a single simple object that relates to the work (a stylized laptop, a code window, a cube made of UI panels, or an abstract form). Choose one idea and commit.
- **Material:** matte, clay-like, soft studio lighting. Use `--sky-500`, `--sky-300`, and white for the form, and one small orange detail (a button, a light, a single face).
- **Avoid:** chrome, glossy glass blobs, floating wireframe spheres, particle clouds, anything that looks like a default Three.js demo.
- **Interaction:** gentle response to the cursor (a few degrees of rotation, eased), and slow scroll-linked rotation. No constant spinning.
- **Performance:**
  - Lazy-load the canvas after first paint
  - Compress the model (GLB with Draco or Meshopt), target under 1 MB
  - Cap device pixel ratio at 2, pause rendering when off screen
  - Provide a static image fallback on low-power devices, mobile if needed, and for reduced motion
- Stack: React Three Fiber + Drei. Spline is acceptable for fast prototyping but export or rebuild for production if load time suffers.

---

## 9. Imagery and icons

- Real project screenshots, framed in a plain browser mockup or on a flat `--sky-50` panel. Consistent corner radius and shadow across all of them.
- One real photo of Rehan, cropped well, in good light. No stock photos. No AI-generated imagery.
- **Icons:** one set, one stroke weight (Lucide or Phosphor, 1.5px stroke). No emoji used as icons or bullets.
- Illustration, if any, is flat and limited to the palette.

---

## 10. Copy and voice

- First person, plain, direct. Short sentences. Say what you do, for whom, and what changed.
- Prefer specifics: "Built a recruitment platform with real-time chat and a Kanban applicant tracker" over "Crafting seamless digital experiences."
- Headline example: "I build fast, clear React interfaces for people who need them to work."
- Avoid these words and phrases: *elevate, unleash, seamless, cutting-edge, passionate, innovative, game-changing, dive in, crafting, tailored solutions, journey, next-level, revolutionize.*
- Avoid em-dash-heavy sentences and triplets in every line ("fast, scalable, and secure"). Vary rhythm.
- Button labels are verbs: "View project", "Send message", "Download CV".
- Do not write a fake "Trusted by" bar or fake metrics.

---

## 11. Things that make a site look generated (do not do these)

- [ ] Purple-to-pink or rainbow gradients, gradient headline text
- [ ] Centered hero with a pill badge above the headline
- [ ] Three identical feature cards with emoji icons
- [ ] Glass cards with colored glow on every section
- [ ] Floating blurred blobs in the background
- [ ] Every element fading up with the same animation
- [ ] Lorem-sounding copy and invented stats or testimonials
- [ ] "Inter + gradient + rounded-2xl" as the entire personality
- [ ] Generic stock 3D shape unrelated to the work
- [ ] Section titles like "Why Choose Me" and "Our Services" (use first person, and only claim what is true)

---

## 12. Accessibility and performance

- Color contrast AA minimum (4.5:1 body, 3:1 large text and UI)
- Visible focus states on every interactive element (3px `--sky-500` ring plus offset)
- Semantic HTML (`header`, `nav`, `main`, `section`, `footer`), one `h1` per page
- Alt text on every meaningful image; decorative images get `alt=""`
- Keyboard-navigable nav, cards, and form
- Lighthouse targets: Performance 90+, Accessibility 95+, Best Practices 95+
- Images in AVIF/WebP with explicit width and height, lazy-loaded below the fold
- Largest Contentful Paint under 2.5s on mobile, so the hero text must not wait for 3D

---

## 13. Implementation tokens

### CSS variables

```css
:root {
  --white: #ffffff;
  --paper: #f6fafd;
  --sky-50: #eef7fd;
  --sky-100: #d9eefb;
  --sky-300: #8cd0f5;
  --sky-500: #2ba3e6;
  --sky-700: #0b6fa8;
  --ink: #0e1b26;
  --ink-soft: #4a5b69;
  --line: #d6e4ee;
  --orange-500: #ff7a1a;
  --orange-600: #e8650a;
  --orange-100: #ffe9d6;

  --radius-sm: 6px;
  --radius-md: 12px;
  --shadow-card: 0 8px 24px rgba(14, 27, 38, 0.08);

  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 150ms;
  --dur-base: 300ms;
  --dur-slow: 700ms;
}
```

### Tailwind (`tailwind.config.js`, extend)

```js
theme: {
  extend: {
    colors: {
      paper: '#f6fafd',
      ink: { DEFAULT: '#0e1b26', soft: '#4a5b69' },
      line: '#d6e4ee',
      sky: {
        50: '#eef7fd', 100: '#d9eefb', 300: '#8cd0f5',
        500: '#2ba3e6', 700: '#0b6fa8',
      },
      accent: { 100: '#ffe9d6', 500: '#ff7a1a', 600: '#e8650a' },
    },
    fontFamily: {
      display: ['"Familjen Grotesk"', 'system-ui', 'sans-serif'],
      sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
      mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
    },
    borderRadius: { sm: '6px', md: '12px' },
    boxShadow: { card: '0 8px 24px rgba(14, 27, 38, 0.08)' },
    transitionTimingFunction: { out: 'cubic-bezier(0.22, 1, 0.36, 1)' },
  },
}
```

---

## 14. Pre-ship checklist

- [ ] Orange appears only in the allowed places and under 8% of any view
- [ ] No text in `--sky-500` on white; no white text on orange
- [ ] Only two fonts plus mono, and the scale above is followed
- [ ] Every project has a real screenshot, a one-line summary, and a case study
- [ ] Copy has no banned phrases and no invented stats
- [ ] 3D loads lazily, has a fallback, and stays under 1 MB
- [ ] Reduced-motion mode tested
- [ ] Mobile layout checked at 360px, 390px, 768px
- [ ] Lighthouse scores meet the targets
- [ ] Show it to one other developer and ask: "Does this look like a template?"