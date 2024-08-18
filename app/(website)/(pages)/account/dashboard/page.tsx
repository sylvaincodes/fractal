import { SignOutButton, UserProfile } from "@clerk/nextjs";
import React from "react";

export default function page() {
  return (
    <div>
      <UserProfile routing="hash" />
      <SignOutButton />
    </div>
  );
}
