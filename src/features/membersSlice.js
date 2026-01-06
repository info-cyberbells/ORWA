import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createResidentialApplication, getResidentialMembers,
  getMembers, getResidentialMemberById, verifyResidentialMember, updateResidentialMember, deleteResidentialMember
} from "../auth/authServices";

// submitMemberApplication
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
// fetchMembers
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

// fetchResidentialMembers
export const fetchResidentialMembers = createAsyncThunk(
  "members/fetchmembers",
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      return await getMembers({ page, limit });
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch members"
      );
    }
  }
);
// fetchMemberById
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

export const addResidential = createAsyncThunk(
  "members/addResidential",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        USER_ENDPOINTS.CREATE_RESIDENTIAL,
        payload
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Create failed");
    }
  }
)



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



// verify member thunk
export const verifyMember = createAsyncThunk(
  "members/verify",
  async ({ memberId, status }, { rejectWithValue }) => {
    try {
      return await verifyResidentialMember({ memberId, status });
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to verify member"
      );
    }
  }
);





// delete member thunk
export const deleteMember = createAsyncThunk(
  "members/delete",
  async (id, { rejectWithValue }) => {
    try {
      return await deleteResidentialMember(id);
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete member"
      );
    }
  }
);





















const membersSlice = createSlice({
  name: "members",
  initialState: {
    loading: false,
    success: false,
    selectedMember: null,
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
      // submitMemberApplication cases
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
      // submitMemberApplication end cases

      // fetchMembers case
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
      // fetchMembers case end

      // get  Residential member cases
      .addCase(fetchResidentialMembers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchResidentialMembers.fulfilled, (state, action) => {
        state.loading = false;
        state.members = action.payload.data;
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
        state.total = action.payload.total;
        state.statusCounts = action.payload.statusCounts;
      })
      .addCase(fetchResidentialMembers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //get single member ById cases
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
      //get single member ById cases end


      // verify member cases
      .addCase(verifyMember.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyMember.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;

        const verifiedMember = action.payload.data;

        // update list if exists
        const index = state.members.findIndex(
          m => m._id === verifiedMember._id
        );

        if (index !== -1) {
          state.members[index] = verifiedMember;
        }

        // update selected member
        state.selectedMember = verifiedMember;
      })
      .addCase(verifyMember.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // verify member cases end

      // updateMember case
      .addCase(updateMember.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateMember.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;

        const updatedMember = action.payload.data;

        const index = state.members.findIndex(
          m => m._id === updatedMember._id
        );

        if (index !== -1) {
          state.members[index] = updatedMember;
        }

        state.selectedMember = updatedMember;
      })

      .addCase(updateMember.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // updateMember cases end


      // deleteMember cases
      .addCase(deleteMember.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(deleteMember.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;

        const deletedId = action.meta.arg;
        // remove from list
        state.members = state.members.filter(
          (m) => m._id !== deletedId
        );

        state.selectedMember = null;
      })

      .addCase(deleteMember.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
    // deleteMember cases end


  },
});

export const { resetMembersState } = membersSlice.actions;
export default membersSlice.reducer;