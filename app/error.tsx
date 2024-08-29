"use client"; // Error boundaries must be Client Components
import * as React from "react";
import Image from "next/image";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min- h-screen">
      <div className="flex py-6 flex-col  justify-center items-center h-full">
        <h3 className="text-center"> OOps, something went wrong </h3>

        <Image
          src="/assets/images/error.png"
          width="600"
          alt="error image"
          height="600"
        />
        <button
          className="text-h5 bg-primary-800 text-white p-4 w-[300px] hover:bg-black"
          onClick={() => reset()}
        >
          Retry
        </button>
      </div>
    </div>
  );
}
