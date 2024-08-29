import { Options, Product, Review } from "@/types";
import { Rating } from "@mui/material";
import React from "react";
import ProductPrice from "./ProductPrice";

export default function ProductInfo({
  product,
  option,
}: {
  product: Product;
  option: Options;
}) {
  const ratingTotal = product.reviews.reduce(
    (accumulator: number, currentValue: Review) =>
      accumulator + currentValue?.rating,
    0
  );
  const rating = (ratingTotal / product.reviews.length).toFixed(0);

  return (
    <div className="flex flex-col gap-4">
      <h4 className="capitalize text-pretty" data-cy="nameItem">
        {product.name.substring(0, 150)}
      </h4>
      <h6 className="text-balance capitalize">{product.description}</h6>
      {/* Ratings  */}
      <div className="inline-flex text-slate-700 items-center gap-4">
        <Rating
          name="product rating"
          readOnly
          value={parseInt(rating)}
          precision={0.5}
          style={{ color: "orange" }}
        />
        <div className="flex gap-4 text-xl text-gray-400">
          <strong>{parseInt(rating) ? rating : 0}</strong> (
          {product.reviews.length} reviews)
        </div>
      </div>

      <ProductPrice option={option} />
      {/* <div className="block">
        <h6 className="text-balance capitalize">{product.description}</h6>
      </div> */}
    </div>
  );
}
