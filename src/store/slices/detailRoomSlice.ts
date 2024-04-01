import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDetailRoomApi } from "@/apis/getDetailRoom";
export interface TRoomDetailSlice {
  isLoading?: boolean;
  room?: any;
}

const initialState: TRoomDetailSlice = {
  isLoading: false,
  room: null,
};

export const doGetDetailRoom = createAsyncThunk(
  "detailRoom/doGetDetailRoom",
  async (roomId: string) => {
    try {
      const result = await getDetailRoomApi(roomId);
      return result?.data;
    } catch (error) {
      return error;
    }
  }
);

const detailRoomSlice = createSlice({
  name: "detailRoom",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetDetailRoom.pending, (state, _) => {
      state.isLoading = true;
      state.room = [];
    });
    builder.addCase(doGetDetailRoom.fulfilled, (state, action) => {
      state.isLoading = false;
      state.room = action.payload;
    });
    builder.addCase(doGetDetailRoom.rejected, (state, _) => {
      state.isLoading = false;
      state.room = [];
    });
  },
});

export default detailRoomSlice.reducer;
