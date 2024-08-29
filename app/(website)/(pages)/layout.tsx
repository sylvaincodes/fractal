import React from "react";
import Header from "../../../components/modules/website/header";
import Footer from "../../../components/modules/website/footer";
import MobileBottom from "@/components/custom/MobileButton";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <MobileBottom />
      {children}
      <Footer />
    </>
  );
}
