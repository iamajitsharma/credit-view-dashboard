//import custom components
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import DashboardHeader from "@/layouts/DashboardHeader";
import { DashboardSidebar } from "@/layouts/DashboardSidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset className="overflow-x-hidden">
        <DashboardHeader />
        <div className="flex-1 p-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
