
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRooms = createAsyncThunk(
  "rooms/fetchRooms",
  async (_, thunkapi) => {
    try {
      const response = await fetch(
        "https://gist.githubusercontent.com/ayan1906/c409d52f4345afa3330fa073ea68a009/raw/e794234b99492b8a198e3007f2ca8b9bb8642c0a/gistfile1.txt"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch rooms");
      }

      const data = await response.json();
      return Array.isArray(data) ? data : data.rooms || [];

    } catch (error) {
      return thunkapi.rejectWithValue(error.message);

    }
  }


);

const roomSlice = createSlice({
  name: "rooms",

  initialState: {
    rooms: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchRooms.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.loading = false;
        state.rooms = action.payload;
      })

      .addCase(fetchRooms.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to load rooms";
      });
  },

})
export default roomSlice.reducer



