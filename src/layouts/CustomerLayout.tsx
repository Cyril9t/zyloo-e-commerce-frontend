import { Outlet } from "react-router-dom";

export default function CustomerLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            {/* Navbar placeholder */}
            <header className="h-16 border-b flex items-center px-6">
                <h1 className="font-bold">Zyloo Store</h1>
            </header>

            {/* Page Content */}
            <main className="flex-1 px-4 md:px-8 py-6">
                <Outlet />
            </main>

            {/* Footer placeholder */}
            <footer className="border-t p-4 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} Zyloo Store
            </footer>
        </div>
    );
}