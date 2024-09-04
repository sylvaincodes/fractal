"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
import { m } from "framer-motion";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Slide } from "@/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Container from "@/components/custom/Container";
import Heading from "@/components/custom/Heading";
import Row from "@/components/custom/Row";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import useSWR, { Fetcher } from "swr";

export default function Categories() {
  const animation = {
    hide: { scale: 0, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
    },
  };
  const router = useRouter();

  // Client-side data fetching with SWR
  const fetcher: Fetcher<Slide[], string> = (args) =>
    fetch(args)
      .then((res) => res.json())
      .then((res) => res.data);
  const { data, error, isLoading } = useSWR<Slide[]>(
    process.env.NEXT_PUBLIC_API_URL + "/api/slides",
    fetcher
  );
  if (error) return <div>Failed to load Api</div>;

  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <m.section
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeIn", delay: 0.3, type: "tween" }}
      className="mt-10"
    >
      <Container>
        <Row className="mb-10">
          <Heading name="shop by top categories" />
        </Row>
        {isLoading ? (
          <Swiper
            breakpoints={{
              // when window width is >= 340
              360: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              // when window width is >= 768
              575: {
                slidesPerView: 1,
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
            modules={[]}
          >
            <Skeleton className="h-[400px]" />
          </Swiper>
        ) : (
          <Swiper
            breakpoints={{
              // when window width is >= 340
              360: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              // when window width is >= 768
              575: {
                slidesPerView: 1,
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
            className={cn("")}
          >
            {data &&
              data
                .filter((item: Slide) => item.slug === "top-categories-home")
                .map((item: Slide, idx: number) => (
                  <SwiperSlide
                    key={idx}
                    className="relative [&>button:block] hover:scale-105 duration-300 ease-linear cursor-pointer"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      height: "600px",
                      width: "auto",
                      backgroundSize: "cover",
                      backgroundPosition: "top",
                    }}
                  >
                    {item?.title !== "" ? (
                      item.title !== "" && (
                        <div className="absolute bg-white rounded-lg p-4 bottom-10 w-40 shadow-xl cursor-pointer hover:bg-black hover:text-white drop-shadow-xl duration-300 ease-linear">
                          <m.h6
                            initial={animation.hide}
                            whileInView={animation.show}
                            transition={{ delay: 0.1 + idx / 6 }}
                            className={cn("capitalize")}
                            style={{
                              color: `${item.textColor}`,
                            }}
                            onClick={() => handleClick(item.link)}
                          >
                            {item.title}
                          </m.h6>
                        </div>
                      )
                    ) : (
                      <div className="flex items-center justify-center">
                        <Button
                          variant="default"
                          size="lg"
                          className="hover:shadow-button px-12 py-8"
                        >
                          <Link href={item.link} className="text-xl">
                            BUY NOW
                          </Link>
                        </Button>
                      </div>
                    )}
                  </SwiperSlide>
                ))}
          </Swiper>
        )}
      </Container>
    </m.section>
  );
}
