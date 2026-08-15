import { createContext, useContext, useEffect, useState } from "react";
import { validate } from "../lib/auth/auth";
import type { ReactNode } from "react";
import type { ProductResponse } from "../features/products/pages/ProductListingPage";
import { allProducts } from "../lib/actions";
import type { productInfoData } from "../features/admin/products/types/product";
import type { Products } from "../features/products/types/Product";
import { cart } from "../lib/actions";
import { date } from "zod/v3";
import { el } from "zod/v4/locales";

interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: "ADMIN" | "CUSTOMER";
}

export interface product {
    name: string;
    description: string
}

export type productItem = {
    id: string;
    productId: string,
    price: number;
    stock: number;
    color: string;
    image: string;
    size: string | null
    product: product
}

export type Data = {
    id: string;
    productItem: productItem;
    quantity: number
}

interface carts {
    cart: Data[]
}

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    isMutating: boolean;
    products: Products[]
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    setCartCount: React.Dispatch<React.SetStateAction<number>>;
    cartCount: number,
    data: carts,
    items: Data[],
    setItems: React.Dispatch<React.SetStateAction<Data[] | []>>;

}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const { trigger: fetchProducts } = allProducts()
    const { trigger, isMutating } = validate();
    const [products, setProducts] = useState<Products[]>([]);
    const [cartCount, setCartCount] = useState(0)
    const { data, trigger: fetch } = cart()
    const [items, setItems] = useState<Data[] | []>([]);

    useEffect(() => {
        const validateUser = async () => {
            try {
                const data = await trigger();

                if (data.Message === "User") {

                    setUser(data.decoded ?? data.userInfo ?? data);
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.log(error);
                setUser(null);
            } finally {
                setIsLoading(false);
            }
        };

        validateUser();
    }, []);


    useEffect(() => {
        const getAllProducts = async () => {
            let isMounted = true;
            try {
                const response = (await fetchProducts()) as ProductResponse;
                if (isMounted) {
                    setProducts(response.product ?? []);
                }
            } catch (error) {
                console.error(error);
                if (isMounted) {
                    setProducts([]);
                }
            }

        }
        getAllProducts();

    }, [user])

    const usersCArt = async () => {
        try {
            await fetch();

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        usersCArt();
    }, [cartCount, user,])

    useEffect(() => {
        setCartCount(data?.cart?.length ?? 0)
    }, [cartCount, data, items])

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                isLoading,
                isMutating,
                products,
                cartCount,
                setCartCount,
                data,
                items,
                setItems,

            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider");
    }

    return context;
}