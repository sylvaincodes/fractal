import { cn } from "@/lib/utils";
import { Options, Style } from "@/types";
import Image from "next/image";
import React from "react";

export default function ProductStyles({
  style,
  styles,
  setStyle,
  setActive,
  setOption,
  setOptionActive,
  setImages,
  getStock,
  option,
  options,
  optionActive,
}: {
  style: Style;
  styles: Style[];
  option: Options;
  options: Options[];
  setStyle: (value: Style) => void;
  setActive: (value: number) => void;
  setOption: (value: Options) => void;
  setOptionActive: (value: number) => void;
  setImages: (value: string[]) => void;
  getStock: () => number;
  optionActive: number;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 w-full">
      {/* Styles */}
      <div className="flex flex-col gap-4">
        <h2 className="">
          {" "}
          <span className="text-xl font-bold">Styles:</span>{" "}
          <span className="text-sm font-normal ms-10">{style.name}</span>
        </h2>
        <div className="flex items-center gap-4">
          {styles.map((item: Style, idx: number) => {
            return (
              <div
                data-cy="styleItem"
                onMouseEnter={() => {
                  setStyle(item);
                  setActive(idx);
                }}
                key={idx + optionActive}
                className={cn(
                  "relative w-[100px] h-[60px] outline outline-slate-300 cursor-pointer rounded-lg overflow-hidden hover:outline-primary-600 outline-offset-2 flex items-center justify-center",
                  item === style &&
                    "outline outline-primary-600 outline-offset-2"
                )}
              >
                <Image
                  src={item.image}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                  alt="image style"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* options  */}
      <div className="flex flex-col gap-4 flex-1 w-full">
        <h2 className="">
          <span className="text-xl font-bold">Options:</span>{" "}
          <span className="text-sm ms-10 font-normal text-red-400">
            {option.qty > 0
              ? option.qty + " left hurry up 👀"
              : "Out of stock ❌! "}
          </span>
        </h2>
        <div className="flex items-center gap-4">
          {options.map((item: Options, idx: number) => {
            return (
              <span
              data-cy="optionItem"
                onMouseEnter={() => {
                  setOption(item);
                  setImages(item.images);
                  setOptionActive(idx);
                  getStock();
                }}
                key={idx}
                className={cn(
                  "w-[100px] h-[60px] outline outline-slate-300 cursor-pointer rounded-sm overflow-hidden hover:outline-primary-600 outline-offset-2",
                  item === option &&
                    "outline outline-primary-600 outline-offset-2"
                )}
              >
                <div
                  className={cn(
                    "flex items-center justify-center h-full text-sm text-black uppercase font-bold"
                  )}
                >
                  {item.option}
                </div>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
