import { createSlice } from "@reduxjs/toolkit";

export const botonLognIn = createSlice({
    name: "botonLognIn",
    initialState: {
        activadorLog: true
    },
    reducers: {
        activarLog: (state) => {
            state.activadorLog = true;
        },
        desactivarLog: (state) => {
            state.activadorLog = false;
        },
    }
});

export const { activarLog, desactivarLog } = botonLognIn.actions;
export default botonLognIn.reducer;