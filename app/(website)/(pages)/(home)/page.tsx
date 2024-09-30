import * as React from "react";
import HomeSlide from "@/components/modules/website/home/HomeSlide";
import Categories from "../../../../components/modules/website/home/Categories";
import CtaOne from "@/components/modules/website/home/CtaOne";
import CtaTwo from "@/components/modules/website/home/CtaTwo";
import Payments from "@/components/modules/website/home/Payments";
import FeaturesProducts from "@/components/modules/website/home/FeaturesProducts";
import { Metadata } from "next";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";

export default function Home() {
  return (
    <>
      <HomeSlide />
      <Payments />
      <Categories />
      <FeaturesProducts />
      <CtaTwo />
      <CtaOne />
    </>
  );
}

export const metadata: Metadata = {
  title: "Fractal - Home page",
  description:
    "A Ecommerce app. We are selling clothing, shoes for mens womens and kids",
  icons: {
    icon: "/assets/images/logo.svg",
  },

  //For SEO: Sharing on social media twitter, whatsapp, Linkeidn etc
  openGraph: mergeOpenGraph({
    title: `Fractal - Home page`,
    url: `/`,
  }),
};
