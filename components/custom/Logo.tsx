import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/">
      <Image
        className={cn("w-28 h-28", className)}
        src="/assets/images/logo.svg"
        alt="logo"
        height="0"
        width="0"
        priority
      />
    </Link>
  );
}
