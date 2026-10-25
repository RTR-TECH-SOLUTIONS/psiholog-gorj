# Site cabinet de psihologie pentru copii, Târgu Jiu

Site de prezentare construit pentru Dijmarescu Ana-Maria, Cabinet Individual de Psihologie,
potrivit contractului nr. 36 din 13.10.2026. A pornit ca demo de pitch și a fost dus la
varianta reală. Stack: **Astro 7 + Tailwind 4**, output static, zero JS de framework în afara
a două scripturi mici (filtrul de servicii și bannerul de cookies).

```
npm run dev         # server local
npm run build       # build pentru psihologgorj.ro (implicit)
npm run build:demo  # build pentru GitHub Pages, în subdirectorul /psiholog-gorj
npm run preview     # verificarea build-ului
```

`astro.config.mjs` alege singur varianta după variabila `DEMO`. Workflow-ul din
`.github/workflows/deploy.yml` o pune pe `1`, deci orice push pe `main` actualizează demo-ul
de pe GitHub Pages, nu site-ul clientei.

## Paginile

| Pagină | Rol |
|---|---|
| `/` | hero, bandă de încredere, când merită cerută o părere, servicii, despre, cum decurge, ce nu fac, ședințe online, recenzii, întrebări frecvente |
| `/servicii` | cele trei servicii, cu filtrare după public, și secțiunea despre tarif |
| `/despre` | formarea profesională, principiile de lucru, cabinetul |
| `/pentru-parinti` | repere de limbaj pe vârste, semne care cer evaluare, pregătirea primei ședințe, întrebări frecvente |
| `/contact` | cum se ia legătura, datele cabinetului, programul, accesul, parcarea, harta |
| `/blog` și `/blog/[slug]` | listarea articolelor și șablonul de articol, construite dar **nepublicate** (vezi `site.blogActiv`) |
| `/termeni`, `/confidentialitate`, `/cookies` | paginile legale |
| `/404` | pagina de eroare |

## Ce conține, pe scurt

- **Fără formular de contact** și fără colectare de date de la vizitatori (art. 1.7, Anexa 1 lit. A.5 și B.4). Contactul se face la telefon și pe WhatsApp, cu buton de sunat în hero, în antet și în bara fixă de pe mobil.
- **Pagini legale și banner de cookies** (Anexa 1 lit. A.7). Bannerul ține alegerea în `localStorage`, nu într-un cookie, și încarcă analytics numai după acceptare.
- **SEO on-page** (Anexa 1 lit. D): un cuvânt cheie principal pe pagină, title și meta description unice, canonical, Open Graph, `sitemap-index.xml`, `robots.txt` generat, date structurate `Psychologist` + `Person` + `FAQPage`, iar pe articole `BlogPosting`.
- **Optimizare pentru asistenții AI** (Anexa 1 lit. E): `llms.txt` generat, roboții ChatGPT, Claude și Perplexity lăsați explicit să intre, conținut randat în HTML.
- **Imagini** prin `astro:assets`, cu `srcset`, dimensiuni explicite și încărcare progresivă. Fonturile sunt găzduite pe site, nu la Google.
- **Credit RTR** în subsol, cu link către rtrsolutions.ro (art. 11.6).

## Ce mai lipsește înainte de lansare

1. **Fotografiile clientei.** Portretul generat a fost șters din proiect. Până trimite pozele ei, paginile Acasă și Despre folosesc fotografii de ilustrație fără oameni, potrivit Anexei 1 lit. G.3. Nicio imagine nu pretinde că este ea.
2. **Domeniul psihologgorj.ro**, de înregistrat, plus urcarea pe găzduire și certificatul SSL.
3. **Panoul de administrare** (Anexa 1 lit. C.1). Keystatic merge pe conținut din fișiere, dar panoul are nevoie de un loc unde să ruleze, pentru că găzduirea statică nu poate rula cod. De ales între o instanță separată pentru panou și mutarea site-ului pe VPS.
4. **Google Analytics și Search Console** (Anexa 1 lit. D.11), pe conturi deschise pe numele clientei. ID-ul de Analytics se pune în `src/data/site.ts`, câmpul `analyticsGa4`, iar bannerul îl încarcă numai cu acordul vizitatorului.
5. **Decizia pe blog.** Paginile există, nu apar în meniu, nu intră în sitemap și sunt marcate `noindex`. Se activează dintr-un singur câmp, `site.blogActiv`.
6. **Punctul exact al clădirii pe hartă**, de luat din profilul Google al cabinetului.

## Unde stau datele

- `src/data/site.ts` — nume, adresă, telefon, program, date legale, comutatoarele `blogActiv` și `analyticsGa4`.
- `src/data/servicii.ts` — cele trei servicii, cu textele trimise de clientă.
- `src/data/schema.ts` — datele structurate.
- `src/content/blog/` — articolele de blog.
- `refs/` și dosarul contractului (în afara repoului) — materialele primite de la clientă.
