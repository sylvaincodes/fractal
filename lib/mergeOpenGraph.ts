import type { Metadata } from "next";

// Default open graph
const defaultOpenGraph: Metadata["openGraph"] = {
  title: "Fractal - Ecommerce platform for selling Womens and Mens stuff",
  description: "Fractal - Ecommerce platform for selling Womens and Mens stuff",
  images: [
    {
      url: `${process.env.NEXT_PUBLIC_SERVER_URL}/assets/images/og.png`,
    },
  ],
  type: "website",
  url: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
  siteName: "Fractal",
};

// Dynamic open graph
export const mergeOpenGraph = (og?: Metadata["openGraph"]) => {
  return {
    ...defaultOpenGraph,
    ...og,
    image: og?.images ? og.images : defaultOpenGraph.images,
    title: og?.title ? og.title : defaultOpenGraph.title,
    url: og?.url ? og.url : defaultOpenGraph.url,
  };
};
