import { createSlice } from "@reduxjs/toolkit";

export const botonProfile = createSlice({
    name: "botonProfile",
    initialState: {
        activador: false
    },
    reducers: {
        activar: (state) => {
            state.activador = true;
        },
        desactivar: (state) => {
            state.activador = false;
        },
    }
});

export const { activar, desactivar } = botonProfile.actions;
export default botonProfile.reducer;