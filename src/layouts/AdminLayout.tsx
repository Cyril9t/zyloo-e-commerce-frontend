import { Outlet } from "react-router-dom";

import AdminSidebar from "../features/admin/shared/components/AdminSidebar";
import AdminTopbar from "../features/admin/shared/components/AdminTopbar";
import { SidebarProvider, SidebarInset, } from "../components/ui/sidebar";

import { TotalUsersContext } from "../context/userContext";


export default function AdminLayout() {
    return (
        <SidebarProvider  >
            <AdminSidebar />

            <SidebarInset >
                <AdminTopbar />
                <TotalUsersContext>

                    <main className="flex-1 p-6">
                        <Outlet />
                    </main>
                </TotalUsersContext>
            </SidebarInset>
        </SidebarProvider>
    );
}