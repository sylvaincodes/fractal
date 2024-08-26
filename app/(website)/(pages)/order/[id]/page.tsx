import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import Link from "next/link";
import Container from "@/components/custom/Container";
import OrderWrapper from "@/components/modules/website/order";

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <section className="my-10">
        <Container>
          <Breadcrumb>
            <BreadcrumbList className="capitalize flex flex-wrap">
              <Link href="/account/dashboard" className="text-xl hover:text-primary-500">
                Dashoard
              </Link>
              <BreadcrumbSeparator />
              <Link href={"/account/orders"} className="text-xl hover:text-primary-500">
                Orders
              </Link>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-xl font-bold hover:text-primary-500 ">
                  # {params.id}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Container>
      </section>
      <OrderWrapper id={params.id} />
    </>
  );
}

// or Dynamic metadata
export function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: `Order Id #${params.id}`,
    description: "Online Ecommerce for selling anything in usa",
    icons: {
      icon: "/assets/images/logo.svg",
    },
  };
}
