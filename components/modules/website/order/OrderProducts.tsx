import { Order, ProductOrder } from "@/types";
import Image from "next/image";
import React from "react";

export default function OrderProducts({ order }: { order: Order | undefined }) {
  return (
    <div className="w-full border-neutral-100 mt-4">
      {order?.products.map((item: ProductOrder, idx: number) => (
        <div
          key={idx}
          className="flex flex-col lg:flex-row items-center py-6 px-6 border-b border-gray-200 bg-neutral-100 gap-6 w-full"
        >
          <div className="max-lg:w-full">
            <Image
              alt="product"
              src={item.images}
              className="bg-cover h-full w-auto lg:max-w-[140px]"
              width={100}
              height={100}
            />
          </div>
          <div className="flex flex-row items-center w-full ">
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
              <div className="flex items-center">
                <div className="">
                  <h6 className="capitalize">{item.name.substring(0, 60)}</h6>
                  <div className="flex items-center ">
                    <p className="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                      Size: <span className="text-gray-500">{item.option}</span>
                    </p>
                    <div className="font-medium text-base leading-7 text-black inline-flex gap-2 items-center">
                      Color:{" "}
                      <div
                        className="text-gray-500 w-5 h-5 rounded-sm"
                        style={{ background: `${item.style.color}` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center ">
                    <p className="font-medium text-base leading-7 text-black ">
                      Qty: <span className="text-gray-500">{item.qty}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-5">
                <div className="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                  <div className="flex gap-3 lg:block">
                    <h5 className="">price</h5>
                    <p className="lg:mt-4 font-medium text-sm leading-7 text-indigo-600">
                      ${item.price}
                    </p>
                  </div>
                </div>
                <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
                  <div className="flex gap-4 lg:block">
                    <h5 className="">Status</h5>
                    <p className="capitalize font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">
                      {order.shippingStatus}
                    </p>
                  </div>
                </div>
                <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                  <div className="flex gap-3 lg:block">
                    <h5 className="">Delivery Time</h5>
                    <p className="font-medium text-base whitespace-nowrap leading-7 lg:mt-3 text-emerald-500">
                      {order.shippingTimes}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
