"use client";
import React from "react";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className="h-screen">
      <div className="absolute top-10  left-10 flex items-center gap-4 group">
        <Button
          variant="nostyle"
          className="text-h4 group-hover:text-primary-900 flex gap-8 items-center"
          onClick={() => router.back()}
        >
          <MoveLeft
            size={40}
            className="group-hover:text-primary-900 duration-100 ease-linear group-hover:translate-x-2"
          />
          Go Back
        </Button>
      </div>
      {children}
    </div>
  );
}
