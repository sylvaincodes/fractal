import CurrencyFormat from "@/components/custom/CurrencyFomat";
import { discountPrice } from "@/lib/utils";
import { Options } from "@/types";
import React from "react";

export default function ProductPrice({ option }: { option: Options }) {
  return (
    <div className="flex gap-2 flex-col">
      <div className="flex items-center gap-8">
        <h2 className="text-primary-900">
          <CurrencyFormat
            data-cy="priceItem"
            className="text-4xl text-primary-800"
            value={
              option.discount > 0
                ? discountPrice(option.price, option.discount)
                : option.price
            }
          />
        </h2>
        {option.discount > 0 && (
          <h4 className="">
            <CurrencyFormat
              className="text-h3 line-through text-gray-400"
              value={option.price}
            />
          </h4>
        )}
      </div>
    </div>
  );
}
