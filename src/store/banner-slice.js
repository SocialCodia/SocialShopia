import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    banners: [],
    isBannersLoading: true,
}

const bannerSlice = createSlice({
    initialState,
    name: 'bannerSlice',
    reducers: {
        setBanners: (state, action) => {
            state.isBannersLoading = false;
            state.banners = action.payload;
        }
    }
});


export const { setBanners } = bannerSlice.actions;
export default bannerSlice.reducer;