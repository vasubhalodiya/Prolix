import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
  }),
  endpoints: (builder) => ({
    getTopRatedMovies: builder.query({
      query: () => 'discover/movie?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&with_companies=2&sort_by=vote_average.desc&vote_count.gte=100&page=1&language=en-US',
    }),
    getComingSoonMovies: builder.query({
      query: () => 'discover/movie?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&with_companies=420&sort_by=release_date.asc&primary_release_date.gte=2025-05-13', //coming soon movies
    }),
    getPopularMovies: builder.query({
      query: () => 'discover/movie?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&with_companies=25',
    }),
    getMovies: builder.query({
      query: () => 'discover/movie?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&with_companies=420&language=en-US&release_date.gte=2013-01-01&release_date.lte=2025-12-31&page=1',
      // Marvel Studios: 420(tmdb studio id)
      // DC Films: 495(tmdb studio id)
      // Universal Pictures Studio: 2(tmdb studio id)
      // 20th Century Studios: 25(tmdb studio id)
    }),
    getSeries: builder.query({
      query: () => 'discover/tv?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&with_companies=420&language=en-US&page=1',
    }),
    getTvShows: builder.query({
      query: () => 'discover/tv?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&with_origin_country=IN&first_air_date.gte=2023-01-01&language=en-US',
    }),
  }),
});

export const { useGetMoviesQuery, useGetTopRatedMoviesQuery, useGetSeriesQuery, useGetTvShowsQuery, useGetComingSoonMoviesQuery, useGetPopularMoviesQuery } = movieApi;
