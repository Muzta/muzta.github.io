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

const educationCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      certificates: z.array(
        z.object({
          stack: z.string(),
          url: z.string(),
        })
      ),
      website: z.string().optional(),
      educationImages: z
        .array(
          z.object({
            url: image(),
            alt: z.string(),
          })
        )
        .optional(),
    }),
});

export const collections = {
  projects: projectsCollection,
  education: educationCollection,
};
