"use client";
import Container from "@/components/custom/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { m } from "framer-motion";
import axios from "axios";
import { Slide } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";
import useSWR, { Fetcher } from "swr";

export default function CtaOne() {

  // Client-side data fetching with SWR
  const router = useRouter();
  const fetcher = (args: any) => fetch(args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    process.env.NEXT_PUBLIC_API_URL + "/api/slides",
    fetcher
  );
  const slide  = data?.filter((item: Slide) => item.slug === "cta-home")[0];
  if (error) return <div>Failed to load Api</div>;

  return (
    <section className="my-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  items-center">
          {isLoading ? (
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

          {isLoading ? (
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
