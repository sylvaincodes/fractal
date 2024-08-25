"use client";
import { updateToCart } from "@/store/cartSlice";
import { CartItem } from "@/types";
import { MinusIcon, PlusIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IRootState } from "@/store";
import { memoize } from "proxy-memoize";
import { Button } from "../ui/button";

export default function ProductQtyCart({ item }: { item: CartItem }) {
  const { cart } = useSelector(memoize((state: IRootState) => ({ ...state })));

  const dispatch = useDispatch();
  const [qty, setQty] = useState<number>(1);

  const updateQty = (value: string) => {
    if (value === "dec") {
      if (qty === 1) {
        toast.error("your reached the limit");
        return;
      }
    }
    if (value === "inc") {
      if (qty === 9) {
        toast.error("your reached the limit");
        return;
      }
    }

    // Cart operation
    if (value === "dec") {
      setQty(qty === 1 ? qty : qty - 1);
    }
    if (value === "inc") {
      setQty(qty === 9 ? qty : qty + 1);
    }

    // Update cart
    const newCart = cart.cartItems.map((p: CartItem) => {
      if (p._uid === item._uid) {
        return {
          ...p,
          qty: value === "dec" ? qty - 1 : qty + 1,
        };
      }
      return p;
    });

    dispatch(updateToCart(newCart));
  };

  useEffect(() => {
    setQty(item.qty);
  }, [item]);

  return (
    <div className="inline-flex justify-center items-center gap-8 border border-border px-4 rounded-lg">
      <Button onClick={() => updateQty("dec")} className="" variant="nostyle">
        <MinusIcon className="h-4 w-4  group-hover:text-primary-500" />
      </Button>
      <strong className="text-center text-xl">{qty}</strong>
      <Button onClick={() => updateQty("inc")} className="" variant="nostyle">
        <PlusIcon className="h-4 w-4 group-hover:text-primary-500" />
      </Button>
    </div>
  );
}
