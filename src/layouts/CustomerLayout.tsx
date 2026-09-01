import { Outlet } from "react-router-dom";
import Navbar from "../features/home/components/navbar/navbar";
import Footer from "../features/home/components/landingPage/footer";


export default function CustomerLayout() {
    return (
        <div className=" flex flex-col bg-background">
            <Navbar />
            {/* <header className="h-16 border-b flex items-center px-6">

            </header> */}

            {/* Page Content */}
            <main className="flex mt-4 md:mt-20 ">
                <Outlet />
            </main>

            {/* Footer placeholder */}
            <Footer />
        </div>
    );
}