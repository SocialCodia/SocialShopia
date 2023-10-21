import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
    email: '',
    user: {},
}


const authSlice = createSlice({
    initialState,
    name: 'authSlice',
    reducers: {
        setAuth: (state, action) => {
            const user = action.payload;
            if (user == null)
                state.isAuth = false;
            else
                state.isAuth = true;
            state.user = user;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        }
    }
});



export const { setAuth, setEmail } = authSlice.actions;
export default authSlice.reducer;