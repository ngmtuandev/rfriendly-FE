import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { findRoomByConditionApi } from "@/apis/findRoomByCondition";
export interface TRoomSlice {
  isLoading?: boolean;
  rooms?: TRoom[];
}

const initialState: TRoomSlice = {
  isLoading: false,
  rooms: [],
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
    builder.addCase(doGetRoomByCondition.pending, (state, action) => {
      console.log("pending : ", action.payload);
    });
    builder.addCase(doGetRoomByCondition.fulfilled, (state, action) => {
      state.rooms = action.payload;
    });
    builder.addCase(doGetRoomByCondition.rejected, (state, action) => {
      console.log("rejected : ", action.payload);
    });
  },
});

export default roomSlice.reducer;
