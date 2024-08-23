import type { Metadata } from "next";
import * as React from "react";
import "./globals.css";
import Providers from "@/providers";
import { cn } from "@/lib/utils";
import { font } from "./fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("", font.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
