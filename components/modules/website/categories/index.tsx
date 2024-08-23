"use client";
import Container from "@/components/custom/Container";
import Row from "@/components/custom/Row";
import React, { useState } from "react";
import ProductsSidebarLeft from "../products/ProductsSidebarLeft";
import ProductsMainContent from "../products/ProductsMainContent";

export default function Categories({ slug }: { slug: string }) {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(7000);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <section className="my-10">
      <Container>
        {/* Content page  */}
        <Row className="mt-10 gap-12 items-start">
          {/* sidebar left  */}
          <ProductsSidebarLeft
            minPrice={minPrice}
            maxPrice={maxPrice}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
            loading={loading}
            setLoading={setLoading}
            className="hidden lg:block"
          />
          {/* main content */}
          <ProductsMainContent
            minPrice={minPrice}
            maxPrice={maxPrice}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
            loading={loading}
            setLoading={setLoading}
            slug={slug}
            className="flex-1 lg:flex flex-col gap-4 justify-start h-full"
          />
        </Row>
      </Container>
    </section>
  );
}
