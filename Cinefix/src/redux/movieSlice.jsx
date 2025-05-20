import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    topRated: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchTopRatedStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchTopRatedSuccess: (state, action) => {
      state.loading = false;
      state.topRated = action.payload;
    },
    fetchTopRatedFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchTopRatedStart,
  fetchTopRatedSuccess,
  fetchTopRatedFailure,
} = movieSlice.actions;

export default movieSlice.reducer;
