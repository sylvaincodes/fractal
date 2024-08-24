import Container from "@/components/custom/Container";
import Row from "@/components/custom/Row";
import Products from "@/components/modules/website/products";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <section className="my-10">
        <Container>
          {/* breadcrumbs  */}
          <Row>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <Link href="/" className="text-xl hover:text-primary-500">
                    Home
                  </Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <Link
                    href="/products"
                    className="text-xl font-bold hover:text-primary-500"
                  >
                    Store
                  </Link>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </Row>
        </Container>
      </section>
      <Products />
    </>
  );
}
export const metadata: Metadata = {
  title: "Fractal - Products page",
  description:
    "A Ecommerce app. We are selling clothing, shoes for mens womens and kids",
  icons: {
    icon: "/assets/images/logo.svg",
  },
};
