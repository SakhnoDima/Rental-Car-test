import { createSlice } from "@reduxjs/toolkit";
import { getAllCars, resetCarsList } from "./operations";

const initialState = {
  cars: [],
  isLoading: false,
  error: null,
};

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cars = [...state.cars, ...action.payload];
      })
      .addCase(getAllCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(resetCarsList, (state, { payload }) => {
        state.cars = [];
      });
  },
});

export default carsSlice.reducer;
