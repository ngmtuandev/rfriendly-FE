import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { findRoomByConditionApi } from "@/apis/findRoomByCondition";
export interface TRoomSlice {
  isLoading?: boolean;
  rooms?: TRoom[];
  statusFindRoom?: boolean;
}

const initialState: TRoomSlice = {
  isLoading: false,
  rooms: [],
  statusFindRoom: false,
};

export const doGetRoomByCondition = createAsyncThunk(
  "room/doGetRoomByCondition",
  async (dataConditionQuery: TFindRoom) => {
    try {
      const result = await findRoomByConditionApi(dataConditionQuery);
      return result?.data;
    } catch (error) {
      return error;
    }
  }
);

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetRoomByCondition.pending, (state, _) => {
      state.isLoading = true;
      state.rooms = [];
    });
    builder.addCase(doGetRoomByCondition.fulfilled, (state, action) => {
      state.isLoading = false;
      state.statusFindRoom = action.payload ? true : false;
      if (action.payload) state.rooms = action.payload;
    });
    builder.addCase(doGetRoomByCondition.rejected, (state, _) => {
      state.isLoading = false;
      state.rooms = [];
    });
  },
});

export default roomSlice.reducer;
