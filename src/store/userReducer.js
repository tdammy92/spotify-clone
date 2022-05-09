import {createSlice} from '@reduxjs/toolkit';
import { storeData } from '../services/Db';
import axiosInstance from '../services/axiosInterceptor';

const initialState = {
  user: null,
  Isloading: false,
  Isauthenticated:false
};
export const UserSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.Isloading=true
      // state.user = action.payload;
    },
    getUserSuccess:(state,{payload})=>{
      state.user = payload,
      state.Isauthenticated = true,
      state.Isloading =false
    }
  },
});

export const {getUser,getUserSuccess} = UserSlice.actions;


export default UserSlice.reducer;


export const getCurrentUser = () => {

  // console.log("it got here");
  return async (dispatch) => {
    dispatch(getUser());
    try {
      const response = await axiosInstance.get("/me");

      console.log(response.data)
      storeData("userData", response.data);
      storeData("userid", response.data.id);
      getUserSuccess(response.data);
      return response.data;
    } catch (error) {
      console.log("Error", error);
    }
  };
};