import type { AdminOrder } from "../features/admin/orders/types/order";

export const adminOrders: AdminOrder[] = [
    {
        id: "ORD-1001",
        customer: "John Doe",
        total: 299,
        status: "Delivered",
        date: "2026-07-05",
    },
    {
        id: "ORD-1002",
        customer: "Jane Smith",
        total: 149,
        status: "Processing",
        date: "2026-07-04",
    },
    {
        id: "ORD-1003",
        customer: "David Brown",
        total: 89,
        status: "Pending",
        date: "2026-07-03",
    },
];