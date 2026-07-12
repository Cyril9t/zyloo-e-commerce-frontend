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


// types.ts
// export interface FilterState {
//     search: string;
//     categories: string[];
//     priceRange: [number, number];
//     brands: string[];
//     rating: number | null;
//     availability: 'all' | 'in-stock' | 'out-of-stock';
//     colors: string[];
//     sizes: string[];
//     discounts: string[];
//     sortBy: string;
// }

// export interface Product {
//     id: string;
//     name: string;
//     category: string;
//     brand: string;
//     price: number;
//     originalPrice?: number;
//     rating: number;
//     inStock: boolean;
//     colors: string[];
//     sizes: string[];
//     image: string;
//     discount?: string;
// }

// export const INITIAL_FILTERS: FilterState = {
//     search: '',
//     categories: [],
//     priceRange: [0, 500],
//     brands: [],
//     rating: null,
//     availability: 'all',
//     colors: [],
//     sizes: [],
//     discounts: [],
//     sortBy: 'featured',
// };