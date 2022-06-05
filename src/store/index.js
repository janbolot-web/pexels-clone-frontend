import { configureStore } from "@reduxjs/toolkit";
import imageSlice from "./features/imageSlice";
import userReducer from "./features/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    images: imageSlice,
  },
});
