import SidebarAccount from "@/components/modules/website/account/SidebarAccount";
import * as React from "react";
import Container from "@/components/custom/Container";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="py-10 relative h-screen">
      <Container className="overflow-x-auto  overflow-y-hidden">
        <div className="flex relative">
          <SidebarAccount />
          <div className="flex-1">{children}</div>
        </div>
      </Container>
    </section>
  );
}
