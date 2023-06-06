import {configureStore} from "@reduxjs/toolkit";
import productsReducer, { productsFetch } from "./productsSlice";
import cartReducer, { getTotal } from "./cartSlice";
import shopReducer, { getTotalShop } from "./shopSlice";
import likeReducer from "./likeSlice";

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        shop: shopReducer,
        like: likeReducer,
    }
});

store.dispatch(productsFetch());
store.dispatch(getTotal());
store.dispatch(getTotalShop());

export default store;