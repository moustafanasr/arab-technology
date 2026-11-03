# Arab Technology for Supplies — UI/UX Reference Implementation (v3.1)

**HTML, CSS, JavaScript only. No WordPress, no PHP, no build tooling.** This homepage implements the visual structure supplied in `docs/client-design-reference.png` while using product data and actual device photography from the supplied Arab Technology catalogue.

## What's implemented

- Blue contact bar, white branded header with search, navigation, EN/AR toggle
- Bright industrial hero, authentic machine images, material-focused category cards
- Responsive five-column featured catalogue (desktop), mobile product cards
- Live product search and category filters over **12 brochure-based devices**
- Product detail dialogs, save-for-later, up to 3 products in comparison list
- Four industry application cards, technical guidance section, quotation process
- Industry testing-standard references (not claimed certifications or partnerships)
- Accessible enquiry form that opens a **pre-filled WhatsApp message** without collecting data
- GSAP/ScrollTrigger and Lenis from pinned CDNs; lightweight optional Three.js line-art hero
- Reduced-motion preference, mobile navigation, image alt text, keyboard-accessible dialogs, RTL support

## Files

```text
index.html                  Page markup and accessibility
css/styles.css              All visual tokens, typography, responsive design
js/app.js                   Product catalogue, navigation, filters, modals, language
js/scene.js                 Optional Three.js/WebGL light 3D decoration
js/polyfills.js             Feature-detected fallbacks
assets/                     Original catalogue photos, logo, decorative imagery
assets/arab-technology-catalog.pdf  Source catalogue / downloadable PDF
assets/industrial-skyline.svg       Decorative construction backdrop
docs/client-design-reference.png    User-provided UI reference image
.nojekyll                   GitHub Pages bypass for Jekyll
```

## Preview locally

Run from the project folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser. CDN effects load with internet access; the site remains usable without GSAP or Three.js.

## GitHub Pages deployment

1. Upload the **files inside this ZIP** to the root of the repository `moustafanasr/arab-technology`, replacing old homepage files and obsolete CSS if necessary.
2. Commit and push to `main`.
3. Under **Settings → Pages**, select **Deploy from a branch** → `main` → `/(root)`.
4. Preview at `https://moustafanasr.github.io/arab-technology/` once the site is published. This is a URL pattern, not a claim that deployment has been performed.

### Terminal commands (from repository folder)

```bash
git add -A
git commit -m "Match homepage to approved UI design reference"
git push origin main
```

Do **not** force-push. Preserve a backup or commit of the previous site before overwriting.

## Data / commercial accuracy

- Product photos and capacities are taken from the client's uploaded PDF, not from the generated concept screenshot.
- The company phone numbers in the catalogue are 01114447033 and 01100048700. Confirm the intended WhatsApp number before production.
- Brand partnerships, customer logos, addresses, certifications, and other facts depicted in the original generated design have **not** been asserted without independent verification.
- Images for the category tiles and industry tiles are crops from the **user-provided design screenshot** for visual matching, and can be replaced with approved high-resolution client images before launch.
- The "Technical Reference" standards row is **reference only**, not an assertion that individual products are certified.
- This is a static preview: no server, accounts, customer database, payment or newsletter capture. The quote form opens WhatsApp only.

## WordPress handoff (later)

After approval, convert shared sections to `header.php`, `footer.php`, and `template-parts/`, move product records into an `equipment` custom post type, build taxonomies and templates, and enqueue the CSS/JS assets with `wp_enqueue_*`. Keep the visual design and frontend effects, with additional SEO, accessibility, and cross-browser checks.
