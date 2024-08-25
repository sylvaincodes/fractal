import { Button } from "@/components/ui/button";
import React from "react";
import { CiCreditCard1, CiFileOn, CiHome } from "react-icons/ci";

export default function CheckoutHeader({ name }: { name: string }) {
  return (
    <div className="flex items-center w-full justify-between flex-wrap my-10">
      <div className="flex items-center flex-col gap-2">
        <Button
          variant={name === "address" ? "default" : "outline"}
          size="icon"
          className={
            name === "address"
              ? "h-20 w-20 rounded-xl"
              : "h-20 w-20 rounded-xl bg-gray-200"
          }
        >
          <CiHome
            className={name === "address" ? "text-white   " : "text-black"}
            size={40}
          />
        </Button>
        <h6>Addresse</h6>
      </div>

      <div className="flex items-center flex-col gap-2">
        <Button
          variant={name === "payment" ? "default" : "outline"}
          size="icon"
          className={
            name === "payment"
              ? "h-20 w-20 rounded-xl"
              : "h-20 w-20 rounded-xl bg-gray-200"
          }
        >
          <CiCreditCard1
            className={name === "payment" ? "text-white   " : "text-black"}
            size={40}
          />
        </Button>
        <h6>Payment</h6>
      </div>

      <div className="flex items-center flex-col gap-2">
        <Button
          variant={name === "review" ? "default" : "outline"}
          size="icon"
          className={
            name === "payment"
              ? "h-20 w-20 rounded-xl"
              : "h-20 w-20 rounded-xl bg-gray-200"
          }
        >
          <CiFileOn
            className={name === "review" ? "text-white   " : "text-black"}
            size={40}
          />
        </Button>
        <h6>Review</h6>
      </div>
    </div>
  );
}
