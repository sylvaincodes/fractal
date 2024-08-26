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
import ProductPage from "@/components/modules/website/Product";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";

export default async function page({ params }: { params: { slug: string } }) {
  const product: Product = await getProductBySlug(params.slug);

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
                <Link
                  href="/products"
                  className="text-xl hover:text-primary-500"
                >
                  Store
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />

              <Link
                className="text-xl hover:text-primary-500"
                href={`/categories/${product.category.slug}/products`}
              >
                {product.category.name}
              </Link>
              <BreadcrumbSeparator />
              {product.subCategories.map((item: SubCategory, idx: number) => {
                return (
                  <Fragment key={idx}>
                    <ul>
                      <li>
                        <Link
                          className="text-xl hover:text-primary-500"
                          href={`/categories/${item.slug}/products`}
                        >
                          {item.name.substring(0, 100)}
                        </Link>
                      </li>
                    </ul>
                  </Fragment>
                );
              })}
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
      <ProductPage product={product} />
    </>
  );
}

// or Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const product: Product = await getProductBySlug(params.slug);
  const images = product.subProducts[0].options[0].images[0];

  return {
    title: `Buy ${params.slug} - Carrefour`,
    description: "Online Ecommerce for selling anything electronics",
    icons: {
      icon: "/assets/images/logo.svg",
    },

    //For SEO: Sharing on social media twitter, whatsapp, Linkeidn etc
    openGraph: mergeOpenGraph({
      title: `Buy ${product.name.substring(0, 60)}`,
      url: `/products/${params.slug}`,
      images: `${images}`,
    }),
  };
}
