export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    rating:number;
    thumbnail: string;
    images: string[];
    brand: string;
    availabilityStatus: string;
    reviews?: ProductReview[];
    category: string;
    weight?: number;
    dimensions?:{
      width: number;
      height: number;
      depth: number;
    };
    shippingInfo?: string;
    warrantyInfo?: string;
    returnPolicy?: string;
    sku?: string;
    barCode?: string;
    minOrderQuantity: number;
}

export interface ProductReview {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}
export interface ProductListResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}