import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    featuredProducts: [],
    todaysDealProducts: [],
    isProductsLoading: true,
    isFeaturedProductsLoading: true,
    isTodaysDealProductsLoading: true,
}

const productSlice = createSlice({

    initialState,
    name: 'productSlice',
    reducers: {
        setProducts: (state, action) => {
            state.isProductsLoading = false;
            state.products = action.payload;
        },
        setFeaturedProducts: (state, action) => {
            state.isFeaturedProductsLoading = false;
            state.featuredProducts = action.payload;
        },
        setTodaysDealProducts: (state, action) => {
            state.isTodaysDealProductsLoading = false;
            state.todaysDealProducts = action.payload;
        },
    }
});

export const { setProducts, setFeaturedProducts, setTodaysDealProducts } = productSlice.actions;
export default productSlice.reducer;