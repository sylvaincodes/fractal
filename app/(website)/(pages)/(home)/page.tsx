import * as React from "react";
import { SignOutButton, UserProfile } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <div>
        Hello world!
        <h1>Home</h1>
        {/* <UserProfile />
        <SignOutButton/> */}
      </div>
    </main>
  );
}
