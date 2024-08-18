import { cn } from "@/lib/utils";
import React from "react";

export default function ({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("container h-full w-full", className)}>{children}</div>
  );
}
