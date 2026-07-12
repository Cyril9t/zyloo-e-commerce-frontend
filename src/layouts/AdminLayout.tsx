import { Outlet } from "react-router-dom";

import AdminSidebar from "../features/admin/shared/components/AdminSidebar";
import AdminTopbar from "../features/admin/shared/components/AdminTopbar";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "../components/ui/sidebar";
import { SidebarOpenIcon } from "lucide-react";



export default function AdminLayout() {
    return (
        <SidebarProvider  >
            <AdminSidebar />

            <SidebarInset >
                <AdminTopbar />
                <main className="flex-1 p-6">
                    <Outlet />
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}