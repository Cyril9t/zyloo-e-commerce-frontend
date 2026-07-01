import { BrowserRouter } from "react-router-dom";

import AuthRoutes from "./AuthRoutes";
import CustomerRoutes from "./CustomerRoutes";
import AdminRouter from "./AdminRoutes";

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