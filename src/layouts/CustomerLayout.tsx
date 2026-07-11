import { Outlet } from "react-router-dom";
import Navbar from "../features/home/components/navbar/navbar";
import Footer from "../features/home/components/landingPage/footer";
import { useAuth } from "../context/AuhProvider";

export default function CustomerLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            {/* <header className="h-16 border-b flex items-center px-6">

            </header> */}

            {/* Page Content */}
            <main className="flex-1 px-4 md:px-8 py-6">
                <Outlet />
            </main>

            {/* Footer placeholder */}
            <Footer />
        </div>
    );
}