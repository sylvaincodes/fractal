"use client";
import React, { useEffect, useRef, useState, useTransition } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronLeft, ChevronRight, MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Category, Page, SubCategory, SubPage } from "@/types";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import Loading from "../../../custom/Loading";
import toast from "react-hot-toast";
import Toast from "@/components/custom/Toast";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function SidebarMenu() {
  const [error, setError] = useState();
  const [show, setShow] = useState(false);
  const [subCategories, setSubCategories] = useState<SubCategory[]>();
  const [isPending, startTransition] = useTransition();
  const [categories, setCategories] = useState<Category[]>([]);
  const [pages, setPages] = useState<Page[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getPages = () => {
      startTransition(async () => {
        await axios
          .get(process.env.NEXT_PUBLIC_API_URL + "/api/pages")
          .then((response) => {
            setPages(response.data.data);
          })
          .catch((error) => {
            setError(error.message);
          });
      });
    };

    const getCategories = () => {
      startTransition(async () => {
        await axios
          .get(process.env.NEXT_PUBLIC_API_URL + "/api/categories")
          .then((response) => {
            setCategories(response.data.data);
          })
          .catch((error) => {
            setError(error.message);
          });
      });
    };

    getCategories();
    getPages();

    if (error) {
      toast.custom(<Toast message={error} status="error" />);
    }
  }, []);

  return (
    <>
      <Sheet>
        <SheetTrigger>
          <CiMenuFries size={34} />
        </SheetTrigger>
        <SheetContent
          className={cn("px-4 w-full md:w-[400px]  [&>#closeBtn]:text-3xl ")}
        >
          <div className="mt-10">
            <Tabs defaultValue="account" className="w-full">
              <TabsList className="grid w-fit grid-cols-2">
                <TabsTrigger value="category" className="text-h6">Categories</TabsTrigger>
                <TabsTrigger value="menu" className="text-h6">Pages</TabsTrigger>
              </TabsList>

              <TabsContent value="category" className="pt-4">
                <div className="flex flex-col gap-6 h-full">
                  {isPending && <Loading isLoading={isPending} />}

                  {categories &&
                    categories
                      .slice(0, 20)
                      .map((item: Category, idx: number) => (
                        <div key={idx} className="group px-4 py-2">
                          <div className="flex items-center gap-4">
                            <span
                              className="text-span capitalize hover:text-primary-500 cursor-pointer"
                              onClick={() =>
                                router.push(`/categories/${item.link}/products`)
                              }
                            >
                              {item.name}
                            </span>
                            {item?.submenu && item.submenu.length > 0 && (
                              <ChevronRight
                                onClick={() => {
                                  setShow(!show);
                                  setSubCategories(item?.submenu);
                                }}
                                className="text-icon ms-auto h-5 w-5"
                                size={14}
                              />
                            )}
                          </div>
                        </div>
                      ))}
                </div>
              </TabsContent>
              <TabsContent value="menu">
                <div>
                  {isPending && <Loading isLoading={isPending} />}
                  {pages &&
                    pages.slice(0, 20).map((item: Page, idx: number) => (
                      <div
                        onClick={() => router.push(`${item.link}`)}
                        key={idx}
                        className="group inline-flex items-center px-4 py-2 gap-4 w-full hover:text-primary-700 capitalize cursor-pointer"
                      >
                        <div className="flex items-center gap-4 w-full">
                          <span className="">{item.name}</span>
                          {item?.subpage && item.subpage.length > 0 && (
                            <ChevronRight
                              className="text-icon ms-auto"
                              size={14}
                            />
                          )}
                        </div>

                        {item?.subpage && item.subpage.length > 0 ? (
                          <div className="hidden absolute group-hover:grid grid-cols-2 gap-4 shadow-md left-0 bg-white p-4 w-[600px] z-[1000] duration-300 ease-linear mt-[100px] ">
                            {item?.subpage?.map(
                              (item2: SubPage, idx2: number) => (
                                <Link
                                  key={idx2}
                                  href={`${item2.link}`}
                                  className="min-w-40 hover:text-primary-900 text-xl"
                                > 
                                  {item2.name}
                                </Link>
                              )
                            )}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </SheetContent>
      </Sheet>

      <Sheet open={show}>
        <SheetTrigger></SheetTrigger>
        <SheetContent
          className={cn("px-4 w-full md:w-[400px]  [&>#closeBtn]:hidden ")}
          side="left"
        >
          <div
            className={cn(
              "duration-300 ease-in p-8 absolute top-0 h-screen w-[260px] bg-white   left-0"
            )}
          >
            <Button
              onClick={() => setShow(!show)}
              variant="default"
              title="back"
              className={cn(
                "cursor-pointer hover:bg-black hover:text-white",
                subCategories && ""
              )}
            >
              <ChevronLeft />
            </Button>
            <div className="flex flex-col gap-8 justify-center mt-12">
              {subCategories &&
                subCategories.map((item: SubCategory, idx: number) => (
                  <Link
                    className="text-xl capitalize hover:text-primary-500"
                    key={idx}
                    href={`/categories/${item.link}/products`}
                  >
                    {item.name}
                  </Link>
                ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
