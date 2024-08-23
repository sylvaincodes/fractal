"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import MobileSidebarLeft from "./MobileSidebarLeft";
import { Product } from "@/types";

export default function ProductsTopBar({
  slug,
  perpage,
  setPerPages,
  setFilter,
  filter,
  loading,
  setMinPrice,
  setMaxPrice,
  minPrice,
  maxPrice,
  setLoading,
  maxPage,
  page,
  products,
}: {
  slug?: string;
  perpage: number;
  filter: string;
  setPerPages: (value: number) => void;
  setFilter: (value: string) => void;
  loading: boolean;
  minPrice: number;
  maxPrice: number;
  setLoading: (e: boolean) => void;
  setMinPrice: (e: number) => void;
  setMaxPrice: (e: number) => void;
  maxPage: number;
  page: number;
  products: Product[];
}) {
  return (
    <div className="lg:flex items-center justify-between w-full ">
      <div className="w-full flex items-center gap-4 flex-1 justify-between">
        <MobileSidebarLeft
          minPrice={minPrice}
          maxPrice={maxPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          loading={loading}
          setLoading={setLoading}
        />

        <div className="hidden lg:flex">
          Showing {maxPage === page ? products.length : perpage * page} of{" "}
          {products.length} results
        </div>

        <div className="ms-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">{filter ? filter : slug}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={"bottom"}>
                <DropdownMenuRadioItem
                  value="top"
                  onClick={() => setFilter("alphabetic")}
                >
                  Alphabetic
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value={filter}
                  onClick={() => setFilter("priceLowToHigh")}
                >
                  Price: Low to high
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value={filter}
                  onClick={() => setFilter("priceHighToLow")}
                >
                  Price : High to low
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value={filter}
                  onClick={() => setFilter("latest")}
                >
                  Latest
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <span className="ms-4">Show:</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">{perpage}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={"bottom"}>
                <DropdownMenuRadioItem
                  value="30"
                  onClick={() => setPerPages(30)}
                >
                  30
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="20"
                  onClick={() => setPerPages(20)}
                >
                  20
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="10"
                  onClick={() => setPerPages(10)}
                >
                  10
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
