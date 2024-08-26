import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fractal - Ecommerce platform for selling Womens and Mens stuff",
    short_name: "Ecommerce",
    description:
      "Fractal - Ecommerce platform for selling Womens and Mens stuff",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/assets/images/logo.svg",
        sizes: "100x100",
        type: "svg",
      },
    ],
  };
}
