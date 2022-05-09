import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiEndpoints } from "../services/BaseApi";
import { getData } from "../services/Db";
import axiosInstance from "../services/axiosInterceptor";

const initialState = {
showPlayer:false,
recentlyPlayed:[],
currentlyPlaing:''
};

export const PlayerSlice = createSlice({
  name: 'Player',
  initialState,
  reducers: {
    // showPlayer: (state, action) => {
    //   state.showPlayer = true;
    // },
    // hidePlayer: (state, action) => {
    //   state.showPlayer = false;
    // },
  },

  extraReducers: (builder) => {

    // recentyly played
    builder.addCase(getRecentlyPlayedSongs.pending, (state) => {
      state.IsLoading = true;
    });
    builder.addCase(getRecentlyPlayedSongs.fulfilled, (state, { payload }) => {
      state.recentlyPlayed = payload;
      state.IsLoading = false;
    });
    builder.addCase(getRecentlyPlayedSongs.rejected, (state) => {
      state.IsLoading = false;
      state.IsError = true;
    });

    // curretlyplaying
    builder.addCase(FetchCurrentlyPlaying.pending, (state) => {
      state.IsLoading = true;
    });
    builder.addCase(FetchCurrentlyPlaying.fulfilled, (state, { payload }) => {
      state.currentlyPlaing = payload;
      state.IsLoading = false;
    });
    builder.addCase(FetchCurrentlyPlaying.rejected, (state) => {
      state.IsLoading = false;
      state.IsError = true;
    });
  },
});


export const playerSelector = (state) => state.player;
export default PlayerSlice.reducer;



export const getRecentlyPlayedSongs = createAsyncThunk("user/recentlyPlayed", async () => {
  const userId = await getData("userid");
  const url = ApiEndpoints.getRecentlyPlayed();

  try {
    // console.log("recently playing")
      // console.log(url)
    const response = await axiosInstance.get(url);

   return   response.data.items
    // console.log("******************************************************");
    // console.log('recently played',jso);
    // console.log("******************************************************");
  } catch (error) {

    // console.log("recetly played",error);
    return error;
  }
});



export const FetchCurrentlyPlaying = createAsyncThunk("user/currentlyplaying", async () => {

  // const userId = await getData("userid");
  const url = ApiEndpoints.getcurrentlyPlaying();
  
  try {
    
    // console.log("currently playing")
      // console.log(url)
    const response = await axiosInstance.get(url);
    console.log('currently plaing',response);
    return response;


  } catch (error) {

    console.log('currentyly playing',error);
    return error;
  }
});