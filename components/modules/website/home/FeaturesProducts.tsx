"use client";
import React, { useEffect, useState, useTransition } from "react";
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
import axios from "axios";
import toast from "react-hot-toast";
import Toast from "@/components/custom/Toast";

export default function FeaturesProducts() {
  const [products, setProducts] = useState<Product[]>();

  const [error, setError] = useState();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const getProducts = () => {
      startTransition(async () => {
        await axios
          .get(process.env.NEXT_PUBLIC_API_URL + "/api/products")
          .then((response) => {
            setProducts(
              response.data.data.filter(
                (item: Product) => item.featured === true
              )
            );
          })
          .catch((error) => {
            setError(error.message);
          });
      });
    };
    getProducts();
    if (error) {
      toast.custom(<Toast message={error} status="error" />);
    }
  }, []);

  return (
    <m.section
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeIn", delay: 0.3, type: "tween" }}
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
          {products &&
            products.map((item: Product, idx: number) => (
              <SwiperSlide key={idx} className="relative [&>button:block]">
                <ProductCard item={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </Container>
    </m.section>
  );
}
