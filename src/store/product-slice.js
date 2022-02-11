import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    product: [],
    products: [],
    featuredProducts: [],
    todaysDealProducts: [],
    isProductLoading: true,
    isProductsLoading: true,
    isFeaturedProductsLoading: true,
    isTodaysDealProductsLoading: true,
}

const productSlice = createSlice({

    initialState,
    name: 'productSlice',
    reducers: {
        setProduct: (state, action) => {
            state.isProductLoading = false;
            state.product = action.payload;
        },
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

export const { setProduct, setProducts, setFeaturedProducts, setTodaysDealProducts } = productSlice.actions;
export default productSlice.reducer;