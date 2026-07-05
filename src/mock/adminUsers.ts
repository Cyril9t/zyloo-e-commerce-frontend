import type { AdminUser } from "../features/admin/users/types/user";

export const adminUsers: AdminUser[] = [
    {
        id: "1",
        name: "John Doe",
        email: "john@example.com",
        role: "Customer",
        status: "Active",
    },
    {
        id: "2",
        name: "Jane Smith",
        email: "jane@example.com",
        role: "Admin",
        status: "Active",
    },
    {
        id: "3",
        name: "David Brown",
        email: "david@example.com",
        role: "Customer",
        status: "Inactive",
    },
];