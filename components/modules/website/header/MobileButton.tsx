import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import React from "react";
import SidebarMenu from "./SidebarMenu";

export default function MobileButton() {
  return (
    <div className="block lg:hidden">
      <SidebarMenu />
    </div>
  );
}
