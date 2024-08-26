import Container from "@/components/custom/Container";
import { Button } from "@/components/ui/button";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
import { HelpCircle, Home, Library, Search } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <section className="py-40 w-full h-screen">
      <Container>
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-10 ">
            <div className="flex flex-col items-center">
              <h1 className="text-[100px] font-bold text-primary-900">
                404 Not Found
              </h1>
              <p className="text-xl text-slate-700 font-medium">
                Whoops! That page doesn’t exist.
              </p>
            </div>

            <form method="get" action="/products">
              <div className="flex gap-4 justify-start">
                <div className="flex border grow border-gray-300 rounded-md gap-4 p-4 w-full">
                  <Search className="text-slate-700 h-6 w-6" />
                  <input
                    name="name"
                    className="outline-none w-full"
                    type="text"
                    placeholder="search a product"
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-primary-700 p-4 w-fit h-full"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex justify-between gap-8 px-80 mt-10">
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
          <Link
            href="/contact"
            className="flex p-8 rounded-md px-20 shadow-md hover:shadow-xl hover:cursor-pointer  border border-gray-200"
          >
            <div className="flex flex-col items-center gap-2">
              <button className="bg-orange-200 rounded-md p-2 w-fit">
                <HelpCircle className="text-orange-400 h-8 w-8 " />
              </button>

              <span className="text-slate-700 text-xl">Contact</span>
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
}

export const metadata: Metadata = {
  title: "Not Found - Carrefour Store",
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
