import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { m, AnimatePresence } from "framer-motion";

export default function CartBar({
  openCartBar,
  setOpenCartBar,
}: {
  openCartBar: boolean;
  setOpenCartBar: (v: boolean) => void;
}) {
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
          className="absolute top-[54px] right-0 h-fit w-[360px] bg-white z-[9999] p-4 shadow-xl"
        >
          <div className="flex flex-col justify-between gap-8">
            <h1>
              You have <strong>3</strong> items in your cart{" "}
            </h1>
            <div className="flex flex-col snap-y gap-6 border-b border-gray-200 pb-4 max-h-[360px] overflow-y-auto">
              <div className="flex justify-between snap-center cursor-grab">
                <Image
                  src="/assets/images/og.png"
                  width="0"
                  height="0"
                  alt="prod"
                  className="h-20 w-20 object-cover"
                />
                <div className="flex flex-col gap-2">
                  <h2 className="text-sm capitalize ">
                    This si hjh hj JHQS QSL
                  </h2>
                  <div className="inline-flex gap-4 font-bold">
                    <span>1</span>
                    <span>X</span>
                    <span>$80</span>
                  </div>

                  <div className="flex justify-between">
                    <div className="inline-flex gap-4">
                      <span className="font-light">Style: </span>
                      <strong> One </strong>
                    </div>
                    <div className="inline-flex gap-4">
                      <span className="font-light">Size: </span>
                      <strong> S </strong>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Trash className="text-red-500" size={20} />
                </div>
              </div>
              <div className="flex justify-between snap-center">
                <Image
                  src="/assets/images/og.png"
                  width="0"
                  height="0"
                  alt="prod"
                  className="h-20 w-20 object-cover"
                />
                <div className="flex flex-col gap-2">
                  <h2 className="text-sm capitalize ">
                    This si hjh hj JHQS QSL
                  </h2>
                  <div className="inline-flex gap-4 font-bold">
                    <span>1</span>
                    <span>X</span>
                    <span>$80</span>
                  </div>

                  <div className="flex justify-between">
                    <div className="inline-flex gap-4">
                      <span className="font-light">Style: </span>
                      <strong> One </strong>
                    </div>
                    <div className="inline-flex gap-4">
                      <span className="font-light">Size: </span>
                      <strong> S </strong>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Trash className="text-red-500" size={20} />
                </div>
              </div>
              <div className="flex justify-between snap-center">
                <Image
                  src="/assets/images/og.png"
                  width="0"
                  height="0"
                  alt="prod"
                  className="h-20 w-20 object-cover"
                />
                <div className="flex flex-col gap-2">
                  <h2 className="text-sm capitalize ">
                    This si hjh hj JHQS QSL
                  </h2>
                  <div className="inline-flex gap-4 font-bold">
                    <span>1</span>
                    <span>X</span>
                    <span>$80</span>
                  </div>

                  <div className="flex justify-between">
                    <div className="inline-flex gap-4">
                      <span className="font-light">Style: </span>
                      <strong> One </strong>
                    </div>
                    <div className="inline-flex gap-4">
                      <span className="font-light">Size: </span>
                      <strong> S </strong>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Trash className="text-red-500" size={20} />
                </div>
              </div>
              <div className="flex justify-between snap-center">
                <Image
                  src="/assets/images/og.png"
                  width="0"
                  height="0"
                  alt="prod"
                  className="h-20 w-20 object-cover"
                />
                <div className="flex flex-col gap-2">
                  <h2 className="text-sm capitalize ">
                    This si hjh hj JHQS QSL
                  </h2>
                  <div className="inline-flex gap-4 font-bold">
                    <span>1</span>
                    <span>X</span>
                    <span>$80</span>
                  </div>

                  <div className="flex justify-between">
                    <div className="inline-flex gap-4">
                      <span className="font-light">Style: </span>
                      <strong> One </strong>
                    </div>
                    <div className="inline-flex gap-4">
                      <span className="font-light">Size: </span>
                      <strong> S </strong>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Trash className="text-red-500" size={20} />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex justify-between font-bold">
                <span>Subtotal:</span>
                <strong className="text-base tracking-wider">$200.00</strong>
              </div>
              <div className="flex flex-col gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-sm py-8 capitalize text-xl "
                >
                  view cart
                </Button>
                <Button
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
