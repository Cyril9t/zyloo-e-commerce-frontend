import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuhProvider";
import { PATHS } from "./paths";
export default function ProtectedRoute() {

    const { user, isMutating, isLoading } = useAuth();

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (!user) {
        return <Navigate to={PATHS.auth.login} replace />;
    }

    return <Outlet />;
}