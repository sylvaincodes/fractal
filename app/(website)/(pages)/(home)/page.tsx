import HomeSlide from "@/components/modules/website/home/HomeSlide";
import * as React from "react";
import Categories from "../../../../components/modules/website/home/Categories";
import CtaOne from "@/components/modules/website/home/CtaOne";
import CtaTwo from "@/components/modules/website/home/CtaTwo";
import Payments from "@/components/modules/website/home/Payments";
import FeaturesProducts from "@/components/modules/website/home/FeaturesProducts";

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
