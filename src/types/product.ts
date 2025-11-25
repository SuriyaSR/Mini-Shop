export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    rating:number;
    stock: number;
    thumbnail: string;
    images: string[];
}

export interface ProductListResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}