"use client";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Detail, Product } from "@/types";
import Review from "../review";
import React from 'react'

export function ProductTabs({
  className,
  product,
}: {
  className: string;
  product: Product;
}) {
  return (
    <Tabs defaultValue="descriptions" className={`${className}`}>
      <TabsList className="grid grid-cols-3 w-fit overflow-auto">
        <TabsTrigger className="w-fit lg:w-80" value="descriptions">
          Descriptions
        </TabsTrigger>
        <TabsTrigger className="w-fit lg:w-80" value="additionnal">
          Additionnal Info
        </TabsTrigger>
        <TabsTrigger className="w-fit lg:w-80" value="reviews">
          Reviews
        </TabsTrigger>
      </TabsList>
      <TabsContent value="descriptions">
        <Card>
          <CardContent className="p-4">
            <p className="text-pretty">{product.content}</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="additionnal">
        <Card className="p-10 flex flex-col gap-4">
          {product.details.map((item: Detail, idx: number) => {
            return (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 ">
                <span className="w-80 font-bold text-xl capitalize">
                  {item.name}:{" "}
                </span>
                <span className="text-base font-light  text-slate-700">
                  {item.value}
                </span>
              </div>
            );
          })}
        </Card>
      </TabsContent>
      <TabsContent value="reviews">
        <Card>
          <CardContent className="p-8">
            <Review product={product} />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
