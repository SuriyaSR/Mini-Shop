export interface WishlistItem {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
}

export interface WishlistState {
    items: WishlistItem [];
}