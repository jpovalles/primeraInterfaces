import { createSlice } from "@reduxjs/toolkit";

import soccer from "../images/soccer7.jpg"
import tennis from "../images/tennis2.jpg"
import basket from "../images/basket.jpg"
import volley from "../images/volley.jpg"

export const cambiarDeporte = createSlice({
    name: "cambiarDeporte",
    initialState: {
        fuente: soccer,
        texto: "FUTBOL"
    },
    reducers: {
        filtrarFutbol: (state) => {
            state.fuente = soccer;
            state.texto = "FUTBOL";
        },
        filtrarTenis: (state) => {
            state.fuente = tennis;
            state.texto = "TENIS";
        },
        filtrarBasket: (state) => {
            state.fuente = basket;
            state.texto = "BALONCESTO";
        },
        filtrarVolley: (state) => {
            state.fuente = volley;
            state.texto = "VOLLEYBALL";
        },
    }
});

export const { filtrarFutbol, filtrarBasket, filtrarTenis, filtrarVolley } = cambiarDeporte.actions;
export default cambiarDeporte.reducer;