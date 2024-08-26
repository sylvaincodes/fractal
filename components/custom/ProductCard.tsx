import {
  getBestPriceWithDiscountFromProduct,
  getBestPriceWithoutDiscountFromProduct,
  getDiscountRate,
} from "@/lib/utils";
import { Product } from "@/types";
import Image from "next/image";
import React from "react";
import CurrencyFormat from "./CurrencyFomat";
import { Eye, Heart } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { m } from "framer-motion";

export default function ProductCard({ item }: { item: Product }) {
  const active = 0;
  const product = item?.subProducts[active];
  const options = product?.options[active];
  const images = options?.images;
  const bestPriceWithDiscount = getBestPriceWithDiscountFromProduct(item);
  const bestPriceWithoutDiscount = getBestPriceWithoutDiscountFromProduct(item);
  const discountRate = getDiscountRate(
    bestPriceWithoutDiscount,
    bestPriceWithDiscount
  );

  const router = useRouter();

  const addToWishList = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.setAttribute("disabled", "true");
    // TODO::Do logic add to wishlist
  };

  return (
    <div className="flex flex-col gap-4 items-center cursor-pointer">
      {/* images  */}
      <div
        role="button"
        onClick={() => {
          router.push(`/products/${item.slug}`);
        }}
        className="flex group/image h-[500px] relative overflow-hidden"
      >
        <Image
          src={images[0]}
          alt="image"
          width="300"
          height="450"
          className="duration-300 ease-linear group-hover/image:translate-x-full"
        />
        <Image
          src={images[1]}
          alt="image"
          width="300"
          height="450"
          className="absolute duration-300 ease top-0 -translate-x-full group-hover/image:translate-x-0"
        />
        <m.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.3, type: "spring" }}
          className="hidden absolute top-4 right-4 flex-col gap-4 group-hover/image:flex duration-300 ease-in"
        >
          <Button
            onClick={() => {
              router.push(`/products/${item.slug}`);
            }}
            variant="outline"
            size="icon"
            className="hover:bg-black hover:text-white"
          >
            <Eye />
          </Button>
          <Button
            onClick={(e) => addToWishList(e)}
            variant="outline"
            size="icon"
            className="hover:bg-primary-500 hover:text-white"
          >
            <Heart />
          </Button>
        </m.div>
      </div>

      {/* content  */}
      <div className="flex flex-col gap-4 items-start py-4">
        <h5 className="capitalize">{item.name.substring(0, 20)}..</h5>
        <p className="capitalize text-sm">
          {item.description.substring(0, 30)}..
        </p>
        <div className="inline-flex justify-center gap-4 items-center">
          {discountRate > 0 ? (
            <div className="flex flex-wrap gap-4">
              <CurrencyFormat
                value={bestPriceWithDiscount}
                className="font-bold text-primary-900 text-left w-20 text-3xl"
              />

              <CurrencyFormat
                value={bestPriceWithoutDiscount}
                className="line-through w-18 text-slate-600 hidden lg:flex"
              />
            </div>
          ) : (
            <div className="flex flex-wrap gap-4">
              <CurrencyFormat
                value={bestPriceWithoutDiscount}
                className="font-bold text-primary-900"
              />

              <CurrencyFormat
                value={bestPriceWithoutDiscount}
                className="line-through w-18 text-sm opacity-0 hidden lg:flex"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
