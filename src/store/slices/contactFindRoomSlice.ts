import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { contactFindRoomApi } from "@/apis/contactFindRoom";
export interface TContactFindRoomlice {
  isLoading?: boolean;
  contactData: any;
}

const initialState: TContactFindRoomlice = {
  isLoading: false,
  contactData: null,
};

export const doSendContactFindRoom = createAsyncThunk(
  "contactFindRoom/doSendContactFindRoom",
  async (dataContact: TContactFindRoom) => {
    try {
      const result = await contactFindRoomApi(dataContact);
      return result?.data;
    } catch (error) {
      return error;
    }
  }
);

const contactFindRoomSlice = createSlice({
  name: "contactFindRoom",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doSendContactFindRoom.pending, (state, _) => {
      state.isLoading = true;
    });
    builder.addCase(doSendContactFindRoom.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contactData = action.payload;
    });
    builder.addCase(doSendContactFindRoom.rejected, (state, _) => {
      state.isLoading = false;
    });
  },
});

export default contactFindRoomSlice.reducer;
