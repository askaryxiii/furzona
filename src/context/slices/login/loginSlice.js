import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: null,
  userLogged: JSON.parse(localStorage.getItem("token")) ? true : false,
  error: false,
};

export const authLogin = createAsyncThunk(
  "authLogin",
  async ({ username, password }, thunkAPI) => {
    try {
      const res = await axios.post("http://localhost:1337/api/auth/local", {
        identifier: username,
        password: password,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const loginSlice = createSlice({
  name: "login",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(authLogin.pending, (state) => {});
    builder.addCase(authLogin.fulfilled, (state, { payload }) => {
      state.data = payload;
      localStorage.setItem("token", JSON.stringify(payload.jwt));
      state.userLogged = true;
    });
    builder.addCase(authLogin.rejected, (state) => {
      state.error = true;
    });
  },
});

export default loginSlice.reducer;
