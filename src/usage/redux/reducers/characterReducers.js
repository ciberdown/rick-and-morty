import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: null,
  isLoading: false,
  error: null,
  page: 1,
};

const reducers = {
  setCharacters: (state, action) => {
    state.characters = action.payload;
    state.isLoading = false;
    state.error = null;
  },
  setIsCharloadingTrue: (state, action) => {
    state.isLoading = true;
  },
  setCharError: (state, action) => {
    state.error = action.payload;
    state.characters = null;
    state.isLoading = false;
  },
  nextCharPage: (state, action) => {
    state.page = state.page + 1;
  },
  prevCharPage: (state, action) => {
    state.page = state.page - 1;
  },
};

export const charSlice = createSlice({
  name: "characters",
  initialState,
  reducers,
});

export const {
  setCharacters,
  setCharError,
  setIsCharloadingTrue,
  nextCharPage,
  prevCharPage,
} = charSlice.actions;

export default charSlice.reducer;
