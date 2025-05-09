import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
  }),
  endpoints: (builder) => ({
    // Endpoint for fetching popular movies
    getMovies: builder.query({
      query: () => 'discover/movie?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&with_genres=28,12,16',
    }),
    // Endpoint for fetching top-rated movies
    getTopRatedMovies: builder.query({
      query: () => 'discover/movie?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&with_companies=2&sort_by=vote_average.desc&vote_count.gte=100',
    }),
  }),
});

export const { useGetMoviesQuery, useGetTopRatedMoviesQuery } = movieApi;
