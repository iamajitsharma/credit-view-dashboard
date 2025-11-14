"use client";
//import node modules libraries
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { v4 as uuid } from "uuid";
import { ChartLine, LayoutGrid } from "lucide-react";

//import custom components
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

//import custom hooks
import { useSidebar } from "@/components/ui/sidebar";

const navLinks = [
  { id: uuid(), href: "/dashboard", label: "Dashboard", icon: LayoutGrid },
  { id: uuid(), href: "/analytics ", label: "Analytics ", icon: ChartLine },
];

export function DashboardSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { open } = useSidebar();

  return (
    <Sidebar collapsible="icon" className="bg-slate-900" {...props}>
      <SidebarHeader>
        <div className="flex items-center justify-center border-b border-gray-600">
          <Link href="/dashboard" className="">
            {open ? (
              <div className="py-1 flex items-center justify-center w-40 h-auto">
                <Image
                  src={"/logo.png"}
                  alt="E-solve-infotech"
                  width={200}
                  height={100}
                />
              </div>
            ) : (
              <div className="py-1 flex items-center justify-center w-14 h-auto">
                <Image
                  src={"/e-solve-icon.png"}
                  alt="E-solve-infotech"
                  width={200}
                  height={100}
                />
              </div>
            )}
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-3">
        <SidebarMenu>
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <SidebarMenuItem key={link.id} className="py-1">
                <SidebarMenuButton className="px-3 text-white cursor-pointer text-sm font-normal hover:rounded hover:bg-orange-100 hover:text-orange-600 duration-200 transition-all">
                  <Link
                    href={link.href}
                    className="inline-flex gap-2 items-center"
                  >
                    <span className="">
                      <Icon size={18} />
                    </span>
                    {link.label}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
