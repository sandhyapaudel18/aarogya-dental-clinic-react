# Aarogya Dental Clinic — React Site

A 4-page dental clinic site (Home, Services, Gallery, Contact) built with
React, React Router, and Tailwind CSS, based on the provided designs.

## Run standalone

```bash
npm install
npm run dev
```

Then open the printed localhost URL.

## Drop into an existing project

If you already have a Vite + React + Tailwind project:

1. Copy `src/components`, `src/pages`, `src/data`, and `src/App.jsx` into your `src/` folder.
2. Install the one extra dependency: `npm install react-router-dom`.
3. Make sure Tailwind's `content` config includes your `src/**/*.{js,jsx}` files.
4. Render `<App />` from your `main.jsx`/entry file (see `src/main.jsx` here for reference).

If your project isn't using Tailwind, you'll need to add it (or swap the
utility classes for your own CSS) — the components lean on Tailwind
utilities throughout.

## Structure

```
src/
  components/
    Header.jsx      # sticky nav with mobile menu
    Footer.jsx       # dark footer, quick links, contact
    Icons.jsx         # dependency-free inline SVG icons
  pages/
    Home.jsx          # hero, stats, services grid, team, testimonials, CTA
    Services.jsx       # preventive care, orthodontics, how-it-works, CTA
    Gallery.jsx         # filterable photo grid, before/after transformations
    Contact.jsx          # booking form + contact info/hours/map sidebar
  data/
    siteData.js           # all copy/content lives here — edit freely
  App.jsx                  # router + page layout
  main.jsx                  # entry point
  index.css                  # Tailwind directives
```

## Notes / things to swap in

- **Images**: every photo is a labeled gray placeholder (`Photo`, `Map`,
  `Clinic photo`, gallery items, etc.) — swap these `<div>` placeholders for
  real `<img>` tags or background images once you have final assets.
- **Map**: the Contact page has a placeholder box where the images show a
  Google Maps embed — drop in an `<iframe>` (Google Maps embed) or a map
  library there.
- **Form submission**: `Contact.jsx`'s `handleSubmit` currently just logs
  the form data and shows a success message. Wire it up to your backend,
  a form service (e.g. Formspree), or an email API.
- **Content**: all text (services, testimonials, hours, links) lives in
  `src/data/siteData.js` so you can update copy without touching component
  code.
- **Color palette**: emerald green (`emerald-600/700`) as the accent and a
  dark navy footer (`#0B1B33`), matching the original design. Adjust in
  Tailwind classes or extend `tailwind.config.js` with custom brand colors
  if you want a design token system instead.
