import { getKanyeQuote } from ".";
import { createReducer } from "@reduxjs/toolkit";

interface kanyeState {
  data: { quote: string };
  pending: boolean;
  error: boolean;
}

const initialState = {
  data: { quote: "click that button" },
  pending: false,
  error: false,
} as kanyeState;

export const kanyeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getKanyeQuote.pending, (state) => {
      state.pending = true;
    })
    .addCase(getKanyeQuote.fulfilled, (state, { payload }) => {
      (state.pending = false), (state.data = payload);
    })
    .addCase(getKanyeQuote.rejected, (state) => {
      (state.pending = false), (state.error = true);
    });
});

// export const selectkanye = (state: RootState) => state.kanyeQuote;

export default kanyeReducer;
