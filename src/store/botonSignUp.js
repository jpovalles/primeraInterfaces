import { createSlice } from "@reduxjs/toolkit";

export const botonSignIn = createSlice({
    name: "botonSignIn",
    initialState: {
        activadorSign: true
    },
    reducers: {
        activarSign: (state) => {
            state.activadorSign = true;
        },
        desactivarSign: (state) => {
            state.activadorSign = false;
        },
    }
});

export const { activarSign, desactivarSign } = botonSignIn.actions;
export default botonSignIn.reducer;