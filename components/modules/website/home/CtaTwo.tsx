"use client";
import React, { useEffect, useState } from "react";
import { m } from "framer-motion";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Slide } from "@/types";
import Loading from "@/components/custom/Loading";

export default function CtaOne() {
  const router = useRouter();
  const [slide, setSlide] = useState<Slide>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getSlide = async () => {
      setLoading(true);
      await axios
        .get(process.env.NEXT_PUBLIC_API_URL + "/api/slides")
        .then((response) => {
          setSlide(
            response.data.data.filter(
              (item: Slide) => item.slug === "cta-home-two"
            )[0]
          );
        })
        .catch((error) => {
          console.log(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    getSlide();
  }, []);

  return (
    <>
      {loading && <Loading isLoading={loading} />}
      <m.section
        onClick={() => router.push(slide?.link ? slide.link : "")}
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, type: "tween", delay: 0.2 }}
        className="my-10 hover:cursor-pointer"
      >
        <div
          className="flex w-full"
          style={{
            backgroundImage: `url(${slide?.image})`,
            height: "400px",
            width: "auto",
            backgroundSize: "contain",
            backgroundPosition: "top",
            backgroundRepeat: "repeat",
          }}
        ></div>
      </m.section>
    </>
  );
}
