import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
  }),
  endpoints: (builder) => ({
    // top-rated movies
    getTopRatedMovies: builder.query({
      query: () => 'discover/movie?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&with_companies=2&sort_by=vote_average.desc&vote_count.gte=100&page=1&language=en-US',
    }),
    // movies
    getMovies: builder.query({
      query: () => 'discover/movie?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&with_genres=28,12,16',
    }),
    // series
    getSeries: builder.query({
      query: () => 'discover/tv?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&with_companies=420&language=en-US',
    }),
    // tv shows
    getTvShows: builder.query({
      query: () => 'discover/tv?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&with_origin_country=IN&first_air_date.gte=2023-01-01&language=en-US',
    }),
  }),
});

export const { useGetMoviesQuery, useGetTopRatedMoviesQuery, useGetSeriesQuery, useGetTvShowsQuery } = movieApi;


'https://api.themoviedb.org/3/discover/movie?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&with_companies=2&sort_by=vote_average.desc&vote_count.gte=100&page=1&language=en-US'
'https://api.themoviedb.org/3/discover/movie?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&with_genres=28,12,16'
'https://api.themoviedb.org/3/discover/tv?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&with_companies=420&language=en-US'
'https://api.themoviedb.org/3/discover/tv?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&with_origin_country=IN&first_air_date.gte=2023-01-01&language=en-US'