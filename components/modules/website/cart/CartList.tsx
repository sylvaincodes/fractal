"use client";
import React from "react";
import Container from "@/components/custom/Container";
import Row from "@/components/custom/Row";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";
import { CartItem as TypeCartItem } from "@/types";
import { IRootState } from "@/store";
import { memoize } from "proxy-memoize";
import Toast from "@/components/custom/Toast";
import { useUser } from "@clerk/nextjs";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import Loading from "@/components/custom/Loading";

export default function Cart() {
  const { cart } = useSelector(memoize((state: IRootState) => ({ ...state })));
  const { isSignedIn, user } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const addToCartHandler = async () => {
    setLoading(true);
    if (isSignedIn) {
      if (cart.cartItems.length > 8) {
        toast.custom(
          <Toast
            message="You reached the limit of a cart. create another cart"
            status="error"
          />
        );
        setLoading(false);
        return;
      }

      const data = {
        cart: cart.cartItems,
        user_id: user.id,
      };

      await axios
        .post(process.env.NEXT_PUBLIC_API_URL + "/api/cart", data)
        .then((response) => {
          const data = response.data;
          <Toast message={data.message} status="success" />;
          router.push("/checkout");
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {});
    } else {
      router.push("/sign-in");
      toast.custom(
        <Toast message="you must login to continue" status="error" />
      );
    }
  };

  const [total, setTotal] = useState(0);
  const shippingFee = 0;
  const tax = 0;
  const subtotal = cart.cartItems.reduce(
    (accumulator: number, currentValue: TypeCartItem) =>
      accumulator + currentValue.price * currentValue.qty,
    0
  );

  useEffect(() => {
    setTotal(subtotal + shippingFee + tax);
  }, [subtotal, shippingFee, tax]);

  return (
    <section className="my-10">
      {loading && <Loading isLoading={loading} />}
      <Container>
        <Row>
          <h2>Cart</h2>
        </Row>

        <div className="flex flex-col gap-12 items-start mt-20 xl:flex-row">
          <div className="relative overflow-x-auto flex-1 w-full">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 cursor-move">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Subtotal
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.cartItems.length > 0 &&
                  cart.cartItems.map((item: TypeCartItem, idx: number) => (
                    <CartItem item={item} key={idx} />
                  ))}
              </tbody>
            </table>
          </div>

          <Checkout
            className=""
            subtotal={subtotal}
            shippingFee={shippingFee}
            tax={tax}
            total={total}
            addToCartHandler={addToCartHandler}
            loading={loading}
          />
        </div>
      </Container>
    </section>
  );
}
