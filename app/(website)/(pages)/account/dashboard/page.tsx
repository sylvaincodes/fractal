import { ShoppingBag } from "lucide-react";
import { Metadata } from "next";
import { MdLocalShipping, MdMoney } from "react-icons/md";
import * as React from "react";
import { Order } from "@/types";
import { currentUser } from "@clerk/nextjs/server";
import { getOrderByUserId } from "@/actions/order";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Container from "@/components/custom/Container";
import Link from "next/link";

export default async function Page() {
  const user = await currentUser();
  const orders = await getOrderByUserId(user?.id);

  const received = orders.filter(
    (item: Order) => item.shippingStatus === "delivered"
  );

  const paid = orders
    .filter((item: Order) => item.isPaid === true)
    .reduce((total: number, valeur: Order) => total + valeur.total, 0);
  return (
    <>
      <section className="my-10">
        <Container>
          <Breadcrumb>
            <BreadcrumbList className="capitalize flex flex-wrap">
              <Link href="/" className="text-xl hover:text-primary-500">
                Home
              </Link>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-xl font-bold hover:text-primary-500 ">
                  Dashboard
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Container>
      </section>
      <div className="p-4">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 ">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <div className="flex gap-4 items-center">
                <ShoppingBag className="font-bold h-10 w-10" />
                <span className="text-2xl text-gray-400 dark:text-gray-500">
                  {orders.length ? orders.length : 0}+
                </span>
                orders
              </div>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <div className="flex gap-4 items-center">
                <MdLocalShipping className="font-bold h-10 w-10" />
                <span className="text-2xl text-gray-400 dark:text-gray-500">
                  {received.length ? received.length : 0}
                </span>
                received
              </div>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <div className="flex gap-4 items-center">
                <MdMoney className="font-bold h-10 w-10" />
                <span className="text-2xl text-gray-400 dark:text-gray-500">
                  {paid.toFixed(2)}+
                </span>
                paid
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: "Dashboard - Fractal",
  description: "Online Ecommerce for selling anything in usa",
  icons: {
    icon: "/assets/images/logo.svg",
  },
};
