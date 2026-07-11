import { createContext, useContext, useEffect, useState } from "react";
import { validate } from "../lib/auth/auth";
import type { ReactNode } from "react";


interface User {
    id: string;
    name: string;
    email: string;
}

interface AuthContextType {
    user: User | null,
    isMutating: boolean,
    isLoading: boolean,
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<User | null>(null)

    const { trigger, isMutating, error } = validate();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {

        const validateUser = async () => {

            try {
                setIsLoading(true)
                const userInfo = await trigger()
                if (userInfo.Message === "No cookies found") {
                    console.log("no user login", userInfo)
                    setIsLoading(false)
                    setUser(null)
                } else if (userInfo.Message === "User") {
                    console.log("user login", userInfo)
                    setUser(userInfo);
                    setIsLoading(false);
                }

            } catch (error) {
                console.log(error, "AuthContext")
            }
        }
        validateUser()

    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser, isMutating, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {

    const context = useContext(AuthContext);

    if (!context) throw new Error("Error from Auth")

    return context
}