import { Eye } from "lucide-react";

import { Button } from "../../../../components/ui/button";

import DataTable from "../../../../features/admin/shared/components/DataTable";
import UserStatusBadge from "./UserStatusBadge";

import { adminUsers } from "../../../../mock/adminUsers";

import { getAllUser, type users } from "../../../../context/userContext";
import { data } from "react-router-dom";
import { useEffect, useState } from "react";

interface userType {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    role: string
}


interface usersArray {
    data: []
}

export default function UserTable() {
    const { data } = getAllUser()
    const [users, setUsers] = useState([]) as any

    useEffect(() => {
        setUsers(data?.users)
    }, [data])


    return (
        <DataTable>
            <table className="w-full">
                <thead className="bg-muted">
                    <tr>
                        <th className="p-4 text-left">Name</th>
                        <th className="p-4 text-left">Email</th>
                        <th className="p-4 text-left">Role</th>
                        <th className="p-4 text-left">Status</th>
                        <th className="p-4 text-right">
                            Action
                        </th>
                    </tr>
                </thead>

                {/* <tbody>
                    {users.map((user: any) => (
                        <tr
                            key={user.id}
                            className="border-t"
                        >
                            <td className="p-4">
                                {user.firstName} {user.lastName}
                            </td>

                            <td className="p-4">
                                {user.email}
                            </td>

                            <td className="p-4">
                                {user.role}
                            </td>

                            <td className="p-4">
                                <UserStatusBadge
                                    status={"Active"}
                                />
                            </td>

                            <td className="p-4 text-right">
                                <Button
                                    variant="outline"
                                    size="icon"
                                >
                                    <Eye className="h-4 w-4" />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody> */}
            </table>
        </DataTable>
    );
}