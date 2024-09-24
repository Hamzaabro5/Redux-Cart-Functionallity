import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: `Cart`,
    initialState: {
        cartItems: []
    },
    reducers: {
        addCartItems: (state , action)=>{
            state.cartItems.push(action.payload.item)
        }
    }
})


export const { addCartItems } = cartSlice.actions
export default cartSlice.reducer