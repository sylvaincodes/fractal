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
    <>
      {isLoading ? (
        <Skeleton variant="rectangular" height={700} width={600} />
      ) : (
        <div
          className={`flex flex-col-reverse items-center xl:items-start xl:flex-row gap-4 ${className}`}
        >
          <div className="flex xl:flex-col gap-4 w-fit justify-between cursor-pointer">
            {images &&
              images
                .slice(0, 4)
                .map((image: string, idx: number) => (
                  <Image
                    className="object-contain"
                    key={idx}
                    src={image}
                    alt="product subs images"
                    width="60"
                    height="60"
                    onMouseEnter={() => setChangeImage(image)}
                  />
                ))}
          </div>
          <div
            className="flex justify-center overflow-hidden object-cover"
            style={{
              backgroundImage: `url(${changeImage})`,
              height: "100%",
              width: "400px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <Zoom>
              <Image
                data-cy="imageItem"
                src={changeImage}
                alt="product images"
                width="400"
                height="500"
                className="!w-full object-cover cursor-pointer block lg:hidden"
              />
            </Zoom>
          </div>
        </div>
      )}
    </>
  );
}
