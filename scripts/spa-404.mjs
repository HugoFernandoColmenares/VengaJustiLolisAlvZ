// GitHub Pages no sabe de rutas SPA: copiamos index.html como 404.html para que /lore, /votar, etc. funcionen al recargar.
import { copyFileSync, writeFileSync } from 'node:fs';
const dir = 'dist/vengajusti/browser';
copyFileSync(`${dir}/index.html`, `${dir}/404.html`);
writeFileSync(`${dir}/.nojekyll`, '');
console.log('404.html y .nojekyll creados');
