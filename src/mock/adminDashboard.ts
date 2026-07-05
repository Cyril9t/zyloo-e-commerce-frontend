import type {
    DashboardStat,
    RecentOrder,
} from "../features/admin/dashboard/types/dashboard";

export const dashboardStats: DashboardStat[] = [
    {
        title: "Total Revenue",
        value: "$125,430",
        change: "+12%",
    },
    {
        title: "Orders",
        value: "1,248",
        change: "+8%",
    },
    {
        title: "Customers",
        value: "842",
        change: "+18%",
    },
    {
        title: "Products",
        value: "156",
        change: "+5%",
    },
];

export const recentOrders: RecentOrder[] = [
    {
        id: "ORD-1001",
        customer: "John Doe",
        total: 299,
        status: "Delivered",
    },
    {
        id: "ORD-1002",
        customer: "Jane Smith",
        total: 499,
        status: "Processing",
    },
    {
        id: "ORD-1003",
        customer: "David Brown",
        total: 199,
        status: "Pending",
    },
];