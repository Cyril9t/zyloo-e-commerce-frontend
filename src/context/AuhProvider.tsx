import { createContext, useContext, useEffect, useState } from "react";
import { validate } from "../lib/auth/auth";
import type { ReactNode } from "react";
import type { ProductResponse } from "../features/products/pages/ProductListingPage";
import { allProducts } from "../lib/actions";
import type { productInfoData } from "../features/admin/products/types/product";
import type { Products } from "../features/products/types/Product";

interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: "ADMIN" | "CUSTOMER";
}

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    isMutating: boolean;
    products: Products[]
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
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

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                isLoading,
                isMutating,
                products,
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