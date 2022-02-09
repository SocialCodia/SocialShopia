import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./category-slice";

const store = configureStore({
    reducer: {
        categorySlice
    }
});


export default store;