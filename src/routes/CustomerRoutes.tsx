import { Route, Routes } from "react-router-dom";
import { PATHS } from "./paths";
import HomePage from "../features/home/pages/HomePage";
import CartPage from "../features/cart/pages/CartPage";
import CheckoutPage from "../features/checkout/pages/CheckoutPage";
import ProfilePage from "../features/profile/pages/ProfilePage";
import OrderDetailsPage from "../features/orders/pages/OrderDetailsPage";
import OrderSuccessPage from "../features/orders/pages/OrderSuccessPage";
import OrdersPage from "../features/orders/pages/OrdersPage";
import ProductDetailsPage from "../features/products/pages/ProductDetailsPage";
import ProductsPage from "../features/products/pages/ProductsPage";
function CustomerRoutes() {
    return (
        <>
            <Routes>
                <Route path={PATHS.customer.home} element={<HomePage />} />
                <Route path={PATHS.customer.cart} element={<CartPage />} />
                <Route path={PATHS.customer.checkout} element={<CheckoutPage />} />
                <Route path={PATHS.customer.profile} element={<ProfilePage />} />
                <Route path={PATHS.customer.orderDetails} element={<OrderDetailsPage />} />
                <Route path={PATHS.customer.orderSuccess} element={<OrderSuccessPage />} />
                <Route path={PATHS.customer.orders} element={<OrdersPage />} />
                <Route path={PATHS.customer.productDetails} element={<ProductDetailsPage />} />
                <Route path={PATHS.customer.products} element={<ProductsPage />} />

            </Routes>
        </>
    );
}

export default CustomerRoutes;