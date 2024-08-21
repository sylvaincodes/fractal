"use client";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState, useTransition } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Category, Page, SubCategory } from "@/types";
import toast from "react-hot-toast";
import Toast from "@/components/custom/Toast";
import axios from "axios";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

export default function MainMenu() {
  const pathname = usePathname();

  const [show, setShow] = useState(false);
  const [error, setError] = useState();
  const [isPending, startTransition] = useTransition();
  const [categories, setCategories] = useState<Category[]>([]);
  const [pages, setPages] = useState<Page[]>([]);

  useEffect(() => {
    const getCategories = () => {
      startTransition(async () => {
        await axios
          .get(process.env.NEXT_PUBLIC_API_URL + "/api/categories")
          .then((response) => {
            setCategories(response.data.data);
            console.log(response.data.data);
          })
          .catch((error) => {
            setError(error.message);
          });
      });
    };
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

    getCategories();
    getPages();

    if (error) {
      toast.custom(<Toast message={error} status="error" />);
    }
  }, []);

  return (
    <div className="hidden lg:block relative">
      {isPending ? (
        ""
      ) : (
        <ul className="flex gap-32 justify-between items-center text-xl  font-medium capitalize">
          {pages &&
            pages.map((item: Page, idx: number) => (
              <li key={idx} className="relative">
                <Link
                  href={item.link}
                  className={cn(
                    "h-full duration-300 after:absolute after:bottom-0 after:left-0  after:w-0 after:h-1 after:bg-primary-400 after:duration-100 after:ease-linear hover:after:w-full",
                    pathname == item.link && "border-b-4 border-b-primary-200"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}

          <li className="group">
            <button
              className="capitalize inline-flex items-center cursor-pointer"
              onMouseEnter={() => setShow(!show)}
            >
              <span>Categories</span>
              <ChevronDown className="mt-1" />
            </button>
            <AnimatePresence>
              {show && (
                <m.div
                  onMouseLeave={() => setShow(!show)}
                  exit={{
                    y: -20,
                    opacity: 0,
                    filter: "blur(5px)",
                    transition: { ease: "easeIn", duration: 0.22 },
                  }}
                  initial={{ opacity: 0, y: -15 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { type: "spring", duration: 0.7 },
                  }}
                  className="grid grid-cols-4 justify-items-center grid-rows-auto
          absolute bg-white py-4 px-4 h-[560px] w-[1100px] z-[9999] 
          right-0 top-[54px] gap-12 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-neutral-500"
                >
                  {categories &&
                    categories
                      .slice(0, 8)
                      .map((item: Category, idx: number) => (
                        <ul
                          className="flex flex-col gap-[16px] text-xl"
                          key={idx}
                        >
                          <li>
                            <Link
                              href={`/categories/${item.link}/products`}
                              className="font-bold group/item w-full transitions-all flex items-center gap-2 duration-100 ease-linear hover:translate-x-1"
                            >
                              {/* <span className="hidden w-2 h-2 group-hover/item:block bg-primary-500 rounded-full "></span> */}
                              <span className="transition ease-in-out hover:text-primary-500">
                                {item.name}
                              </span>
                            </Link>
                          </li>

                          {item.submenu &&
                            item.submenu.length > 0 &&
                            item.submenu.map(
                              (subCat: SubCategory, idx: number) => (
                                <li key={idx} className="font-normal duration-100 ease-linear hover:translate-x-1">
                                  <Link
                                    href={`categories/${subCat.link}/products`}
                                    className="hover:text-primary-500"
                                  >
                                    {subCat.name}
                                  </Link>
                                </li>
                              )
                            )}
                        </ul>
                      ))}
                </m.div>
              )}
            </AnimatePresence>
          </li>
        </ul>
      )}
    </div>
  );
}
