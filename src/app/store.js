import { configureStore } from '@reduxjs/toolkit';
import filterReducer from "../redux/filter/filterSlice"
export default configureStore({
  reducer: {
    filter: filterReducer
  },
})