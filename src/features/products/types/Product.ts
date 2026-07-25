export interface Category {
    id: string;
    name: string;
}

export interface Tag {
    id: string;
    name: string;
}

export interface ProductImage {
    id: string;
    productID: string;
    productImages: string;
}

export interface Products {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    createdAt: string;

    category: Category[];
    tag: Tag[];
    images: ProductImage[];

    // Future backend fields
    rating?: number;
    reviews?: number;
    brand?: string;
    colors?: string[];
    sizes?: string[];

    originalPrice?: number;
    isNew?: boolean;
    isSale?: boolean;
}