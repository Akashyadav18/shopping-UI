import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify";

const initialState = {
    //                     ternary operator 
    //      if i have item in localStorage = true ? then i want to add in my cartItems          : empty
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        addToCart(state, action) {
            //to check product present in the cart or not 
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if(itemIndex >= 0){ //if yes then
                state.cartItems[itemIndex].cartQuantity +=1 //  increase cartQuantity by 1.
                toast.info(`Increased ${action.payload.category} by 1`, {
                    position: "top-center",
                });
            }
            else{ // if not then add that product to cart
                const tempProducts = {...action.payload, cartQuantity: 1}//to add cartQuantity= 1 in that product index
                state.cartItems.push(tempProducts);
                toast.success(`Added ${action.payload.category} to Cart`, {
                    position: "top-center",
                });
            }
            //localStorage         key           value
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },

        removeFromCart(state, action) {
            const removeItem = state.cartItems.filter((item) => item.id !== action.payload.id);
            state.cartItems = removeItem;
            
            toast.error(`${action.payload.category} remove from Cart`, {
                position:"top-center",
            });
            //localStorage
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if(state.cartItems[itemIndex].cartQuantity > 1)
            {
                state.cartItems[itemIndex].cartQuantity -=1;

                toast.info(`Decreased ${action.payload.category} from Cart Quantity`, {
                    position:"top-center",
                });
            }
        },

        clearCart(state) {
            state.cartItems = [];

            toast.error("Cart Clear", {
                position: "top-center",
            })

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        getTotal(state){
            let {total, quantity} = state.cartItems.reduce((cartTotal, cartItem) => {
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

export const {addToCart, removeFromCart, decreaseCart, clearCart, getTotal} = cartSlice.actions;

export default cartSlice.reducer;