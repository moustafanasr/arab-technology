# Arab Technology — Guided Application Enquiry (V4)

HTML/CSS/JS static frontend, ready for GitHub Pages. Built by modifying the **actual last project version (Homepage Fixed V3.2)** rather than replacing the rest of the site.

## What's changed

- Homepage **Industries & Applications** is now **What do you need help with?**, presenting four image-led problem cards instead of industry descriptions.
- Every card leads to an independent page: `application.html?need=lab`, `?need=site`, `?need=research`, `?need=quality`.
- Chosen need is visibly selected on the form page, with its matching photo; it also stays in the URL on reload.
- Changing the need updates the photo and the next set of quick-choice challenges.
- Visitors choose a challenge from click-only options, without writing an explanation.
- Contact: **name required**, **phone required**, email optional, notes optional.
- Basic email and phone validation before continuing.
- WhatsApp opens with a prefilled message containing the chosen need, selected challenge, and contact details. **The visitor reviews and sends this message in WhatsApp.**
- Complete English / Arabic support, RTL, responsive layout, keyboard focus styling, and reduced-motion support.
- All original product filters, product details, imagery and existing site pages/sections remain intact.

### Changed or new files

```
index.html              modified: the question-led homepage cards + CSS link
application.html        new: the guided enquiry page
css/application-flow.css  new: styles for both the cards and new page
js/application.js       new: interaction / selection / WhatsApp message
js/app.js               modified: new homepage labels in English and Arabic
```

## Test links

- `application.html?need=lab` — new laboratory
- `application.html?need=site` — construction site equipment
- `application.html?need=research` — universities and research
- `application.html?need=quality` — quality control and inspection
- `application.html` — no preselection: visitor chooses on the page

## Deploy to GitHub Pages

Extract ZIP and copy **its contents** into the root of `https://github.com/moustafanasr/arab-technology` (where `index.html` already exists). Keep file paths, especially `css/` and `js/`.

```bash
git add -A
git commit -m "Add guided equipment enquiry and preselected needs"
git push origin main
```

Expected URLs after enabling GitHub Pages:

- `https://moustafanasr.github.io/arab-technology/`
- `https://moustafanasr.github.io/arab-technology/application.html?need=lab`

## Important (before the live client launch)

- Static GitHub Pages does **not** save form submissions, send emails or create CRM leads. The current flow opens **WhatsApp only**; the visitor must send the drafted message there. For true submission tracking, connect a verified backend/form handler later.
- The recipient WhatsApp number is `201114447033`, reused from the existing site. Confirm this number with the client before launch.
- The problem choices are illustrative categories, not a claim that every described device or service is in stock.
- GSAP is optional on the enquiry page: core functionality works without it and respects reduced-motion preferences.
