import { BrowserRouter } from "react-router-dom";

import AuthRoutes from "./AuthRoutes";
import CustomerRoutes from "./CustomerRoutes";
import AdminRouter from "./AdminRoutes";
import { AuthProvider } from "../context/AuthProvider";

function AppRouter() {
    return (


        <BrowserRouter>
            <AdminRouter />
            <CustomerRoutes />
            <AuthRoutes />
        </BrowserRouter>


    );
}

export default AppRouter;