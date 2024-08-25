"use client";
import React from "react";
import { useSelector } from "react-redux";
import CartList from "./CartList";
import { IRootState } from "@/store";
import { memoize } from "proxy-memoize";
import Container from "@/components/custom/Container";
import EmptyCart from "./EmptyCart";

export default function Cart() {
  const { cart } = useSelector(memoize((state: IRootState) => ({ ...state })));

  return (
    <>
      <section className="h-screen data-cy=['cart-section']">
        <Container>
          {cart.cartItems.length === 0 ? <EmptyCart /> : <CartList />}
        </Container>
      </section>
    </>
  );
}
