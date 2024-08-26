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
    <div className="">
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
          "h-full bg-white shadow-md absolute xl:relative xl:translate-x-0 top-10 left-0 z-40 w-64 transition-transform -translate-x-full",
          openSidebar && "translate-x-0"
        )}
        aria-label="Sidebar"
      >
        <div className="h-full flex flex-col items-start gap-4 overflow-y-auto bg-gray-50 py-4">
          <ul className="flex flex-col gap-4">
            <li className="">
              <div className="flex justify-center  items-center ">
                <UserButton afterSignOutUrl="/" appearance={{
                  
                }} />
              </div>
            </li>

            <li>
              <Link href="/account/dashboard" className="flex items-center p-2">
                <LayoutDashboard />
                <h6 className="ms-3">Dashboard</h6>
              </Link>
            </li>

            <li>
              <Link href="/account/orders" className="flex items-center p-2">
                <BadgeDollarSign />
                <h6 className="ms-3">Orders</h6>
              </Link>
            </li>

            <li>
              <Link href="/account/address" className="flex items-center p-2 ">
                <BookUser />
                <h6 className="ms-3">Address</h6>
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
