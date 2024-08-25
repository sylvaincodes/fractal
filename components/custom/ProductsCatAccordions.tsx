import React, { useEffect, useState, useTransition } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Category, SubCategory } from "@/types";
import toast from "react-hot-toast";
import Toast from "./Toast";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";

export default function ProductsCatAccordions() {
  // GET API
  const [categories, setCategories] = useState<Category[]>();
  const [error, setError] = useState();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
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
    if (error) {
      toast.custom(<Toast message={error} status="error" />);
    }
  }, []);

  return (
    <>
      {isPending ? (
        <Skeleton className="h-[600px] w-full" />
      ) : (
        <Accordion type="single" collapsible className="w-full">
          {categories &&
            categories.slice(0, 20).map((item: Category, idx: number) => (
              <AccordionItem key={idx} value={item._id}>
                <AccordionTrigger>
                  <Link
                    href={`/categories/${item.link}/products`}
                    className="capitalize text-xl"
                  >
                    <span className="text-xl">{item.name}</span>
                  </Link>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-4 ms-10">
                    {item?.submenu?.map((item2: SubCategory, idx2: number) => (
                      <Link
                        key={idx2}
                        href={`/categories/${item2.link}/products`}
                        className="text-xl min-w-40 hover:text-primary-900 capitalize"
                      >
                        {item2.name}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      )}
    </>
  );
}