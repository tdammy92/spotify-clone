import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';



//Local imports
import axiosInstance from '../services/axiosInterceptor';
import { ApiEndpoints } from '../services/BaseApi';
import { getData } from '../services/Db';


const initialState = {
data:[],
IsLoading:false,
IsError:false
};

export const PlayListSlice = createSlice({
  name: 'Playlist',
  initialState,
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserPlaylist.pending, (state) => {
      state.IsLoading = true;
    });
    builder.addCase(fetchUserPlaylist.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.IsLoading = false;
    });
    builder.addCase(fetchUserPlaylist.rejected, (state) => {
      state.IsLoading = false;
      state.IsError = true;
    });
  },
});


// export {addUser};
export const playlistSelector = (state) => state.playlist;
export default PlayListSlice.reducer;



export const fetchUserPlaylist = createAsyncThunk("user/playlist", async () => {
    const userId = await getData("userid");
    const url = ApiEndpoints.getUserPlaylist(userId);
  
    try {

        // console.log(url)
      const response = await axiosInstance.get(url);
  
      return response.data;
    } catch (error) {
      return error;
    }
  });