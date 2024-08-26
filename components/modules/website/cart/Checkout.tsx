import CurrencyFormat from "@/components/custom/CurrencyFomat";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

export default function Checkout({
  subtotal,
  shippingFee,
  total,
  tax,
  className,
  addToCartHandler,
  loading,
}: {
  subtotal: number;
  shippingFee?: number;
  tax?: number;
  total: number;
  className: string;
  addToCartHandler: () => void;
  loading: boolean;
}) {
  const router = useRouter();

  return (
    <div
      className={`flex border boder-border p-4 min-w-[360px] flex-col gap-4 h-full ${className}`}
    >
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>
          <CurrencyFormat className="text-right" value={subtotal} />
        </span>
      </div>
      <hr />
      <div className="flex justify-between">
        <span>Tax</span>
        <span className="">
          <CurrencyFormat className="text-right" value={tax ? tax : 0} />
        </span>
      </div>
      <hr />
      <div className="flex justify-between">
        <span>Shipping</span>
        <span className="">
          <CurrencyFormat
            className="text-right"
            value={shippingFee ? shippingFee : 0}
          />
        </span>
      </div>
      <hr />

      <div className="flex justify-between">
        <strong>Grand Total</strong>
        <strong>
          <CurrencyFormat className="text-right" value={total} />
        </strong>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <Button
          variant="default"
          size="lg"
          onClick={() => {
            addToCartHandler();
          }}
          disabled={loading}
        >
          Continue to checkout
        </Button>

        <Button
          variant="outline"
          disabled={loading}
          className="text-center hover:text-primary-500"
          onClick={() => router.push("/products")}
        >
          Continue to shop
        </Button>
      </div>
    </div>
  );
}
