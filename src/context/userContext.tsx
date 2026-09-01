import { useContext, createContext, useEffect, type ReactNode } from "react"
import { totalUsers } from "../lib/actions";


interface userType {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    role: string
}

export interface users {
    users: userType
}

interface context {
    data: users

}

interface children {
    children: ReactNode
}

const usersContext = createContext<null | context>(null)

export function TotalUsersContext({ children }: children) {

    const { data, trigger } = totalUsers()



    useEffect(() => {
        const getUsers = async () => await trigger()

        getUsers()

    }, [])

    return (<usersContext.Provider value={{ data }}>{children}</usersContext.Provider>)
}

export const getAllUser = () => {

    const context = useContext(usersContext)

    if (!context) throw new Error("getAllUser must be inside totalUsersContext")

    return context
}