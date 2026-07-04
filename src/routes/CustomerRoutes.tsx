import { Route, Routes } from "react-router-dom";
import { PATHS } from "./paths";

import CustomerLayout from "../layouts/CustomerLayout";

import HomePage from "../features/home/pages/HomePage";
import ProductListingPage from "../features/products/pages/ProductListingPage";
import ProductDetailsPage from "../features/products/pages/ProductDetailsPage";
import CartPage from "../features/cart/pages/CartPage";
import CheckoutPage from "../features/checkout/pages/CheckoutPage";
import ProfilePage from "../features/profile/pages/ProfilePage";
import OrdersPage from "../features/orders/pages/OrdersPage";
import OrderDetailsPage from "../features/orders/pages/OrderDetailsPage";
import OrderSuccessPage from "../features/orders/pages/OrderSuccessPage";

function CustomerRoutes() {
    return (
        <Routes>
            <Route path="/" element={<CustomerLayout />}>
                <Route path={PATHS.customer.home} element={<HomePage />} />

                <Route
                    path={PATHS.customer.products}
                    element={<ProductListingPage />}
                />

                <Route
                    path={PATHS.customer.productDetails}
                    element={<ProductDetailsPage />}
                />

                <Route
                    path={PATHS.customer.cart}
                    element={<CartPage />}
                />

                <Route
                    path={PATHS.customer.checkout}
                    element={<CheckoutPage />}
                />

                <Route
                    path={PATHS.customer.profile}
                    element={<ProfilePage />}
                />

                <Route
                    path={PATHS.customer.orders}
                    element={<OrdersPage />}
                />

                <Route
                    path={PATHS.customer.orderDetails}
                    element={<OrderDetailsPage />}
                />

                <Route
                    path={PATHS.customer.orderSuccess}
                    element={<OrderSuccessPage />}
                />
            </Route>
        </Routes>
    );
}

export default CustomerRoutes;