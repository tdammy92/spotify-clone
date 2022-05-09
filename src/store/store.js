import { configureStore ,getDefaultMiddleware} from "@reduxjs/toolkit";
import UserReducer from './userReducer'
import  PlayerSlice from "./playerReducer";
import playlistReducer from "./playlistReducer";
import categoryReducer from "./categoryReducer";
import albumReducer from "./albumReducer";


const store = configureStore({
    reducer:{
        user:UserReducer,
        player:PlayerSlice,
        playlist:playlistReducer,
        category:categoryReducer,
        album:albumReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false
    }),
})







export default store;