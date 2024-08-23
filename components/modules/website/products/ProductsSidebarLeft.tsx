import HeadingSidebar from "@/components/custom/HeadingSidebar";
import React from "react";
import ProductsCatAccordions from "@/components/custom/ProductsCatAccordions";
import ProductsFilters from "@/components/custom/ProductsFilters";

export default function ProductsSidebarLeft({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  loading,
  setLoading,
  className,
}: {
  minPrice: number;
  maxPrice: number;
  setMinPrice: (value: number) => void;
  setMaxPrice: (value: number) => void;
  loading: boolean;
  setLoading: (e: boolean) => void;
  className?: string;
}) {
  return (
    <div className={`lg:max-w-[300px] h-full ${className}`}>
      <div className="flex flex-col gap-8 items-center">
        {/* product categories  */}
        <div className="flex flex-col gap-2 items-center w-full" >
          <HeadingSidebar name="Product categories" />
          <ProductsCatAccordions />
        </div>

        {/* filters prices */}
        <div className="flex flex-col gap-2 items-center w-full">
          <HeadingSidebar name="Filter by price" />
          <ProductsFilters
            minPrice={minPrice}
            maxPrice={maxPrice}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
            setLoading={setLoading}
            loading={loading}
          />
        </div>

        {/* latest products  */}
      </div>
    </div>
  );
}
