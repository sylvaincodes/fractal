import React from "react";
import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      containerStyle={{
        top: 50,
      }}
      toastOptions={{
        position: "top-center",
        duration: 3000,
      }}
    />
  );
}
