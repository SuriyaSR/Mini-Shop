import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem, CartState } from "./cartTypes";
import type { RootState } from "@/app/store";

const initialState : CartState = {
    items: []
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
            const product = action.payload;
            const existing = state.items.find(item => item.id === product.id)
            if(existing)
                existing.quantity++;
            else {
                state.items.push({...product, quantity: 1})
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        increaseQnty: (state, action: PayloadAction<number>) => {
            const item = state.items.find(item => item.id === action.payload)
            if(item)
                item.quantity++;
        },
        decreaseQnty: (state, action: PayloadAction<number>) => {
            const item = state.items.find(item => item.id === action.payload)
            if (item) {
                item.quantity--;
                // If quantity becomes 0 → remove the item
                if (item.quantity === 0) {
                state.items = state.items.filter(i => i.id !== action.payload);
                }
            }
            else
                state.items = state.items.filter(item => item.id === action.payload)
        },
        clearCart:(state) => {
            state.items = [];
        }
    }
})

export const {addToCart, removeFromCart, increaseQnty, decreaseQnty, clearCart} = cartSlice.actions;

export default cartSlice.reducer;

export const selectCartItems = (state : RootState) => state.cart.items;

export const selectCartCount = (state : RootState) => 
    state.cart.items.reduce((sum : number, item : CartItem) => sum + item.quantity, 0);

export const selectCartTotalAmount = (state : RootState) =>
    state.cart.items.reduce((sum : number, item : CartItem) => sum + item.quantity * item.price, 0)