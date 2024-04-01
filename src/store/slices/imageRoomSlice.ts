import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getImageTypeOfRoomApi } from "@/apis/getImageTypeRoom";

const initialState: any = {
  isLoading: false,
  images: null,
};

export const doGetImagesRoomByType = createAsyncThunk(
  "imageRoom/doGetImagesRoomByType",
  async (payload: { roomId: string; typeImageId: string }, thunkAPI) => {
    try {
      const result = await getImageTypeOfRoomApi(
        payload.roomId,
        payload.typeImageId
      );
      return result?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const imageRoomSlice = createSlice({
  name: "imageRoom",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetImagesRoomByType.pending, (state, _) => {
      state.isLoading = true;
      state.images = null;
    });
    builder.addCase(doGetImagesRoomByType.fulfilled, (state, action) => {
      state.isLoading = false;
      state.images = action.payload;
    });
    builder.addCase(doGetImagesRoomByType.rejected, (state, _) => {
      state.isLoading = false;
      state.images = null;
    });
  },
});

export default imageRoomSlice.reducer;
