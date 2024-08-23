import React, { useState } from "react";

export default function ProductsFilters({
  maxPrice,
  setMinPrice,
  setMaxPrice,
  loading,
}: {
  minPrice: number;
  maxPrice: number;
  setMinPrice: (value: number) => void;
  setMaxPrice: (value: number) => void;
  loading: boolean;
  setLoading: (e: boolean) => void;
}) {
  const [minPricePreview, setMinPricePreview] = useState(0);
  const [maxPricePreview, setMaxPricePreview] = useState(0);
  return (
    <div className="flex flex-col gap-4 w-full">

      <div className="grid grid-cols-1 gap-8 md:grid-cols-1 my-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="min-price"
              className="block text-sm font-medium text-gray-900 dark:text-white"
            >
              Min Price
            </label>
            <input
              disabled={loading}
              defaultValue={0}
              type="range"
              min="0"
              max="7000"
              step="10"
              onMouseUp={(e: React.MouseEvent<HTMLInputElement>) =>
                    setMinPrice(parseInt(e.currentTarget.value))
              }
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMinPricePreview(parseInt(e.target.value))
              }
              className="h-2 w-full cursor-pointer appearance-none 
              rounded-lg bg-gray-200 dark:bg-gray-700"
            />
          </div>

          <div>
            <label
              htmlFor="max-price"
              className="block text-sm font-medium text-gray-900 dark:text-white"
            >
              {" "}
              Max Price{" "}
            </label>
            <input
              disabled={loading}
              defaultValue={maxPrice}
              type="range"
              min="0"
              max="7000"
              step="10"
              onMouseUp={(e: React.MouseEvent<HTMLInputElement>) =>
                setMaxPrice(parseInt(e.currentTarget.value))
              }
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMaxPricePreview(parseInt(e.target.value))
              }
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
            />
          </div>

          <div className="col-span-2 flex items-center justify-between space-x-2">
            <input
              type="number"
              id="min-price-input"
              min="0"
              max="7000"
              value={minPricePreview}
              readOnly
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 "
              placeholder=""
              required
            />

            <div className="shrink-0 text-sm font-medium dark:text-gray-300">
              to
            </div>

            <input
              type="number"
              id="max-price-input"
              min="0"
              max="7000"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder=""
              readOnly
              required
              value={maxPricePreview}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
