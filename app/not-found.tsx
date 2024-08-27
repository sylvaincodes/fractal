import Container from "@/components/custom/Container";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
import { Home, Library } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <section className="py-40 w-full h-screen">
      <Container>
        <div className="flex flex-col justify-center mt-20">
          <div className="flex flex-col items-center">
            <div className="flex flex-col gap-32 ">
              <div className="flex flex-col gap-4 items-center">
                <h1 className="text-[100px] font-bold text-primary-900">
                  404 Not Found
                </h1>
                <p className="text-xl text-slate-700 font-medium">
                  Whoops! That page doesn’t exist.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-8 px-80 mt-20">
            <Link
              href="/"
              className="flex p-8 rounded-md px-20 shadow-md hover:shadow-xl hover:cursor-pointer border border-gray-200"
            >
              <div className="flex flex-col items-center gap-2">
                <button className="bg-primary-200 rounded-md p-2 w-fit">
                  <Home className="text-primary-400 h-8 w-8 " />
                </button>

                <span className="text-slate-700 text-xl">Homepage</span>
              </div>
            </Link>
            <Link
              href="/products"
              className="flex p-8 rounded-md px-20 shadow-md hover:shadow-xl hover:cursor-pointer  border border-gray-200"
            >
              <div className="flex flex-col items-center gap-2">
                <button className="bg-red-200 rounded-md p-2 w-fit">
                  <Library className="text-red-400 h-8 w-8 " />
                </button>

                <span className="text-slate-700 text-xl">Store</span>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export const metadata: Metadata = {
  title: "Not Found - Fractal Store",
  description:
    "Carrefour Shop Online Ecommerce - Selling Electronic Fashion and More.",
  icons: {
    icon: "/assets/images/logo.svg",
  },

  openGraph: mergeOpenGraph({
    title: "Not Found - Ecommerce Design UI",
    url: "/",
  }),
};
