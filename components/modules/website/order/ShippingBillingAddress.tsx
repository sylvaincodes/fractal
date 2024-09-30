"use client";
import { Mail } from "lucide-react";
import Image from "next/image";
import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Order } from "@/types";
import { Button } from "@/components/ui/button";
import Toast from "@/components/custom/Toast";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function ShippingBillingAddress({
  order,
  loading,
  setLoading,
}: {
  order: Order | undefined;
  loading: boolean;
  setLoading: (v: boolean) => void;
}) {
  const { user } = useUser();

  const router = useRouter();

  const handledelivered = async () => {
    if (loading) {
      return;
    }

    const data = {
      id: order?._id,
      status: order?.status,
      shippingStatus: "delivered",
    };

    setLoading(true);
    await axios
      .put(process.env.NEXT_PUBLIC_API_URL + "/api/order", data)
      .then((response) => {
        const data = response.data;
        const success = response.data.success;
        if (!success) {
          toast.custom(<Toast message={data.message} status="error" />);
        } else {
          toast.custom(<Toast message={data.message} status="success" />);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
        router.refresh();
      });
  };

  const handlecompleted = async () => {
    if (loading) {
      return;
    }
    const data = {
      id: order?._id,
      status: "completed",
      shippingStatus: order?.shippingStatus,
    };

    setLoading(true);
    await axios
      .put(process.env.NEXT_PUBLIC_API_URL + "/api/order", data)
      .then((response) => {
        const data = response.data;
        const success = response.data.success;
        if (!success) {
          toast.custom(<Toast message={data.message} status="error" />);
        } else {
          toast.custom(<Toast message={data.message} status="success" />);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
        router.refresh();
      });
  };

  return (
    <div className="w-full col-span-1 p-4 bg-neutral-100 lg:w-[320px] flex flex-col gap-8 items-flex-start pt-4 h-fit">
      <div className="flex items-center gap-4">
        <Image
          src={
            user?.imageUrl
              ? user?.imageUrl
              : "https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
          }
          width={60}
          height={60}
          alt="user image"
        />
        <div className="flex flex-col">
          <h6 className="">{user?.fullName}</h6>
        </div>
      </div>
      <hr />
      <div className="inline-flex gap-4">
        <Mail />
        <span className="">{user?.emailAddresses[0].emailAddress}</span>
      </div>
      <div className="flex flex-col gap-1">
        <h6 className="">Shipping Address</h6>
        <p className="text-slate-700">{order?.shippingAddress?.address}</p>
      </div>

      <div className="flex flex-col gap-1">
        <h6 className="">Billing Address</h6>
        <p className="text-slate-700">{order?.shippingAddress?.address}</p>
      </div>
      <div className="mt-auto gap-4 flex flex-col ">
        <Button
          disabled={
            loading ||
            order?.shippingStatus === "delivered" ||
            order?.status === "completed"
          }
          onClick={() => handledelivered()}
          className="font-bold w-full bg-indigo-400 rounded-none border border-gray-300 text-slate-700 p-8 hover:text-white hover:bg-black"
        >
          MARKED AS DELIVERED
        </Button>

        <Button
          disabled={loading || order?.status === "completed"}
          onClick={() => handlecompleted()}
          className="font-bold w-full bg-blue-400 border rounded-none border-gray-300 text-slate-700 p-8 hover:text-white hover:bg-black"
        >
          MARKED AS COMPLETED
        </Button>
      </div>
    </div>
  );
}
