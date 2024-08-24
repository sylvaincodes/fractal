import { Product } from "@/types";
import React from "react";
import { ShoppingBasket } from "lucide-react";
import ProductCardTwo from "./ProductCardTwo";
import Loading from "./Loading";

export default function ProductsContent({
  loading,
  products,
}: {
  loading: boolean;
  products: Product[];
}) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 relative">
        {!loading ? (
          products &&
          products.map((item: Product, idx: number) => {
            return <ProductCardTwo key={idx} item={item} />;
          })
        ) : (
          <div className="flex mt-20">
            <Loading isLoading={loading} />
          </div>
        )}
      </div>
      {loading === false && products.length === 0 && (
        <div className="flex flex-col justify-center items-center py-20 px-20 w-full">
          <ShoppingBasket className="font-bold" size={100} />
          <h3 className="">
            No product found!
          </h3>
        </div>
      )}
    </>
  );
}
