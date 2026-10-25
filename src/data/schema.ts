import { site, u } from "./site";
import { servicii } from "./servicii";

// Date structurate (Anexa 1 lit. D.10 și E.5). Un singur graf, pus în fiecare
// pagină: cabinetul, persoana și, unde există, lista de întrebări frecvente.
// Coordonatele sunt cele ale clădirii de pe Strada 22 Decembrie 1989; codul
// poștal este cel din profilul Google al cabinetului.

const absolut = (baza: URL, cale: string) => new URL(u(cale), baza).href;

export const grafCabinet = (baza: URL) => {
  const idCabinet = `${new URL(u("/"), baza).href}#cabinet`;
  const idPersoana = `${new URL(u("/"), baza).href}#psiholog`;

  return [
    {
      "@type": "Psychologist",
      "@id": idCabinet,
      name: site.denumireLegala,
      alternateName: `${site.nume}, psiholog copii ${site.oras}`,
      description: `Cabinet individual de psihologie pentru copii în ${site.oras}, ${site.judet}: evaluare și terapie logopedică, terapia VML a limbajului și intervenție comportamentală aplicată ABA în tulburarea de spectru autist.`,
      url: new URL(u("/"), baza).href,
      telephone: site.telefon.replace(/\s/g, ""),
      image: absolut(baza, "/images/og.jpg"),
      address: {
        "@type": "PostalAddress",
        streetAddress: "Strada 22 Decembrie 1989, nr. 11, etajul 1",
        addressLocality: site.oras,
        addressRegion: site.judet,
        postalCode: "210026",
        addressCountry: "RO",
      },
      geo: { "@type": "GeoCoordinates", latitude: 45.0362, longitude: 23.275 },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "16:00",
          closes: "20:00",
        },
      ],
      areaServed: [
        { "@type": "City", name: site.oras },
        { "@type": "AdministrativeArea", name: `Județul ${site.judet}` },
      ],
      availableLanguage: { "@type": "Language", name: "Română" },
      founder: { "@id": idPersoana },
      employee: { "@id": idPersoana },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicii pentru copii",
        itemListElement: servicii.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.titlu,
            description: s.scurt,
            serviceType: s.motto ?? s.titlu,
            url: `${new URL(u("/servicii"), baza).href}#${s.slug}`,
          },
        })),
      },
    },
    {
      "@type": "Person",
      "@id": idPersoana,
      name: site.nume,
      jobTitle: `${site.titulatura} și pedagog de recuperare`,
      worksFor: { "@id": idCabinet },
      telephone: site.telefon.replace(/\s/g, ""),
      knowsAbout: [
        "evaluare și terapie logopedică",
        "terapia VML, învățare verbală motorie",
        "intervenție comportamentală aplicată ABA",
        "tulburarea de spectru autist la copii",
        "consiliere pentru părinți",
      ],
      identifier: {
        "@type": "PropertyValue",
        name: "Registrul Unic al Psihologilor cu drept de liberă practică",
        value: site.codRegistru,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: site.oras,
        addressRegion: site.judet,
        addressCountry: "RO",
      },
    },
  ];
};

export const grafIntrebari = (intrebari: { q: string; a: string }[]) => ({
  "@type": "FAQPage",
  mainEntity: intrebari.map((i) => ({
    "@type": "Question",
    name: i.q,
    acceptedAnswer: { "@type": "Answer", text: i.a },
  })),
});
