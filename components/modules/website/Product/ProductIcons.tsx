import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import React, { useState } from "react";
import ProductQty from "./ProductQty";
import axios from "axios";
import Toast from "@/components/custom/Toast";
import toast from "react-hot-toast";
import { CartItem } from "@/types";

export default function ProductIcons() {
  const addToCartHandler = async () => {
    // await axios
    //   .get(process.env.NEXT_PUBLIC_API_URL + "/api/cart", {
    //     params: {
    //       id: product._id,
    //       style: active,
    //       option: optionActive,
    //     },
    //   })
    //   .then((response) => {
    //     const data = response.data;
    //     if (qty > response.data.stock) {
    //       toast.custom(
    //         <Toast
    //           message="The stock is limited reduce your quantity"
    //           status="error"
    //         />
    //       );
    //       return;
    //     }
    //     const _uid: string = `${data._id}_${data.styleBefore}_${data.optionBefore}`;
    //     const exist: CartItem | undefined = cart.cartItems.find(
    //       (p: CartItem) => p._uid === _uid
    //     );
    //     if (exist) {
    //       //update
    //       const newCart = cart.cartItems.map((p: CartItem) => {
    //         if (p === exist) {
    //           return { ...p, qty: qty };
    //         }
    //         return p;
    //       });
    //       // dispatch(updateToCart(newCart));
    //     } else {
    //       // dispatch(
    //       //   addToCart({
    //       //     ...data,
    //       //     qty,
    //       //     option: data.option,
    //       //     _uid,
    //       //   })
    //       // );
    //     }
    //   })
    //   .catch((err) => {
    //     toast.custom(<CustomToast message={err.message} status="error" />);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //     const element: HTMLElement = document?.querySelector(
    //       "#openCart"
    //     ) as HTMLElement;
    //     element.click();
    //   });
    // toast.custom(
    //   <CustomToast message="product added to cart" status="success" />
    // );
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
    <div className="flex items-center gap-12 mt-10">
      <ProductQty updateQty={updateQty} qty={qty} setQty={setQty} />

      <Button
        variant="default"
        size="lg"
        className="text-white text-2xl capitalize col-span-2 p-8 flex-1"
      >
        add to cart
      </Button>

      <Button
        variant="outline"
        size="lg"
        className="text-icon border-border 
        rounded-lg py-8 hover:bg-primary-500 hover:text-white border"
      >
        <Heart size={30} />
      </Button>
    </div>
  );
}
