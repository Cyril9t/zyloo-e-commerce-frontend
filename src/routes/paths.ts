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
        orderSuccess: "/order-success",
    },

    admin: {
        dashboard: "/admin",
        products: "/admin/products",
        categories: "/admin/categories",
        orders: "/admin/orders",
        users: "/admin/users",
        coupons: "/admin/coupons",
    },

    shared: {
        notFound: "*",
        unauthorized: "/403",
        serverError: "/500",
    },
} as const;