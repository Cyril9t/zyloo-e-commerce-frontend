import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { PATHS } from "./paths";
import ECommercePageLoader from "../components/common/UniversalLoadingState";

export default function AdminRoute() {

    const { user, isLoading } = useAuth();


    if (isLoading) {
        return <ECommercePageLoader variant="grid" fullScreen={true} />;
    }

    if (!user) {
        return <Navigate to={PATHS.auth.login} replace />;
    }

    if (user.role !== "ADMIN") {

        return <Navigate to={PATHS.customer.profile} />
    }



    return <Outlet />;
}