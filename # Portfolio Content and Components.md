# Portfolio Content and Components

What goes on each page, which components build it, and what copy to start from. Pair this with `STYLE.md` (colors, fonts, motion, 3D rules).

**Legend**
- `[BRACKETS]` = information Rehan must supply. Do not ship with any brackets left.
- "Draft copy" is a starting point to rewrite in your own voice.
- Nothing here is invented proof. No fake testimonials, no made-up numbers.

---

## 1. Site map

| Route | Page | Purpose |
|---|---|---|
| `/` | Home (single long page) | Show who you are, show the work, get a message |
| `/work/job-fiesta` | Case study | Deep dive on the recruitment platform |
| `/work/wedding-invitation` | Case study | Deep dive on the wedding invitation site |
| `/work/[project-3]` | Case study | Third project (add when ready) |
| `/contact` (optional) | Contact | Only if the home page contact section feels crowded |
| `*` | 404 | Short, on-brand, link back home |

Home page section order:

1. Navbar
2. Hero
3. Tech strip
4. Selected work
5. About
6. Services
7. How I work
8. Stack
9. Reviews (only when real ones are added)
10. Contact
11. Footer

---

## 2. Global components

### Navbar
- **Left:** "Rehan" wordmark (Familjen Grotesk, 600). Optionally a small orange dot after it.
- **Right:** Work, About, Services, Contact. Last item is a text button "Hire me" (primary orange on desktop, in the menu on mobile).
- **Behavior:** sticky, transparent at the top, white 80% + blur + bottom border after 24px of scroll. Active section link gets a 2px orange underline (scroll-spy).
- **Mobile:** menu icon opens a full-height sheet with large links, 200ms fade.

### Footer
- Big closing line, email, social links (GitHub, LinkedIn, Fiverr, Freelancer), "Back to top", copyright.
- Draft copy: **"Have something to build? Send me a message."**

### Shared UI pieces
| Component | Notes |
|---|---|
| `Button` | primary, secondary, text-link variants |
| `Tag` | mono, sky-100 background, for tech and categories |
| `SectionHeader` | mono label (e.g. `01 / Work`), H2, optional one-line intro |
| `Reveal` | scroll-in wrapper, fade up once |
| `Container` | max 1200px, handles side padding |
| `ProjectCard` | see section 5 |
| `Icon` | one icon set, 1.5px stroke |
| `StatusDot` | green or orange dot for availability |
| `ScrollProgress` | thin 2px sky-500 bar at the top of the page (optional) |
| `Cursor` | optional, desktop only |

---

## 3. Hero

**Goal:** in five seconds the visitor knows who you are, what you do, and what to click.

**Layout:** left-aligned text on 7 columns; 3D object on the right overlapping toward the text. Sky-50 to white soft background, nothing else.

**Content**
- Mono label: `Frontend developer / Lahore, Pakistan`
- Headline (one word highlighted in orange marker): **"I build React interfaces that are fast and easy to use."**
- Sub line: "I'm Rehan, a software engineering graduate who builds web apps with React, JavaScript and REST APIs. I take freelance projects on Fiverr and Freelancer, and I work directly with clients too."
- Buttons: **View my work** (primary) and **Download CV** (secondary)
- Availability line with `StatusDot`: "Available for freelance projects from [MONTH YEAR]" (update or remove if not true)
- Small row of text links: GitHub, LinkedIn, Fiverr

**3D object:** one stylized object in sky blue, white and a single orange detail (concept: a laptop whose screen shows a simple UI, or a cube built from interface panels). Responds a few degrees to the cursor and rotates slowly with scroll. Static image fallback for mobile and reduced motion.

**Animations**
- Headline lines slide up from a mask (staggered 80ms)
- Sub line, buttons, and availability fade in after
- 3D canvas loads after first paint and fades in

---

## 4. Tech strip

- Thin band under the hero with a slow marquee (one direction, pauses on hover).
- Items (text with small icons): React, JavaScript (ES6+), HTML and CSS, Tailwind CSS, REST APIs, Node.js, Express, MongoDB, Socket.io, Git. Trim to what you can actually discuss in an interview.
- Reduced motion: becomes a static wrapped row.

---

## 5. Selected work

**Section header:** `01 / Work` — "Selected projects"
**Intro line:** "A few things I've built, with what I did and how."

### Project card (component spec)
- Cover image (real screenshot or short loop) in a consistent frame
- Title, one-line description, stack tags (mono), year, role
- Hover: image scales to 1.03 inside its frame, "View case study" arrow appears
- Whole card is one link

