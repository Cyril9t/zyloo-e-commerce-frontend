import type { AdminProduct } from "../features/admin/products/types/product";

export const adminProducts: AdminProduct[] = [
    {
        id: "1",
        name: "Wireless Headphones",
        category: "Electronics",
        price: 299,
        stock: 20,
        image: "https://picsum.photos/80?random=1",
    },
    {
        id: "2",
        name: "Gaming Mouse",
        category: "Electronics",
        price: 89,
        stock: 50,
        image: "https://picsum.photos/80?random=2",
    },
    {
        id: "3",
        name: "Smart Watch",
        category: "Wearables",
        price: 199,
        stock: 15,
        image: "https://picsum.photos/80?random=3",
    },
];