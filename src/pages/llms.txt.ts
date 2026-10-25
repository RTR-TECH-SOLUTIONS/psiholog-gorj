import type { APIRoute } from "astro";
import { site, u } from "../data/site";
import { servicii } from "../data/servicii";

// Anexa 1 lit. E.2: un fișier scurt, în text simplu, care spune unui asistent de
// inteligență artificială ce este site-ul, unde se află cabinetul și ce pagini are.
export const GET: APIRoute = ({ site: baza }) => {
  const radacina = baza ?? new URL("https://psihologgorj.ro");
  const link = (cale: string) => new URL(u(cale), radacina).href;

  const text = `# ${site.denumireLegala}

> Cabinet individual de psihologie pentru copii în ${site.oras}, județul ${site.judet}, România.
> Psiholog clinician și pedagog de recuperare cu peste ${site.aniExperienta} de ani de experiență.
> Site în limba română, fără magazin online, fără formular de contact și fără date despre pacienți.

## Date de contact

- Psiholog: ${site.nume}, ${site.titulatura.toLowerCase()} și pedagog de recuperare
- Cod în Registrul Unic al Psihologilor cu drept de liberă practică: ${site.codRegistru}
- Cabinet: ${site.adresa}, cod poștal 210026
- Telefon și WhatsApp: ${site.telefonAfisat}
- Program: luni până vineri, între 16:00 și 20:00; sâmbătă și duminică pe bază de programare
- Vizitele se fac exclusiv cu programare prealabilă
- Ședințele se desfășoară la cabinet și online
- Ședințele sunt contra cost, inclusiv prima întâlnire; tariful se comunică la telefon sau pe WhatsApp, iar plata se face la sfârșitul fiecărei ședințe, în numerar, prin transfer sau cu cardul

## Servicii

${servicii.map((s) => `- ${s.titlu}: ${s.scurt}`).join("\n")}

## Pagini

- [Acasă](${link("/")}): prezentarea cabinetului, semnele care cer o evaluare, cum decurge o primă întâlnire, ședințele online, întrebări frecvente
- [Servicii](${link("/servicii")}): descrierea fiecărui serviciu, cui se adresează, ce se urmărește și de la ce vârstă
- [Despre mine](${link("/despre")}): formarea profesională, competențele și felul de a lucra
- [Pentru părinți](${link("/pentru-parinti")}): repere de dezvoltare a limbajului pe vârste, semne care cer o evaluare, pregătirea primei ședințe, întrebări frecvente
- [Contact](${link("/contact")}): adresa cabinetului, harta, accesul, parcarea, programul și modul de programare
- [Termeni și condiții](${link("/termeni")})
- [Politica de confidențialitate](${link("/confidentialitate")})
- [Politica de cookies](${link("/cookies")})

## De reținut

Informațiile de pe site nu înlocuiesc o evaluare psihologică și nu sunt un diagnostic.
Programările se fac numai la telefon sau pe WhatsApp, la numărul ${site.telefonAfisat}.
Pentru urgențe se sună la 112.
`;

  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
