import { configureStore } from "@reduxjs/toolkit";
import displayReducer from "./displaySlice";

const store = configureStore({
  reducer: {
    display: displayReducer,
  },
});

export default store;
