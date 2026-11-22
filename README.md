# Arab Technology for Supplies — Website V8

**Static HTML + CSS + JavaScript**, ready for GitHub Pages as a client-review website. A future WordPress version can reuse the design system, content, and image assets.

## Included

- Responsive homepage with category navigation, six highlighted products, guided application selection, company information and technical documents.
- Searchable/filterable equipment catalogue (`products.html`) containing exactly **12 devices from the supplied catalogue**.
- **12 dedicated product pages** under `/products/` with product photos, technical information and related equipment.
- Standalone About Us, Resources, Calibration Record, Contact, Guided Enquiry and Request a Quote pages.
- Seven separate policy pages plus Policies index.
- English/Arabic display, saved language preference, working mobile navigation, accessible SVG arrows.
- GSAP + ScrollTrigger motion (progressive enhancement), subtle CSS perspective artwork, optional Lenis scroll for supported desktop browsers.
- `assets/arab-technology-catalog.pdf` and historical calibration PDF.
- Hidden drafts for two future products in `js/extra-products.js`, not public product listings.

## Deployment on GitHub Pages

1. Download and unzip the package.
2. Put **all contents** at the repository root (`index.html` must be at the root).
3. Push to `https://github.com/moustafanasr/arab-technology.git`.
4. Repository **Settings → Pages → Deploy from a branch → main → /(root)**.
5. Preview address: `https://moustafanasr.github.io/arab-technology/` after publishing.

Commands within your local repository:

```sh
git add -A
git commit -m "Finalize Arab Technology website V8 and product pages"
git push origin main
```

## File layout

```text
index.html
products.html
products/               (12 independent product detail pages)
application.html        (guided enquiry with dependent selects)
quote.html              (prefilled product quote enquiry)
contact.html
about.html
resources.html
calibration.html
policies.html            (plus seven individual policy HTML pages)
assets/                 (equipment photos and source PDFs)
css/site.css            (shared design system and responsive CSS)
css/legacy-inner-pages.css
css/legacy-polish.css
js/site.js              (nav and bilingual display)
js/catalogue.js         (filtering and search)
js/forms.js             (guided selection / quote WhatsApp links)
js/motion.js            (optional animation)
js/polyfills.js
assets/product-data.json
.nojekyll
```

## Notes before public production launch

**Important: this is a static preview, not a WordPress theme yet.** There is no admin panel, backend, real e-commerce checkout, mail server, or lead database. The enquiry forms **do not submit data to the site**: after local validation they open WhatsApp for the visitor to review and send the message themselves.

1. **Two new products:** their names, pictures and specifications were not supplied. Their drafts remain unpublished; do not invent product details. Update `assets/product-data.json`, create dedicated pages and catalogue cards after confirmation.
2. **General Laboratory accessories:** the category is included. Do not publish specific accessories without a confirmed product list and photos.
3. **Calibration document:** the supplied record is dated **3 September 2025** and says next calibration was due **3 September 2026**. The website labels it as a **historical document, not proof of current certification**. Verify permission to publish the customer's named report and obtain a newer record if needed.
4. **Policies:** text is based on the seven policies provided in `policy.docx`; the Arabic version needs the client's approval. The Privacy Policy's effective date is not specified by the source and remains marked for confirmation.
5. **Contact details:** verify phone numbers, business details and official support communication channels before final launch. The website does not claim an unconfirmed address, partnerships or client logos.
6. This GitHub **preview uses `<meta name="robots" content="noindex,follow">`** so the temporary review URL is not indexed before the WordPress launch. Update metadata and add canonical production URLs when the final site goes live.
7. Google Fonts, GSAP, ScrollTrigger and Lenis use external CDNs. **The site remains navigable and usable if animations fail to load.**

## Product-page editing

There are no build dependencies; all HTML files are human-editable. Product detail pages are standalone in `/products/`, so edit each page and matching catalogue cards directly. `assets/product-data.json` records the source-grounded specifications in a reusable structure for the WordPress migration.
