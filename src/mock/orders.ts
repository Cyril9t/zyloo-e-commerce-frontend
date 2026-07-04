import type { Order } from "../features/orders/types/order";

export const orders: Order[] = [
    {
        id: "ORD-1001",
        createdAt: "July 4, 2026",
        status: "Delivered",
        subtotal: 598,
        shipping: 0,
        tax: 30,
        total: 628,
        items: [
            {
                id: "1",
                name: "Wireless Headphones",
                image: "https://picsum.photos/200?random=1",
                quantity: 1,
                price: 299,
            },
            {
                id: "2",
                name: "Gaming Mouse",
                image: "https://picsum.photos/200?random=2",
                quantity: 1,
                price: 299,
            },
        ],
    },
    {
        id: "ORD-1002",
        createdAt: "July 1, 2026",
        status: "Processing",
        subtotal: 199,
        shipping: 20,
        tax: 10,
        total: 229,
        items: [
            {
                id: "3",
                name: "Smart Watch",
                image: "https://picsum.photos/200?random=3",
                quantity: 1,
                price: 199,
            },
        ],
    },
];