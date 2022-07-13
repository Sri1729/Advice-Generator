import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import advice from "./advice";

const reducer = combineReducers({
  advice: advice,
});
const store = configureStore({
  reducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
