# Arab Technology — Compact Enquiry + iPhone Arrows (V5)

Static **HTML / CSS / JavaScript** website, ready for GitHub Pages. Built as an update to the V4 site. No WordPress, build tools or backend required.

## Changes

1. `application.html`: short, clear equipment enquiry page with one matching visual and a compact contact form.
2. Native HTML `<select>` dropdown menus for **type of request** and **specific challenge**. Native select dialogs are intentionally used for best iPhone compatibility and accessibility.
3. Links in the existing homepage's four application cards preselect the correct first dropdown via `?need=lab`, `?need=site`, `?need=research` or `?need=quality`.
4. The image and summary on the enquiry page update automatically when request type changes. The specific-challenge dropdown updates to match.
5. Name and phone required; email optional; 'Add a note' optional and initially collapsed. No other typing required.
6. WhatsApp opens with a prepared message. The **visitor must review and send it**; this static site does not collect or store the submission.
7. `js/arrow-icons.js`: replaces font-dependent homepage arrow glyphs with inline SVG. Covers section links, category links, industry cards, step arrows, main buttons and back-to-top, with RTL direction handling. Nothing to install.
8. English + Arabic, RTL, reduced-motion and responsive mobile layouts are preserved.

## Changed/new source files

- `index.html` — updated CSS cache version and loads `js/arrow-icons.js`.
- `application.html` — rebuilt short page.
- `css/application-flow.css` — new styles for enquiry page, homepage question cards, SVG arrows.
- `js/application.js` — dropdown selection, dynamic photo, validation, WhatsApp message.
- `js/app.js` — calls arrow refresh when homepage language changes.
- `js/arrow-icons.js` — new lightweight arrow renderer.

## Deployment

Extract the ZIP contents to the root of `https://github.com/moustafanasr/arab-technology` (keep `index.html` at repository root).

```bash
git add -A
git commit -m "Simplify enquiry page with dropdowns and fix iPhone arrows"
git push origin main
```

Test pages:

- `https://moustafanasr.github.io/arab-technology/application.html?need=lab`
- `https://moustafanasr.github.io/arab-technology/application.html?need=site`
- `https://moustafanasr.github.io/arab-technology/application.html?need=research`
- `https://moustafanasr.github.io/arab-technology/application.html?need=quality`

## Testing and notes

- JS source syntax was checked with Node.js; inline-browser testing passed in Chromium for form dropdown options, Arabic switching, image switching, and no horizontal page overflow at 390px and 1360px. SVG arrow insertion was also tested in Chromium.
- Direct WebKit/Safari-on-iPhone testing was not available. The arrow replacement does not depend on glyph fonts, Unicode arrows or externally downloaded icon libraries.
- Confirm the WhatsApp number `201114447033` with the client before production use. There is no API endpoint, email-sending service, CRM or submission database in this GitHub Pages preview.
