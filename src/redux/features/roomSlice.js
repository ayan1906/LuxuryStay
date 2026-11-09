
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRooms = createAsyncThunk(
  "rooms/fetchRooms",
  async (_, thunkapi) => {
    try {
      const response = await fetch(
        "hotel-rooms-db.json"
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



