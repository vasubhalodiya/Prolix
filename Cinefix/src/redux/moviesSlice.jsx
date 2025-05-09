import { createSlice } from '@reduxjs/toolkit';

// Slice for movies
const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchMoviesStart: (state) => {
            state.loding = true
        },
        fetchMoviesSuccess: (state, action) => {
            state.loding = false,
            state.movies = action.payload;
        },
        fetchMoviesFailure: (state, action) => {
            state.loading = false,
            state.error = action.payload;
        },
    },
});

export const { fetchMoviesStart, fetchMoviesSuccess, fetchMoviesFailure } = moviesSlice.actions;

export default moviesSlice.reducer;



























