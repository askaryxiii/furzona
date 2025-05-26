import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginSlice from "./context/slices/login/loginSlice";
import registerSlice from "./context/slices/register/registerSlice";
import loadingSlice from "./context/slices/loading/loadingSlice";

const rootReducer = combineReducers({
  login: loginSlice,
  register: registerSlice,
  loading: loadingSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
