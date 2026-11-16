# Arab Technology — Visual Fix V6

Same HTML/CSS/JS site (V5) with two focused fixes only. No WordPress, build step or backend.

## Changes
- Replaced four heavily compressed images in the **Find Your Solution** cards with fresh high-definition visual concept photography. Also updates the enquiry page's preview image when each need is chosen. These are AI-generated illustrative photos, not photographs of Arab Technology's actual premises, staff or customer projects.
- Corrected the yellow **Request a Quote** button text and SVG arrow in the dark footer. Navy text now has high contrast, including on narrow screens and Safari.
- Added `css/visual-fixes-v6.css` loaded last on both pages. Filenames include `-hd` to bypass stale image caches.
- Preserved links, dropdown form behavior, WhatsApp flow, site scripts, GSAP and responsive layouts.

## Deployment
Unzip all files into the **root** of the GitHub repository (not inside an extra folder). Preserve the `assets`, `css` and `js` directories.

```bash
git add -A
git commit -m "Improve request button contrast and replace blurry enquiry images"
git push origin main
```

Preview: `index.html#industries` and `application.html?need=lab`.

You should replace AI illustrative photography with real, permission-cleared client photography when available.
