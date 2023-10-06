import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://651faccf906e276284c3554a.mockapi.io";
axios.defaults.params = {
  limit: 8,
};
export const getAllCars = createAsyncThunk("cars", async (page, thunkAPI) => {
  try {
    const response = await axios.get(`/adverts?&page=${page}`);
    console.log(response);
    const { data } = response;
    return data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue(e.message);
  }
});
