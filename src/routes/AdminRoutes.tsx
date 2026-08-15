import { Route, Routes } from "react-router-dom";
import { PATHS } from "./paths";
import CategoriesPage from "../features/admin/categories/CategoriesPage";
import DashboardPage from "../features/admin/dashboard/pages/DashboardPage";
import AdminOrdersPage from "../features/admin/orders/pages/AdminOrdersPage";
import CouponsPage from "../features/admin/coupons/CouponsPage";
import UsersPage from "../features/admin/users/UsersPage";
import ProductsPage from "../features/admin/products/pages/ProductsPage";
import AddProductPage from "../features/admin/products/pages/AddProductPage";
import AdminLayout from "../layouts/AdminLayout";
import AdminSettings from "../features/admin/settings/pages/adminSettings";
import ProtectRole from "./ProtectRole";
import AddProductItems from "../features/admin/Product-Item/pages/ProductItems";
export default function AdminRouter() {
    return (
        <>
            <Routes>
                <Route element={<ProtectRole />} >
                    < Route path={PATHS.admin.dashboard} element={<AdminLayout />} >

                        <Route path={PATHS.admin.dashboard} element={<DashboardPage />} />
                        <Route path={PATHS.admin.categories} element={<CategoriesPage />} />
                        <Route path={PATHS.admin.orders} element={<AdminOrdersPage />} />
                        <Route path={PATHS.admin.products} element={<ProductsPage />} />
                        <Route path={PATHS.admin.users} element={<UsersPage />} />
                        <Route path={PATHS.admin.coupons} element={<CouponsPage />} />
                        <Route path={PATHS.admin.addProducts} element={<AddProductPage />} />
                        <Route path={PATHS.admin.settings} element={<AdminSettings />} />
                        <Route path={PATHS.admin.addProductItem} element={<AddProductItems />} />

                    </Route>
                </Route>
            </Routes>
        </>
    )
}