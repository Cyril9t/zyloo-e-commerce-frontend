import { Outlet } from "react-router-dom";

export default function AdminLayout() {
    return (
        <div className="min-h-screen flex bg-background">
            {/* Sidebar */}
            <aside className="w-64 border-r p-4 hidden md:block">
                <h2 className="font-bold mb-6">Admin Panel</h2>
                <nav className="space-y-2 text-sm">
                    <p>Dashboard</p>
                    <p>Products</p>
                    <p>Orders</p>
                    <p>Users</p>
                    <p>Coupons</p>
                </nav>
            </aside>

            {/* Main */}
            <div className="flex-1 flex flex-col">
                <header className="h-16 border-b flex items-center px-6">
                    <h1 className="font-semibold">Dashboard</h1>
                </header>

                <main className="flex-1 p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}