import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Blogul din Anexa 1 lit. A.6: pagina de listare și șablonul de articol.
// Redactarea articolelor nu intră în prețul site-ului (lit. G.2), de aceea
// colecția pornește goală, cu un singur exemplu marcat ca ciornă.
const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: ({ image }) =>
    z.object({
      titlu: z.string(),
      descriere: z.string(),
      data: z.date(),
      autor: z.string().default("Ana-Maria Dijmarescu"),
      imagine: image().optional(),
      imagineAlt: z.string().optional(),
      ciorna: z.boolean().default(false),
    }),
});

export const collections = { blog };
