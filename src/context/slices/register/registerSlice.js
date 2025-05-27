import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: null,
  userRegistered: JSON.parse(localStorage.getItem("token")) ? true : false,
  error: false,
};

export const authRegister = createAsyncThunk(
  "authRegister",
  async ({ username, password, phone, address, email }, thunkAPI) => {
    try {
      const res = await axios.post(
        "http://localhost:1337/api/auth/local/register",
        {
          username: username,
          email: email,
          Phone_number: phone,
          address: address,
          password: password,
        }
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const registerSlice = createSlice({
  name: "register",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(authRegister.pending, (state) => {});
    builder.addCase(authRegister.fulfilled, (state, { payload }) => {
      state.data = payload;
      localStorage.setItem("token", JSON.stringify(payload.jwt));
      state.userRegistered = true;
    });
    builder.addCase(authRegister.rejected, (state) => {
      state.error = true;
    });
  },
});

export default registerSlice.reducer;
