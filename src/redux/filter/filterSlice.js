import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filters:[],
  },
  reducers: {
    addFilter: (state, action) =>{
        if(!state.filters.includes(action.payload))
          state.filters = [...state.filters, action.payload]
        else{
          state.filters = state.filters.filter(item => item !== action.payload)
        }
    }
  },
});

export const {addFilter} = filterSlice.actions;

export default filterSlice.reducer;