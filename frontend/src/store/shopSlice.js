import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify";

const initialState = {
    shopItems: localStorage.getItem("shopItems") ? JSON.parse(localStorage.getItem("shopItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        addToShop(state, action){
            const itemIndex = state.shopItems.findIndex((item) => item.id === action.payload.id);
            if(itemIndex >=0) {
                state.shopItems[itemIndex].cartQuantity +=1;

                toast.info(`Increase ${action.payload.category} by 1`, {
                    position: "top-center",
                })
            }
            else{
                const tempProduct = {...action.payload, cartQuantity: 1}
                state.shopItems.push(tempProduct);

                toast.success(`${action.payload.category} Added to cart`, {
                    position: "top-center",
                })
            }
            //localStorage
            localStorage.setItem("shopItems", JSON.stringify(state.shopItems));
        },

        removeToShop(state, action) {
            const removeItem = state.shopItems.filter((item) => item.id !== action.payload.id);
            state.shopItems = removeItem;

            toast.error(`Remove ${action.payload.category} from Cart`, {
                position: "top-center",
            })

            localStorage.setItem("shopItems", JSON.stringify(state.shopItems));
        },

        decreaseToShop(state, action) {
            const itemIndex = state.shopItems.findIndex((item) => item.id === action.payload.id);
            if(state.shopItems[itemIndex].cartQuantity > 1)
            {
                state.shopItems[itemIndex].cartQuantity -=1;

                toast.info(`Decreased ${action.payload.category} from Cart Quantity`, {
                    position:"top-center",
                });
            }
        },

        clearCartShop(state) {
            state.shopItems = [];

            toast.error("ClearCart", {
                position: "top-center",
            })

            localStorage.setItem("shopItems", JSON.stringify(state.shopItems));
        },

        getTotalShop(state){
            let {total, quantity} = state.shopItems.reduce((cartTotal, cartItem) => {
                const {price, cartQuantity} = cartItem;
                const itemTotal = price * cartQuantity;

                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;

                return cartTotal;
            }, {
                total: 0, 
                quantity: 0,
            });

            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;

        }
        
    }
});

export const {addToShop, removeToShop, decreaseToShop, clearCartShop, getTotalShop} = shopSlice.actions;

export default shopSlice.reducer;

