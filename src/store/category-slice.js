import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    featuredCategories: [],
    categories: [],
    isCategoriesLoading: true,
    isFeaturedCategoriesLoading: true,
}


const categorySlice = createSlice({
    initialState,
    name: 'categorySlice',
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
            state.isCategoriesLoading = false;
        },
        setFeaturedCategories: (state, action) => {
            state.featuredCategories = action.payload;
            state.isFeaturedCategoriesLoading = false;
        }
    }

});

export const { setCategories, setFeaturedCategories } = categorySlice.actions;
export default categorySlice.reducer;