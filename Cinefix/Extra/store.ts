"use client";

import { configureStore } from "@reduxjs/toolkit";
import {
  authentication,
  clientReducer,
  subscription,
  location,
  agency,
  interview,
  candidate,
  teamUserReducer,
  project,
  candidateInterview,
  recruiterProject,
  candidateProject,
  dashboard,
  aiInterview,
  candidateDetails,
} from "./reducer";
import { authenticationApi } from "./action/authentication/authentication";
import { clientApi } from "./action/client-action/clientaction";
import { subscriptionApi } from "./action/subscription/subscription";
import { locationApi } from "./action/location/location";
import { agencyApi } from "./action/agency/agency";
import { interviewApi } from "./action/interview/interview";
import { candidateApi } from "./action/candidate/candidate";
import { teamUserApi } from "./action/team-user-actions/teamUserActions";
import { projectApi } from "./action/project/project";
import { candidateInterviewApi } from "./action/candidateInterview/candidateInterview";
import { recruiterProjectApi } from "./action/recruiterProject/recruiterProject";
import { candidateProjectApi } from "./action/candidateProject/candidateProject";
import { dashboardApi } from "./action/dashboard/dashboard";
import { aiInterviewApi } from "./action/aiInterview/aiInterview";
import { candidateDetailsApi } from "@/lib/action/candidateDetail/candidateDetail";
import audioReducer from "./reducer/audio/audioSlice";

export const store = configureStore({
  reducer: {
    [authenticationApi.reducerPath]: authenticationApi.reducer,
    [subscriptionApi.reducerPath]: subscriptionApi.reducer,
    [clientApi.reducerPath]: clientApi.reducer,
    [locationApi.reducerPath]: locationApi.reducer,
    [agencyApi.reducerPath]: agencyApi.reducer,
    [interviewApi.reducerPath]: interviewApi.reducer,
    [candidateApi.reducerPath]: candidateApi.reducer,
    [teamUserApi.reducerPath]: teamUserApi.reducer,
    [projectApi.reducerPath]: projectApi.reducer,
    [candidateInterviewApi.reducerPath]: candidateInterviewApi.reducer,
    [recruiterProjectApi.reducerPath]: recruiterProjectApi.reducer,
    [candidateProjectApi.reducerPath]: candidateProjectApi.reducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    [aiInterviewApi.reducerPath]: aiInterviewApi.reducer,
    [candidateDetailsApi.reducerPath]: candidateDetailsApi.reducer,

    teamUser: teamUserReducer,
    authentication: authentication,
    client: clientReducer,
    subscription: subscription,
    location: location,
    agency: agency,
    interview: interview,
    candidate: candidate,
    project: project,
    candidateInterview: candidateInterview,
    recruiterProject: recruiterProject,
    candidateProject: candidateProject,
    dashboard: dashboard,
    audio: audioReducer,
    aiInterview: aiInterview,
    candidateDetails: candidateDetails,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["audio/addAudio"],
        ignoredPaths: ["audio.entries", "audio.entries[].blob"],
      },
    })
      .concat(authenticationApi.middleware)
      .concat(subscriptionApi.middleware)
      .concat(locationApi.middleware)
      .concat(agencyApi.middleware)
      .concat(interviewApi.middleware)
      .concat(candidateApi.middleware)
      .concat(clientApi.middleware)
      .concat(projectApi.middleware)
      .concat(candidateInterviewApi.middleware)
      .concat(teamUserApi.middleware)
      .concat(recruiterProjectApi.middleware)
      .concat(dashboardApi.middleware)
      .concat(aiInterviewApi.middleware)
      .concat(candidateDetailsApi.middleware)
      .concat(candidateProjectApi.middleware),
});

// Export types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
