import { createSlice } from "@reduxjs/toolkit";
import { addFavorites, removeFromFavorites } from "./operations";

const initialState = {
  favorites: [],
  isLoading: false,
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addFavorites, (state, action) => {
        state.favorites.push(action.payload);
      })
      .addCase(removeFromFavorites, (state, action) => {
        state.favorites = state.favorites.filter(
          (car) => car.id !== action.payload
        );
      });
  },
});

export default favoritesSlice.reducer;
