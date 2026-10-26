// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { site as dateSite } from './src/data/site.ts';

// Implicit se construiește pentru domeniul clientei (art. 1.5 din contract).
// `npm run build:demo` construiește varianta pentru GitHub Pages, care stă
// într-un subdirector; linkurile interne trec prin helperul u() din
// src/data/site.ts, deci nu se schimbă nimic în cod.
const esteDemo = process.env.DEMO === '1';

export default defineConfig({
  site: esteDemo ? 'https://rtr-tech-solutions.github.io' : 'https://psihologgorj.ro',
  base: esteDemo ? '/psiholog-gorj' : '/',
  integrations: [
    sitemap({
      // blogul intră în sitemap abia când clienta se hotărăște să îl publice,
      // iar pagina cu modele de antet e doar de lucru, nu face parte din site
      filter: (pagina) =>
        !pagina.includes('/modele') && (dateSite.blogActiv || !pagina.includes('/blog')),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
