import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./context/slices/login/loginSlice";

export const store = configureStore({
  reducer: {
    login: loginSlice,
  },
});
