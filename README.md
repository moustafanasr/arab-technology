# Arab Technology — V7 Content, Company Pages & Catalogue Update

This is a static **HTML/CSS/JavaScript** website intended for GitHub Pages. It is **not yet a WordPress theme**. The latest V6 layout, animation hooks and guided enquiry page are retained.

## Added in V7

- `about.html` — About Us, using the supplied `About Us.docx` content (mission, vision, services, commitment and company goals).
- `policies.html` — central policies index.
- 7 standalone legal/customer pages sourced from `policy.docx`:
  - `privacy-policy.html`
  - `terms-and-conditions.html`
  - `shipping-delivery.html`
  - `warranty-policy.html`
  - `returns-replacements.html`
  - `contact-support.html`
  - `cookies-policy.html`
- `resources.html` — catalogue, calibration report and policies hub.
- `calibration.html` — visible preview and original PDF download of the 2000 kN machine calibration report.
- `assets/documents/calibration-report-2000kn-2025.pdf` — **unaltered original** user-supplied report.
- `assets/documents/calibration-report-preview.png` — rendered preview for browser compatibility.
- Homepage category grid now has **five** categories: Concrete, Soil, Asphalt, Cement and **General Laboratory**. General laboratory accessories are awaiting confirmed product data (no fictional items).
- 12 catalogued products remain published, and the two additional future products are drafted — but **not visible** — in `js/extra-products.js`.
- About / policies / documents links added to homepage navigation and footer, and the original calibration record is linked only to the corresponding 2000 kN product's detail modal.

## Publication notes — IMPORTANT

1. **Two new devices**: Fill `js/extra-products.js` with the confirmed names, categories, actual product images, Arabic and English names, descriptions and technical specs, then set `published: true`. Place their images in `assets/`. Until then they will not appear publicly. Do not publish empty entries.
2. **General laboratory accessories**: The category is included but accessory SKU data has not been supplied. Existing catalogued laboratory equipment remains, while accessories can be added once details arrive.
3. **Calibration due date**: The supplied report states calibration date **03 September 2025**, and recalibration due **03 September 2026**. The website displays the document as a *historical, machine-specific record*, not current certification. Confirm calibration status with the company before making compliance claims.
4. **Privacy of the calibration PDF**: The supplied report contains a client's name and location. Obtain approval to publish it publicly; remove the PDF and its links if the client does not grant permission. `calibration.html` is `noindex`, which does not restrict access to the PDF.
5. **Privacy Policy**: `policy.docx` has a blank “Effective Date”. The website shows “To be confirmed”; the company should supply this date before launch.
6. **Arabic text**: English About Us and policy content is sourced from the provided files. Arabic is a preliminary translation for the bilingual preview and should be reviewed/approved by the client, especially legal policies.
7. **Claims**: Brand partner logos, fictitious reviews, unsupported certificates and unprovided equipment are intentionally excluded.
8. **WhatsApp form**: Enquiry form opens WhatsApp and the visitor must send the prepared message. GitHub Pages does not store form submissions or provide a backend.

## Deploy to GitHub Pages

Upload the **contents of this directory** to the root of your existing `moustafanasr/arab-technology` repository (not a nested folder).

```bash
git add -A
git commit -m "Add company pages, policies and calibration report V7"
git push origin main
```

In GitHub: Settings → Pages → Deploy from branch → `main` → `/(root)`.

- Homepage: `https://moustafanasr.github.io/arab-technology/`
- About: `https://moustafanasr.github.io/arab-technology/about.html`
- Policies: `https://moustafanasr.github.io/arab-technology/policies.html`
- Resources: `https://moustafanasr.github.io/arab-technology/resources.html`
- Calibration: `https://moustafanasr.github.io/arab-technology/calibration.html`

### Files touched in the patch

- Updated: `index.html`, `application.html`, `js/app.js`, `README.md`
- Added: `about.html`, 7 policy pages, `policies.html`, `resources.html`, `calibration.html`, `css/inner-pages.css`, `js/inner-pages.js`, `js/extra-products.js`, `assets/documents/`.

No build tool or server backend is required. External GSAP/Lenis/Three.js libraries remain CDN-based in the existing V6 homepage; an internet connection is required for those optional effects.
