# GitHub Pages preview

Preview repository layout is intentionally compatible with **Deploy from a branch → `main` → `/(root)`**.

The production files served by Pages live at repository root:

- `index.html`
- `app.js`
- `styles.css`
- `motion-bridge.js`
- `vendor/`
- `assets/`

React/TypeScript source remains in `src/`, and `npm run build` regenerates `dist/`.

The preview contains `robots=noindex,nofollow` and keeps the canonical URL pointed at the current RightRentCar fleet page. Remove `noindex` only for a production domain launch.
