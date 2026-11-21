# Gaurav Solanki, portfolio

Personal site for Gaurav Solanki, full stack software engineer. Live at https://gauravsolanki.vercel.app.

Built with Next.js (App Router), React, TypeScript and Tailwind CSS. Deployed on Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where things live

- `app/content/profile.ts` holds every piece of site copy: headline, about, experience, AI pipeline facts, selected work, skills, education and contact details. Edit this file to change content.
- `app/components/` holds one component per section.
- `app/globals.css` defines the named text styles (`heading-1` to `caption-5`), buttons, cards and form fields.
- `app/opengraph-image.tsx` renders the social preview image at build time.
- `public/resume.pdf` is the file the "Download resume" button links to. Add the PDF there.
