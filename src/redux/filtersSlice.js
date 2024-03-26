import { createSlice } from "@reduxjs/toolkit";

export const filters = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filters.actions;
export default filters.reducer;
export const selectNameFilter = (state) => state.filters.name;
