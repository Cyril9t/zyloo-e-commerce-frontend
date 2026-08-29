import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { PATHS } from "./paths";

export default function AdminRoute() {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (!user) {
        return <Navigate to={PATHS.auth.login} replace />;
    }

    if (user.role !== "ADMIN") {
        return <Navigate to={PATHS.customer.home} replace />;
    }

    return <Outlet />;
}