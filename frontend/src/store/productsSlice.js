import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: null,
}

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async () => {
            const response = await axios.get("http://localhost:5001/products");
            return response?.data;
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},

    extraReducers: {
        [productsFetch.pending]: (state) => {
            state.status = 'pending';
        },
        [productsFetch.fulfilled]: (state, action) => {
            state.status = 'success';
            state.items = action.payload;
        },
        [productsFetch.rejected]: (state, action) => {
            state.status = 'rejected';
            state.items = action.payload;
        }
    }
});

export default productsSlice.reducer;