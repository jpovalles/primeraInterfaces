import { createSlice } from "@reduxjs/toolkit";

export const botonCarrito = createSlice({
    name: "botonCarrito",
    initialState: {
        activadorCar: false
    },
    reducers: {
        activadorCarrito: (state) => {
            state.activadorCar = true;
        },
        desactivarCarrito: (state) => {
            state.activadorCar = false;
        },
    }
});

export const { activadorCarrito, desactivarCarrito } = botonCarrito.actions;
export default botonCarrito.reducer;