import { readFileSync } from 'node:fs';
const html = readFileSync('index.html', 'utf8');
const css = readFileSync('styles.css', 'utf8');
const app = readFileSync('src/app.tsx', 'utf8');
const errors = [];
if (!html.includes('meta name="description"')) errors.push('Missing meta description');
if (!html.includes('property="og:image"')) errors.push('Missing OG image');
if (!app.includes('aria-modal="true"')) errors.push('Dialog must expose aria-modal');
if (!app.includes('aria-label=')) errors.push('Expected accessible labels');
if (!css.includes('prefers-reduced-motion')) errors.push('Missing reduced-motion stylesheet');
if (/target="_blank"(?![^>]*rel=)/.test(app)) errors.push('target=_blank without rel');
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log('Static lint: OK');
