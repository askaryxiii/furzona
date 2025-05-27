import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginSlice from "./context/slices/login/loginSlice";
import registerSlice from "./context/slices/register/registerSlice";

const rootReducer = combineReducers({
  login: loginSlice,
  register: registerSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
