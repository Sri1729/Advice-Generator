import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { RootState } from "./index";

import { getAdviceFromAPI } from "../services";

interface advice {
  id: string;
  advice: string;
}
interface adviceState {
  isLoading: boolean;
  data: advice;
  error: any;
}

const initialState: adviceState = {
  isLoading: false,
  data: { id: "###", advice: "Click on the dice to fetch advices" },
  error: "",
};

export const fetchRandomAdvice = createAsyncThunk(
  "advice/fetchAdvice",
  async (action) => {
    const resp = await getAdviceFromAPI();
    return resp.slip;
  }
);

// Slice
const slice = createSlice({
  name: "advice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRandomAdvice.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchRandomAdvice.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchRandomAdvice.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});
export default slice.reducer;

// selectors
export const isAdviceLoading = (state: RootState) => state.advice.isLoading;
export const getAdvice = (state: RootState) => state.advice.data;
