import { API_HOST } from "@/constant/constant";
import { getHeaders } from "@/lib/headers/requestHeaders";
import {
  setLocation,
  setLocationError,
  setLocationLoading,
} from "@/lib/reducer/location/location";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const locationApi = createApi({
  reducerPath: "locationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_HOST}`,
  }),

  endpoints: (builder) => ({
    getCountries: builder.mutation({
      query: () => ({
        url: `/countries/get-countries`,
        method: "GET",
        headers: getHeaders(),
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(setLocationLoading()); // Set loading to true before the request

        try {
          const response = await queryFulfilled;
          dispatch(
            setLocation({
              country: response.data,
            })
          );
        } catch (e) {
          console.log(">>>>>setLocation error", e);
          if (e instanceof Error) {
            dispatch(setLocationError(e.message || "Failed to load country"));
          } else {
            dispatch(setLocationError("Failed to load country"));
          }
        }
      },
    }),

    getState: builder.mutation({
      query: (countryCode) => ({
        url: `/countries/get-state/${countryCode}`,
        method: "GET",
        headers: getHeaders(),
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(setLocationLoading()); // Set loading to true before the request

        try {
          const response = await queryFulfilled;
          
          dispatch(
            setLocation({
              state: response.data,
            })
          );
        } catch (e) {
          console.log(">>>>>setLocation error", e);
          if (e instanceof Error) {
            dispatch(setLocationError(e.message || "Failed to load state"));
          } else {
            dispatch(setLocationError("Failed to load state"));
          }
        }
      },
    }),

    getCity: builder.mutation({
      query: (stateId) => ({
        url: `/countries/get-city/${stateId}`,
        method: "GET",
        headers: getHeaders(),
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(setLocationLoading()); // Set loading to true before the request

        try {
          const response = await queryFulfilled;
          dispatch(
            setLocation({
              city: response.data,
            })
          );
        } catch (e) {
          console.log(">>>>>setLocation error", e);
          if (e instanceof Error) {
            dispatch(setLocationError(e.message || "Failed to load city"));
          } else {
            dispatch(setLocationError("Failed to load city"));
          }
        }
      },
    }),
  }),
});
// Export hooks for usage in functional components
export const {
  useGetCountriesMutation,
  useGetCityMutation,
  useGetStateMutation,
} = locationApi;
