import { createContext, useContext, useEffect, useState } from "react";
import { validate } from "../lib/auth/auth";
import type { ReactNode } from "react";

interface User {
    id: string;
    name: string;
    email: string;
    role: "ADMIN" | "CUSTOMER";
}

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    isMutating: boolean;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const { trigger, isMutating } = validate();

    useEffect(() => {
        const validateUser = async () => {
            try {
                const data = await trigger();

                if (data.Message === "User") {
                    // Change this if your backend returns data.user instead
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

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                isLoading,
                isMutating,
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