### Project 1: Job Fiesta
- **One line:** A full-stack recruitment platform where candidates apply and recruiters manage applicants in one place.
- **Stack:** MERN (MongoDB, Express, React, Node.js), Socket.io
- **Features to show:** real-time chat between recruiter and candidate, applicant tracking Kanban board, resume builder
- **Context:** final year project, University of Central Punjab (2025)
- **Provide:** [SCREENSHOTS: dashboard, Kanban board, chat, resume builder], [LIVE URL or "demo on request"], [GITHUB URL]
- **Case study outline:** see section 11.
- **Note:** only publish what currently works. If something is half-finished, either finish it first or leave it out of the page.

### Project 2: Wedding invitation website
- **One line:** A Mughal-style wedding invitation web app for a Pakistani wedding, with animated sections and event details.
- **Stack:** [CONFIRM: React, Tailwind, Framer Motion, etc.]
- **Features to show:** [LIST the real ones: event schedule, venue/map, RSVP, gallery, music, animations]
- **Provide:** [SCREENSHOTS or screen recording], [LIVE URL], [GITHUB URL]

### Project 3 (slot)
- [PROJECT NAME]: a real freelance job or a personal project. If there is none yet, show two projects. Two good ones beat three weak ones.

**Footer of the section:** text link "See all projects on GitHub" with arrow.

---

## 6. About

**Section header:** `02 / About` — "A bit about me"

**Layout:** photo on the left (4 columns), text on the right (7 columns). Photo has a slight tilt on hover; keep it subtle.

**Draft copy (rewrite in your voice):**
> I'm Rehan, a frontend developer from Lahore. I graduated in Software Engineering from the University of Central Punjab in 2025, and since then I've been building web apps with React and taking freelance work on Fiverr and Freelancer.
>
> I care about interfaces that load quickly, behave predictably, and don't make people think. I like working on the full flow: reading an API, structuring components, handling the awkward states, and polishing the details.
>
> Outside of client work I'm [LEARNING / BUILDING / INTERESTS: add one or two real things].

**Facts row (mono, plain text, not big counters):**
- Based in: Lahore, Pakistan
- Education: BS Software Engineering, UCP (2025)
- Focus: React, JavaScript, REST API integration
- Works with: Fiverr, Freelancer, direct clients

**Extras:** "Download CV" link, one real photo ([PHOTO: good light, shoulders-up or half-body]).

---

## 7. Services

**Section header:** `03 / Services` — "What I can help with"

Use a simple list or two-column layout, **not** three identical glowing cards. Each item: title, two-line description, "Good fit if..." line.

| Service | Description | Good fit if... |
|---|---|---|
| React web apps | Building dashboards, portals, and full interfaces with React and clean component structure. | You need a working app, not just a mockup. |
| Landing pages and websites | Turning a design or a rough idea into a fast, responsive page with proper animation. | You want a site that looks considered and loads quickly. |
| REST API integration | Connecting a frontend to your backend or third-party APIs, with loading, error, and empty states handled. | You have an API and need the interface for it. |
| Fixing and cleaning up React code | Debugging, refactoring, and improving the performance of an existing frontend. | Something works but is slow, messy, or breaks. |

- Each row links to the contact section with the service pre-selected in the form.
- Add a line: "Prefer to hire through a platform? Find me on Fiverr and Freelancer" with links.
- **No pricing table.** Pricing lives on the Fiverr gigs. If you want rates here later, add a single line like "Projects start at [AMOUNT]".

---

## 8. How I work

**Section header:** `04 / Process` — "How a project goes"

Four short steps in a horizontal timeline (vertical on mobile). Keep each to two sentences.

1. **Brief:** We talk through what you need, who it is for, and what done looks like.
2. **Plan:** I send a short scope with pages, features, timeline and cost before starting.
3. **Build:** I share progress as I go so there are no surprises at the end.
4. **Handover:** You get the code, a live link, and a short walkthrough. I stay available for fixes.

Change these to match how you actually work.

---

## 9. Stack

**Section header:** `05 / Stack` — "Tools I use"

- Grouped list, not skill bars with fake percentages.
- Groups: **Frontend** (React, JavaScript ES6+, HTML, CSS, Tailwind), **Animation** (Framer Motion, GSAP), **3D** (Three.js, React Three Fiber) if you are comfortable with them, **Backend basics** (Node.js, Express, MongoDB, Socket.io), **Tools** (Git, GitHub, Postman, VS Code, Figma).
- Only list tools you would be comfortable being asked about.
- Optional: mark "currently learning" tools with a small tag.

---

## 10. Reviews

**Include this section only when you have real ones.** Remove it entirely until then.

- Format: short quote, name or handle, platform (Fiverr or Freelancer), project type.
- Pull from actual reviews: [COLLECT 2-4 from Fiverr and Freelancer; ask for permission or use public text with a link to the profile].
- Layout: two or three quotes side by side, or a slow carousel. Link each to the original review if public.

