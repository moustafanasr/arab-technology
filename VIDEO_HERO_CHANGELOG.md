# Arab Technology — Cinematic Video Hero (V9)

This update is based on the user-supplied, ten-second footage of the concrete compression testing machine. It keeps all existing V8 pages, products, policies, forms and navigation intact.

## Changes
- A full-width, dark navy video hero replaces the former static device illustration on `index.html` only.
- The video is optimized (H.264, 1280×720, 24fps, no audio) and bundled locally for GitHub Pages.
- The hero has a compressed WebP poster, contrast overlays, bilingual headings and calls to action, and a product-detail shortcut.
- A keyboard-accessible pause/play control allows visitors to stop motion.
- Video pauses when off-screen or when the browser tab is hidden. Reduced-motion and data-saver preferences show the poster instead of autoplaying.
- Responsive mobile presentation reserves a separate lower visual area for the movie, so the copy stays legible.

## Updated / added files
- `index.html` (updated)
- `css/video-hero.css` (new)
- `js/video-hero.js` (new)
- `assets/arab-technology-compression-hero.mp4` (new)
- `assets/hero-poster.webp` (new)

`css/site.css` and all existing product, policy, About, catalogue and enquiry pages are unchanged.

## GitHub Pages
Extract the ZIP, place all files at your repository root (where `index.html` lives), then commit and push. No server or build pipeline is required. The GSAP CDN dependency used by V8 is preserved for entrance animations; page functionality and video playback do not depend on it.

## Note
Modern mobile browsers may decline autoplay based on their own policies. In that case the poster remains visible and the play button can be used manually. Video has no sound, intentionally.
