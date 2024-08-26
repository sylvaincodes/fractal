"use client";
import { cn } from "@/lib/utils";
import {
  BadgeDollarSign,
  LayoutDashboard,
  BookUser,
  AlignJustify,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function SidebarAccount() {
  const [openSidebar, setSidebar] = useState(false);

  return (
    <div className="!z-1 flex flex-col">
      <Button
        variant="outline"
        onClick={() => setSidebar(!openSidebar)}
        type="button"
        className="absolute right-0 -top-4 xl:hidden flex items-center p-2 mt-2 ms-3 "
      >
        <AlignJustify />
      </Button>

      <aside
        className={cn(
          "!z-1 h-full bg-white shadow-md absolute xl:relative xl:translate-x-0 top-10 left-0 w-64 transition-transform -translate-x-full",
          openSidebar && "translate-x-0"
        )}
        aria-label="Sidebar"
      >
        <div className="h-full flex flex-col items-start gap-4 overflow-y-auto bg-gray-50 py-4">
          <ul className="flex flex-col gap-4 w-full ps-12">
            <li className="flex ps-12">
              <div className="flex justify-center  items-center ">
                <UserButton afterSignOutUrl="/" appearance={{}} />
              </div>
            </li>

            <li>
              <Link href="/account/dashboard" className="flex items-center p-2 hover:text-primary-900">
                <LayoutDashboard />
                <h6 className="ms-3">Dashboard</h6>
              </Link>
            </li>

            <li>
              <Link href="/account/orders" className="flex items-center p-2 hover:text-primary-900">
                <BadgeDollarSign />
                <h6 className="ms-3">Your orders</h6>
              </Link>
            </li>

            <li>
              <Link href="/account/address" className="flex items-center p-2 hover:text-primary-900 ">
                <BookUser />
                <h6 className="ms-3">Your addresses</h6>
              </Link>
            </li>

            <li className="flex items-center gap-8 p-2">
              <LogOut />
              <SignOutButton />
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
