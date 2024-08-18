import React from "react";
import Header from "../../../components/modules/website/header";
import Footer from "../../../components/modules/website/footer";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
