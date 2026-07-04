export type OrderStatus =
    | "Pending"
    | "Processing"
    | "Shipped"
    | "Delivered"
    | "Cancelled";

export interface OrderItem {
    id: string;
    name: string;
    image: string;
    quantity: number;
    price: number;
}

export interface Order {
    id: string;
    createdAt: string;
    status: OrderStatus;
    total: number;
    subtotal: number;
    shipping: number;
    tax: number;
    items: OrderItem[];
}