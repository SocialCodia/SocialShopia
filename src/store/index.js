import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./category-slice";
import productSlice from "./product-slice";
import bannerSlice from "./banner-slice";

const store = configureStore({
    reducer: {
        bannerSlice,
        categorySlice,
        productSlice
    }
});


export default store;