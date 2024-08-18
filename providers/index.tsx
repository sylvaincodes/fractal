import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import FramerMotionProvider from "./FramerMotionProvider";
import ToastProvider from "./ToastProvider";
// import { dark } from "@clerk/themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
    // appearance={{
    //   layout: {
    //     socialButtonsVariant: "iconButton",
    //     logoImageUrl: "/logo/logo.svg",
    //   },

    //   variables: {
    //     colorPrimary: "#0E78F9",
    //     colorText: "white",
    //     colorBackground: "#1C1F2E",
    //     colorInputBackground: "#252A41",
    //     colorInputText: "#fff",
    //   },
    // }}
    >
      <FramerMotionProvider>
        <ToastProvider />
        {children}
      </FramerMotionProvider>
    </ClerkProvider>
  );
}
