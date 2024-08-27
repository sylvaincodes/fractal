import { Button } from "@/components/ui/button";
import { ShoppingBasket, Trash } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import Toast from "@/components/custom/Toast";
import { createOrder } from "@/store/orderSlice";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "@/store";
import { memoize } from "proxy-memoize";
import { CartItem } from "@/types";
import { updateToCart } from "@/store/cartSlice";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import CurrencyFormat from "@/components/custom/CurrencyFomat";

export default function CartBar({
  openCartBar,
  setOpenCartBar,
}: {
  openCartBar: boolean;
  setOpenCartBar: (v: boolean) => void;
}) {
  const { cart, order } = useSelector(
    memoize((state: IRootState) => ({ ...state }))
  );

  const dispatch = useDispatch();

  const handleRemoveItem = (item: CartItem) => {
    const newCart = cart.cartItems.filter(
      (p: CartItem) => p._uid !== item._uid
    );

    dispatch(updateToCart(newCart));
    toast.custom(
      <Toast message="Product deleted from cart" status="success" />
    );
  };

  const subtotal = cart.cartItems.reduce(
    (accumulator: number, currentValue: CartItem) =>
      accumulator + currentValue.price * currentValue.qty,
    0
  );

  const { isSignedIn, user } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const addToCartHandler = async () => {
    if (loading) {
      return;
    }

    if (order.orderDetails.length > 0) {
      toast.custom(
        <Toast
          message="An order has already been placing! Wait a second..."
          status="success"
        />
      );
      router.push("/checkout");
      return;
    }

    if (cart.cartItems.length == 0) {
      toast(
        <div className="w-[300px]">
          Your cart is empty
          <Link
            href="/products"
            className=" inline-flex items-center justify-between gap-4 font-bold text-primary"
          >
            &nbsp; Go to shop
          </Link>
        </div>
      );
      return;
    }
    if (isSignedIn) {
      setLoading(true);

      const data = {
        cart: cart.cartItems,
        user_id: user.id,
      };

      await axios
        .post(process.env.NEXT_PUBLIC_API_URL + "/api/cart", data)
        .then((response) => {
          const data = response.data;
          const order = data.addCart;
          if (data) {
            dispatch(createOrder({ order }));
          }
          toast.custom(<Toast message={data.message} status="success" />);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
          router.push("/checkout");
        });
    } else {
      router.push("/sign-in");
    }
  };

  return (
    <AnimatePresence>
      {openCartBar && (
        <m.div
          onMouseLeave={() => setOpenCartBar(!openCartBar)}
          exit={{
            y: -20,
            opacity: 0,
            filter: "blur(5px)",
            scale: "scale(0)",
            transition: { ease: "easeIn", duration: 0.22 },
          }}
          initial={{ opacity: 0, y: -15 }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { type: "spring", duration: 0.7 },
          }}
          className="absolute top-[54px] right-0 h-fit w-[360px] bg-white z-[9999] p-4 shadow-2xl"
        >
          <div className="flex flex-col justify-between gap-8">
            <p className="text-center">
              You have <strong>{cart.cartItems.length}</strong> items in your
              cart{" "}
            </p>
            <div className="flex flex-col snap-y gap-6 border-b border-gray-200 pb-4 max-h-[360px] overflow-y-auto">
              {cart.cartItems.length > 0 ? (
                cart.cartItems.map((item: CartItem, idx: number) => (
                  <div
                    key={idx}
                    className="flex justify-between  gap-4 snap-center cursor-grab"
                  >
                    <Image
                      src={item.images[0]}
                      width="200"
                      height="200"
                      alt="prod"
                      className="h-20 w-20 object-cover"
                    />
                    <div className="flex flex-col gap-1">
                      <span className="capitalize">
                        {item.name.substring(0, 30)}
                      </span>
                      <div className="inline-flex gap-4 font-bold">
                        <span className="font-bold">{item.qty}</span>
                        <span>X</span>
                        <span className="font-bold">${item.price}</span>
                      </div>

                      <div className="inline-flex justify-between">
                        <div className="inline-flex justify-between gap-1 items-center">
                          <span className="">Style: </span>
                          <span className="font-bold">
                            {" "}
                            {item.style.name.substring(0, 8)}{" "}
                          </span>
                        </div>
                        <div className="inline-flex gap-1">
                          <span className="">Option: </span>
                          <span className="font-bold"> {item.option} </span>
                        </div>
                      </div>
                    </div>

                    <div
                      role="button"
                      onClick={() => handleRemoveItem(item)}
                      className="flex items-start"
                    >
                      <Trash className="hover:text-primary-500" size={20} />
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col gap-1 items-center">
                  <ShoppingBasket
                    className="text-slate-700 font-bold"
                    size={100}
                  />
                  <h5 className="">Your cart is empty</h5>

                  <Button className="bg-primary-700 text-white border capitalize border-slate-200">
                    <Link href="/products">shop now</Link>
                  </Button>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex justify-between font-bold">
                <h6>Subtotal:</h6>
                <strong className="">
                  <CurrencyFormat value={subtotal} className="text-right" />
                </strong>
              </div>
              <div className="flex flex-col gap-4">
                <Link
                  href="/cart"
                  onClick={() => router.push("/cart")}
                  className="rounded-sm py-4 flex justify-center hover:bg-primary-500 hover:text-white capitalize text-xl border border-border"
                >
                  view cart
                </Link>
                <Button
                  onClick={() => {
                    addToCartHandler();
                  }}
                  variant="default"
                  size="lg"
                  className="rounded-sm py-8 capitalize text-xl "
                >
                  checkout
                </Button>
              </div>
            </div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
