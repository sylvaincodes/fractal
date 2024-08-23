"use client";
import {
  Calendar,
  CreditCard,
  Headset,
  LockKeyhole,
  Truck,
} from "lucide-react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { cn } from "@/lib/utils";
import Container from "@/components/custom/Container";

export default function Payments() {
  return (
    <section className="py-10 w-full">
      <Container>
        <Swiper
          breakpoints={{
            // when window width is >= 340
            340: {
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
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={5}
          navigation={false}
          pagination={true}
          history={{
            key: "slide",
          }}
          modules={[Autoplay, Navigation, Pagination]}
          className={cn(
            "mySwiper shadow-xl w-full flex items-center justify-between  border border-gray-200 rounded-md px-20 py-10"
          )}
        >
          <SwiperSlide className="relative py-10">
            <div className="flex items-center gap-4  lg:after:h-10  lg:after:w-[2px] after:translate-x-14 after:bg-neutral-200 ">
              <Headset className="text-primary-900 h-6 w-6" />
              <div className="flex-col gap-4">
                <h6 className="uppercase font-bold text-slate-700 text-base">
                  24/7  support
                </h6>
                <span className="text-sm text-slate-700 font-normal">
                  Support every time
                </span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="py-10">
            <div className="flex items-center gap-4 lg:after:h-10  after:w-[2px] after:translate-x-14 after:bg-neutral-200 ">
              <CreditCard className="text-primary-900 h-6 w-6" />
              <div className="flex-col gap-4">
                <h6 className="uppercase font-bold text-slate-700 text-base">
                  accept payment
                </h6>
                <span className="text-sm capitalize text-slate-700 font-normal">
                  visa, paypal, master
                </span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="py-10">
            <div className="flex items-center gap-4 lg:after:h-10  after:w-[2px] after:translate-x-14 after:bg-neutral-200 ">
              <LockKeyhole className="text-primary-900 h-6 w-6" />
              <div className="flex-col gap-4">
                <h6 className="uppercase font-bold text-slate-700 text-base">
                  secured payment
                </h6>
                <span className="text-sm text-slate-700 font-normal">
                  100% secured
                </span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="py-10">
            <div className="flex items-center gap-4 lg:after:h-10  after:w-[2px] after:translate-x-14 after:bg-neutral-200 ">
              <Truck className="text-primary-900 h-6 w-6" />
              <div className="flex-col gap-4">
                <h6 className="uppercase font-bold text-slate-700 text-base">
                  free shipping
                </h6>
                <span className="text-sm text-slate-700 font-normal">
                  order over $300
                </span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="py-10">
            <div className="flex items-center gap-4 lg:after:h-10  after:w-[2px] after:translate-x-14 after:bg-neutral-200 ">
              <Calendar className="text-primary-900 h-6 w-6" />
              <div className="flex-col gap-4">
                <h6 className="uppercase font-bold text-slate-700 text-base">
                  30 days return
                </h6>
                <span className="text-sm text-slate-700 font-normal">
                  30 days guarantee
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
}
