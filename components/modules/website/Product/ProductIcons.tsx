"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import ProductQty from "./ProductQty";
import axios from "axios";
import Toast from "@/components/custom/Toast";
import toast from "react-hot-toast";
import { CartItem, Options, Product } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { memoize } from "proxy-memoize";
import { IRootState } from "@/store";
import { addToCart, updateToCart } from "@/store/cartSlice";

export default function ProductIcons({
  product,
  active,
  optionActive,
  setLoading,
  loading,
  option,
}: {
  product: Product;
  active: number;
  optionActive: number;
  setLoading: (v: boolean) => void;
  loading: boolean;
  option: Options;
}) {
  const { cart } = useSelector(memoize((state: IRootState) => ({ ...state })));
  const dispatch = useDispatch();

  const addToCartHandler = async () => {
    if (loading) {
      return;
    }
    setLoading(true);

    await axios
      .get(process.env.NEXT_PUBLIC_API_URL + "/api/cart", {
        params: {
          id: product._id,
          style: active,
          option: optionActive,
        },
      })
      .then((response) => {
        const data = response.data;
        if (qty > response.data.stock) {
          toast.custom(
            <Toast
              message="The stock is limited reduce your quantity"
              status="error"
            />
          );
          return;
        }
        const _uid: string = `${data._id}_${data.styleBefore}_${data.optionBefore}`;
        const exist: CartItem | undefined = cart.cartItems.find(
          (p: CartItem) => p._uid === _uid
        );
        if (exist) {
          //update
          const newCart = cart.cartItems.map((p: CartItem) => {
            if (p === exist) {
              return { ...p, qty: qty };
            }
            return p;
          });
          dispatch(updateToCart(newCart));
          toast.custom(<Toast message="product updated" status="success" />);
        } else {
          dispatch(
            addToCart({
              ...data,
              qty,
              option: data.option,
              _uid,
            })
          );
          toast.custom(
            <Toast message="product added to cart" status="success" />
          );
        }
      })
      .catch((err) => {
        toast.custom(<Toast message={err.message} status="error" />);
      })
      .finally(() => {
        setLoading(false);
        const element: HTMLElement = document?.querySelector(
          "#openCart"
        ) as HTMLElement;
        element.click();
      });
  };

  const updateQty = (value: string) => {
    if (value === "dec") {
      setQty(qty === 1 ? qty : qty - 1);
    }
    if (value === "inc") {
      setQty(qty === 9 ? qty : qty + 1);
    }
  };

  const [qty, setQty] = useState<number>(1);
  return (
    <div className="flex items-center flex-wrap gap-12 mt-10">
      <ProductQty updateQty={updateQty} qty={qty} />
      <Button
        id="addToCart"
        onClick={() => {
          addToCartHandler();
        }}
        disabled={option.qty < 0 || loading ? true : false}
        variant="default"
        size="lg"
        className="text-white text-2xl capitalize col-span-2 p-8 flex-1"
        data-cy="addToCartBtn"
      >
        add to cart
      </Button>

      {/* TODO:This is a New feature Whishlist*/}
      {/* <Button
        variant="outline"
        size="lg"
        className="text-icon border-border 
        rounded-lg py-8 hover:bg-primary-500 hover:text-white border"
      >
        <Heart size={30} />
      </Button> */}
    </div>
  );
}
