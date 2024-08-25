import React, { useState } from "react";
import Reviews from "./Reviews";
import AddReview from "./AddReview";
import { Product, Review as Type } from "@/types";

export default function Review({ product }: { product: Product }) {
  const [reviews, setReviews] = useState<Type[]>(product.reviews);
  return (
    <div className="flex flex-col gap-16">
      <AddReview product={product} reviews={reviews} setReviews={setReviews} />
      <Reviews reviews={reviews} product={product} />
    </div>
  );
}
