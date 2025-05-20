/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_HOST } from "../../../constant/constant";
import { getHeaders } from "../../headers/requestHeaders";
import {
  setInterview,
  setInterviewError,
  setInterviewLoading,
} from "@/lib/reducer/interview/interview";
import { FilterQueryArg } from "@/constant/types";

export const interviewApi = createApi({
  reducerPath: "interviewApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_HOST}`,
  }),

  endpoints: (builder) => ({
    getInterviews: builder.mutation<any, FilterQueryArg>({
      query: ({ filters } = {}) => {
        const params = new URLSearchParams(filters || {}).toString();

        return {
          url: `/interview/get-interviews?${params}`,
          method: "GET",
          headers: getHeaders(),
        };
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(setInterviewLoading()); // Set loading to true before the request

        try {
          const response = await queryFulfilled;
          dispatch(
            setInterview({
              data: response.data.interviews,
            })
          );
        } catch (e: any) {
          console.log(">>>>>setInterview error", e);
          dispatch(setInterviewError(e.message || "Failed to load Interviews"));
        }
      },
    }),

    getCandidateInterviews: builder.mutation<any, FilterQueryArg>({
      query: ({ filters } = {}) => {
        const params = new URLSearchParams(filters || {}).toString();

        return {
          url: `/candidate-interview/get-candidate-interview?${params}`,
          method: "GET",
          headers: getHeaders(),
        };
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(setInterviewLoading()); // Set loading to true before the request

        try {
          const response = await queryFulfilled;
          dispatch(
            setInterview({
              candidateInterview: response.data.candidateInterviews,
            })
          );
        } catch (e: any) {
          console.log(">>>>>setInterview error", e);
          dispatch(setInterviewError(e.message || "Failed to load Interviews"));
        }
      },
    }),

    addInterview: builder.mutation({
      query: (interviewData) => ({
        url: `/interview/add-interview/upload`,
        method: "POST",
        body: interviewData,
        headers: getHeaders(),
      }),
    }),

    getInterviewJobDescriptionFile: builder.mutation({
      query: (interviewId) => {
        return {
          url: `interview/get-job-description-file/${interviewId}`,
          method: "GET",
          headers: getHeaders(),
        };
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        // dispatch(setInterviewLoading()); // Set loading to true before the request

        try {
          const response = await queryFulfilled;
          //   dispatch(
          //     setInterview({
          //       data: response.data.interviews,
          //     })
          //   );
          console.log("🚀 ~ onQueryStarted ~ response:", response);
        } catch (e: any) {
          console.log(">>>>>setInterview error", e);
          //   dispatch(setInterviewError(e.message || "Failed to load Interview"));
        }
      },
    }),

    updateInterview: builder.mutation({
      query: (interviewData) => ({
        url: `/interview/update-interview/upload/${interviewData.id}`,
        method: "PATCH",
        body: interviewData,
        headers: getHeaders(),
      }),
    }),
  }),
});

export const {
  useGetInterviewsMutation,
  useGetInterviewJobDescriptionFileMutation,
  useAddInterviewMutation,
  useUpdateInterviewMutation,
  useGetCandidateInterviewsMutation,
} = interviewApi;
