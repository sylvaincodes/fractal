import { Button } from "@/components/ui/button";
import React from "react";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { SearchBar } from "./SearchBar";
import CartBar from "./CartBar";
import { FaHeart } from "react-icons/fa6";

export default function IconsGroups({
  openSearchBar,
  openCartBar,
  setOpenSearchBar,
  setOpenCartBar,
}: {
  openSearchBar: boolean;
  openCartBar: boolean;
  setOpenSearchBar: (value: boolean) => void;
  setOpenCartBar: (value: boolean) => void;
}) {
  return (
    <div className="flex items-center gap-12 relative">
      <div className="inline-flex items-center gap-4">
        <SearchBar
          openSearchBar={openSearchBar}
          setOpenSearchBar={setOpenSearchBar}
        />

        <Button
          variant="nostyle"
          size="icon"
          onClick={() => setOpenSearchBar(!openSearchBar)}
        >
          <CiSearch size={40} className="hover:text-primary-900" />
        </Button>

        <Button className="hidden group lg:block" variant="nostyle" size="icon">
          <CiHeart size={40} className="group-hover:hidden" />
          <FaHeart
            size={36}
            className="hidden group-hover:block transitions-all text-primary-500 animate-ping-custom"
          />
        </Button>

        <Button
          onMouseEnter={() => setOpenCartBar(!openCartBar)}
          className="hidden lg:block relative"
          variant="nostyle"
          size="icon"
        >
          <CiShoppingCart
            size={40}
            className="font-bold hover:text-primary-900"
          />
          <span className="absolute flex items-center justify-center  text-white text-base -top-1 justify-items-stretch -right-2 h-6 w-6 rounded-full bg-primary-500">
            0
          </span>
        </Button>

        <CartBar openCartBar={openCartBar} setOpenCartBar={setOpenCartBar} />
      </div>
    </div>
  );
}
