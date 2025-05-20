import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocationState {
  country: string[];
  state: string[];
  city: string[];
  isLoading: boolean;
  error: string | null;
}

const initialState: LocationState = {
  country: [],
  state: [],
  city: [],
  isLoading: false,
  error: null,
};

const location = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation(state, action: PayloadAction<Partial<LocationState>>) {
      Object.entries(action.payload).forEach(([key, value]) => {
        if (key in state) {
          // Type assertion to satisfy TypeScript
          (state as any)[key] = value;
        }
      });
      state.isLoading = false;
      state.error = null;
    },
    setLocationLoading(state) {
      state.isLoading = true;
      state.error = null;
    },
    setLocationError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
      state.country = [];
      state.state = [];
      state.city = [];
    },
  },
});

export const { setLocation, setLocationError, setLocationLoading } =
  location.actions;
export default location.reducer;