---

## 11. Case study page template

Used for each `/work/[slug]` page.

1. **Header:** project name, one-line summary, role, year, stack tags, links (Live, GitHub)
2. **Hero image:** large screenshot or recording
3. **Overview:** what it is and who it is for (3 to 4 sentences)
4. **The problem:** what needed solving
5. **What I built:** key features, each with a screenshot or short clip
6. **How it works:** architecture in one small diagram or a few bullets (frontend, API, database, real-time layer)
7. **Hard parts:** two or three real technical challenges and how you solved them (for Job Fiesta: for example real-time chat state, Kanban drag-and-drop, resume builder output)
8. **Result and what I'd improve:** honest outcomes and next steps
9. **Next project:** link card to another case study

---

## 12. Contact

**Section header:** `06 / Contact` — "Let's talk about your project"

**Left column**
- Short line: "Tell me what you want to build. I usually reply within [TIMEFRAME]."
- Direct links: Email ([EMAIL]), WhatsApp ([NUMBER or link]), Fiverr, Freelancer, LinkedIn, GitHub
- Location and time zone: Lahore, Pakistan (PKT, UTC+5)

**Right column: form**
| Field | Type | Required |
|---|---|---|
| Name | text | yes |
| Email | email | yes |
| What do you need? | select (React web app, Landing page, API integration, Code fix, Other) | yes |
| Budget range | select (optional) | no |
| Message | textarea | yes |

- Inline validation, clear error and success states, a disabled state while sending.
- Backend options: Formspree, Web3Forms, EmailJS, or a small Node endpoint. Add basic spam protection (honeypot field).
- Success message: "Thanks. I got your message and will reply within [TIMEFRAME]."

---

## 13. 404 page

- Large "404", one sentence ("This page doesn't exist."), button back to home.
- Keep the 3D object out of this page.

---

## 14. Data to prepare (project data file)

Keep content in one file (`src/data/projects.js`) so the UI stays clean.

```js
export const projects = [
  {
    slug: 'job-fiesta',
    title: 'Job Fiesta',
    summary: 'Recruitment platform with real-time chat, an applicant Kanban board and a resume builder.',
    year: 2025,
    role: 'Full-stack developer',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    cover: '/images/job-fiesta/cover.webp',
    links: { live: '[URL]', github: '[URL]' },
    sections: { /* overview, problem, features, challenges, result */ },
  },
  {
    slug: 'wedding-invitation',
    title: 'Wedding Invitation Website',
    summary: 'Mughal-style wedding invitation web app with animated sections and event details.',
    year: 2026,
    role: 'Designer and developer',
    stack: ['[CONFIRM]'],
    cover: '/images/wedding/cover.webp',
    links: { live: '[URL]', github: '[URL]' },
    sections: { /* ... */ },
  },
];
```

Also keep `services.js`, `stack.js`, `socials.js`, and `reviews.js` as separate data files.

---

## 15. Suggested folder structure

```
src/
  components/
    layout/      Navbar, Footer, Container
    ui/          Button, Tag, SectionHeader, Reveal, Icon, StatusDot
    sections/    Hero, TechStrip, Work, About, Services, Process, Stack, Reviews, Contact
    three/       HeroScene, Model, Fallback
  pages/         Home, CaseStudy, NotFound
  data/          projects, services, stack, socials, reviews
  hooks/         useScrollSpy, useReducedMotion, useMediaQuery
  styles/        tokens.css, globals.css
  assets/        images, models (GLB), fonts
```

---

## 16. SEO and metadata

- **Title:** `Rehan | Frontend Developer (React) in Lahore`
- **Description:** "Frontend developer building React web apps, landing pages and API-driven interfaces. Available for freelance projects."
- Open Graph image: 1200x630, sky-blue background, name, one line.
- Favicon: simple "R" mark in sky blue with the orange dot.
- Per case study: its own title, description and OG image.
- Add `sitemap.xml`, `robots.txt`, and structured data (`Person`).

---

## 17. Content checklist (what Rehan needs to provide)

- [ ] Good-quality photo
- [ ] CV (PDF), updated
- [ ] Email, WhatsApp, and social links
- [ ] Screenshots or recordings for each project (1920x1080, consistent browser frame)
- [ ] Live URLs and GitHub repos, with READMEs cleaned up
- [ ] Wedding site tech stack and feature list
- [ ] Third project, or decision to show two
- [ ] 2 to 4 real reviews with permission
- [ ] Final copy for About, rewritten in your own voice
- [ ] Response time and availability dates
- [ ] Decision on 3D object concept