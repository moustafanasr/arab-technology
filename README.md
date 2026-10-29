# Arab Technology for Supplies — Homepage Preview

A bespoke, responsive, **static front-end prototype** for the future WordPress website. Crafted with semantic HTML, custom CSS and plain JavaScript (no React, no build step, no Node dependencies).

## Quick start

1. Extract all files, keeping the folder structure.
2. From the project directory run:
   ```bash
   python -m http.server 8000
   ```
3. Open `http://localhost:8000/`.

The website is also ready for **GitHub Pages**. `index.html` must be at the published repository root. All local paths are relative, so project-site URLs work correctly.

## Publish for client approval (GitHub Pages)

1. Create a **public** repository on GitHub, for example `arab-technology-preview`.
2. Upload the **contents of this folder** to the repository root (not another nested folder). Commit the files to `main`.
3. Open **Settings → Pages → Build and deployment**.
4. Set **Source: Deploy from a branch**, **Branch: main**, **Folder: /(root)**, then **Save**.
5. Share the URL GitHub displays. For a standard project repository, it takes the form:
   `https://YOUR-USERNAME.github.io/arab-technology-preview/`

GitHub Pages serves the page publicly. Don't upload credentials, confidential content or client records.

### Terminal alternative (after creating an empty repository)

```bash
git init
git add .
git commit -m "Initial Arab Technology homepage preview"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/arab-technology-preview.git
git push -u origin main
```

Then enable Pages using the settings above.

## Front-end architecture

```text
index.html           Semantic homepage and accessible dialogs
css/styles.css       Tokens, responsive components, motion fallback, RTL support
js/app.js            Product data, searching, category filters, details, language, quote flow, GSAP/Lenis
js/scene.js          Optional Three.js WebGL hero artwork (desktop, reduced-motion aware)
js/polyfills.js      Small feature-detected compatibility fallbacks
assets/              Brand-derived catalogue imagery, product cuts, SVG favicon
.nojekyll            GitHub Pages static hosting bypass
```

## Animation stack

- **GSAP 3.15.0 + ScrollTrigger**: hero timeline, entrance, scroll reveal, parallax.
- **Lenis 1.3.17**: smooth scrolling on fine-pointer devices, synced to GSAP ticker.
- **Three.js 0.180.0**: optional orbiting wireframe 3D field behind the hero machine.
- **Native CSS**: moving technical marquee, hover responses, geometric layers, skeleton fallback.
- **Tiny local feature-detected polyfills**: no reliance on unmaintained polyfill services.

Third-party libraries and web fonts use public CDNs and require an internet connection. **The base HTML/CSS and product interactions remain usable when the animation libraries cannot load.** To release a fully offline/production build, vendor the locked library files and fonts locally and comply with their licenses.

## Functional UX in this preview

- Responsive navigation (desktop and mobile)
- English / Arabic toggle with RTL layout and remembered session preference
- Search and category filtering across **12 catalogued devices**
- Individual product detail dialogs displaying brochure-derived specifications
- Accessible quotation form that drafts a WhatsApp message for manual sending
- Screen-reader labels, keyboard navigation, reduced-motion support, native scrolling fallbacks

**This is not yet a functioning WordPress theme or a transactional ecommerce backend.** There is no CMS, checkout, lead database, CRM, contact-form API or email sending. The WhatsApp form opens the user's own WhatsApp application with an editable message.

## Brand/content verification before production

- Product names, capabilities and photography are based on the client-provided 13-page equipment PDF (12 equipment entries and cover).
- Phone numbers found in the supplied catalogue: `01114447033` and `01100048700`. Confirm current numbers and preferred sales WhatsApp account.
- No invented customer testimonials, service certifications, partner logos, branch addresses, prices or emails are displayed.
- Replace the stylized compact header wordmark with an approved scalable brand logo if a final vector asset is supplied.
- Have technical staff review model specifications and any post-sales/maintenance claims before launch.

## WordPress handoff approach

This is a **front-end design approval build**. For WordPress development, do not upload this ZIP as a WP theme: it lacks mandatory PHP template files.

Recommended handoff plan:

1. Move header/footer to `header.php`, `footer.php` and template parts, and register enqueued styles/scripts in `functions.php`.
2. Replace `products` JavaScript array with WordPress custom post type `equipment`, taxonomies `testing_category`, and structured custom fields for capacity, controls, images and technical specifications.
3. Render product cards server-side for SEO and add native search, taxonomies and pagination; use REST only where it improves interactions.
4. Implement EN/AR through a reviewed localization workflow with real RTL templates and translated content.
5. Connect quotation handling to the production sales process, with consent, validation, spam protection and data retention policy.
6. Optimize media, use asset versioning, cache rules, security headers and automated functional/accessibility/performance reviews before production.

## Testing checklist

- 1440px desktop and 390px mobile layouts
- Product filters, catalogue search, load more, detail modal
- EN/AR toggle, keyboard escape, reduced-motion support
- WhatsApp button opens an editable message (not auto-sent)
- Cross-origin libraries load in hosted HTTPS environment
- Browser tests on Chromium, Firefox, Safari in normal environments

© 2026. Demo for client approval; product photographs/marks are supplied client assets.
