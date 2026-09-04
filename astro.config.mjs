// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Demo găzduit pe GitHub Pages, într-un subdirector.
// TODO(real): la proiectul final, pe domeniul clientei, se pune domeniul în `site`
// și se șterge `base` (sau se pune '/'). Restul codului merge nemodificat,
// pentru că linkurile interne trec prin helperul u() din src/data/site.ts.
export default defineConfig({
  site: 'https://rtr-tech-solutions.github.io',
  base: '/psiholog-gorj',
  vite: {
    plugins: [tailwindcss()]
  }
});
