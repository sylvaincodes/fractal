import CategoriesPage from "@/components/modules/website/categories";
import React, { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Container from "@/components/custom/Container";
import Link from "next/link";
import { getProductBySlug } from "@/actions/product";
import { Product, SubCategory } from "@/types";

export default async function page({ params }: { params: { slug: string } }) {
  const product: Product = await getProductBySlug(params.slug);
  console.log(product);
  return (
    <>
      <section className="my-10">
        <Container>
          <Breadcrumb>
            <BreadcrumbList className="capitalize flex flex-wrap">
              <Link href="/" className="text-xl hover:text-primary-500">
              Store
              </Link>
              <BreadcrumbSeparator />
              <Link
                href={"/products"}
                className="text-xl hover:text-primary-500"
              >
                Products
              </Link>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-xl font-bold hover:text-primary-500 ">
                  {params.slug}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Container>
      </section>
      <CategoriesPage slug={params.slug} />
    </>
  );
}

// or Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  return {
    title: `${params.slug} - Carrefour`,
    description: "Online Ecommerce for selling anything electronics",
    icons: {
      icon: "/assets/images/logo.svg",
    },
  };
}
