"use client";
//import node modules libraries
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";

//import custom components
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useSidebar } from "@/components/ui/sidebar";
import { UserMenu } from "./UserMenu";
import { ModeToggle } from "@/layouts/ModeToggle";

export default function DashboardHeader() {
  const { open } = useSidebar();
  return (
    <header className="flex min-h-16 max-h-16 h-full shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger
          className="-ml-1 cursor-pointer"
          icon={open ? ArrowLeftFromLine : ArrowRightFromLine}
        />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />

        <div className="ml-auto flex items-center gap-6">
          <ModeToggle />
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
