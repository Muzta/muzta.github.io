import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: z.object({
        url: image(),
        alt: z.string(),
      }),
      workImages: z
        .array(
          z.object({
            url: image(),
            alt: z.string(),
          })
        )
        .optional(),
      videoDemo: z.string().optional(),
      platform: z.string(),
      stack: z.string(),
      contribution: z.string(),
      website: z.string().optional(),
      github: z.string(),
      date: z.string(),
    }),
});

export const collections = {
  projects: projectsCollection,
};
