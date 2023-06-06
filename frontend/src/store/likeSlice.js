import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify";

const initialState= {
    likeItems: localStorage.getItem("likeItems") ? JSON.parse(localStorage.getItem("likeItems")) : [],
}


const likeSlice = createSlice({
    name: "like",
    initialState,
    reducers: {
        addToLike(state, action){
            state.likeItems.push(action.payload);

            toast.success(`${action.payload.category} Added to Favourite`, {
                position: "top-center",
            });

            localStorage.setItem("likeItems", JSON.stringify(state.likeItems));
        },

        removeToLike(state, action) {
            const removeItem = state.likeItems.filter((item) => item.id !== action.payload.id);
            state.likeItems = removeItem;

            toast.error(`${action.payload.category} Removed from Favourite`, {
                position: "top-center",
            });

            localStorage.setItem("likeItems", JSON.stringify(state.likeItems));
        },

        clearLike(state) {
            state.likeItems = [];

            toast.error(`Clear from Favourite`, {
                position: "top-center",
            });

            localStorage.setItem("likeItems", JSON.stringify(state.likeItems));
        }
    }
})

export const {addToLike ,removeToLike, clearLike} = likeSlice.actions;

export default likeSlice.reducer;