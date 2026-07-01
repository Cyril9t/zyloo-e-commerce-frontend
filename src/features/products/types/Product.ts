export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating: number;
    reviews: number;
    isNew?: boolean;
    isSale?: boolean;
}