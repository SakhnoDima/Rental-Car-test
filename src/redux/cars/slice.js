import { createSlice } from "@reduxjs/toolkit";
import {
  forCarData,
  getAllCars,
  getAvailableCars,
  resetCarsList,
} from "./operations";

const initialState = {
  cars: [],
  carsData: [],
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
      })
      .addCase(getAvailableCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAvailableCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cars = [...state.cars, ...action.payload];
      })
      .addCase(forCarData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.carsData = action.payload;
      })
      .addCase(getAvailableCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default carsSlice.reducer;
