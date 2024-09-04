import { ShoppingBasket } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function EmptyCart() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4 w-fit justify-center m-auto py-20 items-center">
      <ShoppingBasket className="font-bold" size={100} />
      <h3 className="text-xl lg:text-h3">Your cart is empty</h3>
      <Button
        variant="default"
        size="lg"
        className="capitalize"
        onClick={() => router.push("/products")}
      >
        shop now
      </Button>
    </div>
  );
}
