import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        className="w-28 h-28"
        src="/assets/images/logo.svg"
        alt="logo"
        height="0"
        width="0"
      />
    </Link>
  );
}
