import { createSlice } from "@reduxjs/toolkit";

export const botonArticulo = createSlice({
    name: "botonArticulo",
    initialState: {
        activadorArt: false
    },
    reducers: {
        activadorArticulo: (state) => {
            state.activadorArt = true;
        },
        desactivarArticulo: (state) => {
            state.activadorArt= false;
        },
    }
});

export const { activadorArticulo, desactivarArticulo } = botonArticulo.actions;
export default botonArticulo.reducer;