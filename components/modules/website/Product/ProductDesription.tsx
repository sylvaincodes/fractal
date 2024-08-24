import React from "react";
import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";
import { Product } from "@/types";

export default function ProductDesription({
  product,
  images,
  setImages,
  active,
  setActive,
  className,
}: {
  product: Product;
  images: string[];
  active: number;
  className?: string;
  setImages: (value: string[]) => void;
  setActive: (value: number) => void;
}) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${className}`}>
      <ProductImage
        className=""
        product={product}
        images={images}
        active={active}
      />
      <ProductDetails
        className="flex-1"
        product={product}
        setImages={setImages}
        active={active}
        setActive={setActive}
      />
    </div>
  );
}
