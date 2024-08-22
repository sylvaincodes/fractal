"use client";
import React, { useEffect, useState, useTransition } from "react";
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
import axios from "axios";
import toast from "react-hot-toast";
import Toast from "@/components/custom/Toast";
import { Skeleton } from "@/components/ui/skeleton";

export default function HomeSlide() {
  const animation = {
    hide: { x: 82, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
    },
  };
  const [slides, setSlides] = useState<Slide[]>();
  const [error, setError] = useState();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const getSlides = () => {
      startTransition(async () => {
        await axios
          .get(process.env.NEXT_PUBLIC_API_URL + "/api/slides")
          .then((response) => {
            setSlides(
              response.data.data.filter(
                (item: Slide) => item.slug === "banner-home"
              )
            );
          })
          .catch((error) => {
            setError(error.message);
          });
      });
    };
    getSlides();
    if (error) {
      toast.custom(<Toast message={error} status="error" />);
    }
  }, []);

  return (
    <section>
      <Container>
        {isPending ? (
          <Skeleton className="h-[700px] w-full" />
        ) : (
          <Swiper
            autoplay={{
              delay: 10000,
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
            {slides &&
              slides.map((item: Slide, idx: number) => (
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
                      <div className="absolute drop-shadow-2xl text-white grid grid-cols-1 place-content-start justify-items-center lg:justify-items-start gap-8 capitalize m-auto top-100 lg:top-30 lg:left-20 w-fit">
                        <m.h1
                          initial={animation.hide}
                          whileInView={animation.show}
                          transition={{ delay: 0.3 }}
                          className={cn(
                            "text-2xl lg:text-6xl text-slate-700 font-bold  tracking-widest"
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
