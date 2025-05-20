/* eslint-disable @typescript-eslint/no-explicit-any */
// store/slices/locationSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface State {
  data: string[];
  candidateInterview: [];
  isLoading: boolean;
  error: string | null;
}

const initialState: State = {
  data: [],
  candidateInterview: [],
  isLoading: false,
  error: null,
};

const interview = createSlice({
  name: "interview",
  initialState,
  reducers: {
    setInterview(state, action: PayloadAction<Partial<State>>) {
      Object.entries(action.payload).forEach(([key, value]) => {
        if (key in state) {
          // Type assertion to satisfy TypeScript
          (state as any)[key] = value;
        }
      });
      state.isLoading = false;
      state.error = null;
    },
    setInterviewLoading(state) {
      state.isLoading = true;
      state.error = null;
    },
    setInterviewError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
      state.data = [];
    },
  },
});

export const { setInterview, setInterviewError, setInterviewLoading } =
  interview.actions;
export default interview.reducer;
