import React from "react";
import { cn } from "@/lib/utils";

export default function Container({
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
