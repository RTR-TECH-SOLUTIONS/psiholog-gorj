// BASE_URL este "/" pe un domeniu propriu și "/nume-repo/" când site-ul stă
// într-un subdirector (cazul GitHub Pages). u() lipește prefixul pe linkurile
// și imaginile interne, ca aceleași fișiere să meargă în ambele situații.
const base = (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "");
export const u = (cale: string) => `${base}${cale}`;

// Numele, adresa și programul sunt cele comunicate de clientă pe WhatsApp în
// 20 octombrie 2026 (vezi materiale-primite.md din dosarul contractului).
export const site = {
  nume: "Ana-Maria Dijmarescu",
  titulatura: "Psiholog clinician",
  subtitlu: "Cabinet individual de psihologie",
  oras: "Târgu Jiu",
  judet: "Gorj",
  adresa: "Strada 22 Decembrie 1989, nr. 11, etajul 1, Târgu Jiu",
  // aceeași adresă, fără oraș, pentru frazele în care orașul apare deja
  adresaStrada: "Strada 22 Decembrie 1989, nr. 11, etajul 1",
  telefon: "+40 785 977 639",
  telefonAfisat: "0785 977 639",
  whatsapp: "40785977639",
  // Site-ul nu afișează adresă de e-mail: potrivit art. 1.7 din contract, contactul se
  // face la telefon și pe WhatsApp, iar formularul a fost scos.
  program: [
    { zi: "Luni – Vineri", ore: "16:00 – 20:00" },
    { zi: "Sâmbătă – Duminică", ore: "pe bază de programare" },
  ],
  programNota:
    "Toate vizitele în cabinet se fac exclusiv cu programare prealabilă, pentru un mediu liniștit și atenție deplină fiecărui copil.",
  // Codul din Registrul unic al psihologilor, din contract.
  codRegistru: "1GJ18917",
  aniExperienta: 20,
  // Datele de identificare din contractul nr. 36/13.10.2026, folosite în paginile legale.
  denumireLegala: "Dijmarescu Ana-Maria Cabinet Individual de Psihologie",
  sediuSocial: "Str. Dumbrava nr. 31, Municipiul Târgu Jiu, Județul Gorj",
  cif: "55513224",
  domeniu: "psihologgorj.ro",
  // Google Analytics 4 (Anexa 1 lit. D.11): se completează cu ID-ul contului deschis
  // pe numele clientei, de forma G-XXXXXXXXXX. Gol înseamnă că nu se încarcă nimic,
  // oricâte acorduri ar da vizitatorul.
  analyticsGa4: "",
  // Pixel de marketing (Meta sau Google Ads), dacă se va face vreodată promovare plătită.
  // Gol înseamnă că nu se încarcă nimic, chiar dacă vizitatorul bifează categoria.
  pixelMarketing: "",
  // Blogul există în contract (art. 1.2, Anexa 1 lit. A.6), dar clienta a cerut pe
  // 15 octombrie să renunțăm la el. Până la decizia finală paginile sunt construite,
  // dar nu apar în meniu, nu intră în sitemap și sunt marcate noindex.
  blogActiv: false,
};

export const waLink = (mesaj: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mesaj)}`;

export const nav = [
  { href: u("/"), label: "Acasă" },
  { href: u("/servicii"), label: "Servicii" },
  { href: u("/despre"), label: "Despre mine" },
  { href: u("/pentru-parinti"), label: "Pentru părinți" },
  ...(site.blogActiv ? [{ href: u("/blog"), label: "Blog" }] : []),
  { href: u("/contact"), label: "Contact" },
];
