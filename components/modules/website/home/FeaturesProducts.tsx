"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
import { m } from "framer-motion";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Product } from "@/types";
import { cn } from "@/lib/utils";
import Container from "@/components/custom/Container";
import Heading from "@/components/custom/Heading";
import Row from "@/components/custom/Row";
import ProductCard from "@/components/custom/ProductCard";
import Loading from "@/components/custom/Loading";
import useSWR, { Fetcher } from "swr";

export default function FeaturesProducts() {

  // Client-side data fetching with SWR
  const fetcher: Fetcher<Product[], string> = (args) =>
    fetch(args)
      .then((res) => res.json())
      .then((res) => res.data);
  const { data, error, isLoading } = useSWR<Product[]>(
    process.env.NEXT_PUBLIC_API_URL + "/api/products",
    fetcher
  );
  if (error) return <div>Failed to load Api</div>;

  return (
    <>
      {isLoading ? <Loading isLoading={isLoading} /> : ""}
      <m.section
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeIn",
          delay: 0.3,
          type: "tween",
        }}
        className="mt-20 pb-10"
      >
        <Container>
          <Row className="mb-10">
            <Heading name="Featured products" />
          </Row>
          <Swiper
            breakpoints={{
              // when window width is >= 340
              360: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              // when window width is >= 768
              575: {
                slidesPerView: 2,
                spaceBetween: 40,
              },

              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              // when window width is >= 1024
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 100,
              },
              1680: {
                slidesPerView: 4,
                spaceBetween: 100,
              },
            }}
            autoplay={{
              delay: 105000,
              disableOnInteraction: false,
            }}
            spaceBetween={50}
            slidesPerView={1}
            navigation={false}
            pagination={true}
            history={{
              key: "slide",
            }}
            modules={[Autoplay, Navigation, Pagination]}
            className={cn("py-10")}
          >
            {data &&
              data
                .filter((item: Product) => item.featured === true)
                .map((item: Product, idx: number) => (
                  <SwiperSlide key={idx} className="relative [&>button:block]">
                    <ProductCard item={item} />
                  </SwiperSlide>
                ))}
          </Swiper>
        </Container>
      </m.section>
    </>
  );
}
