import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const movies = createSlice({
  name: "movies",
  initialState: {
    data: [],
    loading: false,
    error: ""
  },
  reducers: {
    setMovies(state, action) {
      Object.entries(action.payload).forEach(([key, value]) => {
        if (key in state) {
          // Type assertion to satisfy TypeScript
          (state)[key] = value;
        }
      });
      state.isLoading = false;
      state.error = null;
    },
    setMoviesLoading(state) {
      state.isLoading = true;
      state.error = null;
    },
    setMoviesError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
      state.data = [];
    },
  },
});

export const { setMovies, setMoviesError, setMoviesLoading } =
  movies.actions;
export default movies.reducer;
