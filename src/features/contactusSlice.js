import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { ContactUsService, getAllContactsService } from "../auth/authServices"



export const contactus = createAsyncThunk(
  "api/Contact-us",
  async (contactData, thunkAPI) => {
    try {
      return await ContactUsService(contactData);

    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "message failed"
      );
    }
  }
);
// getAllContacts
export const getAllContacts = createAsyncThunk(
  "contact/getAll",
  async ({ page, limit }, thunkAPI) => {
    try {
      return await getAllContactsService({ page, limit });
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch contacts"
      );
    }
  }
);


const contactSlice = createSlice({
  name: "contact",
  initialState: {
    loading: false,
    success: false,
    error: null,
    data: null,
    contacts: [],
    page: 1,
    totalPages: 1,
    total: 0,
  },

  reducers: {
    resetContactState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false
    },

  },

  extraReducers: (builder) => {
    builder
      // Pendingcase

      .addCase(contactus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // fulfilled case
      .addCase(contactus.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.data = action.payload;
      })



      //   rejectedcase
      .addCase(contactus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // contactus List
      // pending case
      .addCase(getAllContacts.pending, (state) => {
        state.loading = true;
      })


      // fulfilled case

      .addCase(getAllContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload.data;
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
        state.total = action.payload.total;
      })



      // rejected case
      .addCase(getAllContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });



  },

})
export const { resetContactState } = contactSlice.actions;
export default contactSlice.reducer;