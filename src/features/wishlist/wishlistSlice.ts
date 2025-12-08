import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { WishlistItem, WishlistState } from "./wishlistTypes"
import type { RootState } from "@/app/store"

const initialState : WishlistState = {
    items : []
} 

const wishListSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        toggleWishlist: (state, action : PayloadAction<WishlistItem>) => {
            const itemExists = state.items.find(item => item.id === action.payload.id)
            if(itemExists)
                state.items = state.items.filter(item => item.id !== action.payload.id)
            else
                state.items.push(action.payload)
        },
        clearWishlist: (state) => {
            state.items = [];
        }
        
    }
})

export const {toggleWishlist, clearWishlist} = wishListSlice.actions;

export default wishListSlice.reducer;

export const selectWishlistItems = (state : RootState) => state.wishlist.items;

export const selectWishlistCount = (state : RootState) => state.wishlist.items.length;