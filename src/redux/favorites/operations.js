import { createAction } from "@reduxjs/toolkit";

export const addFavorites = createAction("favorites/addCar", (car) => ({
  payload: car,
}));

export const removeFromFavorites = createAction("favorite/remove", (id) => ({
  payload: id,
}));
