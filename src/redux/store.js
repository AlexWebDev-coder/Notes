/** @format */

import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./noteSlice";

export const store = configureStore({
  reducer: {
    note: noteSlice,
  },
});

export default store;
