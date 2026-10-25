import type { APIRoute } from "astro";

// Generat la build ca să poarte adresa reală a site-ului, și pe domeniul propriu,
// și în varianta demo. Roboții sistemelor de inteligență artificială sunt lăsați
// să intre în mod explicit (Anexa 1 lit. E.1).
export const GET: APIRoute = ({ site }) => {
  const baza = site ?? new URL("https://psihologgorj.ro");

  // Previzualizarea de pe GitHub Pages nu se indexează deloc.
  if (baza.hostname.endsWith("github.io")) {
    return new Response("User-agent: *\nDisallow: /\n", {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  const permisi = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-User",
    "Claude-SearchBot",
    "PerplexityBot",
    "Perplexity-User",
    "Google-Extended",
    "Applebot-Extended",
  ];

  const text = [
    "User-agent: *",
    "Allow: /",
    "",
    "# Site de prezentare, fără zone private. Roboții care alimentează",
    "# răspunsurile asistenților de inteligență artificială sunt bineveniți.",
    ...permisi.flatMap((nume) => [`User-agent: ${nume}`, "Allow: /", ""]),
    `Sitemap: ${new URL("sitemap-index.xml", baza).href}`,
    "",
  ].join("\n");

  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
