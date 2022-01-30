import { kanyeReducer } from "./features/Quote/reducer";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

export const store = configureStore({
  reducer: {
    kanyeQuote: kanyeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// export const balanceSlice = createSlice({
//   name: "balance",
//   initialState: {} as any,
//   reducers: {
//     setBalance(state, action) {
//       return action.payload;
//     },
//   },

//   extraReducers: {
//     [HYDRATE]: (state, action) => {
//       console.log("HYDRATE", action.payload);
//       return {
//         ...state,
//         ...action.payload.balance,
//       };
//     },
//   },
// });

// const makeStore = () =>
//   configureStore({
//     reducer: {
//       [balanceSlice.name]: balanceSlice.reducer,
//     },
//     devTools: true,
//   });

// export type AppSotre = ReturnType<typeof makeStore>;
// export type AppState = ReturnType<AppSotre["getState"]>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   AppState,
//   unknown,
//   Action
// >;

// export const FetchBalance =
//   (id: any): AppThunk =>
//   async (dispatch) => {
//     let result = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     ).then((response) => response.json());
//     console.log(result);
//     dispatch(
//       balanceSlice.actions.setBalance({
//         [id]: {
//           id,
//           name: `Balance ${id}`,
//         },
//       })
//     );
//   };

// export const AppWrapper = createWrapper<AppSotre>(makeStore);
// export const selectBalance = (id: any) => (state: AppState) =>
//   state?.[balanceSlice.name]?.[id];
