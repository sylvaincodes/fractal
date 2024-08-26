"use client";
import Container from "@/components/custom/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState, useTransition } from "react";
import Countdown from "react-countdown";
import { m } from "framer-motion";
import axios from "axios";
import { Slide } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";

export default function CtaOne() {
  const [slide, setSlide] = useState<Slide>();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  useEffect(() => {
    const getSlide = () => {
      startTransition(async () => {
        await axios
          .get(process.env.NEXT_PUBLIC_API_URL + "/api/slides")
          .then((response) => {
            setSlide(
              response.data.data.filter(
                (item: Slide) => item.slug === "cta-home"
              )[0]
            );
          })
          .catch((error) => {
            console.log(error.message);
          });
      });
    };
    getSlide();
  }, []);

  return (
    <section className="my-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  items-center">
          {isPending ? (
            <Skeleton className="h-[400px]" />
          ) : (
            <m.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, type: "tween" }}
              className="flex flex-col items-center gap-12"
            >
              <h3 className="inline-flex capitalize">{slide?.title}</h3>
              <p className="text-center">{slide?.subtitle}</p>
              <Countdown date={Date.now() + 600000} className="text-2xl" />

              <Button
                variant="default"
                size="lg"
                className="uppercase text-xl py-8 px-6"
                onClick={() => router.push(slide?.link ? slide?.link : "")}
              >
                {slide?.btn}
              </Button>
            </m.div>
          )}

          {isPending ? (
            <Skeleton className="h-[400px]" />
          ) : (
            <m.div
              initial={{ x: 400, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, type: "tween", delay: 0.5 }}
              className="flex justify-end"
            >
              <Image
                src={slide?.image ? slide?.image : ""}
                width="800"
                height="800"
                alt="background cta"
              />
            </m.div>
          )}
        </div>
      </Container>
    </section>
  );
}
