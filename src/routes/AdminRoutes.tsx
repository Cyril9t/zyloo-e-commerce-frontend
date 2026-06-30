import { Route, Routes } from "react-router-dom";
import { PATHS } from "./paths";
import CategoriesPage from "../features/admin/categories/CategoriesPage";
import DashboardPage from "../features/admin/dashboard/DashboardPage";
import AdminOrdersPage from "../features/admin/orders/AdminOrdersPage";
import CouponsPage from "../features/admin/coupons/CouponsPage";
import UsersPage from "../features/admin/users/UsersPage";
import AdminProductsPage from "../features/admin/products/AdminProductsPage";
export default function AdminRouter() {
    return (
        <>
            <Routes>
                <Route path={PATHS.admin.dashboard} element={<DashboardPage />} />
                <Route path={PATHS.admin.categories} element={<CategoriesPage />} />
                <Route path={PATHS.admin.orders} element={<AdminOrdersPage />} />
                <Route path={PATHS.admin.products} element={<AdminProductsPage />} />
                <Route path={PATHS.admin.users} element={<UsersPage />} />
                <Route path={PATHS.admin.coupons} element={<CouponsPage />} />
            </Routes>
        </>
    )
}