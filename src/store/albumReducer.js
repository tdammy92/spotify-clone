import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiEndpoints } from "../services/BaseApi";
import { getData } from "../services/Db";
import axiosInstance from "../services/axiosInterceptor";

const initialState= {
  isLoading: true,
  release: [],
  isError: false,
};

const albumSlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(albumRelease.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(albumRelease.fulfilled, (state, { payload }) => {
      state.release = payload;
      state.isLoading = false;
    });
    builder.addCase(albumRelease.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const albumSelector = (state) => state.album;
export default albumSlice.reducer;

export const albumRelease = createAsyncThunk(
  "/browse/new-release",
  async () => {
    const url = ApiEndpoints.getNewRelease();

    try {
      const response= await axiosInstance.get(url);

      return response.data;
    } catch (error) {
      return error;
    }
  }
);
