import axios from "axios";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://651faccf906e276284c3554a.mockapi.io";
axios.defaults.params = {
  limit: 8,
};

export const getAllCars = createAsyncThunk(
  "cars/fetchCats",
  async (page = 1, thunkAPI) => {
    try {
      const { data } = await axios.get(`/adverts?&page=${page}`);
      return data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const resetCarsList = createAction("cars/addCar", (car) => ({
  payload: car,
}));
