# Portfolio

Single-page portfolio with a space background, an interactive 3D lanyard ID card, a Spotify player, and a public guestbook.

**Stack:** React 19 · Vite · Tailwind CSS v4 · Three.js · GSAP · Lucide · Supabase

## Run

```bash
npm install
npm run dev       # local dev server
npm run build     # production build in dist/
npm run preview   # preview the build
```

Does not work via `file://`; use `dev` or `preview`.

## Structure

```
public/images/   Photos, project screenshots, certificate images
src/data.js      All site content (the only file you normally edit)
src/components/  Sections, plus lanyard/ (3D card)
postgre/supabase.sql  Guestbook table schema
.env.example     Environment variables
```

## Content (`src/data.js`)

Edit `profile`, `about`, `education`, `experience`, `projects`, `skills`, `certificates`, and optional `awards` (remove it and its tab disappears).

- **Images:** put files in `public/images/` and reference them as `"images/photo.jpg"` (no `public/`, no leading slash; the extension is case-sensitive).
- **Lanyard photo:** `profile.photo`, positioned with `cardPhotoX`, `cardPhotoY`, `cardPhotoZoom`. `cardImage` (1024×1440) replaces the whole card.
- **Projects:** `image`, `longDesc`, `tags`, `features` are optional; empty ones are hidden.
- **Favicon and tab title** are generated from `profile`.

## Guestbook (Supabase)

1. Create a project at [supabase.com](https://supabase.com) and run `postgre/supabase.sql` in the SQL Editor.
2. Copy `.env.example` to `.env` and fill in:
   - `VITE_SUPABASE_URL`: `https://<project-ref>.supabase.co` (the ref is in the dashboard URL)
   - `VITE_SUPABASE_KEY`: the publishable key (Project Settings → API Keys)
3. Restart `npm run dev`.

The key is safe in the frontend: RLS lets visitors only read and add comments. To moderate, set `approved` to `false` (or delete the row) in Table Editor → comments. Without `.env` the site still works; the form shows a "not configured" message.

## Deploy

Upload `dist/` to any static host and set the two `VITE_SUPABASE_*` variables in its settings. They are baked in at build time, so rebuild after changing them.

## License note

The Lanyard component (from React Bits) is MIT with Commons Clause: don't sell or redistribute it on its own. See `src/components/lanyard/LICENSE.md`.
