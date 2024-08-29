"use client";
import { Product, SubCategory } from "@/types";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsTwitterX, BsWhatsapp } from "react-icons/bs";
import { SiMeta } from "react-icons/si";

export default function ProductShare({
  product,
  active,
}: {
  product: Product;
  active: number;
}) {
  const pathname = usePathname();
  return (
    <ul className="flex justify-between flex-wrap items-center gap-1 mt-auto w-full">
      <li className="inline-flex items-center gap-4">
        <h6 className="capitalize">sku: </h6>
        <span className="text-primary uppercase ms-auto">
          {product.subProducts[active].sku}
        </span>
      </li>
      <li className="inline-flex items-center gap-4">
        <h6 className="capitalize">categories: </h6>
        <div className="text-primary capitalize inline-flex gap-4 ms-auto">
          {product.subCategories.map((item: SubCategory, idx: number) => {
            return (
              <Link href={`/categories/${item.slug}/products`} key={idx}>
                {item.name}
              </Link>
            );
          })}
        </div>
      </li>

      <li className="inline-flex items-center gap-8">
        <h6 className="capitalize">share: </h6>
        <div className=" capitalize inline-flex gap-8 ms-auto text-slate-700">
          <Link
            target="_blank"
            href={`https://x.com/intent/post?url=${process.env.NEXT_PUBLIC_SERVER_URL}${pathname}`}
          >
            <BsTwitterX className="hover:text-primary" />
          </Link>
          <Link
            target="_blank"
            href={`https://www.linkedin.com/shareArticle?url=${process.env.NEXT_PUBLIC_SERVER_URL}${pathname}`}
          >
            <Linkedin className="hover:text-primary" />
          </Link>
          <Link
            target="_blank"
            href={`https://facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_SERVER_URL}${pathname}`}
          >
            <SiMeta className="hover:text-primary" />
          </Link>
          <Link
            target="_blank"
            href={`https://web.whatsapp.com/send?text=${process.env.NEXT_PUBLIC_SERVER_URL}${pathname}`}
          >
            <BsWhatsapp className="hover:text-primary" />
          </Link>
        </div>
      </li>
    </ul>
  );
}
