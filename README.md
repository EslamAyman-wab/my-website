# my-website — Portfolio & Engineering Hub

My personal site: a small Next.js app that presents who I am, what I build, and the bare-metal infrastructure running underneath it. **Live at [gvara.site](https://gvara.site).**

---

## 🛠️ Technologies
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/postcss`)
- **Animation:** Framer Motion
- **Icons:** lucide-react
- **Utilities:** clsx + tailwind-merge (`src/lib/utils.ts`)

---

## ✨ Key Features
- **Home:** a telemetry-style hero that summarises my stack, latency target and uptime mindset.
- **Projects:** each project is a problem → solution card (symptom, what I changed, measured result) instead of a plain list.
- **About:** background, how I got into computers, and how I work.
- **WALL-E server card:** an interactive component documenting my self-hosted TrueNAS machine — per-pool capacity, filesystem, mount point, temperatures and scrub status, plus the containers it runs.
- **Responsive:** one layout that adapts from phone to desktop.

---

## 📁 Project Structure
```
src/
├── app/
│   ├── page.tsx            # home
│   ├── about/page.tsx      # about
│   ├── projects/page.tsx   # project cards
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── WallEServerCard.tsx
└── lib/utils.ts
```

---

## 🚀 Running Locally

```bash
# 1. Clone the repository
git clone https://github.com/EslamAyman-wab/my-website.git
cd my-website

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | What it does |
| :--- | :--- |
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |

---

## 📝 Notes on the Codebase
- Content lives as typed arrays inside the page components — adding a project means editing one array, not a database.
- Only the interactive pieces are client components (`"use client"`); the rest render on the server by default.
- There is no CMS, no database and no API layer in this repository — it is a static marketing surface for the backend work that lives elsewhere.

---

## 🔮 Ideas for Later
- [ ] Move project data into a content layer (MDX) so posts and projects share one source.
- [ ] Add a live status badge fed by my homelab uptime monitor.
- [ ] Lighthouse pass: accessibility and image optimisation.
