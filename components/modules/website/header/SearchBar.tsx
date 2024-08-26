"use client";
import React from "react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import { Product } from "@/types";
import axios from "axios";
import toast from "react-hot-toast";
import Toast from "@/components/custom/Toast";
import { getBestPriceWithDiscountFromProduct } from "../../../../lib/utils";
import Loading from "@/components/custom/Loading";
import { useRouter } from "next/navigation";

export function SearchBar({
  openSearchBar,
  setOpenSearchBar,
}: {
  openSearchBar: boolean;
  setOpenSearchBar: (value: boolean) => void;
}) {
  const router = useRouter();
  const [data, setData] = useState<Product[]>();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {

    setLoading(true)
    const search = e.currentTarget.value;
    if (search.length > 1) {
      await axios
        .get(process.env.NEXT_PUBLIC_API_URL + "/api/products", {
          params: {
            search: search,
          },
        })
        .then((response) => {
          setData(response.data.data);
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => {
          setLoading(false);
        });

      if (error) {
        toast.custom(<Toast message={error} status="error" />);
      }
    }
  };

  return (
    <Dialog open={openSearchBar}>
      <DialogContent className="sm:max-w-md lg:max-w-screen-xl z-[99999]">
        <div className="flex items-center w-full gap-4">
          <Search className="text-slate-300" />
          <Input
            onInput={handleSearch}
            placeholder="women shirt, shoes"
            className="outline-none text-slate-500 text-base"
          />
          <Button
            onClick={() => setOpenSearchBar(!openSearchBar)}
            type="button"
            variant="outline"
            className="hover:bg-primary-700"
          >
            <X className="bg-transparent text-black hover:text-white" />
          </Button>
        </div>

        <div className="flex h-[600px] overflow-y-auto w-full py-12 gap-4 flex-col justify-start items-center px-12">
          {!loading ? (
            data?.map((item: Product, idx: number) => (
              <div
                onClick={() => {
                  router.push(`/products/${item.slug}`);
                  setOpenSearchBar(false);
                }}
                title="click to see"
                key={idx}
                className="lg:h-fit group flex flex-col  justify-start gap-8 px-8  items-center w-full py-4 hover:border-gray-50 cursor-pointer  hover:scale-105 transition-all hover:shadow-lg lg:flex-row lg:px-2 lg:gap-32 "
              >
                <Image
                  src={item.subProducts[0].options[0].images[0]}
                  height={80}
                  width={60}
                  className="object-contain"
                  alt="product"
                />
                <h6 className="capitalize">{item.name.substring(0, 100)}</h6>

                <div className="w-40 text-right lg:ms-auto font-bold text-xl text-primary-900">
                  {" "}
                  $ {getBestPriceWithDiscountFromProduct(item)}
                </div>
              </div>
            ))
          ) : (
            <Loading isLoading={loading} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
