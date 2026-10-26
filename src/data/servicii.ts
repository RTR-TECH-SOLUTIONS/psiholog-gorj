import type { ImageMetadata } from "astro";
import imgLimbaj from "../assets/serviciu-limbaj.webp";
import imgEvaluare from "../assets/serviciu-evaluare.webp";
import imgComportament from "../assets/serviciu-comportament.webp";

export type Public = "copii" | "parinti" | "adulti";

// Un punct de listă: „label" este partea îngroșată dinaintea două puncte, în
// textele trimise de clientă („Dezvoltarea comunicării: copilul să poată...").
export type Punct = { label?: string; text: string };

export type Serviciu = {
  slug: string;
  titlu: string;
  motto?: string;
  scurt: string;
  descriere?: string[];
  pentruCine: Punct[];
  ceUrmaresc: Punct[];
  scopFinal?: string[];
  delaVarsta?: string[];
  public: Public[];
  imagine?: ImageMetadata;
  imagineAlt?: string;
  // true = textul încă nu a venit de la clientă, ce scrie aici e provizoriu.
  textProvizoriu?: boolean;
};

// Lista serviciilor este cea din contract, Anexa 1 lit. A.2.
// Textele de la logopedie, terapia VML și ABA & TSA sunt ale clientei, primite
// pe WhatsApp în 17, 18 și 19 octombrie 2026 (vezi materiale-primite.md din
// dosarul contractului). Corectate doar la diacritice și punctuație, fără
// schimbări de conținut.
// Pe 19 octombrie a scris „Asta este tot la secțiunea Servicii", așa că pagina
// are exact aceste trei servicii. Evaluarea psihologică clinică și intervenția
// psihologică, trecute în Anexa 1 lit. A.2, au fost scoase la cererea ei.
export const servicii: Serviciu[] = [
  {
    slug: "logopedie",
    // Titlul întreg și fraza scurtă sunt cerute de clientă pe 26 octombrie, la 10:50 și
    // 11:04. „De pronunție și în plan lexico-grafic" a intrat în titlu, cum a scris ea,
    // deci nu mai stă separat ca motto.
    titlu:
      "Evaluarea și terapia logopedică în tulburările de limbaj: de pronunție și în plan lexico-grafic",
    scurt: "Fiecare sunet are timpul lui. Îl descoperim împreună, cu răbdare.",
    pentruCine: [
      {
        text: "Copiilor preșcolari (3-6 ani) și școlari care întâmpină dificultăți de pronunție, citire sau scriere și care au nevoie de sprijin pentru dezvoltarea abilităților de comunicare și învățare.",
      },
      {
        label: "Adulților",
        text: "persoane care au rămas cu defecte de pronunție necorectate în copilărie sau pacienți care și-au pierdut claritatea articulării în urma unor traumatisme cerebrale, accidente vasculare cerebrale (AVC).",
      },
    ],
    ceUrmaresc: [
      {
        text: "Corectarea pronunției, dezvoltarea capacității de diferențiere a sunetelor, consolidarea vocabularului și îmbunătățirea deprinderilor de citire și scriere.",
      },
    ],
    delaVarsta: ["Vârsta optimă pentru corectarea propriu-zisă a pronunției este de 3-4 ani."],
    public: ["copii", "adulti"],
    imagine: imgLimbaj,
    imagineAlt:
      "Cartonașe cu imagini pentru terapia limbajului pe o masă de lemn, mâna unui copil atingând un cartonaș",
  },
  {
    slug: "terapia-vml",
    titlu: "Terapia VML (Învățare Verbală Motorie)",
    // Clienta a semnalat pe 26 octombrie, la 18:04, că rezumatul repeta primul punct din
    // „Cui se adresează". Textul de mai jos e cel trimis de ea la 18:14.
    motto: "Terapia VML, o altfel de cale către comunicare și dezvoltare",
    scurt:
      "Copilul tău nu vorbește sau vorbește puțin? Nu amâna intervenția! Limbajul se dezvoltă pas cu pas, iar timpul contează.",
    pentruCine: [
      {
        label: "Copiilor cu apraxie verbală",
        text: "copiii care știu ce vor să spună, dar întâmpină dificultăți în planificarea și coordonarea mișcărilor necesare pentru a produce sunetele și cuvintele.",
      },
      {
        label: "Copiilor cu dificultăți motorii ale vorbirii",
        text: "copiilor care au dificultăți în formarea silabelor, combinarea sunetelor și pronunțarea consecventă a cuvintelor.",
      },
      {
        label: "Adulților cu apraxie verbală dobândită",
        text: "persoanelor care au dificultăți de planificare a vorbirii după o leziune cerebrală sau un accident vascular cerebral.",
      },
    ],
    ceUrmaresc: [
      { text: "Dezvoltarea capacității de a produce sunete, silabe și cuvinte." },
      { text: "Îmbunătățirea planificării și coordonării mișcărilor implicate în vorbire." },
      { text: "Creșterea clarității și inteligibilității vorbirii." },
      {
        text: "Facilitarea trecerii de la sunete și silabe la cuvinte și exprimare verbală funcțională.",
      },
      { text: "Dezvoltarea comunicării, în funcție de particularitățile persoanei." },
    ],
    delaVarsta: [
      "Nu există o limită de vârstă. Poate fi luată în considerare în intervenția timpurie, la copiii mici, la copiii de vârstă școlară și la adulții cu apraxie verbală.",
    ],
    public: ["copii", "adulti"],
    // TODO(real): imagine de ilustrație, de înlocuit cu o fotografie din cabinet.
    imagine: imgEvaluare,
    imagineAlt: "Caiet, creion și cuburi de lemn pe o masă deschisă la culoare, materiale de lucru din cabinet",
  },
  {
    slug: "aba-tsa",
    titlu: "Terapia ABA și intervenția în TSA",
    motto: "Alături de copilul tău, pas cu pas",
    scurt:
      "În ședințe desfășurate exclusiv în regim unu-la-unu (1:1), transform micile reușite de zi cu zi în pași siguri spre independență.",
    descriere: [
      "Când ești părintele unui copil care se dezvoltă diferit, drumul poate părea plin de întrebări și incertitudini. Vreau să știi că nu ești singur în această călătorie. În cabinetul meu, nu privesc doar un diagnostic, ci descopăr un copil unic, cu un potențial extraordinar, și o familie care are nevoie de susținere și îndrumare.",
      "Terapia ABA (Analiza Comportamentală Aplicată) este o metodă prin care creez o punte de comunicare cu copilul dumneavoastră. În ședințe desfășurate exclusiv în regim unu-la-unu (1:1), transform micile reușite de zi cu zi în pași siguri spre independență. În cadrul cabinetului meu, copilul dumneavoastră va beneficia în totalitate de întreaga mea atenție, experiență și energie, construind o relație stabilă de încredere, într-un mediu calm și familiar lui.",
    ],
    pentruCine: [
      {
        label: "Copiii și adolescenții cu Tulburare de Spectru Autist (TSA)",
        text: "pentru dezvoltarea comunicării, interacțiunii sociale și autonomiei.",
      },
      {
        label: "Copiii cu întârziere în dezvoltare",
        text: "pentru învățarea unor abilități cognitive, practice și de comunicare.",
      },
      {
        label: "Copiii cu dificultăți de comunicare",
        text: "pentru dezvoltarea comunicării funcționale, inclusiv solicitarea ajutorului și exprimarea nevoilor.",
      },
      {
        label: "Copiii cu comportamente problematice",
        text: "pentru înțelegerea cauzelor comportamentelor și dezvoltarea unor alternative adecvate.",
      },
      {
        label: "Micuții cu întârzieri în dezvoltarea neuropsihică sau de limbaj",
        text: "care au nevoie de stimulare timpurie personalizată.",
      },
      {
        text: "Copiii care întâmpină dificultăți de comportament (ADHD, tantrumuri intense, anxietate) sau dificultăți de adaptare și învățare.",
      },
      {
        text: "Copiii care au nevoie să-și dezvolte abilitățile de autonomie și sociale, pentru a învăța să urmeze instrucțiuni, să aștepte, să împartă jucării și să participe la activități.",
      },
      {
        label: "Părinți și bunici",
        text: "terapia dă roade atunci când lucrăm împreună. De aceea, vă voi sprijini prin sesiuni de consiliere, training și tehnici practice, pentru ca mediul de acasă să devină cel mai bun spațiu de creștere. Suntem o echipă!",
      },
    ],
    ceUrmaresc: [
      {
        label: "Dezvoltarea comunicării",
        text: "copilul să poată cere ceea ce dorește, să exprime nevoi și să solicite ajutor.",
      },
      {
        label: "Dezvoltarea atenției și a învățării",
        text: "să urmărească instrucțiuni, să finalizeze sarcini și să învețe deprinderi noi.",
      },
      {
        label: "Dezvoltarea abilităților sociale",
        text: "să interacționeze cu alți copii, să aștepte rândul și să participe la jocuri comune.",
      },
      {
        label: "Dezvoltarea autonomiei",
        text: "să devină mai independent în activitățile cotidiene.",
      },
      {
        label: "Dezvoltarea jocului",
        text: "să învețe să se joace funcțional, să imite și să participe la jocuri reciproce.",
      },
      {
        label: "Reducerea comportamentelor problematice",
        text: "prin identificarea cauzelor și învățarea unor modalități alternative de comunicare și reglare.",
      },
    ],
    scopFinal: [
      "Creșterea independenței copilului, îmbunătățirea comunicării și participarea sa cât mai activă la viața de familie și la mediul social.",
      "Obiectivele se stabilesc individual, în funcție de vârsta, nivelul de dezvoltare și nevoile copilului.",
    ],
    delaVarsta: [
      "Intervenția poate începe de la vârste mici și poate continua la vârste mai mari, în funcție de nevoile și nivelul de dezvoltare al copilului.",
      "Fiecare program este individualizat, cu obiective stabilite în funcție de abilitățile copilului și de prioritățile familiei, urmărind progresul și dezvoltarea independenței în viața de zi cu zi.",
    ],
    public: ["copii", "parinti"],
    imagine: imgComportament,
    imagineAlt:
      "Copil la măsuța din cabinet construind cu cuburi colorate, alături de mâinile terapeutului",
  },
];

export const publicLabels: Record<Public, string> = {
  copii: "Pentru copii",
  parinti: "Pentru părinți",
  adulti: "Pentru adulți",
};
