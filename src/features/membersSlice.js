import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createResidentialApplication, getResidentialMembers, getResidentialMemberById, updateResidentialMember } from "../auth/authServices";

export const submitMemberApplication = createAsyncThunk(
  "members/submit",
  async (formData, { rejectWithValue }) => {
    try {
      return await createResidentialApplication(formData);
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Member application failed"
      );
    }
  }
);

export const fetchMembers = createAsyncThunk(
  "members/fetch",
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      return await getResidentialMembers({ page, limit });
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch members"
      );
    }
  }
);

export const fetchMemberById = createAsyncThunk(
  "members/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      return await getResidentialMemberById(id);
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch member details"
      );
    }
  }
);





// update member thunk
export const updateMember = createAsyncThunk(
  "members/update",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      return await updateResidentialMember(id, updatedData);
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update member"
      );
    }
  }
);
const membersSlice = createSlice({
  name: "members",
  initialState: {
    loading: false,
    success: false,
    error: null,
    members: [],
    page: 1,
    totalPages: 1,
    total: 0,
    statusCounts: [],
  },
  reducers: {
    resetMembersState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.selectedMember = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitMemberApplication.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitMemberApplication.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(submitMemberApplication.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchMembers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMembers.fulfilled, (state, action) => {
        state.loading = false;
        state.members = action.payload.data;
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
        state.total = action.payload.total;
        state.statusCounts = action.payload.statusCounts;
      })
      .addCase(fetchMembers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //get single member
      .addCase(fetchMemberById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMemberById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedMember = action.payload.data.residential;
      })
      .addCase(fetchMemberById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      .addCase(updateMember.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateMember.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        const index = state.members.findIndex(m => m.id === action.payload.data.residential.id);
        if (index !== -1) {
          state.members[index] = action.payload.data.residential;
        }
        state.selectedMember = action.payload.data.residential;
      })
      .addCase(updateMember.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

  },
});

export const { resetMembersState } = membersSlice.actions;
export default membersSlice.reducer;