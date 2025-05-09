import { API_URL } from "@/contant";
import { setMovies, setMoviesError, setMoviesLoading } from "../reducer/movie";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}` }),


  endpoints: (builder) => ({
    getMovies: builder.mutation({
        query: () => {

          return {
            url: `/3/discover/movie?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&with_genres=28,12,16`,
            method: "GET",
            headers: {  Accept: "application/json",
                "Content-Type": "application/json",},
          };
        },
        async onQueryStarted(_, { dispatch, queryFulfilled }) {
          dispatch(setMoviesLoading()); // Set loading to true before the request
  
          try {
            const response = await queryFulfilled;
            dispatch(
              setMovies({
                movies: response.data.results,
              })
            );
          } catch (e) {
            console.log(">>>>>setInterview error", e);
            dispatch(setMoviesError(e.message || "Failed to load Interviews"));
          }
        },
      }),
  }),
});

export const { useGetMoviesMutation } = moviesApi;