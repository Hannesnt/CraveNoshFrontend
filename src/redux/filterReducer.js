import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: [],
  reducers: {
    addFilter: (state, action) => {
      state.push(action.payload);
    },
    removeFilter: (state, action) => {
      return state.filter((filter) => filter !== action.payload);
    },
    resetFilter: (state) => {
      return [];
    },
  },
});

export const { addFilter, removeFilter, resetFilter } = filterSlice.actions;

export default filterSlice.reducer;
