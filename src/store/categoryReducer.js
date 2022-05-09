import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiEndpoints } from "../services/BaseApi";
import { getData } from "../services/Db";
import axiosInstance from "../services/axiosInterceptor";


const initialState = {
    isLoading: false,
    category: [],
    isError: false,
  };


  const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(fetchCategories.fulfilled, (state, { payload }) => {
        state.category = payload;
        state.isLoading = false;
      });
      builder.addCase(fetchCategories.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
    },
  });
  
  export const categorySelector = (state) => state.category;
  export default categorySlice.reducer;
  
  export const fetchCategories = createAsyncThunk("user/category", async () => {
    const userId = await getData("userid");
    const url = ApiEndpoints.getCategories();
  
    try {
      const response = await axiosInstance.get(url);
  
      return response.data;
    } catch (error) {
      return error;
    }
  });
  