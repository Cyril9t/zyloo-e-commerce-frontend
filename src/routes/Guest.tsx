import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuhProvider";
import { PATHS } from "./paths";

export default function GuestRoute() {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (user) {
        if (user.role === "ADMIN") {
            return <Navigate to={PATHS.admin.dashboard} replace />;
        }

        return <Navigate to={PATHS.customer.home} replace />;
    }

    return <Outlet />;
}