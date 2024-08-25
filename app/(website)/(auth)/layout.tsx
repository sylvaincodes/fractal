import React from "react";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen">
      <div className="absolute top-10  left-10 flex items-center gap-4 group">
        <MoveLeft
          size={40}
          className="group-hover:text-primary-900 duration-100 ease-linear group-hover:translate-x-2"
        />
        <Link className="text-h4  group-hover:text-primary-900" href="/">
          Back to store
        </Link>
      </div>
      {children}
    </div>
  );
}
