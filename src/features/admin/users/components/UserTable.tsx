import { Eye } from "lucide-react";

import { Button } from "../../../../components/ui/button";

import DataTable from "../../../../features/admin/shared/components/DataTable";
import UserStatusBadge from "./UserStatusBadge";

import { adminUsers } from "../../../../mock/adminUsers";

export default function UserTable() {
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

                <tbody>
                    {adminUsers.map((user) => (
                        <tr
                            key={user.id}
                            className="border-t"
                        >
                            <td className="p-4">
                                {user.name}
                            </td>

                            <td className="p-4">
                                {user.email}
                            </td>

                            <td className="p-4">
                                {user.role}
                            </td>

                            <td className="p-4">
                                <UserStatusBadge
                                    status={user.status}
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
                </tbody>
            </table>
        </DataTable>
    );
}