export type OrderStatus =
    | "Pending"
    | "Processing"
    | "Shipped"
    | "Delivered"
    | "Cancelled";

export interface AdminOrder {
    id: string;
    customer: string;
    total: number;
    status: OrderStatus;
    date: string;
}