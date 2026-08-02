# Sunflower Cafe — Digital Menu

A premium, mobile-first digital menu web app for Sunflower Cafe (Ramnagar, Uttarakhand) — the QR-code-on-the-table experience, not a marketing website.

**Stack:** React + Vite + Framer Motion + React Icons + plain CSS (CSS Modules). No backend, no cart, no auth — just the menu.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
npm run lint       # oxlint
```

## Structure

```
src/
  data/menuData.js        # single source of truth: categories, items, prices, image URLs
  components/
    Navbar/                # sticky top bar, veg badge, scroll blur
    Hero/                  # compact hero using the real café photograph
    CategoryNav/           # horizontal sticky bar (desktop) / vertical sticky rail (mobile)
    MenuSection/           # category heading + responsive grid
    MenuCard/               # image, name, price — nothing else
    FoodImage/              # lazy-loaded image w/ skeleton, hover zoom, placeholder fallback
    Contact/                # address, phone, email, hours, Instagram, embedded map
    Footer/
  hooks/useActiveSection.js # IntersectionObserver scroll-spy for the active category
  constants.js               # shared layout offsets + smooth-scroll helper
```

## Menu data

Every category, dish name and price in `src/data/menuData.js` is copied verbatim from
`Sunflower_Cafe_Final_Menu.pdf`. If the menu changes, that file is the only place to edit —
everything else (grid, cards, category nav) derives from it automatically.

## About the food photography

This is a 100% pure-vegetarian café, and the brief is strict: every photo must clearly and
correctly represent its dish, with **no egg, meat, fish or AI-generated imagery** anywhere.

For most dishes, `menuData.js` links to real, free-to-use photographs (Unsplash, no attribution
required) that were individually checked against that rule. For a handful of items where a
confidently accurate match couldn't be sourced (a few Korean Ramen variants, hot beverages,
patties, bread pizza, corn/nachos), `image` is left as `null` — `FoodImage` then renders a clean
illustrated placeholder instead of guessing wrong.

**Before this goes live at the café, swap those stock photos for real photos of your own dishes**
— that's both the most accurate option and the nicest-looking one. To do it:

1. Drop your photo into `src/assets/food/` (create the folder).
2. In `menuData.js`, `import` it and set it as that item's `image`, e.g.:
   ```js
   import vegSteamMomos from "../assets/food/veg-steam-momos.jpg";
   // ...
   { id: "veg-steam-momos", name: "Veg Steam Momos", price: 79, image: vegSteamMomos }
   ```
3. Any item with `image: null` will automatically pick up a real photo the moment you add one —
   no other code changes needed.

## v2.0 changelog

**Root-cause fix — mobile category rail losing stickiness.** `body` and `#root` both had
`overflow-x: hidden` (added to guard against horizontal scroll). Setting `overflow` on *any*
ancestor — even just `overflow-x` — makes the browser treat that ancestor as the containing
block for `position: sticky` descendants instead of the real viewport. That's why the rail
scrolled away with the page instead of staying pinned. Fixed by moving the horizontal-scroll
guard onto `html` only (the actual root scrolling element), which keeps `position: sticky`
anchored to the viewport as intended. Audited every other `overflow` rule in the project to
confirm nothing else in the rail's ancestor chain (`.nav → .menuLayout → .container → <main> →
#root → body → html`) interferes.

**Scroll-spy accuracy.** The "active category" `IntersectionObserver` offset is now
breakpoint-aware (navbar-only on mobile, navbar + category bar on desktop, since the bar isn't
stacked above the content on mobile) and rebuilds on resize/orientation change, so the
highlighted pill matches what's actually visible under the sticky header at any viewport size.

**Animation polish.** Active category pill now has a soft scale + subtle border/shadow ring and
fades in on top of its shared-layout slide; menu cards fade up *with* a slight scale on scroll
reveal; hover image zoom tuned to exactly 2% (was 3%); mobile category pills sized to a ~40px
touch target for easier thumb reach.

## Design tokens

Colors, type and spacing all live as CSS custom properties in `src/index.css` — sunflower yellow
used only as an accent, warm cream/beige base, leaf green for secondary accents, dark brown for
text. Display type is "Edu VIC WA NT Hand" (hand-lettered, used sparingly for the logo, hero and
section titles); body type is Poppins.
