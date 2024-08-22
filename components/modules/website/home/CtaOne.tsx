"use client";
import Container from "@/components/custom/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState, useTransition } from "react";
import Countdown from "react-countdown";
import { m } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";
import Toast from "@/components/custom/Toast";
import { Slide } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";

export default function CtaOne() {
  const [slide, setSlide] = useState<Slide>();
  const [error, setError] = useState();
  const [isPending, startTransition] = useTransition();

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
            setError(error.message);
          });
      });
    };
    getSlide();
    if (error) {
      toast.custom(<Toast message={error} status="error" />);
    }
  }, []);

  return (
    <section className="my-20">
      <Container>
        <div className="flex justify-between items-center gap-4 flex-wrap lg:flex-nowrap w-full">
          {isPending ? (
            <Skeleton className="h-[400px]" />
          ) : (
            <m.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, type: "tween" }}
              className="flex flex-col items-center gap-12"
            >
              <h1 className="inline-flex text-4xl font-bold capitalize">
                {slide?.title}
              </h1>
              <p className="text-center text-xl">{slide?.subtitle}</p>
              <Countdown date={Date.now() + 600000} className="text-2xl" />

              <Button
                variant="default"
                size="lg"
                className="uppercase text-xl py-8 px-6"
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
                src={slide?.image}
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
