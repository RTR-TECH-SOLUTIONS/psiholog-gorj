# Demo — cabinet de psihologie pentru copii, Gorj

Site de prezentare (5 pagini) construit ca material de pitch pentru clientă.
Stack: **Astro 7 + Tailwind 4**, output static, zero JS de framework.

**Link demo:** https://rtr-tech-solutions.github.io/psiholog-gorj/

Se publică singur: orice push pe `main` declanșează workflow-ul din
`.github/workflows/deploy.yml` și site-ul se actualizează în circa un minut.

```
npm run dev      # server local
npm run build    # build static în dist/
npm run preview  # verificare build
```

## Structura

| Pagină | Rol |
|---|---|
| `/` | hero, bandă de încredere, „când merită să cereți o părere”, servicii, despre, cum decurge, „ce nu fac și când vă îndrum mai departe”, ședințe online, testimoniale, FAQ |
| `/servicii` | cele 6 servicii cu „pentru cine este”, „cum decurge”, durată, filtrabile, plus blocul „cât durează și cât costă” |
| `/despre` | poveste, formare și acreditări pe ani, principii de lucru, cabinet |
| `/pentru-parinti` | repere de limbaj pe vârste, semne de alarmă, pregătirea primei ședințe, 8 întrebări frecvente |
| `/contact` | formular, NAP, program, hartă OpenStreetMap |
| `/404` | pagină de eroare cu harta site-ului și CTA |

## Funcționalități care merg în demo

- meniu mobil (hamburger) cu buton WhatsApp separat pe ecran mic;
- bară fixă jos pe mobil, cu WhatsApp și telefon, prezentă pe toate paginile;
- filtrare servicii pe public țintă (copii / părinți / adulți), cu anunț pentru cititoarele de ecran;
- formular de contact cu validare client-side și mesaj de confirmare;
- FAQ pe `<details>`, funcțional fără JS;
- hartă OpenStreetMap, fără cookie-uri terțe;
- pagină 404 proprie;
- previzualizare de link (Open Graph + `og.jpg` 1200x630) pentru când site-ul e trimis pe WhatsApp sau Facebook.

## Ce este placeholder — `TODO(real)` în cod

- **`src/data/site.ts`**: numele afișat este doar prenumele real, **Ana**. Adresa, e-mailul și programul sunt inventate. Telefonul și WhatsApp-ul sunt cele reale: +40 785 977 639.
- **`src/pages/despre.astro`**: anii de formare și codul din Registrul unic al psihologilor sunt fictivi.
- **`src/pages/index.astro`**: cele trei testimoniale sunt scrise de noi, ca exemplu de ton. Se înlocuiesc cu recenzii reale sau se scot. Blocul „ce nu fac și când vă îndrum mai departe” descrie practici uzuale pentru un psiholog clinician, dar trebuie confirmat de ea înainte de publicare, pentru că sunt afirmații despre felul în care lucrează.
- **cifre de experiență**: `aniExperienta` și `copiiEvaluati` există în `src/data/site.ts`, dar **nu sunt afișate nicăieri**. Erau inventate, iar pe un site personal cifrele astea sunt afirmații despre ea. Banda de sub hero folosește acum date verificabile. Se reactivează după ce le confirmă.
- **`src/pages/servicii.astro`**: blocul de tarife spune că prețul se comunică la telefon. De înlocuit cu lista reală de tarife, dacă vrea să o afișeze.
- **`astro.config.mjs`**: `site` și `base` sunt setate pentru GitHub Pages, unde demo-ul stă într-un subdirector. La mutarea pe domeniul clientei se pune domeniul în `site` și se șterge `base`. Nu e nevoie de alte modificări: toate linkurile și imaginile interne trec prin helperul `u()` din `src/data/site.ts`.
- **`src/pages/contact.astro`**: formularul nu trimite nimic; coordonatele hărții sunt centrul orașului Târgu Jiu.
- **`public/images/portret-ana.webp`**: portret generat, **nu este clienta**. Este un placeholder care ține locul și tonul fotografiei reale, pe pagina Despre și în secțiunea Despre de pe homepage. Se înlocuiește obligatoriu înainte de publicare: o fotografie AI prezentată ca fiind ea ar fi o reprezentare falsă a unei persoane reale.
- **restul din `public/images/`**: fotografii generate (Higgsfield, Nano Banana Pro), interior de cabinet și scene de terapie fără fețe identificabile. Se înlocuiesc cu pozele reale din cabinet.

## Ce urmează dacă clienta acceptă

1. **Conținut real**: nume complet, acreditări, tarife (dacă vrea să le afișeze), poze din cabinet, testimoniale reale.
   Pentru portret, cerut clientei: cadru vertical, ea singură, lumină de la fereastră, fundal simplu din cabinet, ținută în care lucrează, privire spre aparat, fără filtre. Un telefon recent ajunge.
2. **SEO local**, pe rezultate: research de keyworduri RO pe „psiholog copii Târgu Jiu”, „logoped Gorj”, „evaluare psihologică copii Gorj”; un keyword principal per pagină; `LocalBusiness` + `FAQPage` JSON-LD; sitemap, robots; Google Business Profile.
3. **Formular funcțional**: Resend pentru e-mail de notificare, sau Supabase dacă vrea un istoric al cererilor. Alternativ, doar WhatsApp.
4. **Pachet legal**: banner cookie, Termeni, Politica de confidențialitate, Politica de cookies. Necesar și pentru că formularul colectează date personale ale unor minori.
5. **Performanță**: imaginile trec prin `astro:assets` (AVIF + srcset), fonturile se pot self-hosta pentru a scăpa de Google Fonts.
6. **Deploy**: static, merge pe Hostinger (sau rămâne pe GitHub Pages, dacă vrea un domeniu propriu se leagă acolo). Dacă vrea să își editeze singură textele, Keystatic + build prin GitHub Actions.

Estimare grosieră după acceptare: 2 zile pentru conținut real și SEO on-page, o zi pentru formular, legal și deploy.
