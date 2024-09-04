"use client";
import React from "react";
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
import { Skeleton } from "@/components/ui/skeleton";
import useSWR, { Fetcher } from "swr";

export default function HomeSlide() {
  const animation = {
    hide: { x: 82, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
    },
  };

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

  return (
    <section>
      <Container>
        {isLoading ? (
          <Skeleton className="h-[700px] w-full" />
        ) : (
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            spaceBetween={50}
            slidesPerView={1}
            navigation={true}
            pagination={true}
            history={{
              key: "slide",
            }}
            modules={[Autoplay, Navigation, Pagination]}
            className={cn("")}
          >
            {data &&
              data
                .filter((item: Slide) => item.slug === "banner-home")
                .map((item: Slide, idx: number) => (
                  <SwiperSlide
                    key={idx}
                    className="relative [&>button:block] hover:animate-heart-beating"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      height: "700px",
                      width: "100%",
                      backgroundSize: "cover",
                      backgroundPosition: "top",
                    }}
                  >
                    {item?.title !== "" ? (
                      item.title !== "" && (
                        <div className="absolute drop-shadow-2xl  grid grid-cols-1 place-content-start justify-items-center lg:justify-items-start gap-8 capitalize m-auto top-100 lg:top-30 lg:left-20 w-fit">
                          <m.h4
                            initial={animation.hide}
                            whileInView={animation.show}
                            transition={{ delay: 0.4 }}
                            className="max-w-60 text-2xl lg:text-h4 lg:max-w-screen-md capitalize"
                            style={{
                              color: `${item.textColor}`,
                            }}
                          >
                            {item.subtitle.substring(0, 65)}
                          </m.h4>
                          <m.h1
                            initial={animation.hide}
                            whileInView={animation.show}
                            transition={{ delay: 0.6 }}
                            className={cn("text-2xl lg:text-h1")}
                            style={{
                              color: `${item.textColor}`,
                            }}
                          >
                            {item.title}
                          </m.h1>

                          <m.h6
                            initial={animation.hide}
                            whileInView={animation.show}
                            transition={{ delay: 1 }}
                            className={cn("lg:text-h6")}
                            style={{
                              color: `${item.textColor}`,
                            }}
                          >
                            {item.description}
                          </m.h6>

                          <m.a
                            initial={animation.hide}
                            whileInView={animation.show}
                            transition={{
                              delay: 1.2,
                              ease: "linear",
                              duration: 0.8,
                            }}
                            className="rounded-sm p-4 bg-white hover:bg-black hover:text-white"
                            href={`/${item.link}`}
                          >
                            {item.btn}
                          </m.a>
                        </div>
                      )
                    ) : (
                      <div className="flex items-center justify-center">
                        <Button
                          variant="default"
                          size="lg"
                          className="hover:shadow-button px-12 py-8 bg-white text-black hover:text-white"
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
    </section>
  );
}
