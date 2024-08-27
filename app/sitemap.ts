import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_SERVER_URL}`, // landing page
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },

    {
      url: `${process.env.NEXT_PUBLIC_SERVER_URL}/products`, // landing page
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
