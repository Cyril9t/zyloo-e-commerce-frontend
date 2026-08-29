export const PATHS = {
    auth: {
        login: "/login",
        register: "/register",
        forgotPassword: "/forgot-password",
        resetPassword: "/reset-password",
    },

    customer: {
        home: "/",
        products: "/products",
        productDetails: "/products/:id",

        cart: "/cart",
        checkout: "/checkout",
        wishlist: "/wishlist",
        profile: "/profile",
        orders: "/orders",
        orderDetails: "/orders/:id",
        orderSuccess: "/order-success/:id",
        paymentsVerification: "/verifyPayment"
    },

    admin: {
        dashboard: "/admin",
        products: "/admin/products",
        categories: "/admin/categories",
        addProducts: "/admin/upload",
        editProduct: "/admin/Update-product/:id",
        addProductItem: "/admin/product-item/:id",
        orders: "/admin/orders",
        users: "/admin/users",
        coupons: "/admin/coupons",
        settings: '/admin/settings'
    },

    shared: {
        notFound: "*",
        unauthorized: "/403",
        serverError: "/500",
    },
} as const;