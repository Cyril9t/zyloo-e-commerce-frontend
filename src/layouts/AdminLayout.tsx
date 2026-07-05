import { Outlet } from "react-router-dom";

import AdminSidebar from "../features/admin/shared/components/AdminSidebar";
import AdminTopbar from "../features/admin/shared/components/AdminTopbar";

export default function AdminLayout() {
    return (
        <div className="flex min-h-screen">
            <AdminSidebar />

            <div className="flex flex-1 flex-col">
                <AdminTopbar />

                <main className="flex-1 p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}