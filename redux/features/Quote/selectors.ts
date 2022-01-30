import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./../../store";

export const selectQuote = (state: RootState) => state.kanyeQuote;

export const kanyeSelector = createSelector(selectQuote, (state) => state);
