import { API_URL } from "@/contant";
import { setMovies, setMoviesError, setMoviesLoading } from "../reducer/movie";

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getMovies: builder.mutation({
        query: ({ filters } = {}) => {
          const params = new URLSearchParams(filters || {}).toString();
  
          return {
            url: `/interview/get-interviews?${params}`,
            method: "GET",
            headers: getHeaders(),
          };
        },
        async onQueryStarted(_, { dispatch, queryFulfilled }) {
          dispatch(setMoviesLoading()); // Set loading to true before the request
  
          try {
            const response = await queryFulfilled;
            dispatch(
              setMovies({
                data: response.data.interviews,
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

export const { useGetMoviesMutation } = movieApi;