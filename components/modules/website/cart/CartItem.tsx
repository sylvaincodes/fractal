import { Button } from "@/components/ui/button";
import { CartItem as CI } from "@/types";
import { Trash } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { updateToCart } from "@/store/cartSlice";
import { useSelector } from "react-redux";
import { memoize } from "proxy-memoize";
import { IRootState } from "@/store";
import Toast from "@/components/custom/Toast";
import toast from "react-hot-toast";
import ProductQtyCart from "@/components/custom/ProductQtyCart";

export default function CartItem({ item }: { item: CI }) {
  const dispatch = useDispatch();

  const { cart } = useSelector(memoize((state: IRootState) => ({ ...state })));

  const handleRemoveItem = (item: CI) => {
    const newCart = cart.cartItems.filter((p: CI) => p._uid !== item._uid);

    dispatch(updateToCart(newCart));

    toast.custom(
      <Toast message="product deleted from cart" status="success" />
    );
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className="flex gap-2">
          <Image
            src={item.images[0]}
            width="200"
            height="200"
            alt="prod"
            className="h-20 w-20 object-cover"
          />
          <div className="flex flex-col gap-2">
            <span className="capitalize">{item.name.substring(0, 30)}</span>
            <div className="inline-flex gap-4 font-bold">
              <span className="font-bold">{item.qty}</span>
              <span>X</span>
              <span className="font-bold">${item.price}</span>
            </div>

            <div className="flex justify-between gap-4">
              <div className="inline-flex gap-4 items-center">
                <span className="">Style: </span>
                <span className="font-bold"> {item.style.name} </span>
              </div>
              <div className="inline-flex gap-4">
                <span className="">Option: </span>
                <span className="font-bold"> {item.option} </span>
              </div>
            </div>
          </div>
        </div>
      </th>
      <td className="px-6 py-4 text-xl">${item.price.toFixed(2)}</td>
      <td className="px-6 py-4">
        <ProductQtyCart item={item} />
      </td>
      <td className="px-6 py-4 text-xl">
        ${(item.price * item.qty).toFixed(2)}
      </td>
      <td className="px-6 py-4">
        <Button
          onClick={() => handleRemoveItem(item)}
          className="hover:text-primary-500"
          variant="nostyle"
          size="icon"
        >
          <Trash />
        </Button>
      </td>
    </tr>
  );
}
