// BASE_URL este "/" pe un domeniu propriu și "/nume-repo/" când site-ul stă
// într-un subdirector (cazul GitHub Pages). u() lipește prefixul pe linkurile
// și imaginile interne, ca aceleași fișiere să meargă în ambele situații.
const base = import.meta.env.BASE_URL.replace(/\/$/, "");
export const u = (cale: string) => `${base}${cale}`;

// TODO(real): datele de mai jos sunt placeholder pentru demo.
// De înlocuit cu datele reale ale clientei (nume, adresă cabinet, telefon, email, cod COPSI).
export const site = {
  nume: "Ana",
  titulatura: "Psiholog clinician",
  subtitlu: "Cabinet individual de psihologie",
  oras: "Târgu Jiu",
  judet: "Gorj",
  adresa: "Str. Tudor Vladimirescu 42, Târgu Jiu",
  telefon: "+40 785 977 639",
  telefonAfisat: "0785 977 639",
  whatsapp: "40785977639",
  email: "contact@psiholog-gorj.ro",
  program: [
    { zi: "Luni – Vineri", ore: "09:00 – 19:00" },
    { zi: "Sâmbătă", ore: "09:00 – 13:00" },
    { zi: "Duminică", ore: "închis" },
  ],
  // TODO(real): cifre neconfirmate de clientă. Nu sunt afișate nicăieri pe site.
  // De reactivat în banda de încredere de pe prima pagină doar după ce le confirmă ea.
  aniExperienta: 11,
  copiiEvaluati: 400,
};

export const waLink = (mesaj: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mesaj)}`;

export const nav = [
  { href: u("/"), label: "Acasă" },
  { href: u("/servicii"), label: "Servicii" },
  { href: u("/despre"), label: "Despre mine" },
  { href: u("/pentru-parinti"), label: "Pentru părinți" },
  { href: u("/contact"), label: "Contact" },
];
