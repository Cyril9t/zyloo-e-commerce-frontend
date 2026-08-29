import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { PATHS } from "./paths";
import ECommercePageLoader from "../components/common/UniversalLoadingState";
export default function ProtectedRoute() {

    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <ECommercePageLoader variant="grid" fullScreen={true} />;
    }

    if (!user) {
        return <Navigate to={PATHS.auth.login} replace />;
    }

    return <Outlet />;
}


