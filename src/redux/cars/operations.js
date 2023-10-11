import axios from "axios";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://651faccf906e276284c3554a.mockapi.io";
const config = {
  params: {
    limit: 8,
  },
};

export const getAllCars = createAsyncThunk(
  "cars/fetchCars",
  async (page = 1, thunkAPI) => {
    try {
      const { data } = await axios.get(`/adverts?&page=${page}`, config);
      return data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getAvailableCars = createAsyncThunk(
  "cars/fetchAvailableCars",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/adverts");
      return data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const forCarData = createAsyncThunk(
  "cars/fetchCarsData",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/adverts");
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
