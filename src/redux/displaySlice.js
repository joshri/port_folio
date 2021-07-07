import { createSlice } from "@reduxjs/toolkit";

export const displaySlice = createSlice({
  name: "display",
  initialState: {
    display: "confirm",
  },
  reducers: {
    setDisplay: (state, action) => void (state.display = action.payload),
  },
});

export const { setDisplay } = displaySlice.actions;

export default displaySlice.reducer;
