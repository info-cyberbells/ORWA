import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginService } from "../auth/authServices";


export const loginUser = createAsyncThunk(
  "api/loginUser",
  async (userData, thunkAPI) => {
    try {
      return await LoginService(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);


const apiSlice = createSlice({
  name: "api",
  initialState: {
    user: null,
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null,
  },

  reducers: {
    resetAuthState: (state) => {
      state.loading = false;
      state.error = null;
      state.user = null; 
    },
  },

  extraReducers: (builder) => {
    builder


      // pending case
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })


      // fulfilled case
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;

        const data = action.payload.data;

        state.user = {
          _id: data._id,
          name: data.name,
          role: data.role,
        };

        // Redux
        state.token = data.token;

        // Store token
        localStorage.setItem("token", data.token);

        // Store user object
        const user = {
          _id: data._id,
          name: data.name,
          role: data.role,
        };

        localStorage.setItem("user", JSON.stringify(user));

        // Logs
        console.log("TOKEN:", data.token);
        console.log("USER (stored):", user);
      })



      // rejected case
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});


export const { resetAuthState } = apiSlice.actions
export default apiSlice.reducer;
