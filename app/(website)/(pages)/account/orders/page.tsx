import { getOrderByUserId } from "@/actions/order";
import { DataTableOrder } from "@/components/modules/website/account/Order";
import { currentUser } from "@clerk/nextjs/server";
import { Metadata } from "next";
import React from "react";
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

  return (
    <>
      <section className="my-10">
        <Container>
          <Breadcrumb>
            <BreadcrumbList className="capitalize flex flex-wrap">
              <Link href="/" className="text-xl hover:text-primary-500">
                Dashboard 
              </Link>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-xl font-bold hover:text-primary-500 ">
                  Orders
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Container>
      </section>
      <div className="p-4 h-screen overflow-auto">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 ">
          <div className="flex justify-center mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <DataTableOrder data={orders} />
          </div>
        </div>
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: "Orders - Carrefour",
  description: "Online Ecommerce for selling anything in usa",
  icons: {
    icon: "/assets/images/logo.svg",
  },
};
