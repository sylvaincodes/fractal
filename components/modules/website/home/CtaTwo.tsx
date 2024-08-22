"use client";
import { ctaHomeTwo } from "@/constants";
import React, { useEffect, useState, useTransition } from "react";
import { m } from "framer-motion";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Slide } from "@/types";
import Toast from "@/components/custom/Toast";
import toast from "react-hot-toast";
import Loading from "@/components/custom/Loading";

export default function CtaOne() {
  const router = useRouter();
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
                (item: Slide) => item.slug === "cta-home-two"
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
    <>
      {isPending && <Loading isLoading={isPending} />}
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
