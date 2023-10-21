import { createSlice } from "@reduxjs/toolkit";

export const contadorSlice = createSlice({
  name: "cuenta",
  initialState: {
    cuenta: 0
  },
  reducers: {
    sumar: (state) => {
      state.cuenta += 1;
    },
    restar: (state) => {
      state.cuenta -= 1;
    },
  }
});

export const { sumar, restar } = contadorSlice.actions;

export default contadorSlice.reducer;