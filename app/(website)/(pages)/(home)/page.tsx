import HomeSlide from "@/components/modules/website/home/HomeSlide";
import * as React from "react";
import Categories from "../../../../components/modules/website/home/Categories";
import BestSellersProducts from "@/components/modules/website/home/BestSellersProducts";
import CtaOne from "@/components/modules/website/home/CtaOne";
import FaqOne from "@/components/modules/website/home/FaqOne";

export default function Home() {
  return (
    <>
      <HomeSlide />
      <Categories />
      <BestSellersProducts />
      <CtaOne />
      <FaqOne />
    </>
  );
}
