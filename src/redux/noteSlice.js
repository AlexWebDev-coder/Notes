/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myNotes: [],
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNewNote: (state, action) => {
      state.myNotes.push(action.payload);
    },
    changeEvent: (state, action) => {
      state.myNotes = state.myNotes.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
    },
    deleteNote: (state, action) => {
      state.myNotes = state.myNotes.filter((el) => el.id !== action.payload);
    },
  },
});

export const { addNewNote, changeEvent, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;
