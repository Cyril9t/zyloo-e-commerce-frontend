export interface DashboardStat {
    title: string;
    value: string;
    change: string;
}

export interface RecentOrder {
    id: string;
    customer: string;
    total: number;
    status: "Pending" | "Processing" | "Delivered";
}