import { Product } from "@/types";
import React from "react";
import { ClipLoader } from "react-spinners";
import { ShoppingBasket } from "lucide-react";
import ProductCardTwo from "./ProductCardTwo";

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
            <ClipLoader className="absolute inset-y-20  top-40 inset-x-0 m-auto h-20 w-20 text-primary-900" />
          </div>
        )}
      </div>
      {loading === false && products.length === 0 && (
        <div className="flex flex-col justify-center items-center py-20 px-20 w-full">
          <ShoppingBasket className="font-bold" size={100} />
          <h3 className="flex font-medium text-2xl text-slate-700">
            No product found!
          </h3>
        </div>
      )}
    </>
  );
}
