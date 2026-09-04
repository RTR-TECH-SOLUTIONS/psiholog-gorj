export type Public = "copii" | "parinti" | "adulti";

export type Serviciu = {
  slug: string;
  titlu: string;
  scurt: string;
  pentruCine: string;
  cumDecurge: string[];
  durata: string;
  public: Public[];
  imagine?: string;
  imagineAlt?: string;
};

export const servicii: Serviciu[] = [
  {
    slug: "evaluare-psihologica",
    titlu: "Evaluare psihologică clinică",
    scurt:
      "Punctul de plecare pentru orice intervenție: o imagine clară a nivelului de dezvoltare al copilului, în limbaj, atenție, comportament și relaționare.",
    pentruCine:
      "Copii de la 2 ani, atunci când părintele sau educatoarea observă o întârziere în vorbire, dificultăți de atenție, comportamente greu de gestionat sau probleme de adaptare la grădiniță ori la școală.",
    cumDecurge: [
      "Interviu cu părintele despre istoricul dezvoltării, rutina de acasă și îngrijorările concrete.",
      "Una sau două întâlniri de evaluare cu copilul, prin joc și probe standardizate potrivite vârstei.",
      "Ședință de restituire: primiți raportul scris, explicat pe înțeles, cu recomandări și pașii următori.",
    ],
    durata: "2 – 3 întâlniri a câte 50 de minute",
    public: ["copii"],
    imagine: "/images/serviciu-evaluare.webp",
    imagineAlt:
      "Birou cu formulare de evaluare, creion și cuburi de test folosite la evaluarea copiilor",
  },
  {
    slug: "terapia-limbajului-vml",
    titlu: "Stimularea limbajului și terapia VML",
    scurt:
      "Terapie verbal-motorie a limbajului pentru copiii care nu au început să vorbească, vorbesc greu de înțeles sau au un vocabular mult sub vârsta lor.",
    pentruCine:
      "Copii cu întârziere în apariția limbajului, pronunție neclară, apraxie verbală sau vocabular redus. Lucrăm și cu copiii care au deja un diagnostic, și cu cei aflați încă în observație.",
    cumDecurge: [
      "Stabilim împreună obiective concrete: primele cuvinte funcționale, propoziții de două cuvinte, sunete țintă.",
      "Ședințe scurte și ritmate, cu sprijin motor pentru articulare, imagini și joc structurat.",
      "Primiți exerciții simple de făcut acasă, în rutina zilnică, nu ca temă în plus.",
    ],
    durata: "Ședințe de 45 de minute, de obicei de două ori pe săptămână",
    public: ["copii"],
    imagine: "/images/serviciu-limbaj.webp",
    imagineAlt:
      "Cartonașe cu imagini pentru terapia limbajului pe o masă de lemn, mâna unui copil atingând un cartonaș",
  },
  {
    slug: "interventie-comportamentala",
    titlu: "Intervenție comportamentală",
    scurt:
      "Program structurat pentru comportamentele care blochează viața de zi cu zi: crize prelungite, refuz, agresivitate, rutine rigide.",
    pentruCine:
      "Copii la care crizele apar zilnic, la masă, la culcare, la plecarea de acasă sau în locurile aglomerate, și părinți care simt că au încercat deja tot.",
    cumDecurge: [
      "Observăm împreună când apare comportamentul, ce îl declanșează și ce îl menține.",
      "Construim un plan cu pași mici, aceleași reguli acasă și în cabinet.",
      "Vă învăț tehnicile concrete și le exersăm împreună, până devin firești.",
    ],
    durata: "Ședințe de 50 de minute, cu reevaluare la 6 săptămâni",
    public: ["copii", "parinti"],
    imagine: "/images/serviciu-comportament.webp",
    imagineAlt:
      "Copil la măsuța din cabinet construind cu cuburi colorate, alături de mâinile terapeutului",
  },
  {
    slug: "abilitati-sociale-emotionale",
    titlu: "Abilități sociale și emoționale",
    scurt:
      "Pentru copiii care se joacă singuri, se supără din nimic sau nu găsesc cuvintele pentru ce simt.",
    pentruCine:
      "Copii timizi sau, dimpotrivă, copleșiți de emoții intense, care intră greu în grup, se ceartă des cu ceilalți sau au anxietate de separare.",
    cumDecurge: [
      "Recunoaștem emoțiile prin joc, povești și situații desenate.",
      "Exersăm cum se cere ajutor, cum se așteaptă rândul, cum se repară o ceartă.",
      "Transferăm ce am exersat în grădiniță, școală și în relația cu frații.",
    ],
    durata: "Ședințe de 50 de minute, săptămânal",
    public: ["copii"],
    imagine: "/images/serviciu-emotii.webp",
    imagineAlt: "Cartonașe cu fețe care exprimă emoții, așezate pe o măsuță din lemn deschis",
  },
  {
    slug: "consiliere-parentala",
    titlu: "Consiliere parentală",
    scurt:
      "Întâlniri doar cu părinții, pentru situațiile în care schimbarea începe de la ce se întâmplă acasă.",
    pentruCine:
      "Părinți care vor să înțeleagă ce e normal la vârsta copilului lor, cum să pună limite fără țipete, cum să vorbească despre divorț, despre un frate nou sau despre o pierdere.",
    cumDecurge: [
      "Discutăm situațiile reale din ultima săptămână, nu teorie generală.",
      "Stabilim două sau trei schimbări mici, ușor de dus.",
      "Revenim la ele la întâlnirea următoare și le ajustăm.",
    ],
    durata: "Ședințe de 50 de minute, la două săptămâni",
    public: ["parinti"],
  },
  {
    slug: "psihologie-clinica-adulti",
    titlu: "Evaluare și intervenție pentru adulți",
    scurt:
      "Evaluare psihologică clinică și intervenție pentru adulți, inclusiv pentru dosarele care cer aviz psihologic.",
    pentruCine:
      "Adulți care traversează o perioadă de anxietate, epuizare sau schimbare majoră, precum și cei care au nevoie de o evaluare psihologică pentru un dosar.",
    cumDecurge: [
      "Prima întâlnire clarifică ce vă aduce aici și ce așteptări aveți.",
      "Stabilim împreună obiective și un ritm realist al ședințelor.",
      "Pentru evaluări, primiți raportul în maximum trei zile lucrătoare.",
    ],
    durata: "Ședințe de 50 de minute",
    public: ["adulti"],
  },
];

export const publicLabels: Record<Public, string> = {
  copii: "Pentru copii",
  parinti: "Pentru părinți",
  adulti: "Pentru adulți",
};
