import { Product } from "@/types";
import { Skeleton } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function ProductImage({
  product,
  images,
  active,
  className,
}: {
  product: Product;
  images: string[];
  active: number;
  className?: string;
}) {
  const [changeImage, setChangeImage] = useState(images[active]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    setChangeImage(images[active]);
  }, [product, images, active]);

  return (
    <div className={`flex flex-col  gap-4 border p-1 ${className}`}>
      {isLoading ? (
        <Skeleton className="w-full" variant="rectangular" height={400} />
      ) : (
        <div className="flex justify-center h-[400px]">
          <Zoom>
            <Image
              src={changeImage}
              alt="product images"
              width="700"
              height="700"
              className="object-contain cursor-pointer !max-h-[400px] w-[500px]"
            />
          </Zoom>
        </div>
      )}
      <div className="grid grid-cols-4 gap-8 cursor-pointer items-center justify-items-center w-full">
        {images &&
          images
            .slice(0, 4)
            .map((image: string, idx: number) => (
              <Image
                className=""
                key={idx}
                src={image}
                alt="product subs images"
                width="100"
                height="100"
                onMouseEnter={() => setChangeImage(image)}
              />
            ))}
      </div>
    </div>
  );
}
