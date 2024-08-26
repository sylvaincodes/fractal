"use client";
import React from "react";
import StripePayment from "./StripePayment";
import Image from "next/image";
import { Order } from "@/types";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// import Loading from "@/components/custom/Loading";

export default function OrderSummary({
  order,
  loading,
  setLoading,
}: {
  order: Order | undefined;
  loading: boolean;
  setLoading: (v: boolean) => void;
}) {
  return (
    <div className="flex gap-10 mt-4 flex-wrap lg:flex-nowrap">
      <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-neutral-100 dark:bg-gray-800 gap-8">
        <h5 className="">Summary</h5>
        <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
          <div className="flex justify-between w-full">
            <h6 className="">Subtotal</h6>
            <p className="">
              ${order?.totalBeforeDiscount ? order.totalBeforeDiscount : 0}
            </p>
          </div>
          <div className="flex justify-between items-center w-full">
            <h6>
              Discount
              <span className="ms-2">
                (
                {order?.couponApplied?.discount
                  ? order.couponApplied.discount
                  : 0}
                %)
              </span>
            </h6>
            <p className="">
              -$
              {order?.couponApplied?.discount &&
                (order?.couponApplied?.discount * order.totalBeforeDiscount) /
                  100}{" "}
            </p>
          </div>
          <div className="flex justify-between items-center w-full">
            <h6 className="">Shipping</h6>
            <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
              ${order?.shippingPrice ? order.shippingPrice : 0}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">
            Total
          </p>
          <p className="text-xl font-bold">${order?.total}</p>
        </div>
      </div>

      <div className="flex flex-col px-4 md:p-6 xl:p-8 w-full gap-8 bg-neutral-100">
        <h5 className="">Payment</h5>
        {order?.isPaid ? (
          <div className="flex w-full justify-center items-center">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/5567/5567291.png"
              alt="paid"
              width="100"
              height="100"
            />
          </div>
        ) : order?.paymentMethod === "credit_card" ? (
          <StripePayment
            order={order}
            setLoading={setLoading}
            loading={loading}
          />
        ) : (
          order?.paymentMethod === "cash_on_delivery" && (
            <div className="flex justify-center flex-col gap-8 items-center">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/5359/5359689.png"
                alt="paid"
                width="100"
                height="100"
              />
            </div>
          )
        )}

        {/* {order?.paymentMethod === "paypal" && (
          <PayPalScriptProvider
            options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID! }}
          >
            <PayPalButtons style={{ layout: "horizontal" }} />
          </PayPalScriptProvider>
        )} */}
      </div>
    </div>
  );
}
