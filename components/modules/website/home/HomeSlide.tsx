"use client";
import React, { useState } from "react";
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
import { Slides } from "@/constants/index";
import Container from "@/components/custom/Container";

export default function HomeSlide() {
  const [slides, setSlides] = useState<Slide[]>(Slides);
  const animation = {
    hide: { x: 82, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <section>
      <Container>
        <Swiper
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
          {slides &&
            slides.map((item: Slide, idx: number) => (
              <SwiperSlide
                key={idx}
                className="relative [&>button:block] animate-heart-beating"
                style={{
                  backgroundImage: `url(${item.image})`,
                  height: "600px",
                  width: "100%",
                  backgroundSize: "cover",
                  backgroundPosition: "top",
                }}
              >
                {item?.title !== "" ? (
                  item.title !== "" && (
                    <div className="absolute drop-shadow-2xl text-white grid grid-cols-1 place-content-start justify-items-center lg:justify-items-start gap-8 capitalize m-auto top-60 lg:top-30 lg:left-10 w-fit">
                      <m.h1
                        initial={animation.hide}
                        whileInView={animation.show}
                        transition={{ delay: 0.3 }}
                        className={cn(
                          "text-2xl lg:text-5xl text-slate-700 font-bold  tracking-widest"
                        )}
                        style={{
                          color: `${item.textColor}`,
                        }}
                      >
                        {item.title}
                      </m.h1>
                      <m.h2
                        initial={animation.hide}
                        whileInView={animation.show}
                        transition={{ delay: 0.5 }}
                        className="text-sm lg:text-2xl text-left max-w-60 lg:max-w-screen-md tracking-widest leading-8 text-slate-700 font-normal capitalize"
                        style={{
                          color: `${item.textColor}`,
                        }}
                      >
                        {item.subtitle.substring(0, 65)}
                      </m.h2>

                      <m.a
                        initial={animation.hide}
                        whileInView={animation.show}
                        transition={{
                          delay: 0.7,
                          ease: "linear",
                          duration: 0.3,
                        }}
                        className="rounded-sm p-4 !hover:bg-primary-300"
                        style={{
                          background: `${item.textColor}`,
                          color: `#000000`,
                        }}
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
      </Container>
    </section>
  );
}
